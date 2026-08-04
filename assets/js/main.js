/**
 * ALIREZA NEZAMI PORTFOLIO — main.js
 * Orchestrates: i18n, Theme Switcher, Ripple, Lenis, GSAP,
 * Three.js hero bg (with IntersectionObserver loop pause), Swiper carousels.
 */

'use strict';

/* ─── UTILITIES & DEVICE DETECT ───────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window);

function qs(selector, root = document) { return root.querySelector(selector); }
function qsa(selector, root = document) { return [...root.querySelectorAll(selector)]; }

/* ─── THEME SYSTEM ────────────────────────────────── */
let currentTheme = localStorage.getItem('an_portfolio_theme') || 
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('an_portfolio_theme', theme);
  
  const icon = theme === 'light' ? '☀️' : '🌙';
  qsa('.theme-icon').forEach(el => { el.textContent = icon; });

  // Event to notify canvas renderers
  window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}

function initThemeSwitcher() {
  applyTheme(currentTheme);
  const btns = qsa('#theme-toggle, #theme-toggle-mobile');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });
}

/* ─── I18N SYSTEM ─────────────────────────────────── */
const supportedLangs = ['en', 'fa', 'ar', 'es', 'fr', 'zh', 'hi', 'bn', 'ru', 'pt', 'ur'];
const rtlLangs = ['fa', 'ar', 'ur'];

let currentLang = localStorage.getItem('an_portfolio_lang') || getBestMatchLang();
let i18nCache = {};

function getBestMatchLang() {
  const navLang = (navigator.language || 'en').toLowerCase().split('-')[0];
  return supportedLangs.includes(navLang) ? navLang : 'en';
}

async function loadTranslations(lang) {
  if (i18nCache[lang]) return i18nCache[lang];
  try {
    const res = await fetch(`assets/i18n/${lang}.json`);
    const data = await res.json();
    i18nCache[lang] = data;
    return data;
  } catch (e) {
    console.warn(`Could not load i18n file for ${lang}, falling back to en:`, e);
    if (lang !== 'en') return loadTranslations('en');
    return null;
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}

async function applyLanguage(lang) {
  const dict = await loadTranslations(lang);
  if (!dict) return;

  currentLang = lang;
  localStorage.setItem('an_portfolio_lang', lang);

  // Set HTML attributes
  document.documentElement.setAttribute('lang', lang);
  const isRTL = rtlLangs.includes(lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Sync dropdown selectors
  const langSelects = qsa('#lang-select');
  langSelects.forEach(sel => { sel.value = lang; });

  // Walk through data-i18n elements
  qsa('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(dict, key);
    if (value) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    }
  });
}

function initI18n() {
  applyLanguage(currentLang);
  const select = qs('#lang-select');
  if (select) {
    select.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }
}

/* ─── RIPPLE CANVAS ───────────────────────────────── */
(function initRipple() {
  if (prefersReducedMotion) return;

  const canvas = qs('#ripple-canvas');
  if (!canvas) return;
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
    const isLight = currentTheme === 'light';
    const kotlinCol = isLight ? 'rgba(107,56,232,' : 'rgba(127,82,255,';
    const flutterCol = isLight ? 'rgba(2,136,209,' : 'rgba(19,185,253,';

    const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    grd.addColorStop(0, `${kotlinCol}${this.alpha * 0.3})`);
    grd.addColorStop(0.4, `${kotlinCol}${this.alpha})`);
    grd.addColorStop(0.7, `${flutterCol}${this.alpha * 0.8})`);
    grd.addColorStop(1, `${flutterCol}0)`);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.strokeStyle = grd;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  function spawnRipple(x, y) {
    ripples.push(new Ripple(x, y));
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

/* ─── THREE.JS HERO BACKGROUND (WITH PAUSE OBSERVER) ── */
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

  const blobGeo = new THREE.PlaneGeometry(14, 14, 1, 1);
  const blobMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uKotlin: { value: new THREE.Color(currentTheme === 'light' ? 0x6B38E8 : 0x7F52FF) },
      uFlutter: { value: new THREE.Color(currentTheme === 'light' ? 0x0288D1 : 0x13B9FD) },
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

      void main() {
        vec2 uv = (vUv - 0.5) * 3.0;

        vec2 b1 = uv - vec2(sin(uTime * 0.15) * 0.8, cos(uTime * 0.12) * 0.5);
        float d1 = length(b1);
        float mask1 = 1.0 - smoothstep(0.4, 1.4, d1);

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

  let isHeroVisible = true;
  let animFrameId = null;

  function animate(t) {
    if (!isHeroVisible) return;
    animFrameId = requestAnimationFrame(animate);
    blobMat.uniforms.uTime.value = t * 0.001;
    renderer.render(scene, camera);
  }

  // IntersectionObserver to pause loop when hero is offscreen
  const heroObserver = new IntersectionObserver(([entry]) => {
    isHeroVisible = entry.isIntersecting;
    if (isHeroVisible && !animFrameId) {
      animate(performance.now());
    } else if (!isHeroVisible && animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }, { threshold: 0.05 });
  heroObserver.observe(hero);

  window.addEventListener('themeChanged', (e) => {
    const isLight = e.detail.theme === 'light';
    blobMat.uniforms.uKotlin.value.setHex(isLight ? 0x6B38E8 : 0x7F52FF);
    blobMat.uniforms.uFlutter.value.setHex(isLight ? 0x0288D1 : 0x13B9FD);
  });

  const resizeObs = new ResizeObserver(() => {
    renderer.setSize(W(), H());
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
  });
  resizeObs.observe(hero);
}

/* ─── LENIS SMOOTH SCROLL (DISABLED ON TOUCH) ────── */
function initLenis() {
  // Disable Lenis completely on coarse-pointer/touch devices
  if (isCoarsePointer || typeof Lenis === 'undefined') return null;

  // Faster, less floaty lerp on desktop (0.11)
  const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = qs(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 1.1 });
    });
  });

  return lenis;
}

/* ─── SWIPER CAROUSELS FOR PROJECTS ──────────────── */
function initSwiperCarousels() {
  if (typeof Swiper === 'undefined') return;

  const projectSlugs = ['albert', 'yolda', 'biletino', 'kolay', 'fuudy', 'wegopro', 'trainerize'];
  
  projectSlugs.forEach((slug, idx) => {
    const container = qs(`.swiper-${slug}`);
    if (!container) return;

    new Swiper(container, {
      loop: true,
      autoplay: {
        delay: 3500 + (idx * 500), // Staggered delays so they don't animate in sync
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: container.querySelector('.swiper-pagination'),
        clickable: true,
      },
      effect: 'slide',
      speed: 600,
    });
  });
}

/* ─── NAV SCROLL BEHAVIOR ─────────────────────────── */
function initNav() {
  const nav = qs('#nav');
  const hamburger = qs('#nav-hamburger');
  const mobileMenu = qs('#mobile-menu');

  const observer = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('scrolled', !entry.isIntersecting);
  }, { threshold: 0.1 });
  const hero = qs('#hero');
  if (hero) observer.observe(hero);

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
    const words = qsa('.hero-headline .word');
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.3,
    });

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

/* ─── MAGNETIC BUTTONS ────────────────────────────── */
function initMagnetic() {
  if (prefersReducedMotion || isCoarsePointer) return;

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

/* ─── INIT ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initThemeSwitcher();
  initI18n();
  initNav();
  initTypewriter();
  initDeviceTilt();
  initMagnetic();

  try { initHeroBg(); } catch (e) { /* graceful degradation */ }
  try { initLenis(); } catch (e) { /* graceful degradation */ }
  try { initSwiperCarousels(); } catch (e) { /* graceful degradation */ }

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    try { initGSAP(); } catch (e) { /* graceful degradation */ }
  } else {
    setTimeout(() => {
      try { initGSAP(); } catch (e) { /* fallback */ }
    }, 500);
  }
});
