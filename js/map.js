/**
 * js/map.js — mapa spaceru (Leaflet + kafelki OpenStreetMap, bez klucza API).
 *
 * Odpowiada za:
 *  - dużą mapę na stronie głównej (numerowane pinezki, trasa, karuzela listy
 *    pod mapą, dwukierunkowa synchronizacja, geolokalizacja),
 *  - mniejszą mapę "Jak dojść" na podstronach rzeźb (jedna wyróżniona pinezka),
 *  - fallback na samą listę, gdy Leaflet się nie załaduje.
 *
 * Wymaga: vendor/leaflet/leaflet.js (wczytany wcześniej), data/rzezby.js.
 */

(function () {
  "use strict";

  var N = window.Naleczow || {};

  function lang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "pl";
  }

  /* ------------------------------------------------------------------
   * Odległości i czas spaceru
   * ------------------------------------------------------------------ */

  function haversineKm(a, b) {
    var R = 6371;
    var dLat = ((b[0] - a[0]) * Math.PI) / 180;
    var dLon = ((b[1] - a[1]) * Math.PI) / 180;
    var lat1 = (a[0] * Math.PI) / 180;
    var lat2 = (b[0] * Math.PI) / 180;
    var h =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }

  /* ------------------------------------------------------------------
   * Ikony
   * ------------------------------------------------------------------ */

  function numberedIcon(number, extraClass) {
    return L.divIcon({
      className: "",
      html: '<div class="marker-pin' + (extraClass ? " " + extraClass : "") + '"><span>' + number + "</span></div>",
      iconSize: [46, 46],
      iconAnchor: [23, 44],
      popupAnchor: [0, -40]
    });
  }

  function userIcon() {
    return L.divIcon({
      className: "",
      html: '<div class="marker-user"></div>',
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });
  }

  /* ------------------------------------------------------------------
   * Zawartość popupu
   * ------------------------------------------------------------------ */

  function popupHtml(r) {
    var L_ = lang();
    var img = N.resolveAsset(r.miniatura);
    var href = N.sculptureUrl(r, L_);
    var rok = r.rok || "";
    var material = r.material && r.material[L_] ? r.material[L_] : "";
    var meta = rok + (material ? " · " + material : "");
    var btnLabel = L_ === "pl" ? "Zobacz i posłuchaj" : "Watch and listen";
    return (
      '<a class="popup-card" href="' + href + '">' +
        '<span class="popup-img-wrap">' +
          '<img class="popup-img" src="' + img + '" alt="" width="72" height="96" loading="lazy">' +
          '<span class="popup-number" aria-hidden="true">' + r.nrTrasy + '</span>' +
        '</span>' +
        '<span class="popup-body">' +
          '<span class="popup-meta">' + meta + '</span>' +
          '<span class="popup-title">' + r.tytul[L_] + '</span>' +
          '<span class="popup-link">' + btnLabel + ' &rarr;</span>' +
        '</span>' +
      '</a>'
    );
  }

  /* ------------------------------------------------------------------
   * Fallback, gdy Leaflet się nie załadował
   * ------------------------------------------------------------------ */

  function showFallback(mapWrapEl) {
    if (!mapWrapEl) return;
    mapWrapEl.hidden = true;
    var fallback = mapWrapEl.parentElement
      ? mapWrapEl.parentElement.querySelector(".map-fallback")
      : null;
    if (fallback) fallback.hidden = false;
  }

  /* ------------------------------------------------------------------
   * Karuzela listy punktów pod mapą — przewijana swipe'em (natywny
   * scroll ze scroll-snap) albo strzałkami lewo/prawo. Zwraca uchwyt
   * do przewinięcia na konkretny punkt (używany przy kliknięciu pinezki).
   * ------------------------------------------------------------------ */

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initLocationCarousel(listEl) {
    var root = listEl.closest(".location-carousel");
    if (!root) return null;
    var prevBtn = root.querySelector(".location-carousel-btn--prev");
    var nextBtn = root.querySelector(".location-carousel-btn--next");
    var controls = root.querySelector(".location-carousel-controls");
    if (!prevBtn || !nextBtn) return null;

    function stepWidth() {
      var firstItem = listEl.querySelector("li");
      if (!firstItem) return listEl.clientWidth;
      var gap = parseFloat(getComputedStyle(listEl).columnGap || getComputedStyle(listEl).gap || "0") || 0;
      return firstItem.getBoundingClientRect().width + gap;
    }
    function updateButtons() {
      var maxScroll = listEl.scrollWidth - listEl.clientWidth;
      var needsScroll = maxScroll > 1;
      // Strzałki tylko wtedy, gdy jest co przewijać (np. desktop, na którym
      // wszystkie punkty mieszczą się w jednym rzędzie, ich nie potrzebuje).
      if (controls) controls.hidden = !needsScroll;
      if (!needsScroll) return;
      prevBtn.disabled = listEl.scrollLeft <= 1;
      nextBtn.disabled = listEl.scrollLeft >= maxScroll - 1;
    }
    function scrollByStep(direction) {
      listEl.scrollBy({ left: direction * stepWidth(), behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }

    prevBtn.addEventListener("click", function () { scrollByStep(-1); });
    nextBtn.addEventListener("click", function () { scrollByStep(1); });

    var ticking = false;
    listEl.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateButtons();
        ticking = false;
      });
    }, { passive: true });

    window.addEventListener("resize", updateButtons);
    updateButtons();

    return {
      scrollToItem: function (id) {
        var el = listEl.querySelector('[data-rzezba-id="' + id + '"]');
        if (!el) return;
        el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", inline: "center", block: "nearest" });
      }
    };
  }

  /* ------------------------------------------------------------------
   * Duża mapa spaceru (strona główna)
   * ------------------------------------------------------------------ */

  function initWalkMap() {
    var mapEl = document.getElementById("map");
    var mapWrap = document.getElementById("map-wrap");
    var listEl = document.getElementById("location-list");
    var geoBtn = document.getElementById("geolocate-btn");
    var geoStatus = document.getElementById("geolocate-status");

    if (!mapEl || typeof RZEZBY === "undefined") return;

    if (typeof L === "undefined") {
      showFallback(mapWrap);
      renderListOnly(listEl);
      return;
    }

    var items = RZEZBY.slice().sort(function (a, b) { return a.nrTrasy - b.nrTrasy; });
    var points = items.map(function (r) { return r.wspolrzedne; });

    var map = L.map(mapEl, { scrollWheelZoom: false }).setView(points[0], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
    }).addTo(map);

    L.polyline(points, {
      color: "#5a3e22",
      weight: 4,
      dashArray: "10 8",
      opacity: 0.85
    }).addTo(map);

    var markers = {};
    items.forEach(function (r) {
      var marker = L.marker(r.wspolrzedne, { icon: numberedIcon(r.nrTrasy), keyboard: true, title: r.tytul[lang()] })
        .addTo(map)
        .bindPopup(popupHtml(r), { maxWidth: 300, autoPan: false });
      markers[r.id] = marker;
    });

    map.fitBounds(L.latLngBounds(points), { padding: [40, 40] });

    /* ---- Dymek: na mobile przesuń widok tak, żeby popup nie nachodził na
       przyciski zoom (+/-) w lewym górnym rogu ---- */

    map.on("popupopen", function (e) {
      if (window.innerWidth > 640) return;
      var popupLatLng = e.popup.getLatLng();
      if (!popupLatLng) return;
      var offsetY = 100;
      var zoom = map.getZoom();
      var beforePoint = map.project(popupLatLng, zoom);
      var targetPoint = beforePoint.subtract([0, offsetY]);
      var targetLatLng = map.unproject(targetPoint, zoom);
      map.panTo(targetLatLng, { animate: true });
    });

    // Otwiera popup danego markera, zawsze "na nowo" — Leaflet nie odpala
    // "popupopen" przy ponownym otwarciu już otwartego popupu, więc samo
    // openPopup() na wybranym ponownie przystanku nie przeliczyłoby na
    // nowo przesunięcia widoku (mobile) i zostawało w złej pozycji.
    function openStopPopup(marker) {
      if (marker.isPopupOpen()) marker.closePopup();
      marker.openPopup();
    }

    /* ---- Lista pod mapą + dwukierunkowa synchronizacja ---- */

    function highlightMarker(id, on) {
      var marker = markers[id];
      if (!marker) return;
      var el = marker.getElement();
      if (!el) return;
      var pin = el.querySelector(".marker-pin");
      if (pin) pin.classList.toggle("is-active", on);
    }
    function highlightListItem(id, on) {
      if (!listEl) return;
      var el = listEl.querySelector('[data-rzezba-id="' + id + '"]');
      if (el) el.classList.toggle("is-active", on);
    }

    var locationCarousel = null;

    if (listEl) {
      var L_ = lang();
      listEl.innerHTML = items.map(function (r) {
        var opis = (r.opisKrotki && r.opisKrotki[L_]) || "";
        return (
          '<li>' +
            '<a class="location-item" href="' + N.sculptureUrl(r, L_) + '" data-rzezba-id="' + r.id + '">' +
              '<span class="location-dot-row">' +
                '<span class="location-dot" aria-hidden="true">' + r.nrTrasy + '</span>' +
              '</span>' +
              '<span class="location-card">' +
                '<span class="location-title">' + r.tytul[L_] + '</span>' +
                '<span class="location-desc">' + opis + '</span>' +
              '</span>' +
            '</a>' +
          '</li>'
        );
      }).join("");

      locationCarousel = initLocationCarousel(listEl);

      items.forEach(function (r) {
        var el = listEl.querySelector('[data-rzezba-id="' + r.id + '"]');
        if (!el) return;
        el.addEventListener("mouseenter", function () { highlightMarker(r.id, true); });
        el.addEventListener("mouseleave", function () { highlightMarker(r.id, false); });
        el.addEventListener("focus", function () { highlightMarker(r.id, true); });
        el.addEventListener("blur", function () { highlightMarker(r.id, false); });
        el.addEventListener("click", function (e) {
          e.preventDefault();
          var marker = markers[r.id];
          map.setView(r.wspolrzedne, Math.max(map.getZoom(), 17), { animate: false });
          openStopPopup(marker);
        });
      });
    }

    items.forEach(function (r) {
      var marker = markers[r.id];
      marker.on("add", function () {
        var el = marker.getElement();
        if (!el) return;
        el.addEventListener("mouseenter", function () { highlightListItem(r.id, true); });
        el.addEventListener("mouseleave", function () { highlightListItem(r.id, false); });
        el.addEventListener("focus", function () { highlightListItem(r.id, true); });
        el.addEventListener("blur", function () { highlightListItem(r.id, false); });
      });
      marker.on("click", function () {
        if (locationCarousel) locationCarousel.scrollToItem(r.id);
        openStopPopup(marker);
      });
    });

    /* ---- Pierwsze kliknięcie mapy włącza zoom kółkiem myszy (cicho,
       bez banera — chroni przed niezamierzonym przybliżaniem podczas
       scrollowania strony) ---- */

    mapEl.addEventListener("click", function () {
      map.scrollWheelZoom.enable();
    }, { once: true });

    /* ---- Geolokalizacja ---- */

    if (geoBtn && geoStatus) {
      geoBtn.addEventListener("click", function () {
        if (!("geolocation" in navigator)) {
          geoStatus.textContent = lang() === "pl"
            ? "Ta przeglądarka nie obsługuje geolokalizacji."
            : "This browser does not support geolocation.";
          return;
        }
        geoStatus.textContent = lang() === "pl" ? "Ustalanie pozycji…" : "Locating…";
        navigator.geolocation.getCurrentPosition(
          function (pos) {
            var here = [pos.coords.latitude, pos.coords.longitude];
            L.marker(here, { icon: userIcon(), keyboard: false, title: lang() === "pl" ? "Twoja pozycja" : "Your location" }).addTo(map);

            var nearest = null;
            var nearestDist = Infinity;
            items.forEach(function (r) {
              var d = haversineKm(here, r.wspolrzedne);
              if (d < nearestDist) { nearestDist = d; nearest = r; }
            });
            map.setView(here, 16);

            if (nearest) {
              var meters = Math.round(nearestDist * 1000 / 50) * 50;
              var distStr = meters < 1000 ? "ok. " + meters + " m" : "ok. " + (meters / 1000).toFixed(1) + " km";
              geoStatus.textContent = (lang() === "pl" ? "Najbliżej jesteś: " : "You are closest to: ") +
                nearest.tytul[lang()] + " (" + distStr + ")";
            }
          },
          function () {
            geoStatus.textContent = lang() === "pl"
              ? "Nie udało się ustalić pozycji. Możesz nadal korzystać z mapy i listy."
              : "Could not determine your location. You can still use the map and list.";
          },
          { enableHighAccuracy: true, timeout: 10000 }
        );
      });
    }
  }

  function renderListOnly(listEl) {
    if (!listEl || typeof RZEZBY === "undefined") return;
    var L_ = lang();
    var items = RZEZBY.slice().sort(function (a, b) { return a.nrTrasy - b.nrTrasy; });
    listEl.innerHTML = items.map(function (r) {
      var opis = (r.opisKrotki && r.opisKrotki[L_]) || "";
      return (
        '<li>' +
          '<a class="location-item" href="' + N.sculptureUrl(r, L_) + '">' +
            '<span class="location-dot-row">' +
              '<span class="location-dot" aria-hidden="true">' + r.nrTrasy + '</span>' +
            '</span>' +
            '<span class="location-card">' +
              '<span class="location-title">' + r.tytul[L_] + '</span>' +
              '<span class="location-desc">' + opis + '</span>' +
            '</span>' +
          '</a>' +
        '</li>'
      );
    }).join("");
    initLocationCarousel(listEl);
  }

  /* ------------------------------------------------------------------
   * Mini-mapa "Jak dojść" (podstrony rzeźb)
   * ------------------------------------------------------------------ */

  function initMiniMap() {
    var mapEl = document.getElementById("mini-map");
    var mapWrap = document.getElementById("mini-map-wrap");
    if (!mapEl || typeof RZEZBY === "undefined") return;

    var id = mapEl.getAttribute("data-rzezba-id");
    var rzezba = RZEZBY.find(function (r) { return r.id === id; });
    if (!rzezba) return;

    if (typeof L === "undefined") {
      showFallback(mapWrap);
      return;
    }

    var map = L.map(mapEl, { scrollWheelZoom: false }).setView(rzezba.wspolrzedne, 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);
    L.marker(rzezba.wspolrzedne, { icon: numberedIcon(rzezba.nrTrasy), keyboard: true }).addTo(map);

    var scrollHint = mapWrap ? mapWrap.querySelector(".map-scroll-hint") : null;
    if (scrollHint) {
      var enable = function () {
        map.scrollWheelZoom.enable();
        scrollHint.hidden = true;
      };
      scrollHint.addEventListener("click", enable);
      mapEl.addEventListener("click", enable, { once: true });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initWalkMap();
    initMiniMap();
  });
})();
