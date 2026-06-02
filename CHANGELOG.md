# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-06-02

First production-ready release. Structural, SEO, and analytics fixes over the
initial scaffold.

### Fixed
- **Document structure.** Consolidated the HTML document shell into
  `Layout.astro`. Previously `LandingPage.astro` rendered its own full
  `<!doctype>`/`<html>`/`<head>`/`<body>`, which the Ukrainian page then nested
  inside `Layout.astro`, producing a malformed double-document. Each page now
  renders a single, valid HTML document.
- **Language attribute.** `<html lang>` is now driven by a `lang` prop and
  reflects the locale (`uk` on `/`, `en` on `/en/`) instead of being hard-coded
  to `uk`.
- **Analytics consistency.** The English page previously skipped `Layout.astro`
  and therefore had no Google Ads (gtag) tag. Analytics now load on both pages.
- **Conversion tracking.** The Google Ads `conversion` event no longer fires on
  every page load. It is gated behind clicks on contact CTAs (phone, Telegram,
  WhatsApp) via the `data-conversion-cta` hook.
- **SEO hreflang.** `hreflang` links now use absolute URLs
  (`https://pianotuningkyiv.pro/…`) instead of relative paths.
- **Sitemap.** `public/sitemap.xml` now includes the `/en/` route with hreflang
  alternates, not just the root.

### Changed
- Both page routes (`src/pages/index.astro`, `src/pages/en/index.astro`) now
  wrap `<LandingPage>` in `<Layout>` identically, differing only by `lang`.
- Replaced the boilerplate Astro starter `README.md` with real project
  documentation (stack, i18n structure, routing, commands).

### Notes
- No changes to visual design, copy, fonts, color palette, or animations.
- Strict TypeScript (`astro/tsconfigs/strict`) preserved.

## [0.0.1] - Initial

- Initial Astro + Tailwind scaffold of the PianoTuningKyiv bilingual landing page.
