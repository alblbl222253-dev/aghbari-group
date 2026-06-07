/* ============================================================
   مجموعة الغباري — البرمجيات الأساسية للموقع
   Alghbari Group — Core Website JavaScript
   
   01. الإعدادات العامة (Site Configuration)
   02. إدارة القائمة المتنقلة (Mobile Navigation)
   03. تفعيل شريط التنقل عند التمرير (Navbar Scroll Status)
   04. التبويبات للخدمات (Tabs Component)
   05. الأكورديون للأسئلة الشائعة (FAQ Accordion)
   06. نظام الإشعارات المنبثقة (Toast System)
   07. معالجة نماذج الإرسال (Contact Form Handler)
   ============================================================ */

// ============================================================
// 01. SITE CONFIGURATION & SOCIAL LINKS
// ============================================================
const siteConfig = {
  name: 'مجموعة الغباري',
  email: 'alghbarigroup@gmail.com',
  phone: '770104005',
  whatsapp: '+967770104005',
  location: 'صنعاء، اليمن'
};

const socialLinks = {
  facebook: 'https://facebook.com/alghbarigroup',
  instagram: 'https://instagram.com/alghbarigroup',
  linkedin: 'https://linkedin.com/company/alghbarigroup',
  youtube: 'https://youtube.com/@alghbarigroup',
  whatsapp: 'https://wa.me/967770104005'
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  ensureSiteControls();
  ensureNavigationI18nHooks();
  initMobileMenu();
  initNavbarScroll();
  initTabs();
  initAccordions();
  initContactForm();
  updateFooterYear();
  initActiveLinks();
});

// ============================================================
// 01.5 THEME MANAGEMENT (Dark / Light)
// ============================================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function ensureSiteControls() {
  const actions = document.querySelector('.navbar-actions');
  if (!actions) return;

  if (!document.getElementById('themeToggleBtn')) {
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggleBtn';
    themeBtn.type = 'button';
    themeBtn.className = 'btn-icon nav-control-chip';
    themeBtn.setAttribute('aria-label', 'تبديل المظهر');
    themeBtn.innerHTML = '🌓';
    themeBtn.addEventListener('click', toggleTheme);
    actions.insertBefore(themeBtn, actions.firstChild);
  }

  if (!document.getElementById('langToggleBtn')) {
    const langBtn = document.createElement('button');
    langBtn.id = 'langToggleBtn';
    langBtn.type = 'button';
    langBtn.className = 'btn-icon nav-control-chip';
    langBtn.setAttribute('aria-label', 'تبديل اللغة');
    langBtn.textContent = 'EN';

    langBtn.addEventListener('click', () => {
      if (typeof window.toggleLanguage === 'function') {
        window.toggleLanguage();
        return;
      }

      const currentLang = localStorage.getItem('lang') || 'ar';
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', nextLang);
      document.documentElement.setAttribute('lang', nextLang);
      document.documentElement.setAttribute('dir', nextLang === 'ar' ? 'rtl' : 'ltr');
      langBtn.textContent = nextLang === 'ar' ? 'EN' : 'AR';
    });

    actions.insertBefore(langBtn, actions.firstChild);
  }

  updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'dark');
}

function ensureNavigationI18nHooks() {
  const navLinks = document.querySelectorAll('.nav-link');
  const keyMap = {
    'index.html': 'nav_home',
    'services.html': 'nav_services',
    'portfolio.html': 'nav_portfolio',
    'about.html': 'nav_about',
    'blog.html': 'nav_blog',
    'faq.html': 'nav_faq',
    'contact.html': 'nav_contact'
  };

  navLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').split('?')[0].replace(/\\/g, '/');
    const key = keyMap[href.split('/').pop()] || 'nav_contact';
    if (!link.hasAttribute('data-i18n')) {
      link.setAttribute('data-i18n', key);
    }
  });

  const cta = document.querySelector('.navbar-actions .btn-primary');
  if (cta && !cta.hasAttribute('data-i18n')) {
    cta.setAttribute('data-i18n', 'nav_cta');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }
}


// ============================================================
// 02. MOBILE NAVIGATION
// ============================================================
function initMobileMenu() {
  const toggleBtn = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-nav');
  
  if (!toggleBtn || !navMenu) return;
  
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle menu state icon
    const spans = toggleBtn.querySelectorAll('span');
    if (toggleBtn.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close menu on link click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleBtn.classList.remove('active');
        navMenu.classList.remove('active');
        const spans = toggleBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
      const spans = toggleBtn.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// ============================================================
// 03. NAVBAR SCROLL STATUS
// ============================================================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  // Trigger on load
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

// ============================================================
// 04. TABS COMPONENT
// ============================================================
function initTabs() {
  const tabButtons = document.querySelectorAll('.services-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length === 0) return;
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
      });
      
      button.classList.add('active');
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.style.display = 'grid';
        // Add visual enter animation
        activeContent.classList.add('active', 'tab-content-enter');
        setTimeout(() => {
          activeContent.classList.remove('tab-content-enter');
        }, 500);
      }
    });
  });
}

// ============================================================
// 05. FAQ ACCORDION
// ============================================================
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length === 0) return;
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isExpanded = item.classList.contains('active');
      
      // Close all other accordion items
      const siblingItems = item.parentElement.querySelectorAll('.accordion-item');
      siblingItems.forEach(sibling => {
        sibling.classList.remove('active');
        const siblingBody = sibling.querySelector('.accordion-body');
        if (siblingBody) siblingBody.style.maxHeight = null;
      });
      
      if (!isExpanded) {
        item.classList.add('active');
        // Calculate content height for smooth transition
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        body.style.maxHeight = null;
      }
    });
  });
}

// ============================================================
// 06. TOAST SYSTEM
// ============================================================
function showToast(message, type = 'success') {
  // Ensure container exists
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = '🔔';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'info') icon = 'ℹ️';
  
  toast.innerHTML = `
    <span>${icon}</span>
    <div>${message}</div>
  `;
  
  container.appendChild(toast);
  
  // Auto remove toast
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.4s ease forwards';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// Ensure showToast is globally accessible
window.showToast = showToast;

// ============================================================
// 07. CONTACT FORM HANDLER
// ============================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation helper
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const message = form.querySelector('[name="message"]').value.trim();
    
    if (!name || !email || !message) {
      showToast('يرجى ملء جميع الحقول المطلوبة', 'error');
      return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'جاري الإرسال... <span class="spinner" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 5px;"></span>';
    submitBtn.disabled = true;
    
    // Simulate API request
    setTimeout(() => {
      showToast('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.', 'success');
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// ============================================================
// 08. UTILITIES
// ============================================================
function updateFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function initActiveLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check if the current pathname ends with or includes the link target
    if (currentPath === href || 
        (href !== '#' && href !== '/' && currentPath.includes(href)) ||
        (href === '/' && (currentPath === '/' || currentPath.endsWith('index.html')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
