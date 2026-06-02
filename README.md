# PianoTuningKyiv

Bilingual (Ukrainian / English) marketing landing page for a piano- and grand-piano-tuning
service covering Kyiv and the Kyiv region. Statically rendered, no backend — visitors get in
touch via phone, Telegram, WhatsApp, or email.

## Tech stack

- **Astro 6** — static site generation and routing
- **Tailwind CSS 4** — styling, via the `@tailwindcss/vite` plugin
- **TypeScript** — strict mode (`astro/tsconfigs/strict`)
- Vanilla JS for the scroll-aware header, mobile menu, and scroll-reveal animations
  (no UI framework)

Requires **Node.js ≥ 22.12**.

## Internationalisation

Locales are configured in `astro.config.mjs` with `prefixDefaultLocale: false`:

| Locale        | Route   |
| :------------ | :------ |
| `uk` (default)| `/`     |
| `en`          | `/en/`  |

Content is split into two layers under `src/i18n/`:

- **`translations.ts`** — short UI strings (nav, meta, hero, section headings, footer) as a
  typed `ui` object. `useTranslations(lang)` returns a `t(key)` helper with fallback to the
  default locale, then to the raw key.
- **`content.ts`** — long-form, structured content (services with nested detail blocks,
  prices, and process steps), retrieved per locale via `getServices(lang)`,
  `getPrices(lang)`, and `getSteps(lang)`.

To add or change copy, edit these two files — no markup changes are required.

## Project structure

```text
/
├── public/                 # favicons, logo, robots.txt, sitemap.xml
├── src/
│   ├── assets/             # SVG icons + hero image
│   ├── components/
│   │   └── LandingPage.astro   # all page sections (header, main, footer) + scoped style/script
│   ├── i18n/
│   │   ├── translations.ts     # short UI strings
│   │   └── content.ts          # long-form structured content
│   ├── layouts/
│   │   └── Layout.astro        # HTML document shell, meta, hreflang, analytics
│   ├── pages/
│   │   ├── index.astro         # uk → /
│   │   └── en/index.astro      # en → /en/
│   └── styles/
│       └── global.css          # fonts, CSS vars, base styles
├── astro.config.mjs
└── package.json
```

`Layout.astro` owns the single HTML document (one `<html>`/`<head>`/`<body>`), sets
`<html lang>` from the `lang` prop, emits localized `<title>`/`<meta>` and absolute `hreflang`
links, and loads Google Ads (gtag). The conversion event is gated behind clicks on contact
CTAs (elements tagged `data-conversion-cta`) rather than firing on page load.

## Commands

All commands run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run astro`   | Run Astro CLI commands                       |
