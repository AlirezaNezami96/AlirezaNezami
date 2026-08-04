/**
 * ALIREZA NEZAMI PORTFOLIO — main.js v3
 * Key fixes:
 *  - Hero text visible immediately (CSS fallback + GSAP enhances on DOMContentLoaded)
 *  - Scroll reveals fire reliably (IO threshold 0, no rootMargin cut)
 *  - No window.load dependency for critical-path UI
 */

'use strict';

/* ─── DEVICE DETECT ──────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window);

const qs  = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ─── THEME ──────────────────────────────────────────── */
let currentTheme = localStorage.getItem('an_portfolio_theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('an_portfolio_theme', theme);
  qsa('.theme-icon').forEach(el => { el.textContent = theme === 'light' ? '☀️' : '🌙'; });
  window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}

function initThemeSwitcher() {
  applyTheme(currentTheme);
  qsa('#theme-toggle, #theme-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  });
}

/* ─── I18N ───────────────────────────────────────────── */
const supportedLangs = ['en', 'fa', 'ar', 'es', 'fr', 'zh', 'hi', 'bn', 'ru', 'pt', 'ur'];
const rtlLangs = ['fa', 'ar', 'ur'];
let currentLang = localStorage.getItem('an_portfolio_lang') || getBestMatchLang();
let i18nCache = {};

function getBestMatchLang() {
  const nav = (navigator.language || 'en').toLowerCase().split('-')[0];
  return supportedLangs.includes(nav) ? nav : 'en';
}

async function loadTranslations(lang) {
  if (i18nCache[lang]) return i18nCache[lang];
  try {
    const res = await fetch(`assets/i18n/${lang}.json`);
    const data = await res.json();
    i18nCache[lang] = data;
    return data;
  } catch {
    if (lang !== 'en') return loadTranslations('en');
    return null;
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

async function applyLanguage(lang) {
  const dict = await loadTranslations(lang);
  if (!dict) return;
  currentLang = lang;
  localStorage.setItem('an_portfolio_lang', lang);
  const isRTL = rtlLangs.includes(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = getNestedValue(dict, key);
    if (val) el.textContent = val;
  });
  if (lang === 'fa') loadFont('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800&display=swap');
  if (lang === 'ar') loadFont('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
}

function loadFont(url) {
  if (document.querySelector(`link[href="${url}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet'; link.href = url;
  document.head.appendChild(link);
}

function initLangSwitcher() {
  applyLanguage(currentLang);
  const sel = qs('#lang-select');
  if (!sel) return;
  sel.value = currentLang;
  sel.addEventListener('change', () => applyLanguage(sel.value));
}

/* ─── LENIS SMOOTH SCROLL ────────────────────────────── */
let lenis;

function initLenis() {
  if (typeof Lenis === 'undefined') return;
  lenis = new Lenis({
    lerp: isCoarsePointer ? 0.12 : 0.09,
    smoothWheel: !isCoarsePointer,
    touchMultiplier: 1.8,
    infinite: false,
  });

  if (typeof gsap !== 'undefined') {
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  lenis.on('scroll', ({ scroll }) => {
    qs('#nav')?.classList.toggle('scrolled', scroll > 60);
  });
}

/* ─── HERO REVEAL ─────────────────────────────────────
 * CRITICAL: Called on DOMContentLoaded — NOT window.load.
 * window.load fires only after all images load, which can be
 * 30–60s on slow connections. Hero text must be visible immediately.
 * ─────────────────────────────────────────────────────── */
function initHeroReveal() {
  /* Always make hero visible immediately, even without GSAP */
  const heroEls = qsa('.hero-headline .word');
  const heroSub  = qs('.hero-subtitle');
  const heroAct  = qs('.hero-actions');

  if (prefersReducedMotion || typeof gsap === 'undefined') {
    heroEls.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    if (heroSub) { heroSub.style.opacity = '1'; }
    if (heroAct) { heroAct.style.opacity = '1'; }
    return;
  }

  /* GSAP animates — but starts immediately at DOMContentLoaded */
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to('.hero-headline .word', { opacity: 1, y: 0, duration: 0.9, stagger: 0.10 }, 0.05);
  tl.to('.hero-subtitle', { opacity: 1, duration: 0.7 }, 0.45);
  tl.to('.hero-actions', { opacity: 1, y: 0, duration: 0.6 }, 0.65);

  /* Scroll-driven fade-out only after window.load (non-critical) */
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger === 'undefined') return;
    gsap.to('#hero-content', {
      opacity: 0, y: -50, ease: 'power2.in',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.2 }
    });
    gsap.to('#hero-devices', {
      y: 80, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.8 }
    });
    setTimeout(() => ScrollTrigger.refresh(), 300);
  });
}

/* ─── SCROLL REVEALS (IntersectionObserver) ──────────
 * Keep it simple: observe the article/section element,
 * add .visible, CSS handles children via parent selector.
 * No child opacity — parent opacity cascade does the work.
 * ─────────────────────────────────────────────────────── */
function initScrollReveals() {
  /* threshold:0 = trigger the INSTANT even 1px enters viewport */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  qsa('.reveal-block, .reveal-project, .profile-card, .about-stats').forEach(el => io.observe(el));

  /* Separate observer for stat cards */
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        statIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });
  qsa('.stat-card').forEach(el => statIO.observe(el));
}

/* ─── NAV ────────────────────────────────────────────── */
function initNav() {
  const burger = qs('#nav-hamburger');
  const menu   = qs('#mobile-menu');
  const navEl  = qs('#nav');

  /* Fallback scroll class if Lenis isn't ready */
  window.addEventListener('scroll', () => {
    navEl?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
  navEl?.classList.toggle('scrolled', window.scrollY > 60);

  burger?.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    burger.classList.toggle('open', !open);
    menu?.classList.toggle('open', !open);
    menu?.setAttribute('aria-hidden', String(open));
  });

  qsa('.mobile-link, .mobile-controls .btn').forEach(link => {
    link.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.classList.remove('open');
      menu?.classList.remove('open');
      menu?.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ─── TYPEWRITER ─────────────────────────────────────── */
function initTypewriter() {
  const el = qs('#typewriter');
  if (!el) return;
  const words = ['Kotlin', 'Flutter', 'Jetpack Compose', 'Dart', 'Android SDK'];
  let i = 0, charIdx = 0, deleting = false;
  function tick() {
    const word = words[i % words.length];
    el.textContent = deleting ? word.slice(0, --charIdx) : word.slice(0, ++charIdx);
    let delay = deleting ? 40 : 90;
    if (!deleting && charIdx === word.length) { deleting = true; delay = 1400; }
    else if (deleting && charIdx === 0) { deleting = false; i++; delay = 300; }
    setTimeout(tick, delay);
  }
  tick();
}

/* ─── STAT COUNTER ANIMATION ─────────────────────────── */
function initStatCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let start = 0;
      const step = () => {
        start += Math.ceil(target / 40);
        if (start >= target) { el.textContent = target; return; }
        el.textContent = start;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  qsa('.stat-number').forEach(c => io.observe(c));
}

/* ─── SKILL TAG ANIMATION ────────────────────────────── */
function initSkillTags() {
  qsa('.skill-tag').forEach((tag, i) => tag.style.setProperty('--i', i));
}

/* ─── TILT EFFECT ────────────────────────────────────── */
function initTilt() {
  if (isCoarsePointer || prefersReducedMotion) return;
  qsa('.tilt-target').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ─── MAGNETIC BUTTONS ───────────────────────────────── */
function initMagnetic() {
  if (isCoarsePointer || prefersReducedMotion) return;
  qsa('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - r.left - r.width  / 2;
      const dy = e.clientY - r.top  - r.height / 2;
      el.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ─── RIPPLE CANVAS ──────────────────────────────────── */
function initRipple() {
  const canvas = qs('#ripple-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let ripples = [], W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('click', e => {
    if (prefersReducedMotion) return;
    ripples.push({ x: e.clientX, y: e.clientY, r: 0, alpha: 0.6 });
  });
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    ripples = ripples.filter(rp => rp.alpha > 0.01);
    ripples.forEach(rp => {
      rp.r += 3; rp.alpha -= 0.025;
      ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(127,82,255,${rp.alpha})`; ctx.lineWidth = 1.5; ctx.stroke();
    });
    requestAnimationFrame(loop);
  })();
}

/* ─── THREE.JS HERO BG (deferred to load event) ─────── */
function initHeroBg() {
  if (typeof THREE === 'undefined' || prefersReducedMotion) return;
  const canvas = qs('#hero-bg');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
  camera.position.z = 3;

  const N = 600;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 12;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0x7F52FF, size: 0.04, transparent: true, opacity: 0.4 });
  scene.add(new THREE.Points(geo, mat));

  window.addEventListener('themeChanged', ({ detail }) => {
    mat.color.setHex(detail.theme === 'light' ? 0x6B38E8 : 0x7F52FF);
  });

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  let paused = false;
  new IntersectionObserver(([e]) => { paused = !e.isIntersecting; }, { threshold: 0 }).observe(canvas);

  let clock = 0;
  (function animate() {
    requestAnimationFrame(animate);
    if (paused) return;
    clock += 0.003;
    const points = scene.children[0];
    points.rotation.y = clock * 0.3;
    points.rotation.x = Math.sin(clock * 0.5) * 0.12;
    renderer.render(scene, camera);
  })();
}

/* ─── SWIPER CAROUSELS ───────────────────────────────── */
function initSwipers() {
  if (typeof Swiper === 'undefined') return;
  ['.swiper-albert', '.swiper-yolda', '.swiper-biletino',
   '.swiper-kolay', '.swiper-fuudy', '.swiper-wegopro', '.swiper-trainerize']
  .forEach(sel => {
    const el = qs(sel);
    if (!el) return;
    new Swiper(el, {
      loop: true,
      autoplay: { delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      speed: 500,
    });
  });
}

/* ─── YEAR ───────────────────────────────────────────── */
function initYear() {
  const el = qs('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ═══════════════════════════════════════════════════════
   BOOT — Critical path on DOMContentLoaded
   Heavy non-critical things (Three.js, Lenis, Swiper)
   deferred to window.load or requestIdleCallback.
   ═══════════════════════════════════════════════════════ */
function boot() {
  initThemeSwitcher();
  initLangSwitcher();
  initRipple();
  initNav();
  initTypewriter();
  initHeroReveal();    /* ← moved here from window.load */
  initStatCounters();
  initScrollReveals();
  initSkillTags();
  initTilt();
  initMagnetic();
  initYear();
}

window.addEventListener('DOMContentLoaded', boot);

/* Defer heavy 3D and smooth-scroll libs to after page is interactive */
window.addEventListener('load', () => {
  initLenis();
  initHeroBg();
  initSwipers();
});
