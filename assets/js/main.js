/**
 * ALIREZA NEZAMI PORTFOLIO — main.js v2
 * Orchestrates: Lenis scroll, GSAP hero reveal, IntersectionObserver reveals,
 * Three.js hero bg, Swiper, i18n, Theme, Ripple, Typewriter, Tilt, Magnetic.
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
  const icon = theme === 'light' ? '☀️' : '🌙';
  qsa('.theme-icon').forEach(el => { el.textContent = icon; });
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

  /* Dynamic font loading for Farsi and Arabic */
  if (lang === 'fa') loadFont('Vazirmatn', 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800&display=swap');
  if (lang === 'ar') loadFont('Amiri', 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
}

function loadFont(name, url) {
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
    lerp: isCoarsePointer ? 0.1 : 0.085,
    smoothWheel: !isCoarsePointer,
    touchMultiplier: 1.8,
    infinite: false,
  });

  /* Connect to GSAP ticker if available */
  if (typeof gsap !== 'undefined') {
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  /* Scroll progress for nav */
  lenis.on('scroll', ({ scroll }) => {
    const nav = qs('#nav');
    if (nav) nav.classList.toggle('scrolled', scroll > 60);
  });
}

/* ─── HERO SCROLL REVEAL (GSAP) ──────────────────────── */
function initHeroReveal() {
  if (typeof gsap === 'undefined' || prefersReducedMotion) {
    /* Fallback: just show everything */
    qsa('.hero-headline .word, .hero-subtitle, .hero-actions').forEach(el => {
      el.style.opacity = 1; el.style.transform = 'none';
    });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  /* Words fly up staggered */
  tl.to('.hero-headline .word', {
    opacity: 1, y: 0,
    duration: 1.0, stagger: 0.12
  }, 0);

  /* Subtitle fades in */
  tl.to('.hero-subtitle', { opacity: 1, duration: 0.8 }, 0.55);

  /* CTAs slide up */
  tl.to('.hero-actions', { opacity: 1, y: 0, duration: 0.7 }, 0.75);

  /* ScrollTrigger: pin hero, fade out on scroll */
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.to('#hero-content', {
      opacity: 0,
      y: -60,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      }
    });

    /* Parallax devices */
    gsap.to('#hero-devices', {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.8,
      }
    });
  }
}

/* ─── SECTION REVEALS (IntersectionObserver) ─────────── */
function initScrollReveals() {
  const targets = qsa('.reveal-block, .reveal-project, .profile-card, .stat-card, .about-stats');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => obs.observe(el));
}

/* ─── NAV & HAMBURGER ────────────────────────────────── */
function initNav() {
  const burger  = qs('#nav-hamburger');
  const menu    = qs('#mobile-menu');
  const navEl   = qs('#nav');

  /* Check initial scroll */
  if (window.scrollY > 60) navEl?.classList.add('scrolled');

  /* If Lenis not init, fallback scroll listener */
  if (!lenis) {
    window.addEventListener('scroll', () => {
      navEl?.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

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
    if (deleting) {
      el.textContent = word.slice(0, --charIdx);
    } else {
      el.textContent = word.slice(0, ++charIdx);
    }
    let delay = deleting ? 40 : 90;
    if (!deleting && charIdx === word.length) { deleting = true; delay = 1400; }
    else if (deleting && charIdx === 0) { deleting = false; i++; delay = 320; }
    setTimeout(tick, delay);
  }
  tick();
}

/* ─── STAT COUNTER ANIMATION ─────────────────────────── */
function initStatCounters() {
  const counters = qsa('.stat-number');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let start = 0;
      const step = () => {
        start += Math.ceil(target / 50);
        if (start >= target) { el.textContent = target; return; }
        el.textContent = start;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ─── TILT EFFECT ────────────────────────────────────── */
function initTilt() {
  if (isCoarsePointer || prefersReducedMotion) return;
  qsa('.tilt-target').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
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
  let ripples = [];
  let W = window.innerWidth, H = window.innerHeight;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('click', e => {
    if (prefersReducedMotion) return;
    ripples.push({ x: e.clientX, y: e.clientY, r: 0, maxR: 90, alpha: 0.6 });
  });

  function loop() {
    ctx.clearRect(0, 0, W, H);
    ripples = ripples.filter(rp => rp.alpha > 0);
    ripples.forEach(rp => {
      rp.r += 3;
      rp.alpha -= 0.03;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(127,82,255,${rp.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ─── THREE.JS HERO BG ───────────────────────────────── */
function initHeroBg() {
  if (typeof THREE === 'undefined' || prefersReducedMotion) return;

  const canvas = qs('#hero-bg');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
  camera.position.z = 3;

  /* Particle field */
  const N = 700;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 12;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0x7F52FF, size: 0.04, transparent: true, opacity: 0.45 });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  let themeKotlin = 0x7F52FF;
  window.addEventListener('themeChanged', ({ detail }) => {
    mat.color.setHex(detail.theme === 'light' ? 0x6B38E8 : 0x7F52FF);
  });

  function resize() {
    const w = canvas.offsetWidth || window.innerWidth;
    const h = canvas.offsetHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* Pause when off-screen */
  let paused = false;
  const obs = new IntersectionObserver(([e]) => { paused = !e.isIntersecting; }, { threshold: 0 });
  obs.observe(canvas);

  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);
    if (paused) return;
    clock += 0.003;
    points.rotation.y = clock * 0.3;
    points.rotation.x = Math.sin(clock * 0.5) * 0.12;
    renderer.render(scene, camera);
  }
  animate();
}

/* ─── SWIPER CAROUSELS ───────────────────────────────── */
function initSwipers() {
  if (typeof Swiper === 'undefined') return;

  const swiperConfigs = [
    '.swiper-albert', '.swiper-yolda', '.swiper-biletino',
    '.swiper-kolay', '.swiper-fuudy', '.swiper-wegopro', '.swiper-trainerize',
  ];

  swiperConfigs.forEach(sel => {
    const el = qs(sel);
    if (!el) return;
    new Swiper(el, {
      loop: true,
      autoplay: { delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      effect: 'slide',
      speed: 560,
    });
  });
}

/* ─── YEAR FOOTER ────────────────────────────────────── */
function initYear() {
  const el = qs('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─── BOOT ───────────────────────────────────────────── */
function boot() {
  initThemeSwitcher();
  initLangSwitcher();
  initRipple();
  initNav();
  initTypewriter();
  initStatCounters();
  initScrollReveals();
  initTilt();
  initMagnetic();
  initYear();
}

/* Wait for all deferred scripts */
window.addEventListener('DOMContentLoaded', boot);

window.addEventListener('load', () => {
  initLenis();
  initHeroReveal();
  initHeroBg();
  initSwipers();

  /* Force ScrollTrigger refresh after Lenis is ready */
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }
});
