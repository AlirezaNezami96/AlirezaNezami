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
const startHighscore = document.getElementById("start-highscore");
const finalScoreEl   = document.getElementById("final-score-display");
const nameInput      = document.getElementById("player-name-input");
const submitBtn      = document.getElementById("btn-submit");
const playAgainBtn   = document.getElementById("btn-play-again");
const playBtn        = document.getElementById("btn-play");
const leaderboardPanel = document.getElementById("leaderboard-panel");
const leaderboardList  = document.getElementById("leaderboard-list");
const statusMsg        = document.getElementById("status-msg");
const gameShell        = document.getElementById("game-shell");

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
  liveScore.textContent = "0.0s";
}

// ═══════════════════════════════════════════════════════════════
//  START GAME
// ═══════════════════════════════════════════════════════════════
function startGame() {
  currentState = State.PLAYING;
  showScreen("screen-playing");
  initGame();

  lastTime  = performance.now();
  startTime = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
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
//  END GAME
// ═══════════════════════════════════════════════════════════════
function endGame() {
  currentState = State.GAMEOVER;
  cancelAnimationFrame(rafId);
  rafId = null;

  // One last full-opacity render so the player can see where they died
  ctx.fillStyle = hexToRgba(bgColor(), 1);
  ctx.fillRect(0, 0, ARENA_SIZE, ARENA_SIZE);
  render();

  finalScoreEl.textContent = (survivalMs / 1000).toFixed(1) + "s";
  nameInput.value = "";
  statusMsg.textContent = "";
  statusMsg.className = "";
  leaderboardPanel.hidden = true;
  submitBtn.disabled = false;

  showScreen("screen-gameover");
  nameInput.focus();
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
//  LEADERBOARD RENDERING  (textContent only — XSS-safe)
// ═══════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════
//  LEADERBOARD RENDERING (Structured Liquid Glass Table)
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

function renderLeaderboard(rows, myScore) {
  leaderboardList.innerHTML = "";

  if (!rows || rows.length === 0) {
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

  rows.forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.className = "lb-table-row";

    const rankNum = i + 1;
    if (rankNum === 1) tr.classList.add("rank-first");
    if (rankNum === 2) tr.classList.add("rank-second");
    if (rankNum === 3) tr.classList.add("rank-third");

    // Highlight if this is the player's just-submitted score or Alireza Nezami
    if ((myScore !== null && Math.abs(row.score - myScore) < 10) || row.name === "Alireza Nezami") {
      tr.classList.add("is-mine");
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
    nameSpan.textContent = row.name; // textContent — XSS safe
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
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  leaderboardList.appendChild(table);
}

// ═══════════════════════════════════════════════════════════════
//  BUTTON HANDLERS
// ═══════════════════════════════════════════════════════════════
playBtn.addEventListener("click", () => startGame());

playAgainBtn.addEventListener("click", () => startGame());

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
    statusMsg.textContent = "Score submitted! 🎉";
    statusMsg.className   = "success";

    const rows = await fetchTopScores(10);
    renderLeaderboard(rows, scoreMs);
    leaderboardPanel.hidden = false;
  } catch (err) {
    console.warn("Leaderboard error:", err);
    statusMsg.textContent =
      `Leaderboard's taking a nap — your score was still ${(scoreMs / 1000).toFixed(1)}s!`;
    statusMsg.className = "error";
    submitBtn.disabled  = false; // let them retry
  }
});

// ═══════════════════════════════════════════════════════════════
//  UTILITY
// ═══════════════════════════════════════════════════════════════
function hexToRgba(hex, alpha) {
  // Handles #RRGGBB and #RGB
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ═══════════════════════════════════════════════════════════════
//  INIT — start screen setup
// ═══════════════════════════════════════════════════════════════
async function initStartScreen() {
  showScreen("screen-start");
  currentState = State.START;

  // Draw the arena in idle state so it's not blank
  resizeCanvas();
  ctx.fillStyle = getCSSVar("--bg", "#0A0C10");
  ctx.fillRect(0, 0, ARENA_SIZE, ARENA_SIZE);

  // Fetch & render top 10 leaderboard table immediately
  try {
    const rows = await fetchTopScores(10);
    if (rows && rows.length > 0) {
      renderLeaderboard(rows, null);
      startHighscore.textContent =
        `Beat the high score: ${rows[0].name} — ${formatLeaderboardTime(rows[0].score)}`;
    } else {
      renderLeaderboard([], null);
      startHighscore.textContent = "No scores yet — be the first!";
    }
  } catch (err) {
    console.warn("Leaderboard load error:", err);
    startHighscore.textContent = "";
  }
}

initStartScreen();
