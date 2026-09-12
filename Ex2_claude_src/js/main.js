/**
 * main.js — Điểm khởi chạy của web app
 * -----------------------------------------------------------------------------
 * Thứ tự script (xem index.html): icons → strings → data → utils → render → ui → main.
 * File này không chứa nội dung cá nhân — muốn cập nhật nội dung, hãy sửa js/data.js.
 */
(function () {
  "use strict";

  const dependencies = {
    ICONS: typeof ICONS,
    STRINGS: typeof STRINGS,
    PROFILE: typeof PROFILE,
    Utils: typeof Utils,
    Render: typeof Render,
    UI: typeof UI,
  };
  const missing = Object.keys(dependencies).filter((name) => dependencies[name] === "undefined");

  if (missing.length) {
    console.error(`[Portfolio] Thiếu: ${missing.join(", ")}`);
    document.getElementById("main").textContent =
      dependencies.STRINGS === "undefined" ? "Không tải được nội dung trang." : STRINGS.missingData;
    return;
  }

  Render.renderAll(PROFILE);

  const navLinks = UI.buildNavigation();
  UI.initMenu();
  UI.initScrollEffects(navLinks);
  UI.initFooterActions();

  // Nội dung được tạo sau khi trang tải: cuộn lại tới #neo trên URL (nếu có)
  if (window.location.hash) {
    document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
  }
})();
