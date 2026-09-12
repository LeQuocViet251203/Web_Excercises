/**
 * data.js — Nội dung portfolio của Lê Quốc Việt
 * -----------------------------------------------------------------------------
 * NGUỒN DỮ LIỆU: res/cv.pdf (CV tiếng Anh). Nội dung được dịch sang tiếng Việt;
 * tên riêng, chức danh, tên dự án, tên môn học và thuật ngữ kỹ thuật giữ nguyên như CV.
 * Không bổ sung thông tin nằm ngoài CV.
 *
 * Cách cập nhật:
 *  • Đây là NƠI DUY NHẤT cần chỉnh sửa khi thay đổi nội dung trang.
 *  • Trường / mảng để trống ("" hoặc []) sẽ tự ẩn. Section không còn dữ liệu sẽ bị ẩn
 *    cùng mục tương ứng trên thanh điều hướng.
 *  • Đường dẫn file cục bộ tính từ index.html, ví dụ: "res/avatar.jpg".
 *  • Mục có `current: true` được dùng cho phần đầu trang (công việc / chương trình học hiện tại).
 */
const PROFILE = {
  name: "Lê Quốc Việt",

  /** Câu giới thiệu ngắn ở phần đầu trang — CV: Professional Summary. */
  tagline:
    "Có kinh nghiệm phát triển hệ thống nhúng và IoT trên nhiều tầng: phần mềm ứng dụng, middleware, firmware cấp thấp và tích hợp phần cứng.",

  avatar: "res/avatar.jpg",
  cv: "res/cv.pdf",

  /** CV: dòng thông tin liên hệ ở đầu CV. */
  contact: {
    location: "Hà Nội, Việt Nam",
    email: "lequocvietvshack@gmail.com",
    phone: "(+84) 327744194",
  },

  /**
   * Liên kết nghề nghiệp — CV chỉ có LinkedIn.
   * icon: linkedin | github | facebook | website | mail | link
   */
  socials: [
    {
      icon: "linkedin",
      label: "LinkedIn",
      handle: "linkedin.com/in/LeQuocViet",
      url: "https://www.linkedin.com/in/LeQuocViet",
    },
  ],

  /** Thành tích nổi bật hiển thị ngay dưới phần đầu trang — CV: Education, Awards. */
  highlights: [
    { value: "5/5", label: "Điểm tốt nghiệp cử nhân, xếp loại Outstanding" },
    { value: "4.06/5.0", label: "GPA cử nhân Electrical Engineering" },
    { value: "Giải Ba", label: "TDK (Tudományos Diákkör) 2025" },
    { value: "2022 – 2026", label: "Học bổng Stipendium Hungaricum" },
  ],

  /** CV: Professional Summary. */
  about: {
    summary: [
      "Tốt nghiệp ngành Electrical Engineering (Kỹ thuật Điện), chuyên ngành Instrumentation and Automation (Đo lường và Tự động hoá) tại Óbuda University, Budapest, Hungary, xếp loại Outstanding (Xuất sắc).",
      "Hiện đang làm Junior Embedded Software Developer tại FPT Software, đồng thời theo học chương trình M.Sc. ACMI tại Đại học Bách khoa Hà Nội (HUST).",
    ],
    interests: ["Hệ thống nhúng cho ô tô", "Robot", "Nền tảng bay tự hành"],
    focus: ["Điều khiển thời gian thực", "Cảm biến", "Truyền thông", "Tích hợp hệ thống thông minh"],
    research: [
      { name: "Học viện Kỹ thuật Quân sự", note: "Military Technical Academy" },
      { name: "SigM Lab — HUST", note: "Signal, Information and Multimedia Content Processing Laboratory" },
    ],
  },

  /**
   * Kỹ năng — CV không có mục Kỹ năng riêng; danh sách dưới đây tổng hợp từ các công nghệ
   * được nhắc đến trong Professional Experiences, Projects, Education và Awards.
   * icon: code | cpu | layers | wifi | database | shieldCheck
   */
  skills: [
    {
      group: "Ngôn ngữ lập trình",
      icon: "code",
      items: ["C / Embedded C", "C++", "Python", "C#", "Java", "MATLAB", "Shell Script", "Verilog", "SystemVerilog"],
    },
    {
      group: "Vi điều khiển & nền tảng",
      icon: "cpu",
      items: ["STM32 (STM32L432KC)", "AVR (ATmega64/128)", "ESP32-S3", "ESP8266", "Raspberry Pi 4", "Cube/Pixhawk"],
    },
    {
      group: "Phần mềm nhúng",
      icon: "layers",
      items: ["AUTOSAR MCAL", "Bare-metal / CMSIS", "FreeRTOS", "Máy trạng thái hướng sự kiện", "Chế độ tiết kiệm năng lượng"],
    },
    {
      group: "Giao tiếp & kết nối",
      icon: "wifi",
      items: ["UART / USART", "I2C", "SPI", "CAN", "USB", "BLE", "LoRaWAN", "Wi-Fi", "MQTT over TLS"],
    },
    {
      group: "IoT, dữ liệu & thị giác máy tính",
      icon: "database",
      items: ["FastAPI", "Mosquitto MQTT", "SQLite", "MySQL", "Microsoft SQL Server", "OpenCV", "MediaPipe"],
    },
    {
      group: "Tiêu chuẩn, kiểm thử & phần cứng",
      icon: "shieldCheck",
      items: ["MISRA", "CERT-C", "HIS", "Unit Test (UT)", "Component Test (CT)", "PCB Design", "Mission Planner", "PID tuning"],
    },
  ],

  /** CV: Professional Experiences — sắp xếp theo thời điểm kết thúc, mới nhất trước. */
  experience: [
    {
      role: "Junior Embedded Developer",
      organization: "FPT Software",
      period: "2026 – Hiện tại",
      current: true,
      bullets: [
        "Phát triển tính năng và kiểm thử cho tầng MCAL (AUTOSAR) với các module MEM, FEE, MEMACC.",
        "Thực hiện UT, CT, tài liệu UM/IM và đảm bảo tuân thủ các tiêu chuẩn lập trình MISRA, CERT-C và HIS.",
      ],
      tags: ["AUTOSAR", "MCAL", "MISRA", "CERT-C", "HIS"],
    },
    {
      role: "Laboratory Assistant",
      organization: "KVK Faculty — Óbuda University",
      period: "2024 – 2026",
      bullets: [
        "Vai trò chính: chuẩn bị tài liệu và trợ giảng các buổi lý thuyết và thực hành cho các môn Embedded Systems (AVR C và hệ thống 32-bit).",
        "Vai trò hỗ trợ: phát triển và trình bày một prototype dựa trên thị giác máy tính cho các buổi thực hành Embedded Systems sau này, dùng Raspberry Pi 4B, Python, Picamera2, MediaPipe và OpenCV để theo dõi tư thế bàn tay theo thời gian thực, kết hợp giao tiếp PySerial để điều khiển cánh tay robot Braccio 6 bậc tự do (6-DOF).",
      ],
      tags: ["AVR C", "Raspberry Pi 4B", "Python", "Picamera2", "MediaPipe", "OpenCV", "PySerial"],
    },
  ],

  /**
   * CV: Projects (và dự án đạt giải trong mục Awards).
   * id: dùng làm neo liên kết (ví dụ từ mục Giải thưởng tới dự án).
   */
  projects: [
    {
      id: "bare-metal-driver-framework",
      title: "Bare-Metal MCU and Device Driver Framework",
      summary:
        "Framework driver bare-metal có thể tái sử dụng cho STM32L432KC, lập trình trực tiếp ở cấp thanh ghi với CMSIS, không dùng API ngoại vi của STM32 HAL.",
      details: [
        "Thiết kế framework driver bare-metal có thể tái sử dụng cho STM32L432KC bằng lập trình trực tiếp ở cấp thanh ghi và các định nghĩa CMSIS, cung cấp lớp trừu tượng phần cứng mà không phụ thuộc vào các API ngoại vi của STM32 HAL.",
        "Xây dựng các driver cấp thanh ghi có thể cấu hình cho ngoại vi truyền thông (UART/USART/LPUART, I2C, SPI, CAN, SAI, USB), ngoại vi định thời (TIM, RTC, LPTIM), ngoại vi điều khiển hệ thống, ADC/DAC và DMA, hoạt động theo ngắt và tích hợp chế độ tiết kiệm năng lượng.",
        "Phát triển driver thiết bị cấp cao và máy trạng thái hướng sự kiện cho cảm biến IMU và ToF, xác thực bằng RFID và vân tay, cùng giao diện màn hình OLED/TFT trên lớp ngoại vi đã thiết kế.",
      ],
      tags: ["STM32L432KC", "CMSIS", "UART / I2C / SPI / CAN", "ADC/DAC", "DMA", "IMU & ToF"],
    },
    {
      id: "raspberry-pi-iot-gateway",
      title: "Raspberry Pi Edge Gateway and IoT Device Management Platform",
      summary:
        "Nền tảng IoT edge viết bằng Python: Raspberry Pi 4 làm gateway cục bộ, các node cảm biến ESP8266 gửi telemetry qua MQTT over TLS, cung cấp RESTful API bằng FastAPI.",
      details: [
        "Thiết kế kiến trúc nền tảng IoT edge bằng Python, dùng Raspberry Pi 4 làm gateway cục bộ và các node cảm biến từ xa dựa trên ESP8266; thu thập dữ liệu cảm biến DHT11, IMU và dòng MQ qua giao tiếp GPIO, I2C/SPI và ADC, truyền telemetry an toàn qua Wi-Fi bằng MQTT over TLS. Triển khai máy trạng thái hữu hạn và superloop hướng sự kiện để lập lịch không chặn, quản lý kết nối và thu thập dữ liệu cảm biến.",
        "Phát triển gateway Raspberry Pi với broker Mosquitto MQTT và các dịch vụ Python để xử lý telemetry, lưu dữ liệu cảm biến kèm thời gian vào SQLite, theo dõi trạng thái thiết bị và phát hiện bất thường. Cung cấp RESTful API qua FastAPI để truy cập từ thiết bị di động: trạng thái thiết bị, số đo, thống kê, cảnh báo và lệnh điều khiển từ xa.",
      ],
      tags: ["Raspberry Pi 4", "ESP8266", "MQTT over TLS", "Mosquitto", "FastAPI", "SQLite"],
    },
    {
      id: "pixhawk-uav-platform",
      title: "Pixhawk-Based UAV Platform",
      summary:
        "Tham gia thiết kế hệ thống vật lý, lựa chọn linh kiện và cấu hình hệ thống điều khiển bay cho UAV bốn cánh quạt dùng Cube/Pixhawk.",
      details: [
        "Tham gia thiết kế hệ thống vật lý và lựa chọn linh kiện cho UAV bốn cánh quạt: xác định vị trí lắp đặt linh kiện và kiến trúc đi dây, sử dụng khung quadcopter sợi carbon, bốn động cơ không chổi than BDUAV 5010-360KV, bốn ESC Hobbywing XRotor Pro 50A, pin LiPo 6S 22.2 V 9000 mAh, bo phân phối nguồn PM07, bộ điều khiển bay Cube/Pixhawk, GPS, module telemetry và hệ thống điều khiển vô tuyến FlySky.",
        "Cấu hình hệ thống điều khiển bay bằng Mission Planner, bao gồm hiệu chuẩn IMU, thiết lập bộ điều khiển vô tuyến, điều hướng có hỗ trợ GPS, truyền thông telemetry và tinh chỉnh PID cho các vòng điều khiển bay của quadcopter.",
      ],
      tags: ["Cube/Pixhawk", "Mission Planner", "PID tuning", "GPS", "Telemetry", "FlySky"],
    },
    {
      id: "presence-management-system",
      title: "Multi-Technology Presence Management System",
      badge: "Giải Ba TDK 2025",
      summary:
        "Hệ thống phát hiện hiện diện phân tán trong nhà/ngoài trời cho thiết bị thuốc lá điện tử phát BLE, dùng BLE advertisement fingerprinting và thuật toán hợp nhất RSSI đa node.",
      details: [
        "Thiết kế và triển khai hệ thống phát hiện hiện diện phân tán trong nhà/ngoài trời cho các thiết bị thuốc lá điện tử phát BLE, sử dụng BLE advertisement fingerprinting dựa trên dữ liệu service/manufacturer, đặc trưng RSSI và mẫu quảng bá theo thời gian để phân loại chữ ký thiết bị mục tiêu, không chỉ dựa vào so khớp địa chỉ MAC cố định. Phát triển thuật toán hợp nhất RSSI đa node để ước lượng phòng/khu vực có khả năng cao nhất và gán điểm tin cậy cho mỗi quyết định hiện diện.",
        "Triển khai hệ thống trên các node Heltec LoRa32 v3 dùng ESP32-S3 với quét BLE đồng thời, xử lý đặc trưng cục bộ và gửi telemetry an toàn qua Wi-Fi/MQTT over TLS và LoRaWAN. Điều phối cảm biến và truyền thông bằng FreeRTOS với chế độ tiết kiệm năng lượng; dùng MATLAB để phân tích hành vi phát hiện, phân bố RSSI, độ tin cậy định vị và hiệu năng truyền thông.",
      ],
      tags: ["ESP32-S3", "BLE", "LoRaWAN", "FreeRTOS", "MQTT over TLS", "MATLAB"],
    },
  ],

  /** CV: Education — sắp xếp theo thời điểm kết thúc, mới nhất trước. */
  education: [
    {
      school: "Đại học Bách khoa Hà Nội (HUST)",
      degree: "Thạc sĩ (MSc) Computer Science",
      location: "Hà Nội, Việt Nam",
      period: "04/2026 – Hiện tại",
      current: true,
      highlights: [],
      coursework: [],
    },
    {
      school: "Óbuda University",
      degree: "Cử nhân (BSc) Electrical Engineering",
      location: "Budapest, Hungary",
      period: "09/2022 – 02/2026",
      highlights: ["GPA: 4.06/5.0", "Tốt nghiệp với Highest Honors: Outstanding (điểm tốt nghiệp 5/5)."],
      coursework: [
        "Embedded C",
        "C++",
        "Instructional Programming & Data Structures and Algorithms (C#, Python)",
        "STM32",
        "Raspberry Pi 4",
        "AVR C (ATmega64/128)",
        "Database Systems (MySQL)",
        "PCB Design",
        "Verilog",
        "SystemVerilog",
      ],
    },
    {
      school: "Đại học Quốc gia Hà Nội (VNU)",
      degree: "Cử nhân (BSc) Data & Computer Science",
      location: "Hà Nội, Việt Nam",
      period: "09/2021 – 09/2022",
      highlights: ["GPA: 3.22/4"],
      coursework: [
        "Instructional & DSA in Java Programming",
        "Shell Script in Ubuntu",
        "Database (Microsoft SQL Server)",
        "MATLAB",
        "Discrete Mathematics",
        "Calculus 1, 2 & 3",
        "Linear Algebra",
      ],
    },
  ],

  /** CV: Awards — `project` trỏ tới `id` của một dự án ở trên (tuỳ chọn). */
  awards: [
    {
      title: "Stipendium Hungaricum Scholarship",
      period: "2022 – 2026",
      description:
        "Học bổng giáo dục đại học danh giá nhất của Chính phủ Hungary, quyền lợi thường bao gồm học phí, chỗ ở và bảo hiểm y tế.",
    },
    {
      title: "TDK (Tudományos Diákkör)",
      subtitle: "Tiếng Hungary: Hội Sinh viên Nghiên cứu Khoa học (Scientific Students' Association)",
      period: "2024 – 2025",
      description: "Đạt Giải Ba (2025) với đề tài Multi-Technology Presence Management System.",
      project: "presence-management-system",
    },
  ],
};
