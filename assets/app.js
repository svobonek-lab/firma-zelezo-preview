(function () {
  "use strict";

  // Animated live status preview: randomly toggles a service to "connecting"
  // briefly to simulate live monitoring, then back to online.
  var pills = document.querySelectorAll(".status-pill[data-service]");
  var state = {};

  function setOnline(el) {
    el.classList.remove("off");
    el.innerHTML =
      '<span class="dot"></span><span data-live="up"></span>';
    var up = el.querySelector('[data-live="up"]');
    up.textContent = el.getAttribute("data-up");
  }

  function setBlip(el) {
    el.classList.add("off");
    el.innerHTML = '<span class="dot"></span><span data-live="up">' +
      el.getAttribute("data-checking") + "&#8230;</span>";
  }

  pills.forEach(function (el) {
    var keep = parseInt(el.getAttribute("data-interval") || 5000, 10);
    setOnline(el);
    state[el.getAttribute("data-service")] = { el: el, keep: keep };
  });

  function loop() {
    var keys = Object.keys(state);
    if (keys.length === 0) return;
    var k = keys[Math.floor(Math.random() * keys.length)];
    var s = state[k];
    var el = s.el;
    setBlip(el);
    setTimeout(function () {
      setOnline(el);
      setTimeout(loop, 400 + Math.random() * 2600);
    }, 700 + Math.random() * 900);
  }

  if (Object.keys(state).length > 0) {
    setTimeout(loop, 900);
  }
})();
