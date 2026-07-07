// Y: 二次元点击星星特效 — click anywhere to burst tiny pink/blue stars.
// 动画用 Web Animations API 驱动（而非 CSS keyframes）：生产构建的 CSS 压缩器
// 会删掉 calc() 里的空格导致表达式失效（星星缩成一坨），JS 驱动不受影响。
// Roll back: remove this file and its <script> line in _layouts/default.liquid.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var COLORS = ["#db2777", "#f472b6", "#f9a8d4", "#60a5fa", "#2f6fad"];
  // UU: 星星池里混入樱花 ✿（低概率出现，模拟花瓣混在星光里）
  var GLYPHS = ["\u2726", "\u2727", "\u2605", "\u2726", "\u2727", "\u273f"]; // ✦ ✧ ★ ✦ ✧ ✿

  document.addEventListener("pointerdown", function (e) {
    if (e.button !== 0) return;
    // RR: clicking the homepage mascot avatar sets off a bigger burst.
    var isMascot = e.target.closest && e.target.closest(".post-title-avatar-button, .navbar-menu-avatar");
    var count = isMascot ? 9 : 3 + Math.floor(Math.random() * 2);
    for (var i = 0; i < count; i++) {
      // WW: 随机错开每颗星星的出场（0–90ms），爆发更自然
      var delay = Math.random() * 90;
      (function (px, py, big) {
        setTimeout(function () {
          spawn(px, py, big);
        }, delay);
      })(e.clientX, e.clientY, isMascot);
    }
  });

  // NEW N2: 其他脚本可通过 niji:burst 事件在指定位置触发一次星星爆发
  // （目前用于主题切换按钮，见 theme.js）。
  document.addEventListener("niji:burst", function (e) {
    var d = (e && e.detail) || {};
    if (typeof d.x !== "number" || typeof d.y !== "number") return;
    for (var i = 0; i < 6; i++) {
      setTimeout(function () {
        spawn(d.x, d.y, false);
      }, Math.random() * 90);
    }
  });

  // NEW K3: 鼠标星尘拖尾 —— 移动时洒下细小星屑（仅鼠标指针，限流限量）
  var lastTrail = { x: -999, y: -999, t: 0 };
  document.addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    var now = Date.now();
    var dx = e.clientX - lastTrail.x;
    var dy = e.clientY - lastTrail.y;
    if (now - lastTrail.t < 90 || dx * dx + dy * dy < 2500) return;
    if (document.querySelectorAll(".niji-trail-star").length >= 8) return;
    lastTrail = { x: e.clientX, y: e.clientY, t: now };
    spawnTrail(e.clientX, e.clientY);
  });

  function spawnTrail(x, y) {
    var el = document.createElement("span");
    if (!el.animate) return;
    el.className = "niji-click-star niji-trail-star";
    el.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
    el.style.color = COLORS[(Math.random() * COLORS.length) | 0];
    el.style.left = x + Math.random() * 14 - 7 + "px";
    el.style.top = y + Math.random() * 14 - 7 + "px";
    el.style.fontSize = 6 + Math.random() * 5 + "px";
    document.body.appendChild(el);

    var driftX = Math.random() * 20 - 10;
    var driftY = -(6 + Math.random() * 14);
    var animation = el.animate(
      [
        { opacity: 0.85, transform: "translate(-50%, -50%) scale(0.7) rotate(0deg)" },
        {
          opacity: 0,
          transform: "translate(calc(-50% + " + driftX + "px), calc(-50% + " + driftY + "px)) scale(1) rotate(45deg)",
        },
      ],
      { duration: 520, easing: "ease-out", fill: "forwards" }
    );
    animation.onfinish = function () {
      el.remove();
    };
    setTimeout(function () {
      el.remove();
    }, 1200);
  }

  function spawn(x, y, big) {
    var el = document.createElement("span");
    if (!el.animate) return; // 不支持 WAAPI 的老浏览器直接跳过特效
    el.className = "niji-click-star";
    el.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
    el.style.color = COLORS[(Math.random() * COLORS.length) | 0];
    el.style.left = x + "px";
    el.style.top = y + "px";
    // VV: 吉祥物爆发的星星更大、飞得更远
    el.style.fontSize = (big ? 13 : 10) + Math.random() * (big ? 11 : 8) + "px";
    var angle = Math.random() * Math.PI * 2;
    var dist = (big ? 34 : 22) + Math.random() * (big ? 48 : 34);
    var dx = Math.cos(angle) * dist;
    // Slight upward bias so the burst feels light.
    var dy = Math.sin(angle) * dist - 12;
    document.body.appendChild(el);

    var animation = el.animate(
      [
        { opacity: 1, transform: "translate(-50%, -50%) scale(0.4) rotate(0deg)" },
        {
          opacity: 0,
          transform: "translate(calc(-50% + " + dx + "px), calc(-50% + " + dy + "px)) scale(1.1) rotate(90deg)",
        },
      ],
      { duration: 650, easing: "ease-out", fill: "forwards" }
    );
    animation.onfinish = function () {
      el.remove();
    };
    // 兜底清理，防止 onfinish 因页面切换等原因未触发
    setTimeout(function () {
      el.remove();
    }, 1500);
  }
})();
