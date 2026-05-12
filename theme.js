(function () {
  var CONSENT_KEY = 'koda_consent';
  var THEME_KEY = 'koda_theme';

  function getConsent() { return localStorage.getItem(CONSENT_KEY); }

  function isDarkPreferred() {
    if (getConsent() === 'true') {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored !== null) return stored !== 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
    }
  }

  function saveTheme(dark) {
    if (getConsent() === 'true') {
      localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    }
  }

  var dark = isDarkPreferred();
  applyTheme(dark);

  document.addEventListener('DOMContentLoaded', function () {
    setupToggle();
    syncImages();
    if (getConsent() === null) showBanner();
  });

  function setupToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    syncToggleIcon(btn);
    btn.addEventListener('click', function () {
      dark = !dark;
      applyTheme(dark);
      saveTheme(dark);
      syncToggleIcon(btn);
      syncImages();
    });
  }

  function syncToggleIcon(btn) {
    var iconDark = document.getElementById('theme-icon-dark');
    var iconLight = document.getElementById('theme-icon-light');
    if (iconDark && iconLight) {
      iconDark.classList.toggle('hidden', !dark);
      iconLight.classList.toggle('hidden', dark);
    } else {
      btn.textContent = dark ? '☀ Light' : '☾ Dark';
    }
  }

  function syncImages() {
    [
      ['hero-app-light',    'hero-app-dark'],
      ['coach-app-light',   'coach-app-dark'],
      ['session-app-light', 'session-app-dark'],
    ].forEach(function (pair) {
      var l = document.getElementById(pair[0]);
      var d = document.getElementById(pair[1]);
      if (l && d) {
        l.style.display = dark ? 'none' : 'block';
        d.style.display = dark ? 'block' : 'none';
      }
    });
  }

  function showBanner() {
    var bg     = dark ? '#1A2C20' : '#FFFFFF';
    var fg     = dark ? '#E8EDDF' : '#212121';
    var border = dark ? '#243a2c' : '#D5DDC8';
    var accent = dark ? '#59C85C' : '#3D8B40';
    var btnBg  = dark ? '#A3D9B1' : '#1A3623';
    var btnFg  = dark ? '#0D1B13' : '#FFFFFF';

    var banner = document.createElement('div');
    banner.id = 'koda-consent-banner';
    banner.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:9999',
      'padding:14px 24px',
      'display:flex', 'align-items:center', 'justify-content:space-between',
      'gap:16px', 'flex-wrap:wrap',
      'font-family:Geist,system-ui,sans-serif', 'font-size:13px', 'line-height:1.5',
      'border-top:1px solid ' + border,
      'background:' + bg, 'color:' + fg,
      'box-shadow:0 -4px 32px rgba(0,0,0,0.18)',
    ].join(';');

    banner.innerHTML =
      '<span style="flex:1;min-width:200px;opacity:0.85">'
        + 'We use <strong>localStorage</strong> to remember your theme preference. '
        + 'See our <a href="privacy.html" style="color:' + accent + ';text-decoration:underline">Privacy Policy</a>.'
      + '</span>'
      + '<div style="display:flex;gap:10px;flex-shrink:0">'
        + '<button id="koda-consent-decline" style="padding:8px 20px;border-radius:999px;border:1px solid '
          + border + ';background:transparent;color:' + fg + ';cursor:pointer;font-size:13px;font-family:inherit">Decline</button>'
        + '<button id="koda-consent-accept" style="padding:8px 20px;border-radius:999px;border:none;background:'
          + btnBg + ';color:' + btnFg + ';cursor:pointer;font-weight:600;font-size:13px;font-family:inherit">Accept</button>'
      + '</div>';

    document.body.appendChild(banner);

    document.getElementById('koda-consent-accept').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'true');
      localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
      banner.remove();
    });

    document.getElementById('koda-consent-decline').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'false');
      banner.remove();
    });
  }
})();
