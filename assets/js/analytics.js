// ─── Firebase Analytics & Heatmap Intelligence Engine ─────────────────────────
// Free Web Analytics Suite: GA4 Events, Heatmap Visualizer, Web Vitals, Section Dwell & Interactions

(function () {
  'use strict';

  let analyticsInstance = null;
  let activeStartTime = Date.now();
  let totalActiveDurationMs = 0;
  let isPageActive = !document.hidden;
  let scrollThresholdsFired = new Set();
  const STORAGE_KEY_HEATMAP = 'an_portfolio_heatmap_points';
  const STORAGE_KEY_VISITOR = 'an_visitor_uuid';

  // ═══════════════════════════════════════════════════════════════
  //  1. VISITOR IDENTITY & DEVICE CONTEXT
  // ═══════════════════════════════════════════════════════════════
  function getOrCreateVisitorId() {
    try {
      let id = localStorage.getItem(STORAGE_KEY_VISITOR);
      if (!id) {
        id = 'usr_' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15) + Date.now().toString(36));
        localStorage.setItem(STORAGE_KEY_VISITOR, id);
      }
      return id;
    } catch {
      return 'usr_anon_' + Date.now();
    }
  }

  function getDeviceType() {
    const w = window.innerWidth;
    if (w <= 768) return 'mobile';
    if (w <= 1024) return 'tablet';
    return 'desktop';
  }

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') ||
      localStorage.getItem('an_portfolio_theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }

  // ═══════════════════════════════════════════════════════════════
  //  2. FIREBASE ANALYTICS INITIALIZATION
  // ═══════════════════════════════════════════════════════════════
  async function initFirebase() {
    if (typeof FIREBASE_CONFIG === 'undefined') return;

    const isPlaceholder = !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey.startsWith('YOUR_');
    if (isPlaceholder) {
      console.log('💡 [Firebase Analytics] Config is placeholder. Update assets/js/firebase-config.js for live Firebase console telemetry.');
      return;
    }

    try {
      const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
      const { getAnalytics, logEvent, setUserProperties, setUserId } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js');

      const app = initializeApp(FIREBASE_CONFIG);
      analyticsInstance = getAnalytics(app);

      // Set anonymous persistent visitor user ID
      const visitorId = getOrCreateVisitorId();
      setUserId(analyticsInstance, visitorId);

      // Set free demographic & device user properties
      setUserProperties(analyticsInstance, {
        device_category: getDeviceType(),
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        color_theme: getTheme(),
        browser_language: navigator.language || 'en',
        platform: navigator.platform || 'unknown'
      });

      // Standard Page View
      logEvent(analyticsInstance, 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
        page_referrer: document.referrer || null,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        device_category: getDeviceType()
      });

      console.log('✅ [Firebase Analytics] Connected successfully with Real-Time Events, Heatmap Tracking & Web Vitals!');
    } catch (err) {
      console.warn('⚠️ [Firebase Analytics] Initialization notice:', err);
    }
  }

  // ═══════════════════════════════════════════════════════════════
  //  3. EVENT DISPATCHER (Firebase + Supabase Dual-Telemetry)
  // ═══════════════════════════════════════════════════════════════
  window.trackEvent = function (eventName, eventParams = {}) {
    // 1. Firebase Analytics
    if (analyticsInstance) {
      try {
        import('https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js').then(({ logEvent }) => {
          logEvent(analyticsInstance, eventName, {
            ...eventParams,
            page_path: window.location.pathname,
            device_type: getDeviceType(),
            theme: getTheme()
          });
        }).catch(() => {});
      } catch (e) {}
    }

    // 2. Supabase Fallback Logger
    if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined' && !SUPABASE_URL.includes('YOUR_')) {
      try {
        fetch(`${SUPABASE_URL}/rest/v1/page_views`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            page_path: window.location.pathname,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent,
            event_name: eventName,
            event_data: JSON.stringify(eventParams)
          })
        }).catch(() => {});
      } catch (e) {}
    }
  };

  // ═══════════════════════════════════════════════════════════════
  //  4. HEATMAP CAPTURE ENGINE & LOCAL STORAGE PERSISTENCE
  // ═══════════════════════════════════════════════════════════════
  function getStoredHeatmapPoints() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HEATMAP);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveHeatmapPoint(pt) {
    try {
      const pts = getStoredHeatmapPoints();
      pts.push(pt);
      // Keep latest 1,200 points to prevent storage bloat
      if (pts.length > 1200) pts.splice(0, pts.length - 1200);
      localStorage.setItem(STORAGE_KEY_HEATMAP, JSON.stringify(pts));
    } catch {}
  }

  function recordHeatmapClick(e) {
    const pageX = e.pageX;
    const pageY = e.pageY;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const docW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, window.innerWidth);
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight);

    const targetEl = e.target;
    const section = targetEl.closest('section, header, footer, #game-shell, #leaderboard-panel, nav, aside') || document.body;
    const sectionId = section.id || section.tagName.toLowerCase();

    const pt = {
      x: pageX,
      y: pageY,
      x_ratio: Number((pageX / (docW || 1)).toFixed(4)),
      y_ratio: Number((pageY / (docH || 1)).toFixed(4)),
      section: sectionId,
      tag: targetEl.tagName.toLowerCase(),
      id: targetEl.id || null,
      cls: (targetEl.className && typeof targetEl.className === 'string') ? targetEl.className.slice(0, 40) : null,
      path: window.location.pathname,
      t: Date.now()
    };

    saveHeatmapPoint(pt);

    // Send heatmap click event to Firebase Analytics
    window.trackEvent('heatmap_click', {
      click_x: Math.round(pageX),
      click_y: Math.round(pageY),
      x_pct: Math.round(pt.x_ratio * 100),
      y_pct: Math.round(pt.y_ratio * 100),
      element_tag: pt.tag,
      element_id: pt.id || 'none',
      section_id: pt.section
    });

    // If visual heatmap is currently open, dynamically draw the new point!
    if (isHeatmapVisualizerActive && typeof drawLiveHeatmapPoint === 'function') {
      drawLiveHeatmapPoint(pt);
    }
  }

  // ═══════════════════════════════════════════════════════════════
  //  5. VISUAL HEATMAP OVERLAY & HUD TOOLBAR
  // ═══════════════════════════════════════════════════════════════
  let isHeatmapVisualizerActive = false;
  let heatmapCanvas = null;
  let heatmapHUD = null;
  let heatmapMode = 'density'; // 'density' | 'pins'

  function initVisualHeatmapOverlay() {
    if (document.getElementById('an-heatmap-canvas')) return;

    // 1. Full-page Canvas Overlay
    heatmapCanvas = document.createElement('canvas');
    heatmapCanvas.id = 'an-heatmap-canvas';
    heatmapCanvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999998;
      pointer-events: none;
      display: none;
    `;
    document.body.appendChild(heatmapCanvas);

    // 2. Glass HUD Toolbar
    heatmapHUD = document.createElement('div');
    heatmapHUD.id = 'an-heatmap-hud';
    heatmapHUD.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 999999;
      background: rgba(18, 21, 28, 0.88);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      padding: 14px 18px;
      color: #EDEEF0;
      font-family: 'JetBrains Mono', 'Inter', monospace;
      font-size: 0.825rem;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(127, 82, 255, 0.35);
      display: none;
      flex-direction: column;
      gap: 10px;
      min-width: 250px;
      animation: hud-fade-in 0.3s ease-out;
    `;

    heatmapHUD.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:8px;">
        <span style="font-weight:700;color:#13B9FD;display:flex;align-items:center;gap:6px;">
          🔥 Analytics Heatmap
        </span>
        <button id="an-hm-close" style="background:transparent;border:none;color:#8A8F98;font-size:1.2rem;cursor:pointer;line-height:1;">&times;</button>
      </div>
      <div style="display:flex;justify-content:space-between;color:#EDEEF0;">
        <span>Clicks Tracked:</span>
        <strong id="an-hm-count" style="color:#FFE066;">0</strong>
      </div>
      <div style="display:flex;gap:6px;">
        <button id="an-hm-toggle-mode" style="flex:1;padding:6px 10px;border-radius:8px;border:1px solid rgba(127,82,255,0.4);background:rgba(127,82,255,0.2);color:#fff;cursor:pointer;font-size:0.75rem;font-weight:600;">Mode: Glow</button>
        <button id="an-hm-clear" style="padding:6px 10px;border-radius:8px;border:1px solid rgba(255,60,80,0.4);background:rgba(255,60,80,0.15);color:#FF6B81;cursor:pointer;font-size:0.75rem;font-weight:600;">Clear</button>
      </div>
      <div style="font-size:0.7rem;color:#8A8F98;text-align:center;">
        Press <kbd style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:4px;">Ctrl+Shift+H</kbd> to toggle
      </div>
    `;

    document.body.appendChild(heatmapHUD);

    // Wire HUD actions
    document.getElementById('an-hm-close').addEventListener('click', () => window.toggleHeatmap(false));
    document.getElementById('an-hm-clear').addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY_HEATMAP);
      renderVisualHeatmap();
    });
    document.getElementById('an-hm-toggle-mode').addEventListener('click', () => {
      heatmapMode = heatmapMode === 'density' ? 'pins' : 'density';
      document.getElementById('an-hm-toggle-mode').textContent = `Mode: ${heatmapMode === 'density' ? 'Glow' : 'Pins'}`;
      renderVisualHeatmap();
    });
  }

  function resizeHeatmapCanvas() {
    if (!heatmapCanvas) return;
    const docW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, window.innerWidth);
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight);
    const dpr = window.devicePixelRatio || 1;

    heatmapCanvas.width = docW * dpr;
    heatmapCanvas.height = docH * dpr;
    heatmapCanvas.style.width = docW + 'px';
    heatmapCanvas.style.height = docH + 'px';

    const ctx = heatmapCanvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function renderVisualHeatmap() {
    if (!heatmapCanvas || !isHeatmapVisualizerActive) return;
    resizeHeatmapCanvas();

    const ctx = heatmapCanvas.getContext('2d');
    const docW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, window.innerWidth);
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight);
    ctx.clearRect(0, 0, docW, docH);

    const points = getStoredHeatmapPoints().filter(pt => pt.path === window.location.pathname || !pt.path);
    const countEl = document.getElementById('an-hm-count');
    if (countEl) countEl.textContent = points.length;

    if (points.length === 0) return;

    if (heatmapMode === 'density') {
      // 1. Neon Radial Heat Blobs
      points.forEach(pt => {
        const x = pt.x_ratio ? pt.x_ratio * docW : pt.x;
        const y = pt.y_ratio ? pt.y_ratio * docH : pt.y;
        const radius = 42;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0, 'rgba(255, 51, 102, 0.7)');   // Hot Core: Neon Crimson
        grad.addColorStop(0.3, 'rgba(255, 174, 0, 0.55)'); // Mid: Neon Amber/Gold
        grad.addColorStop(0.65, 'rgba(19, 185, 253, 0.35)');// Outer: Neon Cyan
        grad.addColorStop(1, 'rgba(127, 82, 255, 0)');     // Edge: Soft Purple Fade

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
    } else {
      // 2. High-Precision Pin Dots
      points.forEach((pt, i) => {
        const x = pt.x_ratio ? pt.x_ratio * docW : pt.x;
        const y = pt.y_ratio ? pt.y_ratio * docH : pt.y;

        // Outer glow
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(19, 185, 253, 0.4)';
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE066';
        ctx.fill();
      });
    }
  }

  function drawLiveHeatmapPoint(pt) {
    if (!heatmapCanvas || !isHeatmapVisualizerActive) return;
    const ctx = heatmapCanvas.getContext('2d');
    const docW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, window.innerWidth);
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight);

    const x = pt.x_ratio ? pt.x_ratio * docW : pt.x;
    const y = pt.y_ratio ? pt.y_ratio * docH : pt.y;
    const radius = heatmapMode === 'density' ? 42 : 8;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, 'rgba(255, 51, 102, 0.9)');
    grad.addColorStop(0.4, 'rgba(255, 174, 0, 0.7)');
    grad.addColorStop(1, 'rgba(127, 82, 255, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    const countEl = document.getElementById('an-hm-count');
    if (countEl) countEl.textContent = getStoredHeatmapPoints().length;
  }

  window.toggleHeatmap = function (forceState) {
    initVisualHeatmapOverlay();
    isHeatmapVisualizerActive = typeof forceState === 'boolean' ? forceState : !isHeatmapVisualizerActive;

    if (heatmapCanvas && heatmapHUD) {
      heatmapCanvas.style.display = isHeatmapVisualizerActive ? 'block' : 'none';
      heatmapHUD.style.display = isHeatmapVisualizerActive ? 'flex' : 'none';

      if (isHeatmapVisualizerActive) {
        renderVisualHeatmap();
        window.addEventListener('resize', renderVisualHeatmap);
      } else {
        window.removeEventListener('resize', renderVisualHeatmap);
      }
    }
    console.log(`🔥 [Heatmap Visualizer] ${isHeatmapVisualizerActive ? 'ENABLED' : 'DISABLED'}`);
  };

  // Keyboard shortcut: Ctrl + Shift + H (or Cmd + Shift + H)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'H' || e.key === 'h')) {
      e.preventDefault();
      window.toggleHeatmap();
    }
  });

  // ═══════════════════════════════════════════════════════════════
  //  6. SCROLL DEPTH & ACTIVE ENGAGEMENT DURATION
  // ═══════════════════════════════════════════════════════════════
  function checkScrollDepth() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
    if (docH <= 0) return;

    const scrollPct = Math.round((scrollTop / docH) * 100);
    const milestones = [25, 50, 75, 90, 100];

    milestones.forEach(m => {
      if (scrollPct >= m && !scrollThresholdsFired.has(m)) {
        scrollThresholdsFired.add(m);
        window.trackEvent('scroll_depth', {
          percent_scrolled: m,
          page_path: window.location.pathname
        });
      }
    });
  }

  // Active page dwell & visibility tracking
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (isPageActive) {
        totalActiveDurationMs += Date.now() - activeStartTime;
        isPageActive = false;
        window.trackEvent('user_engagement', {
          engagement_time_msec: Math.round(totalActiveDurationMs),
          page_path: window.location.pathname
        });
      }
    } else {
      isPageActive = true;
      activeStartTime = Date.now();
    }
  });

  // Periodic heartbeat engagement logger (every 30 seconds)
  setInterval(() => {
    if (isPageActive) {
      const currentActive = totalActiveDurationMs + (Date.now() - activeStartTime);
      window.trackEvent('user_heartbeat', {
        active_seconds: Math.round(currentActive / 1000),
        page_path: window.location.pathname
      });
    }
  }, 30000);

  // ═══════════════════════════════════════════════════════════════
  //  7. SECTION DWELL & VISIBILITY TRACKER
  // ═══════════════════════════════════════════════════════════════
  function initSectionObserver() {
    const sections = document.querySelectorAll('section[id], #game-shell, #leaderboard-panel, header.game-header, #projects-hero');
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const sectionEnterTimes = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id || entry.target.className || 'section';
        if (entry.isIntersecting) {
          sectionEnterTimes.set(id, Date.now());
        } else if (sectionEnterTimes.has(id)) {
          const dwell = Date.now() - sectionEnterTimes.get(id);
          sectionEnterTimes.delete(id);
          // Log if user viewed section for more than 1.2 seconds
          if (dwell >= 1200) {
            window.trackEvent('section_view', {
              section_id: id,
              dwell_time_sec: Number((dwell / 1000).toFixed(1)),
              page_path: window.location.pathname
            });
          }
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(s => observer.observe(s));
  }

  // ═══════════════════════════════════════════════════════════════
  //  8. CORE WEB VITALS (RUM Performance Monitoring)
  // ═══════════════════════════════════════════════════════════════
  function initWebVitals() {
    if (typeof PerformanceObserver === 'undefined') return;

    // First Contentful Paint (FCP)
    try {
      const fcpObs = new PerformanceObserver((entryList) => {
        const entry = entryList.getEntriesByName('first-contentful-paint')[0];
        if (entry) {
          window.trackEvent('web_vital_fcp', {
            metric_value_ms: Math.round(entry.startTime),
            metric_rating: entry.startTime < 1800 ? 'good' : (entry.startTime < 3000 ? 'needs_improvement' : 'poor')
          });
          fcpObs.disconnect();
        }
      });
      fcpObs.observe({ type: 'paint', buffered: true });
    } catch {}

    // Largest Contentful Paint (LCP)
    try {
      const lcpObs = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          window.trackEvent('web_vital_lcp', {
            metric_value_ms: Math.round(lastEntry.startTime),
            metric_rating: lastEntry.startTime < 2500 ? 'good' : (lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor')
          });
        }
      });
      lcpObs.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {}

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObs = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
      });
      clsObs.observe({ type: 'layout-shift', buffered: true });

      window.addEventListener('visibilitychange', () => {
        if (document.hidden && clsValue > 0) {
          window.trackEvent('web_vital_cls', {
            metric_value: Number(clsValue.toFixed(3)),
            metric_rating: clsValue < 0.1 ? 'good' : (clsValue < 0.25 ? 'needs_improvement' : 'poor')
          });
        }
      }, { once: true });
    } catch {}
  }

  // ═══════════════════════════════════════════════════════════════
  //  9. JAVASCRIPT ERROR & EXCEPTION TRACKING
  // ═══════════════════════════════════════════════════════════════
  function initErrorTracking() {
    window.addEventListener('error', (e) => {
      window.trackEvent('app_exception', {
        error_message: (e.message || 'Unknown JS Error').slice(0, 100),
        error_filename: (e.filename || '').split('/').pop() || 'inline',
        error_lineno: e.lineno || 0,
        fatal: false
      });
    });

    window.addEventListener('unhandledrejection', (e) => {
      window.trackEvent('app_unhandled_rejection', {
        reason: (e.reason ? (e.reason.message || String(e.reason)) : 'Promise Rejection').slice(0, 100),
        fatal: false
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════
  //  10. AUTOMATED UI & CTA CLICK INTERCEPTOR
  // ═══════════════════════════════════════════════════════════════
  function attachAutoTrackers() {
    document.addEventListener('click', (e) => {
      // 1. Record Heatmap Point for every click
      recordHeatmapClick(e);

      // 2. High-value UI elements
      const target = e.target.closest('a, button, [role="button"], input[type="submit"]');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const text = (target.textContent || target.value || target.getAttribute('aria-label') || '').trim().slice(0, 50);
      const id = target.id || '';
      const cls = target.className || '';

      if (target.classList.contains('nav-cta') || href.includes('calendly.com')) {
        window.trackEvent('click_book_call', { location: href || 'nav-cta', button_text: text });
      } else if (href.includes('resume.pdf') || text.toLowerCase().includes('download pdf') || text.toLowerCase().includes('resume')) {
        window.trackEvent('download_resume', { file_name: 'alireza-nezami-resume.pdf', location: href });
      } else if (target.classList.contains('ai-pill-btn') || target.closest('.ai-pill-btn')) {
        window.trackEvent('ai_platform_click', { platform: text });
      } else if (target.id === 'ai-widget-toggle') {
        window.trackEvent('ai_widget_open');
      } else if (target.id === 'ai-widget-close') {
        window.trackEvent('ai_widget_close');
      } else if (href.includes('linkedin.com')) {
        window.trackEvent('click_social', { network: 'LinkedIn', url: href });
      } else if (href.includes('github.com')) {
        window.trackEvent('click_social', { network: 'GitHub', url: href });
      } else if (href.startsWith('mailto:')) {
        window.trackEvent('click_email', { email: href.replace('mailto:', '') });
      } else if (target.hasAttribute('data-filter')) {
        window.trackEvent('filter_projects', { filter_tag: target.getAttribute('data-filter') });
      } else if (id === 'theme-toggle' || id === 'theme-toggle-mobile') {
        window.trackEvent('toggle_theme', { new_theme: getTheme() });
      } else if (href.startsWith('#')) {
        window.trackEvent('nav_anchor_jump', { target_section: href });
      } else if (target.classList.contains('nav-link')) {
        window.trackEvent('nav_link_click', { link_text: text, link_url: href });
      }
    }, { capture: true });

    // Scroll throttle listener
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
      if (scrollTimer) return;
      scrollTimer = setTimeout(() => {
        scrollTimer = null;
        checkScrollDepth();
      }, 150);
    }, { passive: true });
  }

  // ═══════════════════════════════════════════════════════════════
  //  11. BOOT ENGINE
  // ═══════════════════════════════════════════════════════════════
  function boot() {
    initFirebase();
    attachAutoTrackers();
    initSectionObserver();
    initWebVitals();
    initErrorTracking();

    // Auto-open heatmap if URL has ?heatmap=true or #heatmap
    if (window.location.search.includes('heatmap=true') || window.location.hash === '#heatmap') {
      setTimeout(() => window.toggleHeatmap(true), 600);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
