/* ─── vanilla JS game — no bundler, no npm, no libraries ─────── */
"use strict";

// ═══════════════════════════════════════════════════════════════
//  SUPABASE DATA LAYER  (plain fetch, no SDK)
// ═══════════════════════════════════════════════════════════════

async function submitScore(name, scoreMs) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard`, {
    method: "POST",
    headers: {
      "apikey":        SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type":  "application/json",
      "Prefer":        "return=minimal",
    },
    body: JSON.stringify({ name, score: scoreMs }),
  });
  if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
}

async function fetchTopScores(limit = 10) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/leaderboard?select=name,score&order=score.desc,created_at.asc&limit=${limit}`,
    {
      headers: {
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json();
}

// Fetch just the top-1 for the start-screen teaser
async function fetchTopOne() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/leaderboard?select=name,score&order=score.desc,created_at.asc&limit=1`,
    {
      headers: {
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) return null;
  const rows = await res.json();
  return rows.length ? rows[0] : null;
}

// ═══════════════════════════════════════════════════════════════
//  READ SITE DESIGN TOKENS from computed CSS
// ═══════════════════════════════════════════════════════════════
function getCSSVar(name, fallback) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

// ═══════════════════════════════════════════════════════════════
//  DOM REFERENCES
// ═══════════════════════════════════════════════════════════════
const screenStart    = document.getElementById("screen-start");
const screenPlaying  = document.getElementById("screen-playing");
const screenGameover = document.getElementById("screen-gameover");
const canvas         = document.getElementById("game-canvas");
const ctx            = canvas.getContext("2d");
const liveScore      = document.getElementById("live-score");
const finalScoreEl   = document.getElementById("final-score-display");
const nameInput      = document.getElementById("player-name-input");
const submitBtn      = document.getElementById("btn-submit");
const playAgainBtn   = document.getElementById("btn-play-again");
const playBtn        = document.getElementById("btn-play");
const leaderboardPanel = document.getElementById("leaderboard-panel");
const leaderboardList  = document.getElementById("leaderboard-list");
const statusMsg        = document.getElementById("status-msg");
const gameShell        = document.getElementById("game-shell");
const failOverlay      = document.getElementById("fail-overlay");
const failEmoji        = document.getElementById("fail-emoji");
const failHeadline     = document.getElementById("fail-headline");
const failScoreSub     = document.getElementById("fail-score-sub");

// ═══════════════════════════════════════════════════════════════
//  CANVAS SIZING  (square, DPR-aware)
// ═══════════════════════════════════════════════════════════════
let ARENA_SIZE = 800; // logical CSS px — recalculated on resize

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  // Available width: shell width (which is min(94vw, 85vh, 880px) via CSS)
  const shellW = gameShell.getBoundingClientRect().width;
  ARENA_SIZE   = Math.max(300, Math.min(shellW, 880));

  canvas.style.width  = ARENA_SIZE + "px";
  canvas.style.height = ARENA_SIZE + "px";
  canvas.width  = Math.round(ARENA_SIZE * dpr);
  canvas.height = Math.round(ARENA_SIZE * dpr);

  // Scale context so game-logic uses CSS px throughout
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// ═══════════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════════
const State = { START: "start", PLAYING: "playing", GAMEOVER: "gameover" };
let currentState = State.START;

// ═══════════════════════════════════════════════════════════════
//  GAME DATA
// ═══════════════════════════════════════════════════════════════
let player   = {};
let obstacles = [];
let keysDown  = {};

// Timing
let rafId      = null;
let lastTime   = 0;
let startTime  = 0;
let survivalMs = 0;

// Spawning
let lastSpawnTime = 0;

// Touch target
let touchTarget = null;

// ═══════════════════════════════════════════════════════════════
//  CONSTANTS — tuned for feel
// ═══════════════════════════════════════════════════════════════
const PLAYER_RADIUS     = 10;
const PLAYER_ACCEL      = 1400;   // px/s²
const PLAYER_MAX_SPEED  = 260;    // px/s
const PLAYER_FRICTION   = 0.88;   // velocity multiplier per frame (applied after accel)
                                  // using exp-decay via pow each frame for frame-rate independence
const TOUCH_EASE        = 0.18;   // lerp factor toward touch target

const BASE_SPAWN_INTERVAL = 900;  // ms
const MIN_SPAWN_INTERVAL  = 250;  // ms
const SPAWN_RAMP          = 0.03; // ms reduction per ms survived (× survivalMs)

const BASE_OBS_SPEED     = 100;   // px/s
const MAX_OBS_SPEED_MULT = 4.5;   // cap at 4.5× base

const OBS_RADIUS = 8;             // used for circle-circle collision
const OBS_HALF   = 9;             // half-size of drawn square

const MAX_DELTA  = 50;            // ms — clamp deltaTime to prevent huge frames

// ═══════════════════════════════════════════════════════════════
//  SCREEN TRANSITIONS
// ═══════════════════════════════════════════════════════════════
function showScreen(id) {
  [screenStart, screenPlaying, screenGameover].forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ═══════════════════════════════════════════════════════════════
//  GAME INIT / RESET
// ═══════════════════════════════════════════════════════════════
function initGame() {
  resizeCanvas();
  const mid = ARENA_SIZE / 2;
  player = {
    x: mid, y: mid,
    vx: 0, vy: 0,
  };
  obstacles   = [];
  keysDown    = {};
  touchTarget = null;
  survivalMs  = 0;
  lastSpawnTime = 0;
  lastMilestone10s = 0;
  liveScore.textContent = "0.0s";
  if (liveScore) liveScore.classList.remove("timer-pop-10s");
}

// ═══════════════════════════════════════════════════════════════
//  START GAME
// ═══════════════════════════════════════════════════════════════
function startGame() {
  initAudio();
  clearTimeout(failTimer);
  if (failOverlay) failOverlay.classList.remove("active");

  currentState = State.PLAYING;
  showScreen("screen-playing");
  if (leaderboardPanel) leaderboardPanel.style.display = "none";
  initGame();

  lastTime  = performance.now();
  startTime = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('game_start', { game_name: 'Neon Dodge' });
  }
}

// ═══════════════════════════════════════════════════════════════
//  GAME LOOP
// ═══════════════════════════════════════════════════════════════
function loop(now) {
  if (currentState !== State.PLAYING) return; // safety guard

  const rawDelta = now - lastTime;
  lastTime = now;
  // Clamp to avoid one giant frame on tab-return
  const dt = Math.min(rawDelta, MAX_DELTA) / 1000; // seconds

  survivalMs = now - startTime;

  update(dt, survivalMs);
  check10SecMilestone(survivalMs);
  render();

  liveScore.textContent = (survivalMs / 1000).toFixed(1) + "s";

  rafId = requestAnimationFrame(loop);
}

// ─── Visibility change — pause/resume ─────────────────────────
document.addEventListener("visibilitychange", () => {
  if (currentState !== State.PLAYING) return;
  if (document.hidden) {
    cancelAnimationFrame(rafId);
    rafId = null;
  } else {
    // Reset lastTime so the first frame after returning doesn't
    // compute a huge delta (the MAX_DELTA clamp handles it too,
    // but resetting here is cleaner — no wasted catch-up frames).
    lastTime = performance.now();
    rafId = requestAnimationFrame(loop);
  }
});

// ═══════════════════════════════════════════════════════════════
//  UPDATE
// ═══════════════════════════════════════════════════════════════
function update(dt, elapsed) {
  // ── Player input ──────────────────────────────────────────────
  if (touchTarget !== null) {
    // Ease toward touch point
    player.vx += (touchTarget.x - player.x) * TOUCH_EASE / dt; // gives implicit accel
    // Simpler approach: direct lerp on position, ignore physics
    player.x += (touchTarget.x - player.x) * TOUCH_EASE;
    player.y += (touchTarget.y - player.y) * TOUCH_EASE;
    player.vx = 0; player.vy = 0; // don't accumulate
  } else {
    // Keyboard: acceleration + friction
    const ax = ((keysDown["ArrowRight"] || keysDown["d"] || keysDown["D"]) ? 1 : 0)
             - ((keysDown["ArrowLeft"]  || keysDown["a"] || keysDown["A"]) ? 1 : 0);
    const ay = ((keysDown["ArrowDown"]  || keysDown["s"] || keysDown["S"]) ? 1 : 0)
             - ((keysDown["ArrowUp"]    || keysDown["w"] || keysDown["W"]) ? 1 : 0);

    player.vx += ax * PLAYER_ACCEL * dt;
    player.vy += ay * PLAYER_ACCEL * dt;

    // Frame-rate-independent friction: v *= friction^(dt*60)
    const fric = Math.pow(PLAYER_FRICTION, dt * 60);
    player.vx *= fric;
    player.vy *= fric;

    // Clamp max speed
    const speed = Math.hypot(player.vx, player.vy);
    if (speed > PLAYER_MAX_SPEED) {
      const s = PLAYER_MAX_SPEED / speed;
      player.vx *= s; player.vy *= s;
    }

    player.x += player.vx * dt;
    player.y += player.vy * dt;
  }

  // Clamp inside arena
  player.x = Math.max(PLAYER_RADIUS, Math.min(ARENA_SIZE - PLAYER_RADIUS, player.x));
  player.y = Math.max(PLAYER_RADIUS, Math.min(ARENA_SIZE - PLAYER_RADIUS, player.y));

  // ── Spawn obstacles ───────────────────────────────────────────
  const spawnInterval = Math.max(MIN_SPAWN_INTERVAL, BASE_SPAWN_INTERVAL - elapsed * SPAWN_RAMP);
  if (elapsed - lastSpawnTime >= spawnInterval) {
    spawnObstacle(elapsed);
    lastSpawnTime = elapsed;
  }

  // ── Move & cull obstacles ─────────────────────────────────────
  const speedMult = Math.min(1 + elapsed / 20000, MAX_OBS_SPEED_MULT);
  const obsSpeed  = BASE_OBS_SPEED * speedMult;

  for (let i = obstacles.length - 1; i >= 0; i--) {
    const o = obstacles[i];
    o.x += o.dx * obsSpeed * dt;
    o.y += o.dy * obsSpeed * dt;

    // Remove if well outside arena
    if (o.x < -60 || o.x > ARENA_SIZE + 60 || o.y < -60 || o.y > ARENA_SIZE + 60) {
      obstacles.splice(i, 1);
      continue;
    }

    // Circle-circle collision (forgiving, good game feel)
    const dist = Math.hypot(player.x - o.x, player.y - o.y);
    if (dist < PLAYER_RADIUS + OBS_RADIUS) {
      endGame();
      return;
    }
  }
}

// ═══════════════════════════════════════════════════════════════
//  SPAWN OBSTACLE
// ═══════════════════════════════════════════════════════════════
function spawnObstacle(elapsed) {
  // Pick a random edge: 0=top, 1=right, 2=bottom, 3=left
  const edge = Math.floor(Math.random() * 4);
  let ox, oy;

  switch (edge) {
    case 0: ox = Math.random() * ARENA_SIZE; oy = -OBS_HALF;              break; // top
    case 1: ox = ARENA_SIZE + OBS_HALF;      oy = Math.random() * ARENA_SIZE; break; // right
    case 2: ox = Math.random() * ARENA_SIZE; oy = ARENA_SIZE + OBS_HALF;  break; // bottom
    case 3: ox = -OBS_HALF;                  oy = Math.random() * ARENA_SIZE; break; // left
  }

  // Direction toward player AT SPAWN TIME (fixed — rewards dodging)
  const dx = player.x - ox;
  const dy = player.y - oy;
  const len = Math.hypot(dx, dy) || 1;

  // Shape variety: alternate square/triangle based on count
  const shape = obstacles.length % 2 === 0 ? "square" : "triangle";

  obstacles.push({ x: ox, y: oy, dx: dx / len, dy: dy / len, shape });
  playSpawnSound();
}

// ═══════════════════════════════════════════════════════════════
//  UTILITY
// ═══════════════════════════════════════════════════════════════
function hexToRgba(hex, alpha) {
  hex = hex.replace("#", "").trim();
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ═══════════════════════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════════════════════
// Derive colors once (re-read each frame in case theme toggles)
function accentColor()  { return getCSSVar("--kotlin", "#7F52FF"); }
function accent2Color() { return getCSSVar("--flutter", "#13B9FD"); }
function bgColor()      { return getCSSVar("--bg", "#0A0C10"); }

function render() {
  // Semi-transparent fill for motion trails
  ctx.fillStyle = hexToRgba(bgColor(), 0.25);
  ctx.fillRect(0, 0, ARENA_SIZE, ARENA_SIZE);

  // ── Arena subtle grid/border ──────────────────────────────────
  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth   = 1;
  ctx.strokeRect(0.5, 0.5, ARENA_SIZE - 1, ARENA_SIZE - 1);

  // ── Obstacles ─────────────────────────────────────────────────
  const accent  = accentColor();
  const accent2 = accent2Color();

  for (const o of obstacles) {
    ctx.save();
    ctx.translate(o.x, o.y);

    // Neon glow
    ctx.shadowBlur  = 16;
    ctx.shadowColor = accent2;

    ctx.fillStyle = accent2;

    if (o.shape === "square") {
      ctx.fillRect(-OBS_HALF, -OBS_HALF, OBS_HALF * 2, OBS_HALF * 2);
    } else {
      // Triangle
      ctx.beginPath();
      ctx.moveTo(0, -OBS_HALF);
      ctx.lineTo(OBS_HALF, OBS_HALF);
      ctx.lineTo(-OBS_HALF, OBS_HALF);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  // ── Player ────────────────────────────────────────────────────
  ctx.save();

  // Outer glow ring
  ctx.shadowBlur  = 24;
  ctx.shadowColor = accent;

  // Gradient fill
  const grad = ctx.createRadialGradient(
    player.x - 3, player.y - 3, 1,
    player.x, player.y, PLAYER_RADIUS
  );
  grad.addColorStop(0, "#ffffff");
  grad.addColorStop(0.4, accent);
  grad.addColorStop(1, accent2);

  ctx.beginPath();
  ctx.arc(player.x, player.y, PLAYER_RADIUS, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.restore();
}

// ═══════════════════════════════════════════════════════════════
//  FUNNY SOUND EFFECTS & REMARK GENERATOR
// ═══════════════════════════════════════════════════════════════
let audioCtx = null;
let highestRecordMs = 176000;
let failTimer = null;
let lastMilestone10s = 0;

function initAudio() {
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playSpawnSound() {
  try {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    const baseFreq = 500 + Math.random() * 120;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.75, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.045);
  } catch (e) {}
}

function playCheerSound() {
  try {
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.50];

    freqs.forEach((f, i) => {
      const startTime = now + i * 0.07;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = i === 3 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(f, startTime);

      if (i === 3) {
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        lfo.frequency.value = 16;
        lfoGain.gain.value = 30;
        lfo.connect(osc.frequency);
        lfo.start(startTime);
        lfo.stop(startTime + 0.35);
      }

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + (i === 3 ? 0.35 : 0.12));

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + (i === 3 ? 0.35 : 0.12));
    });
  } catch (e) {}
}

function check10SecMilestone(ms) {
  const sec = Math.floor(ms / 1000);
  if (sec > 0 && sec % 10 === 0 && sec !== lastMilestone10s) {
    lastMilestone10s = sec;
    trigger10SecCheer();
  }
}

function trigger10SecCheer() {
  playCheerSound();
  if (liveScore) {
    liveScore.classList.remove("timer-pop-10s");
    void liveScore.offsetWidth;
    liveScore.classList.add("timer-pop-10s");
  }
  if (typeof window.trackEvent === 'function') {
    window.trackEvent('game_milestone', { milestone_seconds: lastMilestone10s });
  }
}

function playFailSound() {
  try {
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    // Cartoon pitch-drop wah-wah slide
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(75, now + 0.65);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(160, now + 0.65);

    // Pitch wobble LFO
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.value = 14;
    lfoGain.gain.value = 45;
    lfo.connect(osc.frequency);
    lfo.start(now);
    lfo.stop(now + 0.65);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.65);

    // Comic "boing" accent after 0.22s
    setTimeout(() => {
      try {
        if (!audioCtx) return;
        const now2 = audioCtx.currentTime;
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(150, now2);
        osc2.frequency.exponentialRampToValueAtTime(520, now2 + 0.12);
        osc2.frequency.exponentialRampToValueAtTime(45, now2 + 0.38);

        gain2.gain.setValueAtTime(0.35, now2);
        gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.38);

        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);

        osc2.start(now2);
        osc2.stop(now2 + 0.38);
      } catch (e) {}
    }, 220);

  } catch (err) {
    console.warn("Fail sound error:", err);
  }
}

const FUNNY_NAMES = [
  "PixelDodger",
  "LagMaster",
  "CloseCallHero",
  "CyberEvader",
  "SneezeRunner",
  "GlitchSeeker",
  "TurboReflexes",
  "AlmostBeatAlireza",
  "QuantumBouncer",
  "NeonNinja",
  "PanicSwiper",
  "ByteCrusher",
  "MatrixEscaper",
  "AppHunter"
];

function getRandomFunnyName() {
  const index = Math.floor(Math.random() * FUNNY_NAMES.length);
  const tag = Math.floor(Math.random() * 900) + 100;
  return `${FUNNY_NAMES[index]}_${tag}`;
}

function getFunnyRemark(scoreMs) {
  const formatted = formatLeaderboardTime(scoreMs);

  if (scoreMs >= highestRecordMs) {
    return {
      emoji: "🏆",
      headline: "NEW HIGH SCORE! 🏆",
      sub: `UNBELIEVABLE! You survived ${formatted}! Contact Alireza for your free app! 📱`
    };
  }

  const ratio = scoreMs / highestRecordMs;

  if (ratio >= 0.85) {
    const msgs = [
      "Ooooooh, that was SO CLOSE! 😱",
      "SO CLOSE! Alireza felt that sweat! 💦",
      "Just a few seconds away! Heart rate 180 BPM! 🫀"
    ];
    return {
      emoji: "😱",
      headline: msgs[Math.floor(Math.random() * msgs.length)],
      sub: `You survived ${formatted}! Almost beat Alireza's record!`
    };
  }

  if (ratio >= 0.5) {
    const msgs = [
      "Not bad at all! Alireza is getting nervous... 😅",
      "Great run! You're cooking now! 🔥",
      "Solid reflexes! Almost reached the top tier! ⚡"
    ];
    return {
      emoji: "🔥",
      headline: msgs[Math.floor(Math.random() * msgs.length)],
      sub: `Time survived: ${formatted}`
    };
  }

  if (scoreMs >= 15000) {
    const msgs = [
      "Getting warm! Keep training those reflexes ⚡",
      "Not terrible! You survived the first wave 🌊",
      "Decent dodge! Alireza is still relaxed though 😏"
    ];
    return {
      emoji: "⚡",
      headline: msgs[Math.floor(Math.random() * msgs.length)],
      sub: `Time survived: ${formatted}`
    };
  }

  if (scoreMs >= 5000) {
    const msgs = [
      "Ouch! Did a pixel sneeze on you? 🤧",
      "That obstacle had a personal vendetta against you! 🎯",
      "Maybe next time! 🚀"
    ];
    return {
      emoji: "🤧",
      headline: msgs[Math.floor(Math.random() * msgs.length)],
      sub: `Time survived: ${formatted}`
    };
  }

  const msgs = [
    "Blinked and missed it! ⚡",
    "Did you trip over the start button? 😂",
    "Fastest fail in the West! 🤠",
    "Maybe next time! 🚀"
  ];
  return {
    emoji: "💀",
    headline: msgs[Math.floor(Math.random() * msgs.length)],
    sub: `Time survived: ${formatted}`
  };
}

// ═══════════════════════════════════════════════════════════════
//  END GAME
// ═══════════════════════════════════════════════════════════════
function endGame() {
  currentState = State.GAMEOVER;
  cancelAnimationFrame(rafId);
  rafId = null;

  // Final frame freeze render
  ctx.fillStyle = hexToRgba(bgColor(), 1);
  ctx.fillRect(0, 0, ARENA_SIZE, ARENA_SIZE);
  render();

  // Play funny synthesized fail sound
  playFailSound();

  const scoreMs = Math.round(survivalMs);
  const remark = getFunnyRemark(scoreMs);

  if (failEmoji) failEmoji.textContent = remark.emoji;
  if (failHeadline) failHeadline.textContent = remark.headline;
  if (failScoreSub) failScoreSub.textContent = remark.sub;

  // Show fast fade-in overlay over game canvas
  if (failOverlay) failOverlay.classList.add("active");

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('game_over', {
      survival_sec: Number((scoreMs / 1000).toFixed(1)),
      score_ms: scoreMs,
      obstacle_count: obstacles.length
    });
  }

  clearTimeout(failTimer);
  failTimer = setTimeout(() => {
    if (failOverlay) failOverlay.classList.remove("active");

    finalScoreEl.textContent = formatLeaderboardTime(scoreMs);

    // Auto-generate funny editable name
    nameInput.value = getRandomFunnyName();
    statusMsg.textContent = "";
    statusMsg.className = "";
    if (leaderboardPanel) leaderboardPanel.style.display = "block";
    submitBtn.disabled = false;

    showScreen("screen-gameover");
    nameInput.focus();
    nameInput.select();
  }, 3000);
}

// ═══════════════════════════════════════════════════════════════
//  KEYBOARD INPUT
// ═══════════════════════════════════════════════════════════════
document.addEventListener("keydown", e => {
  keysDown[e.key] = true;
  // Prevent arrow keys from scrolling while playing
  if (currentState === State.PLAYING &&
      ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) {
    e.preventDefault();
  }
});
document.addEventListener("keyup", e => { delete keysDown[e.key]; });

// ═══════════════════════════════════════════════════════════════
//  TOUCH INPUT
// ═══════════════════════════════════════════════════════════════
function getTouchPos(e) {
  const rect = canvas.getBoundingClientRect();
  const t = e.touches[0];
  return {
    x: t.clientX - rect.left,
    y: t.clientY - rect.top,
  };
}

canvas.addEventListener("touchstart", e => {
  if (currentState !== State.PLAYING) return;
  e.preventDefault();
  touchTarget = getTouchPos(e);
}, { passive: false });

canvas.addEventListener("touchmove", e => {
  if (currentState !== State.PLAYING) return;
  e.preventDefault();
  touchTarget = getTouchPos(e);
}, { passive: false });

canvas.addEventListener("touchend", () => { touchTarget = null; });
canvas.addEventListener("touchcancel", () => { touchTarget = null; });

// ═══════════════════════════════════════════════════════════════
//  LEADERBOARD RENDERING & CONTEXT FETCHING
// ═══════════════════════════════════════════════════════════════
function formatLeaderboardTime(ms) {
  const totalSec = ms / 1000;
  if (totalSec >= 60) {
    const mins = Math.floor(totalSec / 60);
    const secs = (totalSec % 60).toFixed(1);
    return `${mins}m ${secs}s`;
  }
  return `${totalSec.toFixed(1)}s`;
}

async function fetchLeaderboardFullData(myScoreMs = null) {
  try {
    const top10Promise = fetchTopScores(10);
    const countPromise = fetch(`${SUPABASE_URL}/rest/v1/leaderboard?select=id`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'count=exact',
        'Range-Unit': 'items',
        'Range': '0-0'
      }
    });

    const [top10, countRes] = await Promise.all([top10Promise, countPromise]);

    let totalCount = top10 ? top10.length : 0;
    const contentRange = countRes.headers.get('content-range');
    if (contentRange) {
      totalCount = parseInt(contentRange.split('/')[1] || `${totalCount}`, 10);
    }

    // Fetch Last 5 lowest scores
    let last5 = [];
    if (totalCount > 10) {
      const last5Res = await fetch(
        `${SUPABASE_URL}/rest/v1/leaderboard?select=name,score,created_at&order=score.asc,created_at.desc&limit=5`,
        {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          }
        }
      );
      if (last5Res.ok) {
        const rawLast5 = await last5Res.json();
        last5 = rawLast5.reverse();
      }
    }

    // Calculate user rank if score provided
    let userRank = null;
    if (myScoreMs !== null) {
      const rankRes = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?score=gt.${myScoreMs}&select=id`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'count=exact',
          'Range-Unit': 'items',
          'Range': '0-0'
        }
      });
      const rankRange = rankRes.headers.get('content-range');
      if (rankRange) {
        userRank = parseInt(rankRange.split('/')[1] || '0', 10) + 1;
      }
    }

    return { top10, last5, totalCount, userRank };
  } catch (err) {
    console.warn("Leaderboard fetch error:", err);
    return { top10: [], last5: [], totalCount: 0, userRank: null };
  }
}

function renderLeaderboardTable(data, myScore = null, isNewSubmission = false) {
  leaderboardList.innerHTML = "";

  const { top10 = [], last5 = [], totalCount = 0, userRank = null } = data || {};

  if (!top10 || top10.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No scores yet — be the first!";
    empty.style.cssText = "text-align:center;color:var(--text-muted,#8A8F98);font-size:0.85rem;padding:16px 0";
    leaderboardList.appendChild(empty);
    return;
  }

  const table = document.createElement("table");
  table.className = "lb-table";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th class="th-rank">Rank</th>
      <th class="th-name">Player</th>
      <th class="th-score">Time Survived</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  let targetSmashRow = null;

  // 1. Render Top 10 (Ranks #1..#10)
  top10.forEach((row, i) => {
    const tr = createLeaderboardRow(row, i + 1, myScore, isNewSubmission);
    if (tr.classList.contains("is-newly-submitted")) targetSmashRow = tr;
    tbody.appendChild(tr);
  });

  // 2. Render Ellipsis & Last 5 if total > 10
  if (totalCount > 10) {
    const last5StartRank = totalCount - last5.length + 1;
    const isUserInMiddle = userRank && userRank > 10 && userRank < last5StartRank;

    if (isUserInMiddle) {
      // Ellipsis 1: Top 10 to User Row
      const el1 = document.createElement("tr");
      el1.className = "lb-table-row lb-ellipsis-row";
      const countAbove = userRank - 11;
      el1.innerHTML = `<td colspan="3" class="td-ellipsis">• • • ${countAbove} player records above • • •</td>`;
      tbody.appendChild(el1);

      // User Row
      const submittedName = nameInput.value.trim() || "Player";
      const userTr = createLeaderboardRow({ name: submittedName, score: myScore }, userRank, myScore, isNewSubmission);
      if (userTr.classList.contains("is-newly-submitted")) targetSmashRow = userTr;
      tbody.appendChild(userTr);

      // Ellipsis 2: User Row to Last 5
      const el2 = document.createElement("tr");
      el2.className = "lb-table-row lb-ellipsis-row";
      const countBelow = last5StartRank - userRank - 1;
      el2.innerHTML = `<td colspan="3" class="td-ellipsis">• • • ${countBelow} player records below • • •</td>`;
      tbody.appendChild(el2);
    } else {
      // Single Ellipsis: Top 10 to Last 5
      const el = document.createElement("tr");
      el.className = "lb-table-row lb-ellipsis-row";
      const middleCount = Math.max(0, last5StartRank - 11);
      el.innerHTML = `<td colspan="3" class="td-ellipsis">• • • ${middleCount} player records • • •</td>`;
      tbody.appendChild(el);
    }

    // Render Last 5 (Ranks #1575..#1579)
    last5.forEach((row, i) => {
      const currentRank = last5StartRank + i;
      const tr = createLeaderboardRow(row, currentRank, myScore, isNewSubmission);
      if (tr.classList.contains("is-newly-submitted")) targetSmashRow = tr;
      tbody.appendChild(tr);
    });
  }

  table.appendChild(tbody);
  leaderboardList.appendChild(table);

  // Trigger Smashing Impact Animation + Auto-Scroll
  if (isNewSubmission && targetSmashRow) {
    targetSmashRow.classList.add("smash-impact-active");
    setTimeout(() => {
      targetSmashRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 180);
  }
}

function createLeaderboardRow(row, rankNum, myScore, isNewSubmission) {
  const tr = document.createElement("tr");
  tr.className = "lb-table-row";

  if (rankNum === 1) tr.classList.add("rank-first");
  if (rankNum === 2) tr.classList.add("rank-second");
  if (rankNum === 3) tr.classList.add("rank-third");

  const isMyMatch = (myScore !== null && Math.abs(row.score - myScore) < 10) || row.name === "Alireza Nezami";
  if (isMyMatch) {
    tr.classList.add("is-mine");
    if (isNewSubmission && Math.abs(row.score - myScore) < 10) {
      tr.classList.add("is-newly-submitted");
    }
  }

  // Rank Cell
  const tdRank = document.createElement("td");
  tdRank.className = "td-rank";
  const badge = document.createElement("div");

  if (rankNum === 1) {
    badge.className = "lb-badge lb-badge-gold";
    badge.innerHTML = `<span class="lb-crown">👑</span> <span class="lb-rank-num">#1</span>`;
  } else if (rankNum === 2) {
    badge.className = "lb-badge lb-badge-silver";
    badge.innerHTML = `<span class="lb-medal">🥈</span> <span class="lb-rank-num">#2</span>`;
  } else if (rankNum === 3) {
    badge.className = "lb-badge lb-badge-bronze";
    badge.innerHTML = `<span class="lb-medal">🥉</span> <span class="lb-rank-num">#3</span>`;
  } else {
    badge.className = "lb-badge lb-badge-normal";
    badge.textContent = `#${rankNum}`;
  }
  tdRank.appendChild(badge);

  // Name Cell
  const tdName = document.createElement("td");
  tdName.className = "td-name";
  const nameSpan = document.createElement("span");
  nameSpan.className = "lb-name-text";
  nameSpan.textContent = row.name;
  tdName.appendChild(nameSpan);

  if (row.name === "Alireza Nezami") {
    const devTag = document.createElement("span");
    devTag.className = "lb-dev-tag";
    devTag.textContent = "DEV";
    tdName.appendChild(devTag);
  }

  // Score Cell
  const tdScore = document.createElement("td");
  tdScore.className = "td-score";
  tdScore.textContent = formatLeaderboardTime(row.score);

  tr.appendChild(tdRank);
  tr.appendChild(tdName);
  tr.appendChild(tdScore);
  return tr;
}

// ═══════════════════════════════════════════════════════════════
//  BUTTON HANDLERS
// ═══════════════════════════════════════════════════════════════
playBtn.addEventListener("click", () => startGame());

playAgainBtn.addEventListener("click", () => {
  if (typeof window.trackEvent === 'function') window.trackEvent('game_play_again');
  startGame();
});

submitBtn.addEventListener("click", async () => {
  const rawName = nameInput.value;
  const name    = rawName.trim().slice(0, 20);

  if (!name) {
    nameInput.focus();
    statusMsg.textContent = "Please enter your name first.";
    statusMsg.className   = "error";
    return;
  }

  submitBtn.disabled    = true;
  statusMsg.textContent = "Submitting…";
  statusMsg.className   = "";

  const scoreMs = Math.round(survivalMs);

  try {
    await submitScore(name, scoreMs);
    if (typeof window.trackEvent === 'function') {
      window.trackEvent('game_score_submit', { score_ms: scoreMs, player_name: name });
    }
    statusMsg.textContent = "Score submitted! 🎉";
    statusMsg.className   = "success";

    if (leaderboardPanel) leaderboardPanel.style.display = "block";
    const data = await fetchLeaderboardFullData(scoreMs);
    renderLeaderboardTable(data, scoreMs, true);
  } catch (err) {
    console.warn("Leaderboard error:", err);
    statusMsg.textContent =
      `Leaderboard's taking a nap — your score was still ${(scoreMs / 1000).toFixed(1)}s!`;
    statusMsg.className = "error";
    submitBtn.disabled  = false;
  }
});

function updateRecordBanner(name, scoreMs) {
  if (scoreMs && scoreMs > 0) highestRecordMs = scoreMs;
  const holderName = document.getElementById("record-holder-name");
  const holderScore = document.getElementById("record-holder-score");
  if (holderName) holderName.textContent = name;
  if (holderScore) holderScore.textContent = formatLeaderboardTime(scoreMs);
}

async function initStartScreen() {
  showScreen("screen-start");
  currentState = State.START;
  if (leaderboardPanel) leaderboardPanel.style.display = "block";

  // Draw the arena in idle state so it's not blank
  resizeCanvas();
  ctx.fillStyle = getCSSVar("--bg", "#0A0C10");
  ctx.fillRect(0, 0, ARENA_SIZE, ARENA_SIZE);

  // Fetch & render leaderboard data immediately
  try {
    const data = await fetchLeaderboardFullData(null);
    renderLeaderboardTable(data, null, false);
    if (data && data.top10 && data.top10.length > 0) {
      updateRecordBanner(data.top10[0].name, data.top10[0].score);
    } else {
      updateRecordBanner("Alireza Nezami", 176000);
    }
  } catch (err) {
    console.warn("Leaderboard load error:", err);
    updateRecordBanner("Alireza Nezami", 176000);
  }
}

initStartScreen();
