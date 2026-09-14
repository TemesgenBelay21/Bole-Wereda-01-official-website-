# Bole Wereda 1 Official Website

A static, informational website for **Bole Wereda 1**, an administrative division under the **Addis Ababa City Administration**. This is currently a demo built with placeholder content, to be replaced later with real data from the wereda's communication office.

## Tech Stack

- **React** with **Vite**
- Plain CSS Modules — no heavy UI libraries
- No backend — fully static site, no forms, no database
- Icon library: `lucide-react` (tree-shakeable)

## Site Structure

Single-page site with sticky anchor navigation. Sections in order:

1. **Header** — logo/emblem, wereda name, sticky nav, dark/light toggle, language toggle
2. **Hero** — full-width, Emblem Blue background, centered welcome message + CTA button
3. **About** — short paragraph on the wereda's role and identity
4. **Services** — grid of popular citizen-facing services
5. **Gallery** — grid of photos (placeholder for now)
6. **FAQ** — accordion-style expandable questions
7. **Contact** — two-column: contact info on one side, embedded map on the other
8. **Footer** — quick links, wereda/city branding, social links

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
bole-wereda-website/
├── index.html
├── public/
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── gallery/
│       └── icons/
└── src/
    ├── components/
    │   ├── Header/
    │   ├── Hero/
    │   ├── About/
    │   ├── Services/
    │   ├── Gallery/
    │   ├── FAQ/
    │   ├── Contact/
    │   └── Footer/
    ├── context/
    │   ├── ThemeContext.jsx
    │   └── LanguageContext.jsx
    ├── data/
    │   ├── lang-en.js
    │   └── lang-am.js
    ├── App.jsx
    └── main.jsx
```

## Features

- Light/dark mode toggle via CSS custom properties and `data-theme` attribute, persisted via `localStorage`
- Amharic/English language toggle driven by `lang-en.js` / `lang-am.js` translation objects
- Lazy-loaded below-the-fold sections (Gallery, FAQ, Contact) via `React.lazy()` + `Suspense`

## Content Status

Real content (services, contact info, about text, photos) is still being gathered from the wereda's communication office. Current content is realistic-sounding placeholder and is clearly flagged for future replacement.