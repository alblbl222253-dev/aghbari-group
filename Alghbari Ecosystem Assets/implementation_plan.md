# Alghbari Ecosystem — Website Implementation Plan

## Project Overview

**Alghbari Group** is a premium Yemeni digital agency combining two sub-brands:
- **Alghbari Marketing** — Creative & branding services
- **Alghbari Soft** — Software & AI development services

The goal of Phase 1 is to build a world-class **marketing website** that generates leads, builds trust, showcases the portfolio, and sells services. The design must feel like a combination of Apple, OpenAI, Stripe, Linear, Framer, and Notion — while maintaining a unique Arabic premium identity.

> [!IMPORTANT]
> The website is **bilingual (Arabic primary / English secondary)** with RTL support. Arabic fonts: Alexandria / Cairo. English fonts: Geist / Inter.

---

## User Review Required

> [!WARNING]
> The tech stack specified in the blueprint is **Next.js 15 + TypeScript + Tailwind CSS + Shadcn UI + Framer Motion + Supabase**. This is a full-stack framework requiring Node.js setup. Please confirm whether you want to:
> - **Option A**: Build the full Next.js 15 app (requires npm/Node.js environment)
> - **Option B**: Build a complete, self-contained HTML/CSS/JS multi-page website first (faster, no framework needed, can migrate later)

> [!NOTE]
> Testimonials and social media links are currently **empty** in the files. Placeholder content will be used and can be replaced later.

---

## Proposed Changes

### Phase 1 — Public Website (7 Pages)

---

#### [NEW] Home Page (`/`)

**Sections (in order):**
1. **Navbar** — Logo, nav links (Home, Services, Portfolio, About, Blog, Contact), CTA button ("ابدأ مشروعك")
2. **Hero Section**
   - Headline: *نحو مستقبل رقمي أكثر احترافية وذكاءً*
   - Subheadline: services summary
   - Two CTA buttons: "ابدأ مشروعك" (primary) + "استعرض أعمالنا" (secondary)
   - Aurora animated background, floating glass cards, trust indicators
3. **Statistics** — +50 Projects | +100 Designs | +1000 Work Hours | 100% Client Focus
4. **Services Overview** — Two columns: Alghbari Marketing + Alghbari Soft cards
5. **Featured Projects** — Portfolio preview grid (3–6 items)
6. **Why Choose Us** — 6 reasons with icons
7. **Work Process** — 5-step numbered workflow
8. **Testimonials** — Premium carousel (placeholder cards)
9. **FAQ Preview** — 3–4 questions accordion
10. **CTA Section** — "هل لديك مشروع أو فكرة؟" → "احجز استشارة مجانية"
11. **Footer** — Logo, links, social icons, copyright

---

#### [NEW] Services Page (`/services`)

Two tabbed sections:

**Alghbari Marketing:**
| Service | Description |
|---|---|
| تصميم الشعارات | شعارات احترافية تعكس هوية علامتك |
| الهوية البصرية | ألوان، خطوط، دليل إرشادي |
| إدارة السوشيال ميديا | محتوى + إدارة الحسابات |
| صناعة المحتوى | محتوى تسويقي مؤثر |
| الإعلانات الرقمية | حملات إعلانية + ROI |
| Motion Graphics | - |
| استشارات التسويق | - |

**Alghbari Soft:**
| Service | Description |
|---|---|
| تطوير المواقع | مواقع حديثة + SEO |
| تطبيقات الجوال | Android + iOS |
| الأنظمة المحاسبية | إدارة مالية متكاملة |
| أنظمة ERP | إدارة موارد المؤسسة |
| أنظمة CRM | إدارة العملاء والمبيعات |
| حلول الذكاء الاصطناعي | مساعدون ذكيون + أتمتة |
| التجارة الإلكترونية | - |

Each service card: icon, title, description, CTA button.

---

#### [NEW] Portfolio Page (`/portfolio`)

Filterable masonry grid with categories:
- **الكل** (All)
- **الشعارات** (Logos)
- **الهوية البصرية** (Branding)
- **السوشيال ميديا** (Social Media)
- **المواقع** (Websites)
- **التطبيقات** (Mobile Apps)
- **البرمجيات** (Software)

Features: hover zoom, overlay with project title, lightbox view, smooth filter transitions.
*(Portfolio items will be placeholder cards with generated visuals)*

---

#### [NEW] About Page (`/about`)

Sections:
1. **من نحن** — Company description
2. **رؤيتنا** — To become a leading Arab digital ecosystem in marketing, software and AI
3. **مهمتنا** — Deliver innovative marketing and technology solutions
4. **قيمنا** — Quality, Professionalism, Innovation, Transparency, Continuous Learning, Client Success
5. **قصتنا** — Story of Nabil Alghbari: student of Accounting Information Systems with passion for tech, design, software and AI
6. **المؤسس** — Nabil Alghbari card with bio
7. **مستقبلنا** — Roadmap: client portal, CRM, ERP, accounting, academy, marketplace, mobile app

---

#### [NEW] Blog Page (`/blog`)

Categories: التسويق | الهوية البصرية | التصميم | تطوير المواقع | التطبيقات | الذكاء الاصطناعي | ريادة الأعمال

Displays article cards with: thumbnail, category tag, title, excerpt, date, read more link.
*(First 6 articles from the 30-article plan will be created as placeholder posts)*

---

#### [NEW] FAQ Page (`/faq`)

Accordion-style Q&A covering:
- ما هي الخدمات التي تقدمونها؟
- كيف يمكنني طلب خدمة؟
- هل تقدمون استشارات؟
- كم تستغرق مدة تنفيذ المشاريع؟
- هل تقدمون دعماً بعد التسليم؟
- هل يمكن تنفيذ مشاريع مخصصة؟

---

#### [NEW] Contact Page (`/contact`)

- Contact form: Name, Email, Phone, Service (dropdown), Message
- WhatsApp button (+967 770104005)
- Email: alghbarigroup@gmail.com
- Location: Sana'a, Yemen
- Social media icons (Facebook, Instagram, LinkedIn, YouTube)

---

### Design System

#### Colors
| Token | Hex |
|---|---|
| Primary Background | `#020617` |
| Secondary Background | `#0F172A` |
| Surface / Cards | `#111827` |
| Primary Blue | `#3B82F6` |
| Cyan Accent | `#06B6D4` |
| Luxury Gold | `#F59E0B` |
| Text Primary | `#F8FAFC` |
| Text Secondary | `#CBD5E1` |
| Muted Text | `#94A3B8` |
| Success | `#22C55E` |
| Error | `#EF4444` |

#### Gradients
- Gradient 01: `#3B82F6 → #06B6D4`
- Gradient 02: `#06B6D4 → #F59E0B`
- Gradient 03: `#3B82F6 → #F59E0B`

#### Typography
- Arabic Primary: **Alexandria** (Google Fonts)
- Arabic Alternative: **Cairo**
- English Primary: **Geist**
- English Alternative: **Inter**
- Headings: Bold, Large, Clean
- Spacing base unit: 8px

#### Component Styles
- **Cards**: Glassmorphism, `border-radius: 24px`, 1px border, backdrop-blur
- **Primary Button**: Blue gradient, rounded, subtle glow, lift on hover
- **Secondary Button**: Glass style, blur increase on hover
- **Icons**: Lucide Icons (outline, modern, minimal)

#### Animation System
| Effect | Description |
|---|---|
| Scroll Reveal | Elements animate in as they enter viewport |
| Fade Up / Slide Up / Scale In | Entrance animations |
| Stagger Animations | Sequential card reveals |
| Parallax Motion | Background depth effect |
| Floating Elements | Hero section floating cards |
| Animated Counters | Statistics count up |
| Magnetic Buttons | Buttons attract cursor |
| Spotlight Cursor | Premium cursor glow effect |
| Page Transitions | Smooth between-page navigation |
| Aurora Background | Animated gradient background in hero |

---

### AI Assistant Widget (Floating)

A floating chat widget on all pages that:
- Answers FAQs automatically
- Explains services
- Collects leads (name, email, phone)
- Guides visitors
- Recommends services

Knowledge base: company info, services list, FAQ, policies, contact info.

---

## Technology Stack (as specified)

| Layer | Technology |
|---|---|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn UI |
| Animations | Framer Motion |
| Backend / DB | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Deployment | Vercel |
| Analytics | Google Analytics |
| SEO | Google Search Console |
| Mobile (future) | Flutter |

---

## SEO Requirements

- Meta tags + Open Graph per page
- Structured Data / Schema Markup
- `robots.txt` + `sitemap.xml`
- Canonical URLs
- Semantic HTML5 structure
- Target: **95+ Lighthouse score**
- Mobile-first, WCAG-compliant

---

## Database Tables (Phase 1 scope)

`users` · `clients` · `leads` · `projects` · `project_files` · `messages` · `appointments` · `blog_posts` · `blog_categories` · `testimonials` · `portfolio` · `media` · `settings` · `ai_knowledge` · `ai_conversations` · `support_tickets` · `invoices` · `payments` · `accounts` · `transactions` · `crm_tasks` · `departments` · `employees`

---

## Future Roadmap (Post Phase 1)

| Phase | Feature |
|---|---|
| 2 | Client Portal (login, project tracking, file sharing, messaging) |
| 3 | AI Assistant (full automation, content gen, insights) |
| 4 | CRM + ERP + Project Management |
| 5 | Accounting Platform (P&L, balance sheet, ledger) |
| 6 | Appointment booking, live chat, support tickets |
| 7 | Online Academy (LMS + certificates) |
| 8 | Digital Marketplace (templates, assets, software) |
| 9 | Mobile App (Flutter, Android + iOS) |
| 10 | Business Intelligence Dashboard |

---

## Open Questions

> [!IMPORTANT]
> **1. Tech Stack**: Do you want to proceed with **Next.js 15** (full framework) or start with a **pure HTML/CSS/JS** version first?

> [!IMPORTANT]
> **2. Language**: Should the website be **Arabic only**, **English only**, or **bilingual** with a language switcher?

> [!IMPORTANT]
> **3. Logo**: No logo file was found in the `01_Brand/Logo` folder. Should I generate a logo placeholder, or do you have a logo file to provide?

> [!IMPORTANT]
> **4. Portfolio**: The portfolio folders (Logos, Social Media, Websites, Mobile Apps, Visual Identity) are empty. Should I use AI-generated placeholder images, or wait for real assets?

> [!NOTE]
> **5. Testimonials**: The testimonials file is empty. Should I use placeholder/fictional testimonials for now?

> [!NOTE]
> **6. Pricing**: No pricing data was found. Should I add a pricing section, or keep it as "Contact for quote"?
