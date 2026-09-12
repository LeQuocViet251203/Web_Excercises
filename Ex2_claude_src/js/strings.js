/**
 * strings.js — Chữ của giao diện (nhãn nút, thông báo, mô tả trợ năng)
 * -----------------------------------------------------------------------------
 * Tách khỏi data.js: data.js chứa nội dung cá nhân, file này chứa chữ dùng chung của web app.
 * Nhãn tĩnh của các section nằm trực tiếp trong index.html.
 */
const STRINGS = {
  menuOpen: "Mở menu điều hướng",
  menuClose: "Đóng menu điều hướng",
  viewCv: "Xem CV",
  contact: "Liên hệ",
  copyEmail: "Sao chép email",
  showDetails: "Xem chi tiết",
  hideDetails: "Thu gọn",
  viewProject: "Xem dự án",
  coursework: "Môn học tiêu biểu",
  email: "Email",
  phone: "Điện thoại",
  cvLabel: "CV",
  cvValue: "Xem bản PDF",
  newTab: "mở trong tab mới",
  emailCopied: "Đã sao chép email",
  linkCopied: "Đã sao chép liên kết trang",
  copyFailed: "Không thể sao chép, vui lòng thử lại",
  avatarAlt: (name) => `Ảnh chân dung của ${name}`,
  currentRole: (role, organization) => `${role} tại ${organization}`,
  currentStudy: (degree, school) => `Đang học ${degree} tại ${school}`,
  pageTitle: (name, role) => [name, role].filter(Boolean).join(" — "),
  copyright: (year, name) => `© ${year} ${name}`,
  missingData: "Không tải được nội dung trang. Hãy kiểm tra các file trong thư mục js/.",
};
