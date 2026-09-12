/**
 * utils.js — Hàm tiện ích dùng chung
 * -----------------------------------------------------------------------------
 * Tạo phần tử DOM, icon, liên kết đã kiểm tra, sao chép vào clipboard, thông báo toast.
 */
const Utils = (() => {
  "use strict";

  const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);
  const TOAST_DURATION_MS = 2400;
  let toastTimer;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  /** Tạo phần tử DOM; văn bản luôn gán qua textContent để tránh chèn HTML ngoài ý muốn. */
  function createElement(tag, { className, text, attrs } = {}, children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    if (attrs) {
      Object.entries(attrs).forEach(([name, value]) => {
        if (value != null) node.setAttribute(name, value);
      });
    }
    children.forEach((child) => {
      if (child) node.append(child);
    });
    return node;
  }

  /** Tạo icon SVG từ bộ ICONS (js/icons.js). Tên không tồn tại sẽ dùng icon "link". */
  function createIcon(name, className = "icon") {
    const template = document.createElement("template");
    template.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      (ICONS[name] || ICONS.link) +
      "</svg>";
    const svg = template.content.firstElementChild;
    svg.setAttribute("class", className);
    return svg;
  }

  /** Chấp nhận #neo, đường dẫn tương đối hoặc giao thức an toàn; trả về null nếu không hợp lệ. */
  function safeUrl(url) {
    if (typeof url !== "string" || !url.trim()) return null;
    const value = url.trim();
    if (value.startsWith("#")) return value;
    const isRelative = !/^[a-z][a-z\d+.-]*:/i.test(value);
    if (isRelative) return value;
    try {
      return SAFE_PROTOCOLS.has(new URL(value).protocol) ? value : null;
    } catch {
      return null;
    }
  }

  /** Tạo thẻ <a> đã kiểm tra URL. Trang ngoài và file mở tab mới; #neo, mailto, tel mở tại chỗ. */
  function createLink(url, options = {}, children = []) {
    const href = safeUrl(url);
    if (!href) {
      console.warn("[Portfolio] Bỏ qua liên kết không hợp lệ:", url);
      return null;
    }
    const anchor = createElement("a", options, children);
    anchor.setAttribute("href", href);
    if (!/^(#|mailto:|tel:)/i.test(href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    return anchor;
  }

  /** "(+84) 327744194" → "tel:+84327744194" */
  const toTelHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;

  /** "Lê Quốc Việt" → "LV" (chữ cái đầu của từ đầu tiên và từ cuối cùng). */
  function getInitials(name = "") {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (!words.length) return "";
    const last = words.length > 1 ? words[words.length - 1][0] : "";
    return (words[0][0] + last).toLocaleUpperCase("vi");
  }

  /** Chèn điểm ngắt dòng <wbr> trước "@" và "/" để email, đường dẫn dài xuống dòng gọn gàng thay vì ngắt giữa chữ. */
  function withLineBreaks(text) {
    return text.split(/(?=[@/])/).flatMap((part, index) => (index ? [document.createElement("wbr"), part] : [part]));
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        /* Chuyển sang cách dự phòng bên dưới */
      }
    }
    // Dự phòng cho trình duyệt cũ hoặc ngữ cảnh không bảo mật
    const helper = createElement("textarea", { className: "clipboard-helper", attrs: { readonly: "", "aria-hidden": "true" } });
    helper.value = text;
    document.body.append(helper);
    helper.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    helper.remove();
    return copied;
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), TOAST_DURATION_MS);
  }

  return { $, $$, createElement, createIcon, createLink, toTelHref, getInitials, withLineBreaks, copyText, showToast };
})();
