/* Gravity landing page — CTA interaction + simple acquisition-metric simulation (Lab 12 Task 6).
   Counters live in the visitor's own localStorage only — no personal data is collected (see on-page note).
   These simulate AM-01 (views), AM-02 (CTA clicks), AM-05 (interest signups) from /docs/acquisition-metrics.md. */

"use strict";

function bump(key) {
  var n = parseInt(localStorage.getItem(key) || "0", 10) + 1;
  localStorage.setItem(key, String(n));
  return n;
}

document.addEventListener("DOMContentLoaded", function () {
  /* AM-01: page view */
  bump("gravityLp_views");

  /* AM-02: demo CTA clicks (both buttons) */
  ["cta-demo", "cta-demo2"].forEach(function (id) {
    var a = document.getElementById(id);
    if (a) { a.addEventListener("click", function () { bump("gravityLp_ctaClicks"); }); }
  });

  /* AM-05: interest counter ("count me in") */
  var btn = document.getElementById("interest-btn");
  var msg = document.getElementById("interest-msg");
  if (btn) {
    btn.addEventListener("click", function () {
      var n = bump("gravityLp_interest");
      btn.disabled = true;
      btn.textContent = "Thanks — you're counted!";
      msg.textContent = "Interest recorded in this browser (demo counter: " + n + "). No personal data was collected.";
      msg.classList.remove("hidden");
    });
  }
});
