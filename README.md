# Bole Wereda 1 Official Website

A static, informational single-page website for **Bole Wereda 1**, an administrative division under the **Addis Ababa City Administration**. The site is a fully static, client-only front end — no backend, no forms, no database.

## Tech Stack

- **React** with **Vite**
- Plain **CSS Modules** — no heavy UI libraries
- Icon library: `lucide-react` (tree-shakeable) + inline SVG brand marks
- No backend — fully static and hostable on GitHub Pages, Netlify, or Vercel

## Site Structure

Single-page site with sticky anchor navigation. Sections in order:

1. **Header** — emblem logo, wereda name, sticky nav with scroll-spy active states, dark/light toggle, Amharic/English toggle, mobile menu
2. **Hero** — full-width banner photo with navy/blue overlay, formal welcome message and CTA buttons
3. **About** — formal introduction to the wereda as the local administrative unit closest to citizens, plus institutional value pillars
4. **Services** — grid of the 12 citizen-facing service offices (3-col desktop / 2 tablet / 1 mobile)
5. **Gallery** — responsive photo grid that auto-loads every image placed in `public/images/gallery/`
6. **FAQ** — accessible accordion with six frequently asked questions
7. **Contact** — office address, telephone, email, working hours, social links, and embedded map
8. **Footer** — wereda branding, quick links, contact summary

## Getting Started

```bash
cd bole-wereda-website
npm install
npm run dev
```

Build for production (always verify with a production build):

```bash
cd bole-wereda-website
npm run build
npm run preview
```

## Project Structure

```
bole-wereda-website/
├── index.html
├── public/
│   └── images/
│       ├── hero/        → banner photo (hero.jpg)
│       └── gallery/     → photos auto-loaded by the Gallery section
└── src/
    ├── styles/
    │   └── global.css   → design tokens, base styles, dark theme, utilities
    ├── components/
    │   ├── Header/      (with scroll-spy + toggles)
    │   ├── Hero/
    │   ├── About/
    │   ├── Services/
    │   ├── Gallery/
    │   ├── FAQ/
    │   ├── Contact/     (includes BrandIcons.jsx)
    │   ├── Footer/
    │   ├── BackToTop/
    │   └── SkipLink/
    ├── context/
    │   ├── ThemeContext.jsx
    │   └── LanguageContext.jsx
    ├── data/
    │   ├── lang-en.js   → formal English content
    │   └── lang-am.js   → placeholder Amharic (flagged for native review)
    ├── App.jsx
    └── main.jsx
```

## Features

- **Design system** — Emblem Blue `#03438A`, Midnight Navy `#0A1128`, Accessible Sky Blue `#1E6FBF`, Soft Cream `#F4F1DE`, Charcoal `#1C1C1C`, exposed as CSS custom properties
- **Light/dark mode** — `data-theme` attribute over deep-blue palette, persisted via `localStorage`, default respects system preference
- **Amharic/English toggle** — all content driven by `lang-en.js` / `lang-am.js` translation objects; on-screen text never hardcoded
- **Motion** — IntersectionObserver scroll-reveal, card hover lifts, accordion expansion, respecting `prefers-reduced-motion`
- **Accessibility** — skip-to-content link, `aria-expanded`/`aria-controls` on the accordion, visible focus rings, semantic landmarks

## Content Status

- All English copy (About, 12 services, 6 FAQs, Contact, Footer) is written in a formal, professional, civic tone.
- **Amharic copy is placeholder machine-style text** and is flagged in `src/data/lang-am.js`; it MUST be reviewed and corrected by a fluent Amharic-speaking reviewer before public launch.
- **Contact details (telephone, email, social profiles, map) are placeholders** and must be replaced with the wereda's official information before launch.
- Gallery currently contains one photo; new photos dropped into `public/images/gallery/` are picked up automatically on rebuild.