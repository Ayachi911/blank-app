/* =============================================
   AYACHI SAMYAL — Portfolio JS
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- TAB SWITCHING ---- */
  const allTabs     = document.querySelectorAll('.nav-tab, .mobile-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  const mobileMenu  = document.getElementById('mobileMenu');

  function switchTab(name) {
    const target = document.getElementById('tab-' + name);
    if (!target) return;
    allTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    tabContents.forEach(c => {
      c.classList.remove('active');
    });
    // Small delay lets the fadeUp animation retrigger
    requestAnimationFrame(() => target.classList.add('active'));
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  allTabs.forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));

  const logoBtn = document.querySelector('.nav-logo');
  if (logoBtn) logoBtn.addEventListener('click', () => switchTab('home'));

  const mobileToggle = document.getElementById('mobileToggle');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }

  /* ---- DATA-NAVIGATE LINKS ---- */
  document.querySelectorAll('[data-navigate]').forEach(el =>
    el.addEventListener('click', () => switchTab(el.dataset.navigate))
  );

  /* ---- EXPANDABLE SECTIONS ---- */
  document.querySelectorAll('.expandable-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = document.getElementById(btn.dataset.target);
      if (!content) return;
      content.classList.toggle('active');
      btn.textContent = content.classList.contains('active')
        ? 'Hide Events ↑'
        : 'View Events & Reports ↓';
    });
  });

  /* ---- RIPPLE EFFECT ---- */
  document.querySelectorAll('.clickable').forEach(el => {
    el.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const r    = document.createElement('span');
      r.className  = 'ripple';
      r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
      this.querySelector('.ripple')?.remove();
      this.appendChild(r);
      setTimeout(() => r.remove(), 700);
    });
  });

  /* ---- KEYBOARD SHORTCUTS (1–6) ---- */
  const tabs = ['home', 'por', 'international', 'arts', 'technical', 'competitions'];
  document.addEventListener('keydown', e => {
    const i = parseInt(e.key) - 1;
    if (i >= 0 && i < tabs.length) switchTab(tabs[i]);
  });

  /* ---- HERO ENTRANCE ANIMATION ---- */
  const heroText = document.querySelector('.hero-text-panel');
  if (heroText) {
    const kids = heroText.children;
    Array.from(kids).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.1 + 0.15}s, transform 0.6s ease ${i * 0.1 + 0.15}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }

});
