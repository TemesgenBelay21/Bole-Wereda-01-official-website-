# Project Prompt: Bole Wereda 1 Website

Build a static, informational website for **Bole Wereda 1**, an administrative division under the **Addis Ababa City Administration**. This is currently a demo built with placeholder content, to be replaced later with real data from the wereda's communication office.

## Objective
Create a friendly, modern, well-designed, and attractive website that improves the wereda's digital presence and stands out compared to other wereda websites in the subcity.

## Tech Stack
- **React** with **Vite** (not Create React App)
- No backend — fully static site, no forms, no database
- Plain CSS (or lightweight utility approach) — avoid heavy UI libraries like Bootstrap/MUI
- Use a tree-shakeable icon library (e.g. `lucide-react`) instead of a large icon pack
- Hosted as static files (GitHub Pages, Netlify, or Vercel)

## Site Structure
Single-page site with sticky anchor navigation. Sections, in order:
1. **Header** — logo/emblem, wereda name, sticky nav (Home, About, Services, Gallery, FAQ, Contact), dark/light toggle, language toggle
2. **Hero** — full-width, Emblem Blue background, centered welcome message + CTA button
3. **About** — short paragraph on the wereda's role and identity
4. **Services** — grid of popular citizen-facing services (not organized by internal office/sector), 3 columns desktop / 2 tablet / 1 mobile, card-based
5. **Gallery** — grid of photos (placeholder for now)
6. **FAQ** — accordion-style expandable questions
7. **Contact** — two-column: phone/address/social icons on one side, embedded map on the other
8. **Footer** — quick links, wereda/city branding, social links

Excluded on purpose: Announcements/News (no update mechanism since site is static), Leadership section, Downloads/Resources.

## Component Folder Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   ├── ThemeContext.jsx      (light/dark mode state)
│   └── LanguageContext.jsx   (EN/AM state + translation lookup)
├── data/
│   ├── lang-en.js
│   └── lang-am.js
├── App.jsx
└── main.jsx
```

## Color Palette
Derived from the actual Addis Ababa City Administration emblem, accessibility-checked (WCAG contrast ratios verified):
- **Primary:** Emblem Blue `#03438A` — headers, key UI elements
- **Secondary:** Midnight Navy `#0A1128` — footer, nav background, high-contrast sections
- **Accent:** Accessible Sky Blue `#1E6FBF` — buttons, links, hover states
- **Light Neutral:** Soft Cream `#F4F1DE` — page/card backgrounds
- **Text/Dark Neutral:** Charcoal `#1C1C1C` — body text on light backgrounds

Usage rule: white text on Primary/Secondary/Accent; Charcoal text on Soft Cream/white. Avoid Primary text directly on Secondary or Charcoal backgrounds (low contrast).

## Typography
- Single font family, varying only by weight (e.g. Inter or Work Sans — both legible and support Amharic reasonably well)
- Hero heading: ~40-48px, bold/semi-bold
- Section headings: ~28-32px, semi-bold
- Card titles: ~16-18px, medium
- Body text: ~15-16px, regular, line-height ~1.6
- Small text (footer/labels): ~13px
- Headings may use Primary/Secondary blue instead of pure Charcoal for brand consistency
- Constrain paragraph line-length to ~60-75 characters even on wide screens

## Layout Notes
- Centered container, max-width ~1200px, consistent horizontal padding
- Generous vertical section padding (60-100px desktop, less on mobile)
- Sticky navigation bar
- Card grids: consistent height/padding across cards, subtle shadow or light border (not heavy outlines)

## Features
- **Light/Dark mode toggle** — implemented via CSS custom properties with a data-theme attribute (or React context), persisted via localStorage
- **Amharic/English language toggle** — content driven from `lang-en.js` / `lang-am.js` translation objects, not hardcoded text in components. Amharic content will use Google-translated placeholder text for now, clearly flagged for future review by an Amharic-fluent reviewer before public launch.

## Performance Requirements
- Use Vite for smaller, optimized production builds
- Minimize dependencies — no heavy UI/icon libraries
- Lazy-load below-the-fold sections (Gallery, FAQ, Contact) via `React.lazy()` + `Suspense`
- Optimize all images: modern formats (WebP/AVIF), compressed, `loading="lazy"` on offscreen images
- Always evaluate performance from a production build (`npm run build`), not dev mode
- No server-side rendering needed — this is a fully static, client-only site

## Content Status
Real content (services, contact info, about text, photos) is still being gathered from the wereda's communication office. Build with realistic-sounding placeholder content now (e.g. actual-style service names like "Kebele ID Renewal," "Business License Registration") so structure isn't blocked, and mark clearly which content is placeholder vs. confirmed.