(function () {
  "use strict";

  var compact = document.getElementById("text-size-compact");
  if (!compact) return;
  var toggle = compact.querySelector(".text-size-toggle");
  var panel = compact.querySelector(".text-size-switch");
  if (!toggle || !panel) return;

  var collapsedWidth = compact.getBoundingClientRect().width || 36;

  function setExpanded(expanded) {
    compact.setAttribute("data-expanded", expanded ? "true" : "false");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggle.inert = expanded;
    panel.inert = !expanded;
    compact.style.width = (expanded ? panel.scrollWidth : collapsedWidth) + "px";
  }

  setExpanded(false);

  toggle.addEventListener("click", function () {
    setExpanded(compact.getAttribute("data-expanded") !== "true");
  });

  panel.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setExpanded(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && compact.getAttribute("data-expanded") === "true") {
      setExpanded(false);
      toggle.focus();
    }
  });
})();
