// Y: 二次元点击星星特效 — click anywhere to burst tiny pink/blue stars.
// Roll back: remove this file and its <script> line in _layouts/default.liquid.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var COLORS = ["#db2777", "#f472b6", "#f9a8d4", "#60a5fa", "#2f6fad"];
  // NEW UU: 星星池里混入樱花 ✿（低概率出现，模拟花瓣混在星光里）
  var GLYPHS = ["\u2726", "\u2727", "\u2605", "\u2726", "\u2727", "\u273f"]; // ✦ ✧ ★ ✦ ✧ ✿

  document.addEventListener("pointerdown", function (e) {
    if (e.button !== 0) return;
    // RR: clicking the homepage mascot avatar sets off a bigger burst.
    var isMascot = e.target.closest && e.target.closest(".post-title-avatar-button, .navbar-menu-avatar");
    var count = isMascot ? 9 : 3 + Math.floor(Math.random() * 2);
    for (var i = 0; i < count; i++) {
      // NEW WW: 随机错开每颗星星的出场（0–90ms），爆发更自然
      var delay = Math.random() * 90;
      (function (px, py, big) {
        setTimeout(function () {
          spawn(px, py, big);
        }, delay);
      })(e.clientX, e.clientY, isMascot);
    }
  });

  function spawn(x, y, big) {
    var el = document.createElement("span");
    el.className = "niji-click-star";
    el.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
    el.style.color = COLORS[(Math.random() * COLORS.length) | 0];
    el.style.left = x + "px";
    el.style.top = y + "px";
    // NEW VV: 吉祥物爆发的星星更大、飞得更远
    el.style.fontSize = (big ? 13 : 10) + Math.random() * (big ? 11 : 8) + "px";
    var angle = Math.random() * Math.PI * 2;
    var dist = (big ? 34 : 22) + Math.random() * (big ? 48 : 34);
    el.style.setProperty("--niji-dx", Math.cos(angle) * dist + "px");
    // Slight upward bias so the burst feels light.
    el.style.setProperty("--niji-dy", Math.sin(angle) * dist - 12 + "px");
    document.body.appendChild(el);
    el.addEventListener("animationend", function () {
      el.remove();
    });
  }
})();
