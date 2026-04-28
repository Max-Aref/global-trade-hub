# Feature Card Illustration Credits
## Global Trade Hub — Visual Asset Registry

All illustrations in this directory are **custom SVG files** generated
specifically for Global Trade Hub. They are proprietary assets.

---

### buyers-access.svg
- **Type:** Custom SVG illustration
- **Concept:** Animated trade-route globe connecting Cairo, Egypt to New York, USA
- **Created:** 2026-04-26
- **License:** Proprietary — owned by Global Trade Hub
- **Animations:** CSS `stroke-dasharray` march (trade arc) + SMIL pulse rings on nodes
- **Colors:** Brand palette — `#8c45ff` (primary), `#b665ff` (accent), `#4a208a` (dark)
- **Notes:** SMIL animations work in Chrome, Firefox, Safari, Edge (Chromium). No JS required.

### market-analytics.svg
- **Type:** Custom SVG illustration
- **Concept:** AI analytics dashboard — animated line chart drawing itself, +300% callout
- **Created:** 2026-04-26
- **License:** Proprietary — owned by Global Trade Hub
- **Animations:** CSS `stroke-dashoffset` draw-on (chart line) + CSS opacity fade (fill + callout)
- **Colors:** Brand palette + `#10b981` (success green for the +300% stat)
- **Notes:** `stroke-dasharray: 620` covers the full path length. Loops every 4s with hold.

### zero-cost.svg
- **Type:** Custom SVG illustration
- **Concept:** "$0" hero text with animated 4-pointed sparkles and pulsing rings
- **Created:** 2026-04-26
- **License:** Proprietary — owned by Global Trade Hub
- **Animations:** CSS `@keyframes twinkle` (staggered on 6 sparkles) + SMIL ring expansion
- **Colors:** Brand palette. Three-layer "$0" text (blur glow → outline → solid fill).

### expert-support.svg
- **Type:** Custom SVG illustration
- **Concept:** 24/7 multilingual support hub — headset icon with signal rings and language badges
- **Created:** 2026-04-26
- **License:** Proprietary — owned by Global Trade Hub
- **Animations:** SMIL expanding signal waves + CSS badge pulse (EN, عربي, FR, ES, TR)
- **Colors:** Brand palette. Arabic text uses Cairo system font fallback.
- **Notes:** Arabic "عربي" badge uses `font-family="Cairo,system-ui,sans-serif"`.
  Cairo is loaded as a Next.js Google font variable — available when SVG is in the DOM.
  When loaded as `<img>`, system Arabic fonts are used instead (acceptable fallback).

---

## Image Sourcing Decision Log

**Date:** 2026-04-26

**Track A (Stock Photos — Pexels/Pixabay):** Not executed.
- Pexels/Pixabay APIs require keys not available in the build environment.
- Stock photos scored lower than custom SVGs on brand fit (6/10 vs 10/10)
  and uniqueness (3/10 vs 10/10).

**Track B (Custom SVG Illustrations):** Selected for all 4 cards.
- Brand colors guaranteed exact (sourced from `src/lib/brand.ts`)
- Infinite resolution — no degradation on any screen density
- Animated — communicates platform energy and life
- No attribution required, no license risk
- Average file size: ~4KB per SVG (vs ~150KB for an optimised WebP photo)

**Stock image sources evaluated (for future use):**
- Pexels (pexels.com) — CC0, free commercial use, no attribution required
- Pixabay (pixabay.com) — CC0, free commercial use, no attribution required
- unDraw (undraw.co) — MIT, flat illustration style, customisable color
- Storyset (storyset.com) — Free with attribution, animated SVGs

---

## Replacing an Illustration with a Photo

1. Source a WebP image (min 800×500px, max 200KB) from Pexels or Pixabay.
2. Place it in `/public/images/feature-cards/[card-id].webp`.
3. In `src/lib/card-assets.ts`, update the card entry:
   ```ts
   type: "photo",
   src:  "/images/feature-cards/[card-id].webp",
   blurDataURL: "data:image/webp;base64,...",
   credit: { photographer: "...", source: "Pexels", url: "...", license: "Pexels License" },
   ```
4. In `src/sections/WhyToJoinUS.tsx`, the `<img>` tag handles both types — no code change needed.
5. Update this CREDITS.md with the photo attribution.
