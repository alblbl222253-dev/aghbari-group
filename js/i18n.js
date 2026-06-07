// website/js/i18n.js
const translations = {
  ar: {
    "nav_home": "الرئيسية",
    "nav_services": "خدماتنا",
    "nav_portfolio": "أعمالنا",
    "nav_about": "من نحن",
    "nav_blog": "المدونة",
    "nav_faq": "الأسئلة الشائعة",
    "nav_contact": "اتصل بنا",
    "nav_cta": "ابدأ مشروعك",
    "hero_badge": "مستقبلك الرقمي يبدأ هنا",
    "hero_title_1": "نحو مستقبل رقمي أكثر",
    "hero_title_2": "احترافية وذكاءً",
    "hero_desc": "منظومة رقمية متكاملة تجمع بين الإبداع التسويقي، الحلول البرمجية، وتقنيات الذكاء الاصطناعي لتصميم علامات تجارية وبيئات رقمية تنافسية.",
    "hero_btn_start": "ابدأ مشروعك الآن",
    "hero_btn_portfolio": "استعرض أعمالنا",
    "stat_projects": "مشروع ناجح",
    "stat_design": "تصميم وهوية",
    "stat_hours": "ساعة عمل",
    "scroll_down": "تصفح المزيد",
    // Common terms
    "read_more": "اقرأ المزيد ➔",
    "view_details": "عرض التفاصيل",
    "footer_rights": "جميع الحقوق محفوظة © 2026 مجموعة الغباري.",
    "footer_dev": "تطوير وإشراف: الأستاذ نبيل الغباري 🚀"
  },
  en: {
    "nav_home": "Home",
    "nav_services": "Services",
    "nav_portfolio": "Portfolio",
    "nav_about": "About Us",
    "nav_blog": "Blog",
    "nav_faq": "FAQ",
    "nav_contact": "Contact",
    "nav_cta": "Start Project",
    "hero_badge": "Your Digital Future Starts Here",
    "hero_title_1": "Toward a more professional",
    "hero_title_2": "and intelligent digital future",
    "hero_desc": "A modern digital ecosystem that combines visual marketing, software engineering, and AI innovation to create brands and platforms that lead the market.",
    "hero_btn_start": "Start Your Project Now",
    "hero_btn_portfolio": "View Our Portfolio",
    "stat_projects": "Successful Project",
    "stat_design": "Design & Identity",
    "stat_hours": "Working Hour",
    "scroll_down": "Scroll Down",
    // Common terms
    "read_more": "Read More ➔",
    "view_details": "View Details",
    "footer_rights": "All rights reserved © 2026 Alghbari Group.",
    "footer_dev": "Developed by: Nabil Alghbari 🚀"
  }
};

function toggleLanguage() {
  const currentLang = localStorage.getItem('lang') || 'ar';
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  
  localStorage.setItem('lang', newLang);
  applyLanguage(newLang);
}

function applyLanguage(lang) {
  // Set HTML direction and lang
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Translate all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update button text
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
  }
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'ar';
  applyLanguage(savedLang);
});
