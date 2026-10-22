(function () {
  "use strict";

  var compact = document.getElementById("text-size-compact");
  if (!compact) return;
  var toggle = compact.querySelector(".text-size-toggle");
  var panel = compact.querySelector(".text-size-switch");
  if (!toggle || !panel) return;

  // The collapsible "Aa" pill only exists visually on mobile (see the
  // @media (max-width: 760px) rules in style.css). On desktop
  // .text-size-compact is "display:contents" and the real A/A+/A++
  // buttons are always shown inline - they must stay fully interactive
  // there, so none of the inert/width logic below may run outside the
  // mobile breakpoint.
  var mq = window.matchMedia("(max-width: 760px)");

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

  function syncToViewport() {
    if (mq.matches) {
      setExpanded(false);
    } else {
      toggle.inert = true;
      toggle.setAttribute("aria-expanded", "false");
      panel.inert = false;
      compact.style.width = "";
      compact.setAttribute("data-expanded", "false");
    }
  }

  syncToViewport();
  mq.addEventListener("change", syncToViewport);

  toggle.addEventListener("click", function () {
    if (!mq.matches) return;
    setExpanded(compact.getAttribute("data-expanded") !== "true");
  });

  panel.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (mq.matches) setExpanded(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (mq.matches && e.key === "Escape" && compact.getAttribute("data-expanded") === "true") {
      setExpanded(false);
      toggle.focus();
    }
  });
})();
