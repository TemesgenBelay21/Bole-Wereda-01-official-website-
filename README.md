# Bole Wereda 1 Official Website

A static, informational single-page website for **Bole Wereda 1**, an administrative division under the **Addis Ababa City Administration**. The site is a fully static, client-only front end — no backend, no forms, no database.

## Tech Stack

- **React** with **Vite**
- Plain **CSS Modules** — no heavy UI libraries
- Icon library: `lucide-react` (tree-shakeable) + inline SVG brand marks
- No backend — fully static and hostable on GitHub Pages, Netlify, or Vercel

## Site Structure

Single-page site with sticky anchor navigation. Sections in order:

1. **Header** — Addis Ababa City logo image, wereda name, sticky nav with scroll-spy active states, dark/light toggle, Amharic/English toggle, mobile menu
2. **Hero** — direct banner image with navy/blue overlay, formal welcome message and CTA buttons
3. **About** — formal introduction to the wereda as the local administrative unit closest to citizens, plus institutional value pillars
4. **Services** — grid of the 12 citizen-facing service offices (3-col desktop / 2 tablet / 1 mobile)
5. **Gallery** — responsive photo grid that auto-loads every image placed in `public/images/gallery/`
6. **FAQ** — accessible accordion with six frequently asked questions
7. **Contact** — office address, telephone, email, working hours, social links, and embedded map
8. **Footer** — wereda branding, quick links, contact summary

## Getting Started

```bash
npm install
npm run dev
```

Build for production (always verify with a production build):

```bash
npm run build
npm run preview
```

## Project Structure

```
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
    │   └── lang-am.js   → formal Amharic content (fully rewritten)
    ├── App.jsx
    └── main.jsx
```

## Features

- **Design system** — Emblem Blue `#03438A` (`--primary-blue`), Midnight Navy `#0A1128` (`--midnight-navy`), Accessible Sky Blue `#1E6FBF` (`--sky-blue`), Soft Cream `#F4F1DE` (`--soft-cream`), Pure White `#FFFFFF` (`--pure-white`), Muted Canvas `#FAF9F5` (`--muted-bg`), Charcoal `#1C1C1C` (`--charcoal-text`), exposed as CSS custom properties
- **Light/dark mode** — `data-theme` attribute over deep-blue palette, persisted via `localStorage`, default respects system preference
- **Amharic/English toggle** — all content driven by `lang-en.js` / `lang-am.js` translation objects; on-screen text never hardcoded
- **Motion** — IntersectionObserver scroll-reveal, card hover lifts, accordion expansion, respecting `prefers-reduced-motion`
- **Accessibility** — skip-to-content link, `aria-expanded`/`aria-controls` on the accordion, visible focus rings, semantic landmarks

## Content Status

- All English copy (About, 12 services, 6 FAQs, Contact, Footer) is written in a formal, professional, civic tone.
- The Amharic copy in `src/data/lang-am.js` has been fully rewritten in a formal, professional, civic tone matching the English version.
- The brand is built on a seven-token canvas palette: `--soft-cream`, `--pure-white`, `--muted-bg`, `--primary-blue`, `--sky-blue`, `--midnight-navy`, `--charcoal-text`.
- The header logo and favicon use `public/images/logo/The-Addis-Ababa-City.jpg`; the hero banner is rendered as a direct `<img>` rather than a CSS background.
- **Contact details (telephone, email, social profiles, map) are placeholders** and must be replaced with the wereda's official information before launch.
- Gallery currently contains one photo; new photos dropped into `public/images/gallery/` are picked up automatically on rebuild.