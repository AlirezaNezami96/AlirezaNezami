/* ─── Floating Ask AI Summary Widget ─────────────────────────
   Self-contained — injects HTML, CSS, and event listeners.
   Include on any page: <script src="assets/js/ai-widget.js" defer></script>
   (For game/ subdir use: <script src="../assets/js/ai-widget.js" defer></script>)
─────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  const PROMPT = "I am considering Alireza Nezami to work with as a freelancer; summarize the key points from this portfolio. https://alirezanezami96.github.io/AlirezaNezami/";

  // ── HTML ─────────────────────────────────────────────────────
  const HTML = `
<aside id="ai-floating-widget" class="ai-floating-widget collapsed" aria-label="Ask AI Summary Widget">
  <!-- Collapsed Toggle Button -->
  <button id="ai-widget-toggle" class="ai-widget-toggle-btn" aria-label="Open AI summary widget">
    <span class="ai-toggle-sparkle">✨</span>
    <span>Ask AI Summary</span>
  </button>

  <!-- Floating Glass Card -->
  <div id="ai-floating-card" class="ai-floating-card">
    <div class="ai-floating-header">
      <div class="ai-floating-title-group">
        <span class="ai-header-sparkle">✨</span>
        <h3 class="ai-floating-title">Ask AI for a summary</h3>
      </div>
      <button id="ai-widget-close" class="ai-widget-close-btn" aria-label="Minimize AI summary widget">&times;</button>
    </div>
    <p class="ai-floating-subtitle">Select an AI model to generate a summary of Alireza's portfolio:</p>

    <div class="ai-platform-stack">
      <!-- ChatGPT -->
      <a href="https://chatgpt.com/?q=I%20am%20considering%20Alireza%20Nezami%20to%20work%20with%20as%20a%20freelancer%3B%20summarize%20the%20key%20points%20from%20this%20portfolio.%20https%3A%2F%2Falirezanezami96.github.io%2FAlirezaNezami%2F"
         target="_blank" rel="noopener noreferrer" class="ai-pill-btn">
        <div class="ai-pill-left">
          <div class="ai-pill-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#10A37F">
              <path d="M22.28 9.69a6 6 0 0 0-.52-4.95 6.07 6.07 0 0 0-6.52-2.92 6 6 0 0 0-4.66-2.07 6.07 6.07 0 0 0-5.74 3.99 6 6 0 0 0-4.14 2.98 6.07 6.07 0 0 0 .78 7.14 6 6 0 0 0 .52 4.95 6.07 6.07 0 0 0 6.52 2.92 6 6 0 0 0 4.66 2.07 6.07 6.07 0 0 0 5.74-3.99 6 6 0 0 0 4.14-2.98 6.07 6.07 0 0 0-.78-7.14zm-9.03 12.02a4.26 4.26 0 0 1-2.48-.79l.13-.07 4.13-2.38a.9.9 0 0 0 .45-.78v-5.83l1.75 1.01a.08.08 0 0 1 .05.06v4.8a4.28 4.28 0 0 1-3.98 3.98zm-8.37-4.83a4.26 4.26 0 0 1-.56-2.53l.13.08 4.13 2.38a.9.9 0 0 0 .9 0l5.05-2.91v2.02a.08.08 0 0 1-.04.07l-4.16 2.4a4.28 4.28 0 0 1-5.45-1.51zm-1.12-9.67a4.26 4.26 0 0 1 1.92-1.74l-.01.15v4.77a.9.9 0 0 0 .45.78l5.05 2.91-1.75 1.01a.08.08 0 0 1-.08 0l-4.16-2.4a4.28 4.28 0 0 1-1.42-5.48zm10.51-4.15a4.28 4.28 0 0 1 3.97 2.47l-.13.07-4.13 2.38a.9.9 0 0 0-.45.78v5.83l-1.75-1.01a.08.08 0 0 1-.05-.06V8.65a4.28 4.28 0 0 1 2.54-5.59zm6.44 6.44a4.26 4.26 0 0 1 .56 2.53l-.13-.08-4.13-2.38a.9.9 0 0 0-.9 0l-5.05 2.91V8.29a.08.08 0 0 1 .04-.07l4.16-2.4a4.28 4.28 0 0 1 5.45 1.51zm.36 6.8a4.26 4.26 0 0 1-1.92 1.74v-4.92a.9.9 0 0 0-.45-.78l-5.05-2.91 1.75-1.01a.08.08 0 0 1 .08 0l4.16 2.4a4.28 4.28 0 0 1 1.43 5.48z"/>
            </svg>
          </div>
          <span class="ai-pill-name">ChatGPT</span>
        </div>
        <span class="ai-pill-arrow">&nearr;</span>
      </a>

      <!-- Grok -->
      <a href="https://grok.com/?q=I%20am%20considering%20Alireza%20Nezami%20to%20work%20with%20as%20a%20freelancer%3B%20summarize%20the%20key%20points%20from%20this%20portfolio.%20https%3A%2F%2Falirezanezami96.github.io%2FAlirezaNezami%2F"
         target="_blank" rel="noopener noreferrer" class="ai-pill-btn">
        <div class="ai-pill-left">
          <div class="ai-pill-logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#EDEEF0">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
          <span class="ai-pill-name">Grok</span>
        </div>
        <span class="ai-pill-arrow">&nearr;</span>
      </a>

      <!-- DeepSeek -->
      <a href="https://chat.deepseek.com/?q=I%20am%20considering%20Alireza%20Nezami%20to%20work%20with%20as%20a%20freelancer%3B%20summarize%20the%20key%20points%20from%20this%20portfolio.%20https%3A%2F%2Falirezanezami96.github.io%2FAlirezaNezami%2F"
         target="_blank" rel="noopener noreferrer" class="ai-pill-btn">
        <div class="ai-pill-left">
          <div class="ai-pill-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.748 11.11C23.412 5.275 18.56.557 12.673.026c-3.395-.305-6.554.8-8.953 2.813C1.33 4.913-.126 7.856.009 11.15c.092 2.243.862 4.294 2.12 5.955L.519 22.812a.52.52 0 0 0 .689.63l5.904-2.406a11.67 11.67 0 0 0 5.477 1.356h.015c6.218 0 11.31-4.898 11.489-11.06a11.56 11.56 0 0 0-.345-3.222" fill="#4D6BFE"/>
              <path d="M8.858 9.168c.044.006.088.015.133.015.385 0 .74-.253.857-.64.14-.473-.13-.965-.601-1.106A7.24 7.24 0 0 0 7 7.21a7.22 7.22 0 0 0-4.013 1.219c-.402.265-.514.803-.25 1.205.266.403.803.515 1.206.25A5.33 5.33 0 0 1 7 9.002a5.35 5.35 0 0 1 1.858.166" fill="#fff"/>
            </svg>
          </div>
          <span class="ai-pill-name">DeepSeek</span>
        </div>
        <span class="ai-pill-arrow">&nearr;</span>
      </a>

      <!-- Google Gemini -->
      <a href="https://gemini.google.com/app?prompt=I%20am%20considering%20Alireza%20Nezami%20to%20work%20with%20as%20a%20freelancer%3B%20summarize%20the%20key%20points%20from%20this%20portfolio.%20https%3A%2F%2Falirezanezami96.github.io%2FAlirezaNezami%2F"
         target="_blank" rel="noopener noreferrer" class="ai-pill-btn">
        <div class="ai-pill-left">
          <div class="ai-pill-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#geminiWidgetGrad)"/>
              <defs>
                <linearGradient id="geminiWidgetGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#4285F4"/>
                  <stop offset="50%" stop-color="#9B51E0"/>
                  <stop offset="100%" stop-color="#E91E63"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="ai-pill-name">Google Gemini</span>
        </div>
        <span class="ai-pill-arrow">&nearr;</span>
      </a>

      <!-- Claude -->
      <a href="https://claude.ai/new?q=I%20am%20considering%20Alireza%20Nezami%20to%20work%20with%20as%20a%20freelancer%3B%20summarize%20the%20key%20points%20from%20this%20portfolio.%20https%3A%2F%2Falirezanezami96.github.io%2FAlirezaNezami%2F"
         target="_blank" rel="noopener noreferrer" class="ai-pill-btn">
        <div class="ai-pill-left">
          <div class="ai-pill-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97757">
              <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"/>
              <path d="M19 16L19.9 19.1L23 20L19.9 20.9L19 24L18.1 20.9L15 20L18.1 19.1L19 16Z"/>
            </svg>
          </div>
          <span class="ai-pill-name">Claude</span>
        </div>
        <span class="ai-pill-arrow">&nearr;</span>
      </a>
    </div>
  </div>
</aside>`;

  // ── Inject HTML ───────────────────────────────────────────────
  function injectWidget() {
    // Don't inject twice (main index.html already has it hardcoded)
    if (document.getElementById('ai-floating-widget')) return;

    const el = document.createElement('div');
    el.innerHTML = HTML.trim();
    document.body.appendChild(el.firstElementChild);
  }

  // ── Wire Events ───────────────────────────────────────────────
  function initWidget() {
    const widget    = document.getElementById('ai-floating-widget');
    const closeBtn  = document.getElementById('ai-widget-close');
    const toggleBtn = document.getElementById('ai-widget-toggle');

    if (!widget) return;

    closeBtn.addEventListener('click', () => widget.classList.add('collapsed'));
    toggleBtn.addEventListener('click', () => widget.classList.remove('collapsed'));

    // Copy prompt to clipboard as fallback (Gemini, etc. don't support query params)
    widget.querySelectorAll('.ai-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(PROMPT).catch(() => {});
        }
        showToast('Prompt copied! Paste it into the AI chat ✨');
      });
    });
  }

  // ── Toast notification ────────────────────────────────────────
  function showToast(message) {
    let toast = document.getElementById('ai-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ai-toast';
      toast.className = 'ai-toast-notification';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // ── Boot ──────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectWidget(); initWidget(); });
  } else {
    injectWidget();
    initWidget();
  }
})();
