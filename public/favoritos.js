// ─── Mueblista Favorites ───
// Módulo compartido de favoritos en localStorage.
// Incluir antes del script inline de cada página que use favoritos.

const FAV_KEY = 'mueblista_favorites';

function mFavGet() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch { return []; }
}

function _mFavSave(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  mFavUpdateBadges();
}

window.mFavIs = function(id) {
  return mFavGet().some(f => f.id === id);
};

window.mFavToggle = function(id, data) {
  const favs = mFavGet();
  const idx = favs.findIndex(f => f.id === id);
  if (idx >= 0) { favs.splice(idx, 1); _mFavSave(favs); return false; }
  favs.unshift({ id, savedAt: Date.now(), ...data });
  _mFavSave(favs);
  return true;
};

window.mFavRemove = function(id) {
  _mFavSave(mFavGet().filter(f => f.id !== id));
};

window.mFavUpdateBadges = function() {
  const count = mFavGet().length;
  document.querySelectorAll('.nav-fav-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
};

document.addEventListener('DOMContentLoaded', mFavUpdateBadges);
