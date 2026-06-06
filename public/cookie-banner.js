(function () {
  if (localStorage.getItem('cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div id="cb-inner">
      <div id="cb-left">
        <div id="cb-title">🍪 Usamos cookies</div>
        <div id="cb-text">
          Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso de la plataforma.
          Puedes aceptarlas todas, elegir solo las necesarias o
          <a href="cookies.html">configurarlas</a>.
        </div>
      </div>
      <div id="cb-actions">
        <button id="cb-config"   onclick="cbConfig()">Configurar</button>
        <button id="cb-necessary" onclick="cbNecessary()">Solo necesarias</button>
        <button id="cb-accept"   onclick="cbAccept()">Aceptar todo</button>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #cookie-banner {
      position: fixed; bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: #1a0d07;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 16px 24px;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.25);
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(.34,1.2,.64,1);
    }
    #cookie-banner.show { transform: translateY(0); }
    #cb-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; align-items: center;
      gap: 24px; flex-wrap: wrap;
    }
    #cb-left { flex: 1; min-width: 260px; }
    #cb-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 14px; font-weight: 700;
      color: #fff; margin-bottom: 4px;
    }
    #cb-text {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 13px; color: rgba(255,255,255,0.45);
      line-height: 1.5;
    }
    #cb-text a { color: #c96a38; text-decoration: none; }
    #cb-text a:hover { text-decoration: underline; }
    #cb-actions { display: flex; gap: 8px; flex-wrap: wrap; flex-shrink: 0; }
    #cb-actions button {
      padding: 9px 18px; border-radius: 8px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 13px; font-weight: 700;
      cursor: pointer; transition: all 0.15s; white-space: nowrap;
    }
    #cb-config {
      background: transparent; color: rgba(255,255,255,0.45);
      border: 1.5px solid rgba(255,255,255,0.15);
    }
    #cb-config:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
    #cb-necessary {
      background: transparent; color: rgba(255,255,255,0.7);
      border: 1.5px solid rgba(255,255,255,0.25);
    }
    #cb-necessary:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
    #cb-accept {
      background: #c96a38; color: #fff; border: none;
    }
    #cb-accept:hover { background: #b85e30; }
  `;

  document.head.appendChild(style);
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add('show'), 300);

  window.cbAccept = function () {
    localStorage.setItem('cookie_consent', 'all');
    hideBanner();
  };

  window.cbNecessary = function () {
    localStorage.setItem('cookie_consent', 'necessary');
    hideBanner();
  };

  window.cbConfig = function () {
    window.location.href = 'cookies.html';
  };

  function hideBanner() {
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);
  }
})();
