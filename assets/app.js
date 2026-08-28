(function () {
  "use strict";

  // Animated live-preview: each service briefly shows a "test" blip
  // then returns to "online", simulating continuous monitoring.
  var pills = document.querySelectorAll(".status-pill[data-service]");
  if (!pills.length) return;

  function dot(color) {
    return '<span class="dot" style="background:' + color + ";box-shadow:0 0 6px " + color + '"></span>';
  }

  function render(el, color, text) {
    el.innerHTML = dot(color) + "<span>" + text + "</span>";
    el.style.color = color;
    el.style.background = "rgba(45,212,191,0.08)";
    el.style.borderColor = color;
  }

  pills.forEach(function (el) {
    render(el, "var(--teal)", el.getAttribute("data-up"));
  });
  var services = Array.prototype.slice.call(pills);

  function loop() {
    var el = services[Math.floor(Math.random() * services.length)];
    var checking = el.getAttribute("data-checking");
    render(el, "var(--yellow)", checking + "…");
    setTimeout(function () {
      render(el, "var(--teal)", el.getAttribute("data-up"));
      setTimeout(loop, 500 + Math.random() * 2400);
    }, 800 + Math.random() * 900);
  }

  setTimeout(loop, 900);
})();
