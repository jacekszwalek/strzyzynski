/**
 * alt1/js/nav.js — zwijane menu nawigacyjne na telefonie.
 *
 * Postępujące wzmocnienie: bez JS menu jest w pełni widoczne (pionowa
 * lista, patrz alt1/css/style.css) - w pełni funkcjonalne, tylko zajmuje
 * więcej miejsca. Z JS-em dodajemy klasę "js" na <html>, która w CSS
 * odsłania przycisk-hamburger. Menu domyślnie jest rozwinięte (tak jak
 * bez JS) - hamburger pozwala je zwinąć, gdy zawadza.
 */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    nav.setAttribute("data-collapsed", expanded ? "false" : "true");
  }

  setExpanded(true);

  toggle.addEventListener("click", function () {
    setExpanded(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setExpanded(false);
      toggle.focus();
    }
  });
})();
