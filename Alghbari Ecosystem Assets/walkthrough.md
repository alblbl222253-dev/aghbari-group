# Alghbari Ecosystem — Walkthrough & Completion Document

This walkthrough details the work done to finalize the public bilingual marketing website for **Alghbari Group** (consisting of **Alghbari Marketing** and **Alghbari Soft**).

---

## 📁 Project File Structure

Below is the directory structure that has been created and populated:

```
website/
├── index.html                    # Home page
├── ASSETS_GUIDE.md               # Asset specifications (pre-existing)
│
├── pages/                        # Multi-page website subpages
│   ├── services.html             # Services tabbed pages
│   ├── portfolio.html            # Portfolio grid filter page
│   ├── about.html                # About page, founder bio & roadmap
│   ├── blog.html                 # Blog articles list
│   ├── faq.html                  # Accordion-style Q&A
│   └── contact.html              # Contact lead form & channels
│
├── css/                          # Stylesheets (pre-existing)
│   ├── style.css                 # Complete design system styles
│   └── animations.css            # Advanced animations system
│
├── js/                           # JavaScript modules
│   ├── main.js                   # Navigation and utilities
│   ├── animations.js             # Scroll reveal and spotlights
│   └── ai-assistant.js           # Floating chatbot widget
│
└── assets/                       # Brand and team media files
    ├── images/
    │   ├── logo/
    │   │   ├── logo-main.png     # Transparent primary logo
    │   │   ├── logo-white.png    # Secondary white logo
    │   │   └── logo-icon.png     # Favicon / small icon logo
    │   └── team/
    │       └── founder.jpg       # Profile photo of Nabil Alghbari
```

---

## 🛠️ Key Additions & Functionalities

### 1. Brand Asset Integration
- Transparent brand logos and the founder profile image were successfully retrieved from conversation artifacts and copied into the correct destinations inside `assets/images/logo/` and `assets/images/team/`.
- All pages link to these images dynamically (relative file paths are automatically adjusted between root and subdirectory pages).

### 2. Core Interactive Utilities (`js/main.js`)
- **Responsive Mobile Navigation**: A collapsible hamburger menu with smooth transitions on small screens.
- **Scroll Navbar Class**: The navbar goes from fully transparent at the top to frosted glass backdrop blur upon scrolling down 20px.
- **Year Auto-updater**: The footer copyright year is automatically updated to the current year.

### 3. Scroll Reveal & Hover Effects (`js/animations.js`)
- **IntersectionObserver Engine**: Reveal animations (`reveal`, `reveal-scale`, `reveal-right`, `reveal-left`) trigger automatically as elements come into view, making the site feel fluid and modern.
- **Spotlight Hover Glow**: Interactive `.spotlight-card` items dynamically follow the cursor, updating CSS variables `--mouse-x` and `--mouse-y` for a glassmorphism glow.
- **Metric Counters**: Metric indicators count up from 0 to their target number dynamically using a 2-second timing function.
- **Decorative Elements**: 25 floating particle items are generated dynamically inside the hero section to create an immersive digital atmosphere.

### 4. Bilingual Interactive Chatbot (`js/ai-assistant.js`)
- A floating chat widget is fully integrated.
- It comes preloaded with information about the differences between **Alghbari Soft** and **Alghbari Marketing**, Nabil Alghbari's bio, workflows, and pricing.
- Users can click on pre-designed suggestion chips to prompt the chatbot.
- It features an automated **lead capture dialog** sequence (asking for Name ➔ Phone ➔ Email ➔ Project Details) that triggers a green success toast when complete.

---

## 🎨 Page Summaries

1. **Home Page (`index.html`)**: Features the full branding layout, animated hero section with glowing orbs, quick overview cards of the two sub-brands, featured projects preview, 6 reasons why choose us, work process stages, testimonials, and footer.
2. **Services Page (`pages/services.html`)**: Interactive tabs switching between Marketing (Logos, Visual Identity, Social Media management) and Soft (Websites, Apps, ERPs, CRM, AI solutions). It parses query arguments so that coming from `index.html` with `?tab=soft` automatically shows the software tab.
3. **Portfolio Page (`pages/portfolio.html`)**: Filterable masonry grid of 6 categorized mock project cards styled with harmonious linear gradients and translucent logos.
4. **About Page (`pages/about.html`)**: Visually engaging story layout detailing Nabil Alghbari's academic accounting system background merged with tech expertise. Includes an active future roadmap timeline.
5. **Blog Page (`pages/blog.html`)**: Features search input filtering articles dynamically and 5 category filter buttons for the 6 initial placeholder articles.
6. **FAQ Page (`pages/faq.html`)**: Large frosted accordion list with real-time text query search filtering questions instantly.
7. **Contact Page (`pages/contact.html`)**: Houses the `contactForm` alongside direct links to the green WhatsApp support line, email, location details, and a dark-mode styled responsive Google Map embed of Sana'a.
