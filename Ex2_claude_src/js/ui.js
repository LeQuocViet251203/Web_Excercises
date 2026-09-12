/**
 * ui.js — Tương tác của web app
 * -----------------------------------------------------------------------------
 * Thanh điều hướng (tự tạo từ các section, menu trên màn hình nhỏ, đánh dấu mục đang xem),
 * trạng thái header khi cuộn, các nút ở footer (chia sẻ, lên đầu trang).
 */
const UI = (() => {
  "use strict";

  const { $, $$, createElement: el, createIcon: icon, copyText, showToast } = Utils;

  /** Section được coi là "đang xem" khi mép trên đi qua vị trí này (tỉ lệ chiều cao màn hình, tính dưới header). */
  const ACTIVE_LINE_RATIO = 0.3;

  /** Tạo mục điều hướng cho mọi section có data-nav-label và đang hiển thị. */
  function buildNavigation() {
    const navList = $("#nav-list");
    $$("main section[data-nav-label]")
      .filter((section) => !section.hidden)
      .forEach((section) => {
        const anchor = el("a", { className: "site-nav__link", text: section.dataset.navLabel, attrs: { href: `#${section.id}` } });
        navList.append(el("li", {}, [anchor]));
      });
    return $$(".site-nav__link", navList);
  }

  /** Menu thu gọn trên màn hình nhỏ: mở/đóng bằng nút, đóng khi chọn mục, nhấn Esc, bấm ra ngoài hoặc khi màn hình rộng ra. */
  function initMenu() {
    const header = $("#site-header");
    const toggle = $("#nav-toggle");
    const nav = $("#site-nav");

    const isOpen = () => header.classList.contains("is-menu-open");
    const setOpen = (open) => {
      header.classList.toggle("is-menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? STRINGS.menuClose : STRINGS.menuOpen);
      toggle.replaceChildren(icon(open ? "x" : "menu"));
    };

    setOpen(false);
    toggle.addEventListener("click", () => setOpen(!isOpen()));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (isOpen() && !header.contains(event.target)) setOpen(false);
    });
    // Nút menu bị ẩn bằng CSS ở bố cục desktop → đóng menu nếu đang mở
    window.addEventListener("resize", () => {
      if (isOpen() && getComputedStyle(toggle).display === "none") setOpen(false);
    });
  }

  /** Đổ bóng header khi cuộn và đánh dấu mục điều hướng của section đang xem. */
  function initScrollEffects(navLinks) {
    const header = $("#site-header");
    const sections = navLinks.map((anchor) => document.getElementById(anchor.hash.slice(1))).filter(Boolean);
    let frameRequested = false;

    const update = () => {
      frameRequested = false;
      header.classList.toggle("is-scrolled", window.scrollY > 0);

      const activeLine = header.offsetHeight + window.innerHeight * ACTIVE_LINE_RATIO;
      const scrolledToBottom =
        window.scrollY > 0 && Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2;

      let active = null;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activeLine) active = section;
      });
      if (scrolledToBottom) active = sections[sections.length - 1] || null;

      navLinks.forEach((anchor) => {
        if (active && anchor.hash === `#${active.id}`) anchor.setAttribute("aria-current", "location");
        else anchor.removeAttribute("aria-current");
      });
    };

    const requestUpdate = () => {
      if (frameRequested) return;
      frameRequested = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();
  }

  /** Nút ở footer: chia sẻ trang (Web Share API, dự phòng sao chép liên kết) và lên đầu trang. */
  function initFooterActions() {
    $("#back-to-top").prepend(icon("arrowUp"));

    const shareButton = $("#share-button");
    shareButton.prepend(icon("share"));
    shareButton.addEventListener("click", async () => {
      const url = window.location.href.split("#")[0];
      if (navigator.share) {
        try {
          await navigator.share({ title: document.title, url });
          return;
        } catch (error) {
          if (error.name === "AbortError") return; // Người dùng tự đóng hộp thoại chia sẻ
        }
      }
      const copied = await copyText(url);
      showToast(copied ? STRINGS.linkCopied : STRINGS.copyFailed);
    });
  }

  return { buildNavigation, initMenu, initScrollEffects, initFooterActions };
})();
