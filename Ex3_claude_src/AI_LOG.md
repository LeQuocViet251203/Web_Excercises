# AI LOG - DỰ ÁN FOODGO LANDING PAGE

## Vòng 1: Khung cấu trúc (Wireframe & Semantic Content)

---

### Tương tác #1: Khởi tạo toàn bộ khung cấu trúc Landing Page

- **Prompt:**
  > "Xây dựng Landing Page sản phẩm/dịch vụ – Vòng 1: Khung cấu trúc..."
- **Kết quả từ AI:**
  - Tạo cấu trúc file `index.html` với đầy đủ 8 section chuẩn semantic HTML5.
  - Tạo file `style.css` giải quyết bố cục dạng wireframe (reset, container, CSS Grid, Flexbox cơ bản).
- **Chỉnh sửa:**
  1. Đổi danh sách bước trong "Cách hoạt động" từ thẻ `<ul>` sang `<ol>`.
  2. Bổ sung `aria-label` và `aria-hidden` cho các icon.
- **Lý giải:**
  - Đảm bảo đúng ngữ nghĩa workflow và chuẩn Accessibility.

---

## Vòng 2: Styling & Màu sắc (UI Design & Responsive System)

---

### Tương tác #2: Nâng cấp toàn diện giao diện, Typography, Bảng màu và Responsive

- **Prompt:**
  > "Vòng 2: Styling & màu sắc..."
- **Kết quả từ AI:**
  - Thiết lập design tokens CSS Variables: `--primary: #FF5238`, `--secondary: #1F2937`, surfaces sáng sủa và footer tối sang trọng.
  - Nhập font Google `Plus Jakarta Sans`.
  - Thiết lập lưới Grid 3-4 cột thích ứng sang 2 cột (Tablet) và 1 cột (Mobile).
- **Chỉnh sửa:**
  1. Bổ sung floating badge trên Hero và tag nhãn.
  2. Ẩn menu chữ trên mobile để chống tràn ngang.
- **Lý giải:**
  - Tối ưu tính thẩm mỹ và ngăn lỗi horizontal overflow.

---

## Vòng 3: Chi tiết & Polish (Refinement & Micro-interactions)

---

### Tương tác #3: Tinh chỉnh Spacing, Alignment, Micro-interactions, Accessibility & Hiệu suất

- **Prompt:**
  > "Vòng 3: Chi tiết & Polish
  > Tiếp tục phát triển source code hiện tại.
  > Ở vòng này, hãy tập trung vào việc tinh chỉnh và polish giao diện hiện tại, nhằm đưa website từ trạng thái đã hoàn thiện về layout và styling thành một giao diện có cảm giác chuyên nghiệp, cân đối và được chăm chút kỹ lưỡng.
  > Không xây dựng lại website từ đầu và không thay đổi cấu trúc hoặc nội dung chính nếu không cần thiết..."

- **Kết quả từ AI:**
  - **Spacing & Alignment:**
    - Chuẩn hóa nhịp điệu chiều dọc (vertical rhythm) với biến `--section-space-desktop: 90px`, `--section-space-tablet: 68px`, `--section-space-mobile: 48px`.
    - Căn chỉnh thẳng hàng baseline giá món ăn (`.dish-price`) và nút bấm (`.btn-sm`) bằng `margin-top: auto` trong thẻ Flex column.
    - Căn bằng chiều cao tất cả các card trong cùng hàng (Features, Dishes, Steps, About stats) bằng `align-items: stretch`.
  - **Typography Polish:**
    - Áp dụng `font-size: clamp()` cho các tiêu đề chính `H1`, `H2` và CTA title giúp co giãn mượt mà theo kích cỡ viewport mà không bị rớt chữ đơn lẻ hay ngắt dòng thiếu cân đối.
    - Tinh chỉnh letter-spacing: `-0.03em` cho heading lớn tạo cảm giác hiện đại, `0.09em` cho các nhãn `section-tag`.
    - Bổ sung `max-width: 540px` cho đoạn văn bản Hero để chiều dài dòng không quá 75 ký tự, giúp mắt người đọc không bị mỏi.
  - **Interactive States & Micro-interactions:**
    - Toàn bộ button (`.btn-primary`, `.btn-secondary`, `.btn-white`) được bổ sung 4 trạng thái: Default, `:hover` (nâng nhẹ -2px kèm shadow tỏa ấm), `:active` (nhấn chìm), `:focus-visible` (vòng nét đứt 2px bảo đảm chuẩn tiếp cận Accessibility A11y).
    - Thẻ điều hướng Navigation có gạch chân viền mượt (`::after` width từ 0% lên 100%).
    - Ảnh món ăn (`.dish-card`) có hiệu ứng zoom nhẹ (`transform: scale(1.05)`) khi hover kèm bóng đổ sâu `--shadow-lg`.
    - Floating tag ở Hero có hiệu ứng dao động nhẹ (`@keyframes floatSubtle`) tạo sức sống cho phần hình ảnh.
  - **Subtle Consistency & Visual Hierarchy:**
    - Thống nhất toàn bộ hệ thống bán kính bo góc: thẻ bài `--radius-md: 14px`, nút bấm & pill badge `--radius-full: 9999px`, khung ảnh chính `--radius-xl: 28px`.
    - Điều chỉnh màu nền Hero dạng `radial-gradient` ấm áp, tương phản dịu nhẹ với nền trang `#FAFAFB`.
    - Hệ thống đổ bóng (Shadows) được phân cấp từ `--shadow-xs` đến `--shadow-lg` và `--shadow-hero` với độ trong suốt tinh tế (rgba(15, 23, 42, 0.04 - 0.1)).
  - **Mobile & Touch Polish:**
    - Đặt `min-height: 48px` cho toàn bộ các nút bấm trên Mobile để đáp ứng chuẩn diện tích ngón tay chạm (Touch Target Guidelines của Apple & Google).
    - Căn chỉnh lại padding container mobile thành `20px`, xử lý triệt để khoảng cách viền màn hình, không bị cấn sát mép.

- **Chỉnh sửa:**
  1. *HTML:* Bổ sung thẻ `<meta name="description">` chuẩn SEO; thêm các thuộc tính `aria-hidden="true"` vào tất cả icon trang trí; bổ sung `aria-label="Trang chủ FoodGo"` cho logo.
  2. *CSS:* Loại bỏ pseudo-element nối bước cũ còn thô, thay thế bằng hiệu ứng hover tương tác scale trên số thứ tự `.step-number` và card elevation; bổ sung bộ timing function `cubic-bezier(0.16, 1, 0.3, 1)` cho mọi transition để chuyển động mượt mà tự nhiên nhất.

- **Lý giải:**
  - Không thêm bất kỳ thư viện JS bên ngoài nào, giữ mã nguồn 100% Native CSS nhẹ và tối ưu hiệu suất tải trang cao nhất (Performance-friendly).
  - Từng chi tiết nhỏ về micro-interaction và alignment kết hợp tạo nên trải nghiệm tổng thể hoàn thiện (polished), mang dáng dấp của sản phẩm thương mại hoàn chỉnh.
