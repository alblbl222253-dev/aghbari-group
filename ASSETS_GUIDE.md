# دليل الأصول والإضافات — موقع مجموعة الغباري
# Alghbari Group Website — Assets & Additions Guide

=========================================================
## 📁 هيكل المجلدات الكامل
=========================================================

```
website/
│
├── index.html                    ✅ الصفحة الرئيسية
├── ASSETS_GUIDE.md               ✅ هذا الملف
│
├── pages/                        📄 صفحات الموقع
│   ├── services.html             ✅ صفحة الخدمات
│   ├── portfolio.html            ✅ صفحة الأعمال
│   ├── about.html                ✅ صفحة من نحن
│   ├── blog.html                 ✅ صفحة المدونة
│   ├── faq.html                  ✅ صفحة الأسئلة الشائعة
│   └── contact.html              ✅ صفحة التواصل
│
├── css/
│   ├── style.css                 ✅ نظام التصميم الكامل
│   └── animations.css            ✅ نظام الحركات والتأثيرات
│
├── js/
│   ├── main.js                   ✅ الوظائف الرئيسية
│   ├── animations.js             ✅ حركات التمرير والتأثيرات
│   └── ai-assistant.js           🔧 مساعد الذكاء الاصطناعي
│
└── assets/
    ├── images/
    │   ├── logo/
    │   │   ├── logo-main.png     ⚠️ ضع الشعار الرئيسي هنا
    │   │   ├── logo-white.png    ⚠️ نسخة بيضاء للخلفيات الداكنة
    │   │   └── logo-icon.png     ⚠️ أيقونة الشعار فقط (بدون نص)
    │   │
    │   ├── hero/
    │   │   └── hero-bg.jpg       ⚠️ صورة خلفية القسم الرئيسي (اختياري)
    │   │
    │   ├── portfolio/            ⚠️ أعمال البورتفوليو
    │   │   ├── logos/            📁 صور الشعارات المصممة
    │   │   ├── branding/         📁 صور الهوية البصرية
    │   │   ├── social-media/     📁 تصاميم السوشيال ميديا
    │   │   ├── websites/         📁 لقطات شاشة المواقع
    │   │   ├── mobile-apps/      📁 لقطات التطبيقات
    │   │   └── thumbnails/       📁 صور مصغرة (400x300px)
    │   │
    │   ├── team/
    │   │   └── founder.jpg       ⚠️ صورة المؤسس نابل الغباري
    │   │
    │   ├── blog/
    │   │   └── [article-name].jpg ⚠️ صور المقالات (1200x630px)
    │   │
    │   └── clients/              ⚠️ شعارات العملاء (شفافة PNG)
    │
    └── favicon/
        ├── favicon.ico           ⚠️ أيقونة المتصفح
        └── apple-touch-icon.png  ⚠️ أيقونة الآيفون
```

=========================================================
## 🖼️ الشعار — Logo
=========================================================

### أين يوضع؟
- المجلد: `assets/images/logo/`

### الملفات المطلوبة:

| الملف | المواصفات | الاستخدام |
|-------|-----------|-----------|
| `logo-main.png` | PNG شفاف، أكبر من 500px | الشعار الرئيسي |
| `logo-white.png` | PNG أبيض على شفاف | شريط التنقل الداكن |
| `logo-icon.png` | PNG، 200x200px | Favicon + أيقونة صغيرة |

### الخطوات:
1. انسخ ملف الشعار PNG إلى `assets/images/logo/`
2. أعد تسميته إلى `logo-main.png`
3. في `index.html` ابحث عن: `<img src="../assets/images/logo/logo-main.png"`
4. سيظهر الشعار تلقائياً في كل الصفحات

=========================================================
## 📸 البورتفوليو — Portfolio Images
=========================================================

### المواصفات المطلوبة:
- **الصور الرئيسية**: 800x600px أو أكبر، JPG أو PNG
- **الصور المصغرة**: 400x300px، JPG (للتحميل السريع)
- **الجودة**: 80% للـ JPG (توازن بين الجودة والسرعة)

### تنسيق أسماء الملفات:
```
logos/
  logo-client-name-01.jpg
  logo-client-name-02.jpg

branding/
  brand-client-name-01.jpg

social-media/
  social-client-name-01.jpg

websites/
  web-project-name-01.jpg

mobile-apps/
  app-project-name-01.jpg
```

### الخطوات لإضافة مشروع:
1. أضف الصورة إلى المجلد المناسب في `assets/images/portfolio/`
2. في ملف `pages/portfolio.html`، ابحث عن قسم:
   `<!-- ADD PORTFOLIO ITEMS HERE -->`
3. انسخ والصق قالب البطاقة التالي:

```html
<div class="portfolio-item" data-category="logos">
  <div class="portfolio-card">
    <img src="../assets/images/portfolio/logos/logo-client-01.jpg" 
         alt="اسم المشروع" 
         loading="lazy">
    <div class="portfolio-overlay">
      <h3 class="portfolio-title">اسم المشروع</h3>
      <p class="portfolio-category">تصميم شعار</p>
      <a href="#" class="portfolio-link">عرض التفاصيل</a>
    </div>
  </div>
</div>
```

=========================================================
## 📝 المدونة — Blog Posts
=========================================================

### لإضافة مقال جديد:
1. أنشئ ملف HTML جديد في: `pages/blog/article-name.html`
2. انسخ قالب المقال من: `pages/blog/article-template.html`
3. في `pages/blog.html` أضف بطاقة المقال في:
   `<!-- ADD BLOG CARDS HERE -->`

### مواصفات صور المقالات:
- **الحجم**: 1200x630px (مثالي للسوشيال ميديا أيضاً)
- **الصيغة**: JPG، جودة 85%
- **المجلد**: `assets/images/blog/`

=========================================================
## 💬 التعليقات والشهادات — Testimonials
=========================================================

### لإضافة شهادة عميل:
1. في `index.html` ابحث عن:
   `<!-- ADD TESTIMONIALS HERE -->`
2. انسخ القالب:

```html
<div class="testimonial-card">
  <div class="testimonial-stars">★★★★★</div>
  <p class="testimonial-text">
    "نص الشهادة هنا..."
  </p>
  <div class="testimonial-author">
    <img src="../assets/images/clients/client-photo.jpg" alt="اسم العميل">
    <div>
      <h4>اسم العميل</h4>
      <span>اسم الشركة — المسمى الوظيفي</span>
    </div>
  </div>
</div>
```

### مواصفات صور العملاء:
- **الحجم**: 100x100px (مربع)
- **الصيغة**: JPG أو PNG
- **المجلد**: `assets/images/clients/`

=========================================================
## 🔗 روابط السوشيال ميديا — Social Links
=========================================================

### الملف: `js/main.js`
ابحث عن: `// SOCIAL MEDIA LINKS` وأضف الروابط:

```javascript
const socialLinks = {
  facebook:  'https://facebook.com/alghbarigroup',
  instagram: 'https://instagram.com/alghbarigroup',
  linkedin:  'https://linkedin.com/company/alghbarigroup',
  youtube:   'https://youtube.com/@alghbarigroup',
  whatsapp:  'https://wa.me/967770104005'
};
```

=========================================================
## ⚙️ الإعدادات العامة — General Settings
=========================================================

### الملف: `js/main.js`
ابحث عن: `// SITE CONFIGURATION` لتعديل:

```javascript
const siteConfig = {
  name:      'مجموعة الغباري',
  email:     'alghbarigroup@gmail.com',
  phone:     '770104005',
  whatsapp:  '+967770104005',
  location:  'صنعاء، اليمن',
  // أضف روابط السوشيال ميديا هنا
};
```

=========================================================
## 🤖 مساعد الذكاء الاصطناعي — AI Assistant
=========================================================

### المرحلة الحالية:
- الواجهة: ✅ مبنية (زر عائم + نافذة دردشة)
- الردود: ✅ ردود تلقائية مبرمجة مسبقاً
- الذكاء الاصطناعي الحقيقي: 🔧 يتطلب API key

### لتفعيل الذكاء الاصطناعي الحقيقي:
1. احصل على API key من: OpenAI أو Google Gemini
2. في `js/ai-assistant.js` ابحث عن:
   `// AI API CONFIGURATION`
3. أضف المفتاح:

```javascript
const AI_CONFIG = {
  apiKey: 'your-api-key-here',
  model:  'gpt-3.5-turbo', // أو gemini-pro
};
```

=========================================================
## 📊 Google Analytics
=========================================================

### لإضافة Google Analytics:
1. أنشئ حساب في: analytics.google.com
2. احصل على Measurement ID (G-XXXXXXXXXX)
3. في كل ملف HTML، ابحث عن:
   `<!-- GOOGLE ANALYTICS -->`
4. الصق كود التتبع:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

=========================================================
## 🚀 قائمة المهام المتبقية — Pending Tasks
=========================================================

### الأولوية العالية:
- [ ] إضافة الشعار الحقيقي في `assets/images/logo/`
- [ ] إضافة صورة المؤسس في `assets/images/team/founder.jpg`
- [ ] إضافة روابط السوشيال ميديا الحقيقية
- [ ] إضافة صور البورتفوليو الحقيقية
- [ ] إضافة شهادات العملاء الحقيقية

### الأولوية المتوسطة:
- [ ] ربط نموذج التواصل بخدمة إرسال الإيميلات (EmailJS أو Formspree)
- [ ] إضافة Google Analytics
- [ ] إضافة Favicon
- [ ] كتابة مقالات المدونة

### الأولوية المنخفضة (مستقبلي):
- [ ] ربط Supabase للبيانات الديناميكية
- [ ] لوحة الإدارة (Admin Dashboard)
- [ ] بوابة العملاء (Client Portal)
- [ ] تطبيق الجوال (Flutter)

=========================================================
## 📞 الدعم والمساعدة
=========================================================

لأي تعديل أو إضافة، تواصل مع المطور وأذكر:
- اسم الملف الذي تريد تعديله
- رقم السطر (إن وجد)
- التعديل المطلوب

---
آخر تحديث: يونيو 2026
الإصدار: 1.0.0
