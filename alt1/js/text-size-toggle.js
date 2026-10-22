(function () {
  "use strict";

  var compact = document.getElementById("text-size-compact");
  if (!compact) return;
  var toggle = compact.querySelector(".text-size-toggle");
  var panel = compact.querySelector(".text-size-switch");
  if (!toggle || !panel) return;

  function setExpanded(expanded) {
    compact.setAttribute("data-expanded", expanded ? "true" : "false");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggle.inert = expanded;
    panel.inert = !expanded;
    // Collapsed width comes from the stylesheet (var(--tap-min), which
    // scales with the page's font-size setting) - clearing the inline
    // style lets it take over again instead of freezing the width at
    // whatever it measured at load time.
    compact.style.width = expanded ? panel.scrollWidth + "px" : "";
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
