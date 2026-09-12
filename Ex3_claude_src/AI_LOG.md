# Nhật ký Vibe Coding - Claude Sonnet 5

## Bước 1 – Khung cấu trúc HTML cho Landing Page FoodGo (Vòng 1)

### 1. Prompt

> ```text
> # Xây dựng Landing Page sản phẩm/dịch vụ – Vòng 1: Khung cấu trúc
>
> ## 1. Mục tiêu
>
> Xây dựng một **landing page** cho dịch vụ giao đồ ăn **FoodGo**.
>
> FoodGo là một dịch vụ giúp người dùng **khám phá món ăn, đặt đồ ăn từ các nhà hàng và nhận món ăn được giao tận nơi**.
>
> Landing page cần có cấu trúc phù hợp với một dịch vụ giao đồ ăn thực tế, có khả năng giới thiệu rõ ràng dịch vụ, các lợi ích chính và hướng người dùng đến hành động đặt món.
>
> Ở **Vòng 1**, chỉ tập trung vào việc xây dựng **khung cấu trúc HTML và nội dung tổng thể** của landing page.
>
> Chưa cần tập trung vào việc hoàn thiện màu sắc, typography, animation hoặc các hiệu ứng giao diện chi tiết. Những phần này sẽ được xử lý ở các vòng tiếp theo.
>
> ## 2. Nội dung và cấu trúc cần có
>
> Landing page cần có cấu trúc rõ ràng, tối thiểu bao gồm các khu vực sau:
>
> ### Header / Navigation
>
> Bao gồm:
>
> * Logo hoặc tên thương hiệu **FoodGo**
> * Các liên kết điều hướng đến những phần chính của trang
> * Nút Call to Action phù hợp, chẳng hạn **"Đặt món ngay"**
>
> ### Hero Section
>
> Bao gồm:
>
> * Tên thương hiệu **FoodGo**
> * Tiêu đề chính nổi bật, thể hiện giá trị của dịch vụ
> * Mô tả ngắn về dịch vụ giao đồ ăn
> * Thông điệp nhấn mạnh sự tiện lợi và nhanh chóng
> * Nút Call to Action, chẳng hạn **"Đặt món ngay"**
> * Khu vực dành cho hình ảnh / minh họa món ăn
>
> Hero section cần giúp người dùng hiểu ngay **FoodGo là gì và tại sao họ nên sử dụng dịch vụ**.
>
> ### Giới thiệu dịch vụ
>
> Trình bày:
>
> * FoodGo là dịch vụ gì?
> * Người dùng có thể làm gì với FoodGo?
> * Dịch vụ giải quyết vấn đề gì?
> * Đối tượng người dùng hướng đến
> * Những giá trị chính mà FoodGo mang lại
>
> ### Tính năng / lợi ích
>
> Tạo một khu vực để giới thiệu các tính năng hoặc lợi ích nổi bật của FoodGo.
>
> Có thể sử dụng card hoặc danh sách để trình bày, ví dụ:
>
> * 🍔 Đa dạng món ăn và nhà hàng
> * ⚡ Giao hàng nhanh chóng
> * 📍 Theo dõi đơn hàng
> * 💳 Thanh toán tiện lợi
> * 🎁 Ưu đãi và khuyến mãi
> * ⭐ Đánh giá và lựa chọn nhà hàng
>
> Các tính năng có thể được điều chỉnh để phù hợp với dịch vụ.
>
> ### Các món ăn / nhà hàng nổi bật
>
> Tạo một khu vực giới thiệu một số món ăn hoặc nhà hàng nổi bật trên FoodGo.
>
> Mỗi item có thể bao gồm:
>
> * Hình ảnh món ăn
> * Tên món ăn
> * Tên nhà hàng
> * Giá
> * Thông tin ngắn nếu phù hợp
> * Nút hoặc liên kết để đặt món
>
> Sử dụng nội dung demo để tạo cảm giác giống một dịch vụ giao đồ ăn thực tế.
>
> ### Cách hoạt động
>
> Tạo một khu vực giải thích ngắn gọn cách người dùng sử dụng FoodGo.
>
> Có thể trình bày theo các bước:
>
> 1. Chọn món ăn hoặc nhà hàng
> 2. Thêm món vào đơn hàng
> 3. Xác nhận địa chỉ và thanh toán
> 4. Theo dõi đơn hàng và nhận đồ ăn
>
> ### Call to Action
>
> Tạo một khu vực kêu gọi người dùng thực hiện hành động chính.
>
> Ví dụ:
>
> **"Đói rồi? Đặt món ngay cùng FoodGo!"**
>
> Kèm theo nút Call to Action phù hợp.
>
> ### Footer
>
> Bao gồm:
>
> * Tên thương hiệu **FoodGo**
> * Thông tin liên hệ nếu cần
> * Các liên kết liên quan
> * Các liên kết mạng xã hội nếu phù hợp
> * Thông tin bản quyền nếu cần
>
> ## 3. Yêu cầu HTML ở Vòng 1
>
> Ở vòng này, tập trung chủ yếu vào **cấu trúc HTML semantic và bố cục nội dung**.
>
> Ưu tiên sử dụng các thẻ HTML semantic phù hợp như:
>
> * `<header>`
> * `<nav>`
> * `<main>`
> * `<section>`
> * `<article>`
> * `<footer>`
>
> Các section cần được tổ chức rõ ràng và có cấu trúc hợp lý để thuận tiện cho việc styling ở các vòng tiếp theo.
>
> Mỗi khu vực nên có:
>
> * Heading phù hợp
> * Nội dung mô tả
> * Các thành phần cần thiết cho section đó
> * Class / ID có tên rõ ràng và có ý nghĩa
>
> Không cần tạo CSS phức tạp ở vòng này.
>
> ## 4. Yêu cầu kỹ thuật
>
> * Mã nguồn phải đầy đủ và có thể chạy được.
> * Code được tổ chức rõ ràng, dễ đọc và dễ chỉnh sửa.
> * **Chia file theo đúng mục đích**, đặc biệt:
>
>   * HTML cho cấu trúc nội dung
>   * CSS cho giao diện
>   * JavaScript cho các tương tác nếu cần
> * Không dồn toàn bộ code vào một file nếu không cần thiết.
> * Sử dụng các class / ID có tên dễ hiểu và nhất quán.
> * Các thông tin về FoodGo có thể sử dụng nội dung demo và hard-code khi cần thiết.
> * Không cần xây dựng backend hoặc các chức năng phức tạp.
> * JavaScript chỉ cần được tạo nếu có tương tác thực sự cần thiết ở giai đoạn này.
>
> ## 5. Tài nguyên
>
> Người dùng đã tạo thư mục **`res/`** để chứa các tài nguyên có thể sử dụng cho website, chẳng hạn như:
>
> * Hình ảnh
> * Logo
> * Icon
> * Hình ảnh món ăn
> * Tài liệu tham khảo
> * Các tài nguyên khác
>
> Nếu cần sử dụng tài nguyên có sẵn, ưu tiên sử dụng các file trong **`res/`**.
>
> Nếu chưa có tài nguyên phù hợp, có thể sử dụng placeholder để xây dựng cấu trúc trước. Không cần dành quá nhiều thời gian cho việc lựa chọn hoặc xử lý hình ảnh ở Vòng 1.
>
> ## 6. Giới hạn của Vòng 1
>
> Đây là **Vòng 1 – Khung cấu trúc**.
>
> Chỉ tập trung vào:
>
> **HTML layout tổng thể → cấu trúc section → nội dung → semantic HTML → khả năng mở rộng cho các vòng tiếp theo.**
>
> Chưa cần tập trung vào:
>
> * Thiết kế màu sắc chi tiết
> * Typography nâng cao
> * Animation
> * Hover effect
> * Visual polish
> * Spacing tinh chỉnh
> * Responsive nâng cao
> * Các hiệu ứng UI phức tạp
>
> Các vấn đề trên sẽ được xử lý và tinh chỉnh ở những vòng tiếp theo dựa trên kết quả thực tế của Vòng 1.
> ```

### 2. Kết quả từ AI

_Ghi chú: mục "AI đã tạo / đề xuất", "Các file…" và "Ghi nhận kỹ thuật từ AI" do AI tự ghi lại để mô tả những gì đã tạo và số liệu đo được khi kiểm tra — không phải đánh giá chất lượng. Mục "Kết quả đạt được" và "Screenshot" do người dùng tự ghi nhận._

- AI đã tạo / đề xuất:
  - **`res/` hiện đang trống** → chưa có tài nguyên (ảnh, logo, icon) sẵn có để dùng; toàn bộ hình ảnh trong Vòng 1 dùng placeholder dạng khối viền nét đứt kèm nhãn mô tả (ví dụ "Hình ảnh minh họa món ăn", "Hình ảnh món ăn"), chưa dùng ảnh thật.
  - **Cấu trúc trang** (desktop là bố cục gốc, theo đúng 8 khu vực yêu cầu):
    - `<header>`: logo "FoodGo", `<nav>` với 5 liên kết đến các section, nút CTA "Đặt món ngay".
    - `<main>` gồm các `<section>` có id/class riêng: `#hero`, `#gioi-thieu`, `#tinh-nang`, `#mon-an-noi-bat`, `#cach-hoat-dong`, `#cta`.
      - Hero: brand tag, tiêu đề, mô tả, thông điệp nhấn mạnh tốc độ/tiện lợi, nút CTA, khối placeholder hình ảnh.
      - Giới thiệu dịch vụ: đoạn dẫn nhập + 4 khối (FoodGo là gì / làm được gì / dành cho ai / giá trị mang lại) dùng `<article>`.
      - Tính năng: 6 feature card (🍔⚡📍💳🎁⭐) đúng theo gợi ý trong prompt, dùng `<ul>/<li>`.
      - Món ăn nổi bật: 4 `<article>` demo (Phở bò tái, Cơm gà xối mỡ, Pizza hải sản, Trà sữa trân châu) — mỗi thẻ có ảnh placeholder, tên món, tên nhà hàng, giá, mô tả ngắn, nút "Đặt món".
      - Cách hoạt động: `<ol>` 4 bước đúng theo prompt.
      - Call to action: heading đúng nguyên văn "Đói rồi? Đặt món ngay cùng FoodGo!" + nút CTA lớn.
    - `<footer>`: tên thương hiệu, mô tả ngắn, 3 cột liên kết (Liên kết trang / Liên hệ / Mạng xã hội) + dòng bản quyền.
  - **CSS (`css/style.css`)**: chỉ ở mức tối thiểu để xem được bố cục (reset cơ bản, container, flex cho header/hero, grid cho các khối 2/3/4 cột, khung placeholder ảnh) — không có màu sắc, typography, animation hay hover effect theo đúng giới hạn Vòng 1.
  - Không tạo file JavaScript: Vòng 1 không có tương tác nào thực sự cần thiết (menu mobile, slider, v.v. chưa yêu cầu), đúng theo "JavaScript chỉ cần được tạo nếu có tương tác thực sự cần thiết".
- Các file hoặc thành phần đã tạo / thay đổi:

  | File | Trạng thái | Vai trò |
  |---|---|---|
  | `index.html` | Mới | Toàn bộ khung HTML semantic của landing page |
  | `css/style.css` | Mới | CSS tối thiểu cho bố cục (chưa polish) |
  | `AI_LOG.md` | Mới | Nhật ký Vibe Coding — Bước 1 |

- Ghi nhận kỹ thuật từ AI (kiểm tra bằng Chrome, cửa sổ ~1440px):
  - Đã chạy `python3 -m http.server` cục bộ và mở `index.html` trong Chrome để xem trực quan; chụp ảnh màn hình lần lượt: header + hero, giới thiệu + tính năng, món ăn nổi bật, CTA + footer.
  - Tất cả 8 khu vực yêu cầu đều hiển thị đúng thứ tự, không bị vỡ layout ở độ rộng ~1440px; các khối placeholder ảnh, grid 2/3/4 cột và footer 4 cột hiển thị đúng như CSS định nghĩa.
  - Chưa kiểm tra: độ rộng mobile/tablet (nằm ngoài phạm vi Vòng 1), console errors (trang tĩnh không có JS nên không có gì để log), trình duyệt khác Chrome.
- Kết quả đạt được:
  [Người dùng tự ghi nhận — những gì AI làm đúng / chưa đúng, vấn đề mới phát sinh, phần cần tiếp tục chỉnh sửa]
- Screenshot / Code / Mô tả kết quả:
  [Người dùng tự bổ sung]

### 3. Chỉnh sửa
- Những phần đã thay đổi:
- Những phần đã bổ sung:
- Những phần đã loại bỏ:
- Những phần người dùng tự sửa thủ công:
  [Người dùng tự ghi]

### 4. Lý giải
- Tại sao cần thực hiện những thay đổi trên?
- Những thay đổi này cải thiện giao diện như thế nào?
- Những thay đổi này cải thiện chức năng hoặc trải nghiệm người dùng như thế nào?
- Những thay đổi này cải thiện chất lượng hoặc khả năng bảo trì của code như thế nào?
  [Người dùng tự ghi]

---

## Bước 2 – Styling, màu sắc, typography & responsive (Vòng 2)

### 1. Prompt

> ```text
> # Vòng 2: Styling & màu sắc
>
> Tiếp tục phát triển **source code hiện tại của FoodGo** từ Vòng 1.
>
> Ở vòng này, **không xây dựng lại cấu trúc website và không thay đổi nội dung chính đã có**. Hãy tập trung vào việc thiết kế giao diện bằng CSS để biến phiên bản hiện tại thành một landing page có giao diện **hiện đại, chuyên nghiệp, nhất quán và responsive**.
>
> ## 1. Visual Style
>
> Thiết kế FoodGo theo phong cách:
>
> * Hiện đại
> * Thân thiện
> * Năng động
> * Tươi sáng
> * Phù hợp với dịch vụ giao đồ ăn
> * Tạo cảm giác tiện lợi và hấp dẫn
>
> Giao diện cần có **visual identity thống nhất** từ Header đến Footer.
>
> Không sử dụng quá nhiều màu hoặc hiệu ứng không cần thiết.
>
> ## 2. Color Palette
>
> Xây dựng một hệ thống màu sắc nhất quán cho toàn bộ website.
>
> Cần xác định rõ:
>
> * Primary color
> * Secondary/accent color
> * Background
> * Surface/card
> * Primary text
> * Secondary text
> * Border/muted color
> * CTA color
>
> CTA và các thành phần quan trọng cần có độ tương phản đủ tốt để dễ nhận biết.
>
> Ưu tiên sử dụng CSS variables để quản lý các màu dùng chung.
>
> ## 3. Typography
>
> Thiết lập typography rõ ràng:
>
> * Font phù hợp với food delivery service.
> * Heading nổi bật.
> * Body text dễ đọc.
> * Button/CTA text rõ ràng.
> * Hierarchy rõ ràng giữa các cấp heading.
> * Line-height và font-size hợp lý.
>
> Typography phải hoạt động tốt trên desktop, tablet và mobile.
>
> ## 4. Layout & Spacing
>
> Cải thiện bố cục hiện tại bằng:
>
> * Container có `max-width` hợp lý.
> * Grid/Flexbox phù hợp.
> * Spacing nhất quán.
> * Alignment rõ ràng.
> * Khoảng cách hợp lý giữa các section.
> * Padding/margin phù hợp với từng viewport.
>
> Không để website quá chật trên màn hình nhỏ hoặc quá dàn trải trên desktop.
>
> ## 5. Component Styling
>
> Styling cho **các component đã có trong source hiện tại**, đặc biệt:
>
> * Header / Navigation
> * Hero
> * Feature cards
> * Food / Restaurant cards
> * How It Works
> * CTA
> * Footer
> * Buttons
> * Images
>
> Không tự ý thêm hoặc xóa các section lớn nếu không thực sự cần thiết.
>
> Các card cần có visual hierarchy rõ ràng, spacing nhất quán và kích thước hợp lý.
>
> Các button cần dễ nhận biết và phù hợp với vai trò của chúng.
>
> ## 6. Hero Styling
>
> Hero cần trở thành khu vực visual nổi bật nhất của trang.
>
> Cải thiện:
>
> * Typography
> * Text hierarchy
> * CTA
> * Hình ảnh
> * Khoảng cách
> * Alignment
> * Tỷ lệ giữa text và visual
>
> Đảm bảo Hero truyền tải được thông tin hiện tại một cách rõ ràng mà không cần thay đổi nội dung.
>
> ## 7. Responsive Design
>
> Website phải hiển thị tốt trên **ba nhóm thiết bị chính**:
>
> ### Desktop
>
> * Tận dụng tốt không gian ngang.
> * Navigation hiển thị rõ ràng.
> * Hero có thể sử dụng layout nhiều cột.
> * Cards có thể hiển thị nhiều cột.
> * Nội dung được giới hạn bằng `max-width`.
> * Không để layout bị kéo quá rộng trên màn hình lớn.
>
> ### Tablet
>
> * Tự động điều chỉnh layout theo chiều rộng.
> * Giảm số lượng cột khi cần.
> * Hero và cards vẫn giữ được visual hierarchy.
> * Navigation không bị overflow.
> * Typography và spacing được điều chỉnh phù hợp.
>
> ### iPhone / Mobile
>
> * Không có horizontal scrolling ngoài ý muốn.
> * Navigation phải phù hợp với màn hình nhỏ.
> * Hero có thể chuyển thành layout một cột.
> * Cards chuyển sang số cột phù hợp, thường là một cột.
> * Buttons đủ lớn để dễ thao tác bằng ngón tay.
> * Text không bị overflow hoặc cắt.
> * Images không vượt khỏi container.
> * Padding/margin được giảm hợp lý.
> * Footer và tất cả các section đều phải sử dụng được trên mobile.
>
> ### Nguyên tắc
>
> Không tạo ba phiên bản website riêng biệt.
>
> Hãy xây dựng **một responsive layout duy nhất**, sử dụng:
>
> * CSS Grid
> * Flexbox
> * Relative units
> * `max-width`
> * Responsive sizing
> * Media queries khi cần
>
> Website phải chuyển đổi tự nhiên:
>
> **Desktop → Tablet → iPhone/Mobile**
>
> và đảm bảo:
>
> **Không vỡ layout → Không overflow → Không mất nội dung → Dễ đọc → Dễ thao tác.**
>
> ## 8. CSS Code Quality
>
> Tiếp tục sử dụng cấu trúc file hiện tại.
>
> * Giữ CSS trong file CSS riêng nếu project hiện tại đã tổ chức như vậy.
> * Không đưa toàn bộ CSS inline vào HTML.
> * Giữ class names rõ ràng và nhất quán.
> * Hạn chế CSS trùng lặp.
> * Có thể sử dụng CSS variables.
> * Media queries cần được tổ chức rõ ràng.
> * Không thêm JavaScript nếu chỉ cần CSS để giải quyết vấn đề styling.
>
> Nếu cần chỉnh sửa HTML để hỗ trợ responsive/styling, chỉ thực hiện những thay đổi tối thiểu cần thiết.
>
> ## 9. Tài nguyên
>
> Tiếp tục sử dụng các tài nguyên hiện có trong thư mục:
>
> `res/`
>
> Ưu tiên sử dụng các asset đã có thay vì tạo lại chúng.
>
> Nếu thiếu asset phù hợp, có thể tiếp tục sử dụng placeholder.
>
> Không cần dành trọng tâm của Vòng 2 cho việc tạo hoặc xử lý hình ảnh.
>
> ## 10. Giới hạn của Vòng 2
>
> **Chỉ tập trung vào:**
>
> * Styling
> * Color palette
> * Typography
> * Layout
> * Spacing
> * Component styling
> * Visual hierarchy
> * Responsive desktop
> * Responsive tablet
> * Responsive iPhone/mobile
>
> **Chưa cần tập trung vào:**
>
> * Animation phức tạp
> * Micro-interactions
> * Advanced hover effects
> * Complex transitions
> * Backend
> * Database
> * Authentication
> * Chức năng đặt hàng thực tế
> * Thay đổi lớn về nội dung
> * Viết lại toàn bộ HTML structure
>
> Mục tiêu của vòng này là biến source hiện tại thành một **giao diện hoàn chỉnh và responsive**, chuẩn bị nền tảng cho vòng polish tiếp theo.
>
> ## 11. Thực hiện
>
> Hãy **trực tiếp chỉnh sửa source code hiện tại** và hoàn thành các thay đổi trên.
>
> Không chỉ mô tả những gì cần làm.
>
> Sau khi hoàn thành, đảm bảo website chạy được và kiểm tra giao diện trên:
>
> **Desktop → Tablet → iPhone/Mobile.**
> ```

### 2. Kết quả từ AI

_Ghi chú: mục "AI đã tạo / đề xuất", "Các file…" và "Ghi nhận kỹ thuật từ AI" do AI tự ghi lại để mô tả những gì đã tạo và số liệu đo được khi kiểm tra — không phải đánh giá chất lượng. Mục "Kết quả đạt được" và "Screenshot" do người dùng tự ghi nhận._

- AI đã tạo / đề xuất:
  - **Không đổi cấu trúc/nội dung HTML** như yêu cầu, chỉ có 1 thay đổi HTML tối thiểu: thêm `<link>` Google Fonts (Poppins cho heading, Inter cho body) vào `<head>` để phục vụ yêu cầu typography — không đổi bất kỳ thẻ nội dung nào khác.
  - **Color palette** (khai báo bằng CSS variables trong `:root`):
    - Primary: cam ấm `#e85d25` (hover/active `#c94a17`, nền nhạt `#ffe8da`) — dùng cho CTA, logo, giá tiền, badge.
    - Secondary/accent: xanh ngọc `#1d9a83` (nền nhạt `#dff5f0`) — dùng cho hero-highlight, vòng icon tính năng.
    - Background trang: kem ấm `#fffaf6`; Surface/card: trắng `#ffffff`; Text chính: `#241c18`; Text phụ: `#766d66`; Border: `#f0e6dd`.
    - CTA dùng cam primary nền + trắng chữ (hoặc ngược lại trong khối CTA nền cam) để đảm bảo tương phản rõ.
  - **Typography**: heading dùng Poppins 600–800 (Google Fonts), body dùng Inter 400–600; cỡ chữ hero-title và section-title dùng `clamp()` để co giãn mượt theo viewport; line-height 1.65 cho body, 1.15–1.25 cho heading.
  - **Layout & spacing**: container `max-width: 1180px`; biến `--section-padding-y` giảm dần theo breakpoint (96px → 72px → 56px); bo góc và shadow nhất quán qua biến `--radius-*`/`--shadow-*`.
  - **Component styling** cho toàn bộ các phần đã có ở Vòng 1: header sticky mờ nền (backdrop-blur), hero 2 cột với ảnh minh họa nền gradient cam-xanh, feature card có vòng icon màu + hover nổi nhẹ, dish card có ảnh gradient + giá nổi bật màu cam, step-number dạng chấm tròn cam, CTA section nền gradient cam đậm với nút trắng tương phản, footer nền tối (`--color-text`) với 4 cột.
  - **Responsive** — một hệ layout duy nhất, 2 breakpoint chính:
    - `max-width: 1024px` (tablet): header chuyển sang 2 hàng (logo+CTA hàng trên, nav cuộn ngang hàng dưới) để tránh tràn ngang; hero chuyển 1 cột (ảnh lên trên); các grid 2/3/4 cột → 2 cột; footer 4 cột → 2 cột (brand chiếm full hàng).
    - `max-width: 640px` (mobile/iPhone): thêm padding container nhỏ hơn; tất cả grid → 1 cột; nút trong hero và CTA rộng 100%; footer → 1 cột, căn giữa.
    - Tất cả button có `min-height: 48px` (44px ở nút nhỏ trong header mobile ~40px, dish card ~40px) để dễ bấm trên di động.
  - Không thêm file JavaScript nào — toàn bộ hành vi responsive (kể cả nav cuộn ngang trên tablet/mobile) giải quyết bằng CSS thuần (`overflow-x: auto` + ẩn scrollbar), đúng yêu cầu "không thêm JS nếu chỉ cần CSS".
- Các file hoặc thành phần đã tạo / thay đổi:

  | File | Trạng thái | Vai trò |
  |---|---|---|
  | `index.html` | Sửa tối thiểu | Chỉ thêm 3 dòng `<link>` Google Fonts trong `<head>`; không đổi nội dung/cấu trúc |
  | `css/style.css` | Viết lại toàn bộ | CSS variables (màu, typography, radius, shadow), reset, style cho từng component, 2 breakpoint responsive (1024px, 640px) |
  | `AI_LOG.md` | Thêm Bước 2 | Không sửa Bước 1 |

- Ghi nhận kỹ thuật từ AI (kiểm tra bằng Chrome, có tự sửa 2 lỗi phát sinh trong quá trình kiểm tra):
  - **Lỗi phát hiện & đã sửa #1**: `.hero-highlight` (dòng "Nhanh chóng - Tiện lợi - Đúng giờ") ban đầu đặt `display: inline-block` khiến nút CTA bên dưới trôi lên cùng hàng và đè chữ ở độ rộng 1440px. Đã sửa thành `display: block`.
  - **Lỗi phát hiện & đã sửa #2**: ở độ rộng tablet (~834px, giữa breakpoint 640px và 1024px cũ), header (logo + 5 link nav + nút CTA) bị tràn ngang vì quy tắc "header xuống 2 hàng + nav cuộn ngang" trước đó chỉ áp dụng từ 640px trở xuống. Đã chuyển toàn bộ quy tắc header/nav mobile này lên breakpoint 1024px để áp dụng cho cả tablet, xác nhận hết tràn ngang.
  - Đã kiểm tra bằng 3 phương pháp trực quan trong Chrome: (1) desktop 1440×900 — xem toàn bộ 8 khu vực, không lỗi; (2) tablet — resize cửa sổ được 834×727 (công cụ resize trong môi trường này có mức tối thiểu ~834px, không hạ được thấp hơn), xác nhận header không tràn, hero 1 cột, các grid 2 cột, footer 2 cột; (3) mobile/iPhone 390px — vì không hạ được cửa sổ thật xuống dưới ~834px, đã dùng một iframe rộng 390px nhúng vào trang để buộc viewport bên trong đúng 390px (viewport của iframe độc lập với cửa sổ ngoài), qua đó xác nhận bằng JS `scrollWidth === clientWidth === 386` (không có tràn ngang), toàn bộ grid về 1 cột, nút CTA rộng 100%, footer 1 cột căn giữa, nav header cuộn ngang gọn trong khung.
  - Chưa kiểm tra: thiết bị cảm ứng thật (bấm nút, cuộn nav ngang bằng ngón tay), trình duyệt khác Chrome, độ tương phản màu đo chính xác bằng công cụ kiểm tra a11y (chỉ ước lượng bằng mắt khi chọn màu).
- Kết quả đạt được:
  [Người dùng tự ghi nhận — những gì AI làm đúng / chưa đúng, vấn đề mới phát sinh, phần cần tiếp tục chỉnh sửa]
- Screenshot / Code / Mô tả kết quả:
  [Người dùng tự bổ sung]

### 3. Chỉnh sửa
- Những phần đã thay đổi:
- Những phần đã bổ sung:
- Những phần đã loại bỏ:
- Những phần người dùng tự sửa thủ công:
  [Người dùng tự ghi]

### 4. Lý giải
- Tại sao cần thực hiện những thay đổi trên?
- Những thay đổi này cải thiện giao diện như thế nào?
- Những thay đổi này cải thiện chức năng hoặc trải nghiệm người dùng như thế nào?
- Những thay đổi này cải thiện chất lượng hoặc khả năng bảo trì của code như thế nào?
  [Người dùng tự ghi]

---

## Bước 3 – Chi tiết & Polish (Vòng 3)

### 1. Prompt

> ```text
> # Vòng 3: Chi tiết & Polish
>
> Tiếp tục phát triển **source code hiện tại**.
>
> Ở vòng này, hãy tập trung vào việc **tinh chỉnh và polish giao diện hiện tại**, nhằm đưa website từ trạng thái đã hoàn thiện về layout và styling thành một giao diện có cảm giác **chuyên nghiệp, cân đối và được chăm chút kỹ lưỡng**.
>
> **Không xây dựng lại website từ đầu và không thay đổi cấu trúc hoặc nội dung chính nếu không cần thiết.**
>
> ## 1. Spacing & Alignment
>
> Rà soát toàn bộ giao diện và tinh chỉnh:
>
> * Margin
> * Padding
> * Khoảng cách giữa các section
> * Khoảng cách giữa heading và content
> * Khoảng cách giữa các card
> * Khoảng cách giữa image, text và button
> * Alignment giữa các thành phần
>
> Đảm bảo spacing có tính nhất quán trên toàn bộ trang.
>
> Các thành phần nằm cùng một hàng hoặc cùng một grid cần được căn chỉnh chính xác.
>
> Tránh:
>
> * Các phần tử quá sát nhau.
> * Khoảng trống quá lớn không có chủ đích.
> * Spacing không nhất quán giữa các section tương tự.
>
> ## 2. Typography Polish
>
> Tinh chỉnh typography hiện tại để tạo hierarchy rõ ràng và dễ đọc hơn.
>
> Rà soát:
>
> * Font size
> * Font weight
> * Line height
> * Letter spacing
> * Heading hierarchy
> * Paragraph width
> * Button text
> * Text alignment
>
> Đảm bảo heading nổi bật nhưng không chiếm quá nhiều không gian.
>
> Paragraph cần có độ dài dòng phù hợp để đọc dễ dàng.
>
> Trên màn hình nhỏ, typography phải được điều chỉnh để tránh:
>
> * Heading bị overflow.
> * Xuống dòng mất cân đối.
> * Text quá nhỏ.
> * Line-height quá chật hoặc quá rộng.
>
> ## 3. Component Polish
>
> Tinh chỉnh các component hiện tại để chúng có cảm giác hoàn thiện hơn.
>
> Đặc biệt chú ý:
>
> * Buttons
> * Cards
> * Navigation
> * Images
> * CTA
> * Form/input nếu có
>
> Các component cùng loại phải có:
>
> * Kích thước nhất quán.
> * Border radius nhất quán.
> * Padding hợp lý.
> * Typography nhất quán.
> * Alignment nhất quán.
>
> Không làm component trở nên quá cầu kỳ.
>
> ## 4. Visual Hierarchy
>
> Rà soát toàn bộ trang và điều chỉnh visual hierarchy.
>
> Người dùng cần dễ dàng nhận biết:
>
> **Thông tin quan trọng → thông tin phụ → hành động chính.**
>
> Đặc biệt đảm bảo:
>
> * Main heading nổi bật.
> * CTA chính dễ nhận biết.
> * Nội dung quan trọng có đủ emphasis.
> * Secondary information không cạnh tranh quá mạnh với primary content.
> * Các section có sự phân cấp thị giác rõ ràng.
>
> Nếu mọi thành phần đều quá nổi bật, hãy giảm emphasis ở những thành phần không quan trọng.
>
> ## 5. Buttons & Interactive States
>
> Polish các button và interactive elements hiện tại.
>
> Thêm hoặc tinh chỉnh các trạng thái nếu phù hợp:
>
> * Default
> * Hover
> * Focus
> * Active
>
> Hover effect nên tinh tế và phản hồi rõ ràng.
>
> Không sử dụng animation hoặc transition quá mạnh.
>
> Buttons phải cho người dùng cảm giác có thể tương tác được.
>
> ## 6. Subtle Effects
>
> Thêm các hiệu ứng nhẹ nếu chúng thực sự cải thiện giao diện, ví dụ:
>
> * Subtle shadow
> * Border
> * Soft transition
> * Hover elevation
> * Image hover effect
> * Background transition
>
> Các hiệu ứng phải phục vụ hierarchy và usability.
>
> **Không lạm dụng glassmorphism, gradient, glow, shadow hoặc animation chỉ để làm website "nhiều hiệu ứng".**
>
> Ưu tiên cảm giác:
>
> **Clean → Smooth → Professional → Consistent.**
>
> ## 7. Responsive Polish
>
> Rà soát lại responsive behavior của source hiện tại và sửa các chi tiết còn chưa hoàn thiện trên:
>
> * Desktop
> * Tablet
> * iPhone/Mobile
>
> Tập trung vào những lỗi nhỏ như:
>
> * Spacing bị lệch.
> * Text xuống dòng không đẹp.
> * Card có chiều cao không đồng đều.
> * Button không cân đối.
> * Image có kích thước chưa hợp lý.
> * Section quá cao hoặc quá thấp.
> * Padding mobile chưa phù hợp.
> * Các thành phần bị sát mép màn hình.
> * Alignment thay đổi không hợp lý giữa các breakpoint.
>
> Không thay đổi responsive architecture nếu không cần thiết.
>
> ## 8. Consistency
>
> Rà soát toàn bộ website để đảm bảo các quy tắc thiết kế được sử dụng nhất quán.
>
> Kiểm tra:
>
> * Border radius
> * Shadows
> * Button styles
> * Card styles
> * Typography
> * Spacing
> * Alignment
> * Icon sizing
> * Image treatment
>
> Nếu hai component có cùng vai trò nhưng đang được thiết kế khác nhau mà không có lý do rõ ràng, hãy đưa chúng về cùng một visual language.
>
> ## 9. Accessibility & Usability Polish
>
> Thực hiện các cải thiện nhỏ nếu cần để giao diện dễ sử dụng hơn:
>
> * Đảm bảo text có độ tương phản tốt.
> * Interactive elements dễ nhận biết.
> * Focus state không bị loại bỏ hoàn toàn.
> * Button và link có kích thước thao tác hợp lý.
> * Image có `alt` text phù hợp nếu cần.
> * Không sử dụng màu sắc làm cách duy nhất để truyền tải thông tin.
>
> ## 10. Performance-friendly Polish
>
> Các hiệu ứng và styling bổ sung không nên làm website trở nên nặng hoặc phức tạp không cần thiết.
>
> Ưu tiên:
>
> * CSS đơn giản.
> * Transition nhẹ.
> * Không thêm thư viện chỉ cho một hiệu ứng nhỏ.
> * Không thêm JavaScript nếu CSS có thể giải quyết vấn đề.
>
> ## 11. Giới hạn của Vòng 3
>
> Tập trung vào:
>
> **Detail → Spacing → Typography → Alignment → Visual hierarchy → Component polish → Subtle effects → Responsive polish.**
>
> Không:
>
> * Viết lại toàn bộ website.
> * Thay đổi concept.
> * Thay đổi nội dung chính.
> * Thay đổi cấu trúc lớn nếu không cần thiết.
> * Thêm backend hoặc chức năng phức tạp.
> * Thêm hiệu ứng chỉ để làm giao diện trông "nhiều thứ hơn".
>
> Mọi thay đổi cần có mục đích rõ ràng và giúp giao diện **đẹp hơn, dễ dùng hơn hoặc nhất quán hơn**.
>
> ## 12. Final Review
>
> Trước khi hoàn thành, hãy rà soát toàn bộ source hiện tại và chủ động tìm những chi tiết còn chưa hoàn thiện.
>
> Ưu tiên sửa những vấn đề có tác động lớn nhất đến cảm giác tổng thể của giao diện trước, sau đó mới xử lý các chi tiết nhỏ.
>
> Mục tiêu cuối cùng là:
>
> **Không chỉ "hoạt động được", mà phải có cảm giác như một sản phẩm web đã được designer/developer polish hoàn chỉnh.**
>
> Hãy **trực tiếp chỉnh sửa source code hiện tại** thay vì chỉ mô tả những thay đổi cần thực hiện.
> ```

### 2. Kết quả từ AI

_Ghi chú: mục "AI đã tạo / đề xuất", "Các file…" và "Ghi nhận kỹ thuật từ AI" do AI tự ghi lại để mô tả những gì đã tạo/sửa và số liệu đo được khi kiểm tra — không phải đánh giá chất lượng. Mục "Kết quả đạt được" và "Screenshot" do người dùng tự ghi nhận._

- AI đã tạo / đề xuất — nhóm theo hạng mục của Vòng 3:
  - **Lỗi chức năng phát hiện & sửa (ưu tiên cao nhất, ảnh hưởng usability)**: nav header (`#gioi-thieu`, `#tinh-nang`, …) dùng `scroll-behavior: smooth` với header `position: sticky`, nhưng chưa có `scroll-margin-top` nên khi bấm link, heading của section bị cuộn lên nằm khuất sau header. Đã thêm `scroll-margin-top` (biến `--scroll-offset`, 96px desktop / 132px tablet-mobile do header 2 hàng cao hơn) cho `.hero` và `.section`. Đã kiểm tra bằng cách bấm "Tính năng" trên desktop: heading "Tính năng nổi bật" hiện đầy đủ ngay dưới header, không bị che.
  - **Accessibility & Contrast (mục 9)**: đo tương phản màu bằng công thức WCAG relative luminance cho từng cặp text/nền đang dùng chữ trắng hoặc chữ cam trên nền sáng — phát hiện `--color-primary` (#e85d25) làm nền nút + chữ trắng, hoặc làm màu chữ trên nền trắng, chỉ đạt ~3.48:1 (dưới ngưỡng AA 4.5:1 cho text thường). Đã đổi các chỗ này sang `--color-primary-dark` (#c94a17, ~4.69:1, đạt AA): nền `.btn-primary`, `.step-number`, màu chữ/viền `.btn-secondary`, màu hover của link nav. Thêm biến `--color-primary-hover` (#ab3f14, đậm hơn nữa) làm trạng thái hover/active của nút thay vì dùng lại `--color-primary`. Tăng độ mờ `.cta-desc` từ 0.85 → 0.94 để rõ chữ hơn trên nền gradient cam của khối CTA.
  - **Focus state (mục 5, 9)**: thêm `a:focus-visible, button:focus-visible, .btn:focus-visible` với outline 2px màu `--color-primary-dark`, outline-offset 3px — trước đó không có focus state riêng, chỉ trông chờ outline mặc định của trình duyệt. Đã kiểm tra bằng Tab trên Chrome, xác nhận outline hiển thị rõ quanh nút khi điều hướng bằng bàn phím.
  - **Active state cho button**: thêm `.btn-primary:active`, `.btn-secondary:active` (đậm màu hơn, bỏ hiệu ứng nhấc lên) để có phản hồi khi bấm, trước đó chỉ có default/hover.
  - **Kích thước thao tác (mục 9)**: tăng `min-height` của nút CTA header và nút "Đặt món" trong dish-card từ 40px → 44px trên mobile/tablet để đạt ngưỡng chạm tối thiểu khuyến nghị.
  - **Spacing & rhythm nhất quán (mục 1)**: `.section-title` trước đó luôn có `margin-bottom: 16px`, khiến các section có đoạn mô tả ("FoodGo là gì?") sát nội dung hơn hẳn các section không có mô tả (Tính năng, Món ăn, Cách hoạt động — khoảng cách heading→content không đều nhau). Đã đổi mặc định `.section-title` thành `margin-bottom: 48px`, và dùng `.section-title:has(+ .section-lead)` để thu lại 16px riêng cho section có đoạn mô tả ngay sau — toàn bộ heading giờ cách nội dung bên dưới một khoảng nhất quán.
  - **Visual hierarchy (mục 4)**: nút CTA chính ở Hero trước đó cùng cỡ với nút CTA phụ trên header — không rõ đâu là hành động chính. Đã thêm class `btn-large` cho nút CTA trong Hero (giữ nguyên text/link), tạo 2 cấp rõ ràng: header = nhắc nhở nhỏ gọn, Hero + khối CTA cuối trang = hành động chính, kích thước lớn.
  - **Component consistency (mục 3, 8)**: `.intro-item` (card giới thiệu) trước đó không có hover effect trong khi `.feature-card` và `.dish-card` (cùng vai trò "info card") đã có hiệu ứng nhấc nhẹ + đổ bóng khi hover. Đã thêm cùng hiệu ứng cho `.intro-item` để nhất quán.
  - **Section separation / visual hierarchy giữa các section (mục 4, 6)**: toàn bộ section trước đó dùng chung một màu nền (`--color-bg`), không có ranh giới rõ giữa các khối nội dung liên tiếp. Thêm biến `--color-bg-alt` (kem đậm hơn một chút, phân biệt với cả `--color-bg` và `--color-surface` của card) áp cho `.features-section` và `.how-it-works-section`, tạo hiệu ứng so le nhẹ giúp phân tách section mà không cần thêm border hay shadow.
  - **Typography polish (mục 2)**: thêm `text-wrap: balance` cho toàn bộ heading (`h1–h4`) để các dòng tiêu đề xuống dòng cân đối hơn (đặc biệt rõ ở `.hero-title` tại nhiều viewport, xác nhận qua ảnh chụp: "Đói bụng? Đã có FoodGo lo!" chia 2 dòng cân đối ở cả desktop và mobile thay vì dòng đầu dài hơn hẳn dòng sau). Thêm `letter-spacing` nhẹ (-0.01em đến -0.02em) cho các heading cỡ lớn (`.hero-title`, `.section-title`, `.cta-title`) và heading trong card (`.intro-item h3`, `.feature-card h3`, `.step-item h3`, `.dish-name`) để chữ đậm cỡ lớn trông "chắc" hơn, nhất quán giữa các cấp.
  - Không thêm HTML mới ngoài 1 thay đổi tối thiểu: thêm class `btn-large` vào nút CTA của Hero (không đổi text, link, hay cấu trúc). Không thêm file/thư viện JavaScript nào.
- Các file hoặc thành phần đã tạo / thay đổi:

  | File | Trạng thái | Vai trò |
  |---|---|---|
  | `index.html` | Sửa tối thiểu | Thêm class `btn-large` cho nút CTA trong Hero |
  | `css/style.css` | Chỉnh sửa có mục tiêu | Thêm biến màu/scroll-offset, sửa contrast, focus/active state, spacing rhythm, hover consistency, section alternation, typography polish |
  | `AI_LOG.md` | Thêm Bước 3 | Không sửa Bước 1, Bước 2 |

- Ghi nhận kỹ thuật từ AI (kiểm tra bằng Chrome, có tính toán số liệu tương phản màu):
  - **Tính tương phản màu (WCAG relative luminance, so với nền trắng)**: `--color-primary` (#e85d25) ≈ 3.48:1 (không đạt AA text thường) → `--color-primary-dark` (#c94a17) ≈ 4.69:1 (đạt AA ≥4.5:1). Đây là cơ sở cho toàn bộ thay đổi màu nút/text ở mục Accessibility.
  - **Kiểm tra anchor-scroll**: bấm "Tính năng" trên desktop (1440px) — heading "Tính năng nổi bật" xuất hiện đầy đủ, cách mép dưới header khoảng 8px, không bị che (trước khi sửa, heading sẽ nằm ngay dưới/sau header).
  - **Kiểm tra focus-visible**: dùng phím Tab, `document.activeElement` xác nhận outline áp dụng đúng (`outline: solid rgb(201, 74, 23) 2px`) trên nút "Đặt món" khi focus bằng bàn phím.
  - **Kiểm tra card height/alignment**: các nút "Đặt món" trong 4 dish-card (mô tả dài ngắn khác nhau: 1–2 dòng) vẫn thẳng hàng ở đáy card nhờ CSS Grid stretch + `flex-grow` + `margin-top: auto` (cơ chế có sẵn từ Vòng 2, xác nhận lại vẫn đúng sau khi đổi màu/kích thước nút).
  - **Kiểm tra responsive lại từ đầu**: desktop 1440px (đầy đủ 8 khu vực, không lỗi); tablet — dùng tab mới với `resize_window` (công cụ resize trong môi trường này chỉ nhận đúng width ở lần resize đầu tiên của mỗi tab, các lần sau trên cùng tab bị bỏ qua) đạt 900px thật, xác nhận grid 2 cột, header 2 hàng không tràn; mobile 390px qua kỹ thuật nhúng iframe (do không hạ được cửa sổ thật xuống dưới ~600–834px trong môi trường này), xác nhận `scrollWidth === clientWidth === 386` (không tràn ngang), heading hero xuống dòng cân đối, nút CTA rộng 100%, footer 1 cột.
  - Chưa kiểm tra: thiết bị cảm ứng thật, trình duyệt khác Chrome, công cụ đo contrast tự động (Lighthouse/axe) — số liệu tương phản ở trên do AI tự tính bằng công thức WCAG, chưa đối chiếu bằng công cụ chuyên dụng.
- Kết quả đạt được:
  [Người dùng tự ghi nhận — những gì AI làm đúng / chưa đúng, vấn đề mới phát sinh, phần cần tiếp tục chỉnh sửa]
- Screenshot / Code / Mô tả kết quả:
  [Người dùng tự bổ sung]

### 3. Chỉnh sửa
- Những phần đã thay đổi:
- Những phần đã bổ sung:
- Những phần đã loại bỏ:
- Những phần người dùng tự sửa thủ công:
  [Người dùng tự ghi]

### 4. Lý giải
- Tại sao cần thực hiện những thay đổi trên?
- Những thay đổi này cải thiện giao diện như thế nào?
- Những thay đổi này cải thiện chức năng hoặc trải nghiệm người dùng như thế nào?
- Những thay đổi này cải thiện chất lượng hoặc khả năng bảo trì của code như thế nào?
  [Người dùng tự ghi]

---

## Quy tắc ghi nhật ký

- Mỗi lần sử dụng AI cho một yêu cầu hoặc một thay đổi đáng kể, tạo một **Bước** mới.
- Không xóa các bước trước đó.
- **Prompt** được AI ghi lại chính xác.
- **Kết quả** được người dùng tự ghi nhận dựa trên kết quả thực tế của AI.
- **Chỉnh sửa** và **Lý giải** do người dùng tự ghi để phản ánh quá trình đánh giá và ra quyết định.
- Có thể đính kèm screenshot hoặc đoạn code quan trọng để minh họa kết quả.
- Nhật ký phải phản ánh **quá trình phát triển thực tế**, không chỉ mô tả sản phẩm cuối cùng.
- Nếu người dùng tự chỉnh sửa code mà không thông qua AI, cần ghi rõ phần đã chỉnh sửa và lý do.
