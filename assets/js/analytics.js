// ─── Firebase & Visitor Traffic Analytics Engine ──────────────────────────────

(function () {
  'use strict';

  let analyticsInstance = null;

  // 1. Initialize Firebase Analytics if valid config is present
  async function initFirebase() {
    if (typeof FIREBASE_CONFIG === 'undefined') return;

    const isPlaceholder = !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey.startsWith('YOUR_');
    if (isPlaceholder) {
      console.log('💡 [Analytics] Firebase Config is currently placeholder. Update assets/js/firebase-config.js to enable Firebase Console tracking.');
      return;
    }

    try {
      const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
      const { getAnalytics, logEvent } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js');

      const app = initializeApp(FIREBASE_CONFIG);
      analyticsInstance = getAnalytics(app);

      // Log initial page view
      logEvent(analyticsInstance, 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
        screen_resolution: `${window.screen.width}x${window.screen.height}`
      });

      console.log('✅ [Firebase Analytics] Initialized successfully. Realtime traffic dashboard active!');
    } catch (err) {
      console.warn('⚠️ [Firebase Analytics] Initialization error:', err);
    }
  }

  // 2. Track Custom Events Helper
  window.trackEvent = function (eventName, eventParams = {}) {
    if (analyticsInstance) {
      try {
        import('https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js').then(({ logEvent }) => {
          logEvent(analyticsInstance, eventName, eventParams);
        });
      } catch (e) {}
    }

    // Dual logging to Supabase page_views / events table as fallback if configured
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

  // 3. Auto-attach click listeners for high-value portfolio interactions
  function attachAutoTrackers() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const text = (target.textContent || '').trim();

      if (target.classList.contains('nav-cta') || href.includes('calendly.com')) {
        window.trackEvent('click_book_call', { location: href, text: text });
      } else if (href.includes('resume.pdf') || text.includes('Download PDF')) {
        window.trackEvent('download_resume', { file: 'alireza-nezami-resume.pdf' });
      } else if (target.classList.contains('ai-pill-btn')) {
        window.trackEvent('click_ai_summary_platform', { platform: text });
      } else if (href.includes('linkedin.com') || href.includes('github.com')) {
        window.trackEvent('click_social_profile', { url: href });
      }
    });
  }

  // Boot Analytics
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initFirebase();
      attachAutoTrackers();
    });
  } else {
    initFirebase();
    attachAutoTrackers();
  }
})();
