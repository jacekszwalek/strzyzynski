/**
 * js/main.js — wspólne funkcje dla wszystkich stron: rozwiązywanie ścieżek
 * (PL w katalogu głównym / EN w /en/), przełącznik rozmiaru czcionki,
 * renderowanie kafelków rzeźb i nawigacji prev/next na podstawie
 * data/rzezby.js, lightbox do zdjęć.
 *
 * Ładowany jako zwykły <script> (nie moduł), żeby strona działała też
 * po otwarciu pliku z dysku (file://), bez serwera i bez fetch().
 */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * Ścieżki: PL = katalog główny, EN = /en/
   * ------------------------------------------------------------------ */

  function getRootPrefix() {
    return document.documentElement.getAttribute("data-root") || "./";
  }

  function getCurrentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "pl";
  }

  // Ścieżki w data/rzezby.js są zapisane jako "./img/plik.svg" (jakby
  // strona była w katalogu głównym). Tu zamieniamy "./" na właściwy prefiks.
  function resolveAsset(path) {
    if (!path) return path;
    var root = getRootPrefix();
    if (path.indexOf("./") === 0) {
      return root + path.slice(2);
    }
    return path;
  }

  // Link do podstrony danej rzeźby w danym języku, z właściwego miejsca.
  function sculptureUrl(rzezba, lang) {
    var current = getCurrentLang();
    if (lang === current) {
      return rzezba.slug[lang];
    }
    var root = getRootPrefix();
    if (current === "pl") {
      return root + "en/" + rzezba.slug.en;
    }
    return root + rzezba.slug.pl;
  }

  function homeUrl(lang) {
    var current = getCurrentLang();
    if (lang === current) return "index.html";
    var root = getRootPrefix();
    if (current === "pl") return root + "en/index.html";
    return root + "index.html";
  }

  function aboutUrl(lang) {
    var current = getCurrentLang();
    var file = lang === "pl" ? "o-projekcie.html" : "about.html";
    if (lang === current) return file;
    var root = getRootPrefix();
    if (current === "pl") return root + "en/" + file;
    return root + file;
  }

  window.Naleczow = window.Naleczow || {};
  window.Naleczow.getRootPrefix = getRootPrefix;
  window.Naleczow.getCurrentLang = getCurrentLang;
  window.Naleczow.resolveAsset = resolveAsset;
  window.Naleczow.sculptureUrl = sculptureUrl;
  window.Naleczow.homeUrl = homeUrl;
  window.Naleczow.aboutUrl = aboutUrl;

  var L10N = {
    pl: {
      openView: "Zobacz i posłuchaj",
      year: "Rok",
      toBeCompleted: "do uzupełnienia"
    },
    en: {
      openView: "Watch and listen",
      year: "Year",
      toBeCompleted: "to be completed"
    }
  };

  function t() {
    return L10N[getCurrentLang()];
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------
   * Kafelki rzeźb (strona główna)
   * ------------------------------------------------------------------ */

  function renderTileGrid(container) {
    if (!container || typeof RZEZBY === "undefined") return;
    var lang = getCurrentLang();
    var items = RZEZBY.slice().sort(function (a, b) { return a.nrTrasy - b.nrTrasy; });
    var html = items.map(function (r) {
      var href = sculptureUrl(r, lang);
      var img = resolveAsset(r.miniatura);
      var title = escapeHtml(r.tytul[lang]);
      var rok = r.rok ? r.rok : t().toBeCompleted;
      var material = r.material && r.material[lang] ? r.material[lang] : "";
      var meta = rok + (material ? " · " + escapeHtml(material) : "");
      var opis = escapeHtml((r.opisKrotki && r.opisKrotki[lang]) || "");
      return (
        '<li>' +
          '<a class="tile" href="' + href + '" data-rzezba-id="' + r.id + '">' +
            '<span class="tile-img-wrap">' +
              '<img src="' + img + '" alt="" width="400" height="300" loading="lazy">' +
              '<span class="tile-number" aria-hidden="true">' + r.nrTrasy + '</span>' +
            '</span>' +
            '<span class="tile-body">' +
              '<span class="tile-meta">' + meta + '</span>' +
              '<h3>' + title + '</h3>' +
              '<p>' + opis + '</p>' +
            '</span>' +
          '</a>' +
        '</li>'
      );
    }).join("");
    container.innerHTML = html;
  }

  /* ------------------------------------------------------------------
   * Nawigacja prev / next na podstronach rzeźb
   * ------------------------------------------------------------------ */

  function renderRouteNav(container) {
    if (!container || typeof RZEZBY === "undefined") return;
    var currentId = container.getAttribute("data-current");
    var lang = getCurrentLang();
    var items = RZEZBY.slice().sort(function (a, b) { return a.nrTrasy - b.nrTrasy; });
    var idx = items.findIndex(function (r) { return r.id === currentId; });
    if (idx === -1) return;
    var prev = idx > 0 ? items[idx - 1] : null;
    var next = idx < items.length - 1 ? items[idx + 1] : null;

    var prevLabel = lang === "pl" ? "Poprzedni punkt" : "Previous stop";
    var nextLabel = lang === "pl" ? "Następny punkt" : "Next stop";
    var mapLabel = lang === "pl" ? "Powrót do mapy spaceru" : "Back to the walk map";

    var html = "";
    if (prev) {
      html += '<a class="btn btn--secondary" href="' + sculptureUrl(prev, lang) + '">' +
        '<span class="route-nav-label">&larr; ' + prevLabel + '</span>' + escapeHtml(prev.tytul[lang]) + '</a>';
    } else {
      html += '<span></span>';
    }
    if (next) {
      html += '<a class="btn btn--secondary" href="' + sculptureUrl(next, lang) + '">' +
        '<span class="route-nav-label">' + nextLabel + ' &rarr;</span>' + escapeHtml(next.tytul[lang]) + '</a>';
    } else {
      html += '<span></span>';
    }
    html += '<a class="btn to-map" href="' + homeUrl(lang) + '#mapa">' + mapLabel + '</a>';

    container.innerHTML = html;
  }

  /* ------------------------------------------------------------------
   * Przełącznik rozmiaru czcionki A / A+ / A++
   * ------------------------------------------------------------------ */

  var TEXT_SCALE_KEY = "naleczow-text-scale";
  var SCALE_CLASSES = { "100": "", "125": "text-scale-125", "150": "text-scale-150" };

  function applyTextScale(scale) {
    var html = document.documentElement;
    html.classList.remove("text-scale-125", "text-scale-150");
    var cls = SCALE_CLASSES[scale];
    if (cls) html.classList.add(cls);
    var buttons = document.querySelectorAll(".text-size-switch button");
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-scale") === scale ? "true" : "false");
    });
  }

  function initTextSizeSwitch() {
    var saved = "100";
    try {
      saved = localStorage.getItem(TEXT_SCALE_KEY) || "100";
    } catch (e) { /* localStorage niedostępny — zostań przy 100% */ }
    applyTextScale(saved);

    document.querySelectorAll(".text-size-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var scale = btn.getAttribute("data-scale");
        applyTextScale(scale);
        try { localStorage.setItem(TEXT_SCALE_KEY, scale); } catch (e) { /* ignoruj */ }
      });
    });
  }

  /* ------------------------------------------------------------------
   * Lightbox do zdjęć w treści
   * ------------------------------------------------------------------ */

  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    var lightboxImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var lastFocused = null;

    function open(src, alt) {
      lastFocused = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.hidden = false;
      closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    }
    function close() {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.removeEventListener("keydown", onKeydown);
      if (lastFocused) lastFocused.focus();
    }
    function onKeydown(e) {
      if (e.key === "Escape") close();
    }

    document.querySelectorAll("figure.content-figure img").forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", (img.alt || "") + (getCurrentLang() === "pl" ? " — powiększ" : " — enlarge"));
      img.addEventListener("click", function () { open(img.src, img.alt); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(img.src, img.alt);
        }
      });
    });

    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
  }

  /* ------------------------------------------------------------------
   * Init
   * ------------------------------------------------------------------ */

  document.addEventListener("DOMContentLoaded", function () {
    initTextSizeSwitch();
    initLightbox();

    var tileGrid = document.getElementById("tile-grid");
    if (tileGrid) renderTileGrid(tileGrid);

    var routeNav = document.getElementById("route-nav");
    if (routeNav) renderRouteNav(routeNav);
  });
})();
