(function () {
  "use strict";

  var pills = document.querySelectorAll(".service .pill[data-service]");
  if (!pills.length) return;

  function setPill(el, color, bg, border, text) {
    el.style.color = color;
    el.style.background = bg;
    el.style.borderColor = border;
    el.innerHTML = '<span class="pdot"></span>' + text;
  }

  pills.forEach(function (el) {
    setPill(el, "var(--ok)", "rgba(92,185,138,0.10)", "rgba(92,185,138,0.35)", el.getAttribute("data-up"));
  });

  var list = Array.prototype.slice.call(pills);

  function loop() {
    var el = list[Math.floor(Math.random() * list.length)];
    setPill(el, "var(--accent)", "rgba(224,162,75,0.10)", "rgba(224,162,75,0.35)", el.getAttribute("data-checking") + "…");
    setTimeout(function () {
      setPill(el, "var(--ok)", "rgba(92,185,138,0.10)", "rgba(92,185,138,0.35)", el.getAttribute("data-up"));
      setTimeout(loop, 600 + Math.random() * 2600);
    }, 900 + Math.random() * 1000);
  }

  setTimeout(loop, 1000);
})();
