/**
 * alt1/js/transcript-desktop.js — na desktopie (>=761px) transkrypcja ma być
 * zawsze widoczna obok playera, bez elementu <summary> do kliknięcia (patrz
 * alt1/css/style.css). Samo ukrycie <summary> i wymuszenie display:block na
 * .transcript-body przez CSS NIE wystarcza: nowoczesne przeglądarki chowają
 * zawartość zamkniętego <details> przez wewnętrzny mechanizm
 * content-visibility (pseudoelement ::details-content), niezależny od
 * zwykłego "display" dzieci. Jedyny niezawodny sposób to ustawienie
 * właściwości .open na true, gdy jesteśmy na desktopie.
 *
 * Bez JS: <details> zostaje domyślnie zamknięte (tak jak na mobile) - gorzej,
 * ale nie zepsute, w pełni klikalne.
 */
(function () {
  "use strict";

  var mq = window.matchMedia("(min-width: 761px)");

  function sync() {
    var isDesktop = mq.matches;
    document.querySelectorAll("details.transcript").forEach(function (d) {
      d.open = isDesktop;
    });
  }

  sync();
  if (mq.addEventListener) {
    mq.addEventListener("change", sync);
  } else if (mq.addListener) {
    mq.addListener(sync);
  }
})();
