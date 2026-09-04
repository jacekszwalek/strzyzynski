/**
 * js/map.js — mapa spaceru (Leaflet + kafelki OpenStreetMap, bez klucza API).
 *
 * Odpowiada za:
 *  - dużą mapę na stronie głównej (numerowane pinezki, trasa, lista pod mapą,
 *    dwukierunkowa synchronizacja, geolokalizacja, dystans/czas spaceru),
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

  function computeRouteStats(points) {
    var totalKm = 0;
    for (var i = 1; i < points.length; i++) {
      totalKm += haversineKm(points[i - 1], points[i]);
    }
    var minutes = Math.round((totalKm / 4) * 60); // ~4 km/h pieszo
    return { km: totalKm, minutes: minutes };
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
    var btnLabel = L_ === "pl" ? "Zobacz i posłuchaj" : "Watch and listen";
    return (
      '<img class="popup-img" src="' + img + '" alt="" width="220" height="165" loading="lazy">' +
      '<p class="popup-meta">' + r.nrTrasy + ". " + (rok ? rok : "") + "</p>" +
      '<p class="popup-title">' + r.tytul[L_] + "</p>" +
      '<a class="btn btn--block" href="' + href + '">' + btnLabel + "</a>"
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
   * Duża mapa spaceru (strona główna)
   * ------------------------------------------------------------------ */

  function initWalkMap() {
    var mapEl = document.getElementById("map");
    var mapWrap = document.getElementById("map-wrap");
    var listEl = document.getElementById("location-list");
    var metaEl = document.getElementById("map-meta");
    var geoBtn = document.getElementById("geolocate-btn");
    var geoStatus = document.getElementById("geolocate-status");
    var scrollHint = document.getElementById("map-scroll-hint");

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
        .bindPopup(popupHtml(r), { maxWidth: 280 });
      markers[r.id] = marker;
    });

    map.fitBounds(L.latLngBounds(points), { padding: [40, 40] });

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

    if (listEl) {
      var L_ = lang();
      listEl.innerHTML = items.map(function (r) {
        var opis = (r.opisKrotki && r.opisKrotki[L_]) || "";
        return (
          '<li>' +
            '<a class="location-item" href="' + N.sculptureUrl(r, L_) + '" data-rzezba-id="' + r.id + '">' +
              '<span class="tile-number" aria-hidden="true">' + r.nrTrasy + '</span>' +
              '<span class="location-text"><strong>' + r.tytul[L_] + '</strong>' + opis + '</span>' +
            '</a>' +
          '</li>'
        );
      }).join("");

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
          map.setView(r.wspolrzedne, Math.max(map.getZoom(), 17));
          marker.openPopup();
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
    });

    /* ---- Dystans i czas ---- */

    if (metaEl) {
      var stats = computeRouteStats(points);
      var L2 = lang();
      var distText = stats.km < 1
        ? Math.round(stats.km * 1000) + " m"
        : stats.km.toFixed(1).replace(".", L2 === "pl" ? "," : ".") + " km";
      var label = L2 === "pl"
        ? "Cała trasa: ok. " + distText + ", ok. " + stats.minutes + " min pieszo (szacunek, do potwierdzenia)"
        : "Whole route: approx. " + distText + ", approx. " + stats.minutes + " min on foot (estimate, to be confirmed)";
      metaEl.textContent = label;
    }

    /* ---- Kliknij, aby przybliżać (scrollWheelZoom) ---- */

    if (scrollHint) {
      var enableScroll = function () {
        map.scrollWheelZoom.enable();
        scrollHint.hidden = true;
      };
      scrollHint.addEventListener("click", enableScroll);
      mapEl.addEventListener("click", enableScroll, { once: true });
    }

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
            '<span class="tile-number" aria-hidden="true">' + r.nrTrasy + '</span>' +
            '<span class="location-text"><strong>' + r.tytul[L_] + '</strong>' + opis + '</span>' +
          '</a>' +
        '</li>'
      );
    }).join("");
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
