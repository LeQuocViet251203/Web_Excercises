/**
 * main.js - Tương tác điều hướng và tiện ích Web App Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Điều khiển Mobile Navigation Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileMenuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Đóng menu khi bấm vào link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // 2. Tương tác sao chép Email với Toast Notification
  const copyButtons = [
    document.getElementById('copyEmailBtn'),
    document.getElementById('copyEmailBtn2')
  ].filter(Boolean);

  const toastPopup = document.getElementById('toastNotification');
  const copyBtnLabel = document.getElementById('copyBtnLabel');
  let toastTimer = null;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || 'lequocvietvshack@gmail.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const tempInput = document.createElement('textarea');
          tempInput.value = email;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.focus();
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        triggerToast(`Đã sao chép email ${email} vào clipboard!`);
        if (copyBtnLabel) copyBtnLabel.textContent = 'Đã chép!';

        setTimeout(() => {
          if (copyBtnLabel) copyBtnLabel.textContent = 'Sao chép Email';
        }, 3000);
      } catch (err) {
        console.error('Lỗi khi sao chép:', err);
      }
    });
  });

  function triggerToast(message) {
    if (!toastPopup) return;
    const toastMsgEl = document.getElementById('toastMessage');
    if (toastMsgEl) toastMsgEl.textContent = message;

    if (toastTimer) clearTimeout(toastTimer);

    toastPopup.classList.add('active');
    toastTimer = setTimeout(() => {
      toastPopup.classList.remove('active');
    }, 3200);
  }

  // 3. Highlight Active Link trên Navbar khi cuộn trang
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      const matchingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });
});