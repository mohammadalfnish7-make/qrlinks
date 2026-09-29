/**
 * QR Links – Language Toggle Script
 * Switches between Arabic (RTL) and English (LTR)
 */

(function () {
  'use strict';

  const html = document.documentElement;
  const langLabel = document.getElementById('lang-label');
  const langToggle = document.getElementById('lang-toggle');

  // All translatable elements
  const translatableElements = document.querySelectorAll('[data-ar][data-en]');

  let currentLang = 'ar'; // Default language

  /**
   * Switch page language and direction
   */
  function switchLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';

    // Update HTML attributes
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // Update toggle label
    langLabel.textContent = currentLang === 'ar' ? 'EN' : 'عربي';

    // Update all translatable text
    translatableElements.forEach(function (el) {
      el.textContent = el.getAttribute('data-' + currentLang);
    });

    // Update body font priority
    document.body.style.fontFamily = currentLang === 'ar'
      ? "'Cairo', 'Inter', system-ui, sans-serif"
      : "'Inter', 'Cairo', system-ui, sans-serif";

    // Save preference
    try {
      localStorage.setItem('qrlinks-lang', currentLang);
    } catch (e) {
      // localStorage not available
    }
  }

  /**
   * Load saved language preference
   */
  function loadSavedLanguage() {
    try {
      var saved = localStorage.getItem('qrlinks-lang');
      if (saved && saved !== currentLang) {
        switchLanguage();
      }
    } catch (e) {
      // localStorage not available
    }
  }

  // Event listener
  langToggle.addEventListener('click', switchLanguage);

  // Load saved preference on page load
  loadSavedLanguage();
})();
