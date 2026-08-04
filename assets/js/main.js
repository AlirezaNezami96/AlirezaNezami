/**
 * ALIREZA NEZAMI PORTFOLIO — main.js
 * Orchestrates: Ripple, Lenis, GSAP animations, Three.js bg,
 * device tilt, magnetic buttons, typewriter, counter, marquee.
 */

'use strict';

/* ─── UTILITY ─────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function qs(selector, root = document) { return root.querySelector(selector); }
function qsa(selector, root = document) { return [...root.querySelectorAll(selector)]; }

/* ─── RIPPLE ──────────────────────────────────────── */
(function initRipple() {
  if (prefersReducedMotion) return;

  const canvas = qs('#ripple-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;
  const ripples = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function Ripple(x, y) {
    this.x = x; this.y = y;
    this.r = 0; this.maxR = 150;
    this.alpha = 0.55;
    this.speed = 4.5;
    this.dead = false;
  }
  Ripple.prototype.update = function () {
    this.r += this.speed;
    this.alpha = 0.55 * (1 - this.r / this.maxR);
    if (this.r >= this.maxR) this.dead = true;
  };
  Ripple.prototype.draw = function () {
    if (this.dead) return;
    const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    grd.addColorStop(0, `rgba(127,82,255,${this.alpha * 0.3})`);
    grd.addColorStop(0.4, `rgba(127,82,255,${this.alpha})`);
    grd.addColorStop(0.7, `rgba(19,185,253,${this.alpha * 0.8})`);
    grd.addColorStop(1, 'rgba(19,185,253,0)');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.strokeStyle = grd;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  function spawnRipple(x, y) {
    ripples.push(new Ripple(x, y));
    // keep array lean
    if (ripples.length > 20) ripples.splice(0, 5);
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (let i = ripples.length - 1; i >= 0; i--) {
      ripples[i].update();
      ripples[i].draw();
      if (ripples[i].dead) ripples.splice(i, 1);
    }
    requestAnimationFrame(loop);
  }
  loop();

  function getCoords(e) {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }
  document.addEventListener('click', e => { const c = getCoords(e); spawnRipple(c.x, c.y); });
  document.addEventListener('touchstart', e => { const c = getCoords(e); spawnRipple(c.x, c.y); }, { passive: true });
})();

/* ─── WAIT FOR GSAP, LENIS, THREE ─────────────────── */
function waitForLibs(cb) {
  const maxWait = 5000;
  const start = Date.now();
  function check() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      cb();
    } else if (Date.now() - start < maxWait) {
      setTimeout(check, 50);
    }
  }
  check();
}

/* ─── THREE.JS HERO BACKGROUND ────────────────────── */
function initHeroBg() {
  if (typeof THREE === 'undefined') return;
  const canvas = qs('#hero-bg');
  const hero = qs('#hero');
  if (!canvas || !hero) return;

  const W = () => window.innerWidth;
  const H = () => hero.offsetHeight || window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W(), H());

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 100);
  camera.position.z = 4;

  // Floating gradient blobs using simple geometry + shader
  const blobGeo = new THREE.PlaneGeometry(14, 14, 1, 1);
  const blobMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uKotlin: { value: new THREE.Color(0x7F52FF) },
      uFlutter: { value: new THREE.Color(0x13B9FD) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uKotlin;
      uniform vec3 uFlutter;
      varying vec2 vUv;

      float sdBlob(vec2 p, float t) {
        float a = sin(t * 0.3 + p.x * 2.0) * 0.1;
        float b = cos(t * 0.2 + p.y * 1.5) * 0.1;
        return length(p + vec2(a, b)) - 0.4;
      }

      void main() {
        vec2 uv = (vUv - 0.5) * 3.0;

        // Blob 1 (kotlin)
        vec2 b1 = uv - vec2(sin(uTime * 0.15) * 0.8, cos(uTime * 0.12) * 0.5);
        float d1 = length(b1);
        float mask1 = 1.0 - smoothstep(0.4, 1.4, d1);

        // Blob 2 (flutter)
        vec2 b2 = uv - vec2(-0.6 + cos(uTime * 0.1) * 0.5, sin(uTime * 0.18) * 0.4);
        float d2 = length(b2);
        float mask2 = 1.0 - smoothstep(0.3, 1.2, d2);

        vec3 col = mix(uKotlin, uFlutter, clamp((uv.x + 1.0) * 0.5, 0.0, 1.0));
        float alpha = (mask1 * 0.12 + mask2 * 0.1);
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const blob = new THREE.Mesh(blobGeo, blobMat);
  scene.add(blob);

  let animFrame;
  function animate(t) {
    animFrame = requestAnimationFrame(animate);
    blobMat.uniforms.uTime.value = t * 0.001;
    renderer.render(scene, camera);
  }
  animate(0);

  const resizeObs = new ResizeObserver(() => {
    renderer.setSize(W(), H());
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
  });
  resizeObs.observe(hero);
  window.addEventListener('resize', () => {
    renderer.setSize(W(), H());
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
  });
}

/* ─── LENIS SMOOTH SCROLL ─────────────────────────── */
function initLenis() {
  if (typeof Lenis === 'undefined') return null;
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Integrate with GSAP ScrollTrigger if available
  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  // Smooth-scroll anchor links
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = qs(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 1.2 });
    });
  });

  return lenis;
}

/* ─── NAV SCROLL BEHAVIOR ─────────────────────────── */
function initNav() {
  const nav = qs('#nav');
  const hamburger = qs('#nav-hamburger');
  const mobileMenu = qs('#mobile-menu');

  // Scroll state
  const observer = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('scrolled', !entry.isIntersecting);
  }, { threshold: 0.1 });
  const hero = qs('#hero');
  if (hero) observer.observe(hero);

  // Hamburger
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });
    qsa('.mobile-link', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }
}

/* ─── TYPEWRITER ──────────────────────────────────── */
function initTypewriter() {
  const el = qs('#typewriter');
  if (!el) return;

  const texts = ['Kotlin', 'Java', 'Flutter', 'Android', 'iOS', 'Dart', 'Compose'];
  let i = 0; let charIdx = 0; let deleting = false;

  function tick() {
    const current = texts[i];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 90);
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        i = (i + 1) % texts.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 55);
    }
  }
  setTimeout(tick, 1000);
}

/* ─── GSAP ANIMATIONS ─────────────────────────────── */
function initGSAP() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  if (!prefersReducedMotion) {
    // Hero word reveal
    const words = qsa('.hero-headline .word');
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.3,
    });

    // Scroll reveals
    qsa('.reveal-block').forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => el.classList.add('visible'),
      });
    });

    qsa('.reveal-project').forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => {
          setTimeout(() => el.classList.add('visible'), i * 30);
        },
      });
    });

    // Counter animation
    qsa('.stat-number').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          let val = 0;
          const duration = 1200;
          const step = duration / target;
          const interval = setInterval(() => {
            val++;
            el.textContent = val;
            if (val >= target) clearInterval(interval);
          }, step);
        },
        once: true,
      });
    });
  } else {
    // Immediately show everything
    qsa('.reveal-block, .reveal-project').forEach(el => el.classList.add('visible'));
    qsa('.hero-headline .word').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    qsa('.stat-number').forEach(el => { el.textContent = el.dataset.target; });
  }
}

/* ─── DEVICE TILT (Hero) ──────────────────────────── */
function initDeviceTilt() {
  if (prefersReducedMotion) return;

  const androidDevice = qs('#device-android');
  const iosDevice = qs('#device-ios');
  if (!androidDevice || !iosDevice) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  // Idle drift
  let idleAngle = 0;

  function animate() {
    idleAngle += 0.008;
    const idleX = Math.sin(idleAngle) * 3;
    const idleY = Math.cos(idleAngle * 0.7) * 2;

    currentX += (targetX + idleX - currentX) * 0.06;
    currentY += (targetY + idleY - currentY) * 0.06;

    androidDevice.style.transform = `rotate(-4deg) translateZ(20px) rotateX(${-currentY * 0.5}deg) rotateY(${currentX * 0.5}deg)`;
    iosDevice.style.transform = `rotate(4deg) translateZ(0px) rotateX(${currentY * 0.4}deg) rotateY(${-currentX * 0.4}deg)`;

    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX = (e.clientX - cx) / cx * 10;
    targetY = (e.clientY - cy) / cy * 8;
  });

  document.addEventListener('mouseleave', () => {
    targetX = 0; targetY = 0;
  });
}

/* ─── PROJECT CARD TILT ───────────────────────────── */
function initProjectTilt() {
  if (prefersReducedMotion) return;

  qsa('.tilt-target').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = (e.clientY - cy) / (rect.height / 2) * -8;
      const ry = (e.clientX - cx) / (rect.width / 2) * 8;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

/* ─── MAGNETIC BUTTONS ────────────────────────────── */
function initMagnetic() {
  if (prefersReducedMotion) return;

  qsa('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
    });
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.1s linear';
    });
  });
}

/* ─── FOOTER YEAR ─────────────────────────────────── */
function setFooterYear() {
  const el = qs('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─── MARQUEE PAUSE ON HOVER (already CSS) ────────── */

/* ─── INIT ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initNav();
  initTypewriter();
  initDeviceTilt();
  initProjectTilt();
  initMagnetic();

  // Init Three.js bg (non-critical)
  try { initHeroBg(); } catch (e) { /* graceful degradation */ }

  // Init Lenis
  try { initLenis(); } catch (e) { /* graceful degradation */ }

  // Init GSAP
  waitForLibs(() => {
    try { initGSAP(); } catch (e) { /* graceful degradation */ }
  });
});
