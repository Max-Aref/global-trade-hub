/**
 * Global Trade Hub — Brand Design System
 * Single source of truth for all design tokens.
 *
 * DO NOT hardcode brand colors, spacing, or radius values anywhere else.
 * Always import from this file or use the generated Tailwind tokens.
 */

export const GTH_BRAND = {
  // ─── IDENTITY ─────────────────────────────────────────────────────────────
  name: "Global Trade Hub",
  nameAr: "المنصة العالمية للتجارة",
  tagline: "Egypt Exports. Global Buyers.",
  taglineAr: "مصر تصدّر. مشترون عالميون.",
  domain: "globaltradehub.com",

  // ─── COLOR PALETTE ────────────────────────────────────────────────────────
  colors: {
    /**
     * Primary — brand purple. Use for CTAs, active states, key accents.
     * 500 is the main brand color (#8c45ff).
     */
    primary: {
      50:  "#f7efff",
      100: "#eedbff",
      200: "#ddb3ff",
      300: "#c987ff",
      400: "#b665ff",
      500: "#8c45ff", // ← MAIN brand purple
      600: "#6b2fd9", // ← hover state
      700: "#4a208a", // ← active / pressed / dark button base
      800: "#2a1548", // ← card / panel backgrounds
      900: "#0a0514", // ← sidebar / deep background
      950: "#190d2e", // ← darkest background / button gradient top
    },

    /**
     * Success — green, used for verified badges, positive stats, check icons.
     */
    success: {
      light: "#d1fae5",
      DEFAULT: "#10b981",
      dark:  "#059669",
    },

    /**
     * Warning — amber, used for pending states, caution badges.
     */
    warning: {
      light: "#fef3c7",
      DEFAULT: "#f59e0b",
      dark:  "#d97706",
    },

    /**
     * Error — red, used for form errors, danger badges, destructive actions.
     */
    error: {
      light: "#fee2e2",
      DEFAULT: "#ef4444",
      dark:  "#dc2626",
    },

    /**
     * Info — blue, used for informational badges only.
     */
    info: {
      light: "#dbeafe",
      DEFAULT: "#3b82f6",
      dark:  "#2563eb",
    },

    /**
     * Neutral — backgrounds, borders, body text on light surfaces.
     * The app is currently dark-only; these are used in cards and forms.
     */
    neutral: {
      0:   "#ffffff",
      50:  "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },

    /**
     * Social brand colors — only for social media icon contexts.
     * Do not use elsewhere.
     */
    social: {
      linkedin:  "#0A66C2",
      twitter:   "#645b5b",
      facebook:  "#1877F2",
      instagram: "#E1306C",
      youtube:   "#FF0000",
      whatsapp:  "#25D366",
    },
  },

  // ─── TYPOGRAPHY ───────────────────────────────────────────────────────────
  typography: {
    fonts: {
      display: "'Inter', system-ui, sans-serif",
      body:    "'Inter', system-ui, sans-serif",
      mono:    "'Roboto Mono', 'Courier New', monospace",
      arabic:  "'Cairo', 'Noto Sans Arabic', sans-serif",
    },
    scale: {
      "display-2xl": { sizePx: 72, lineHeightPx: 90, weight: 700 },
      "display-xl":  { sizePx: 60, lineHeightPx: 72, weight: 700 },
      "display-lg":  { sizePx: 48, lineHeightPx: 60, weight: 700 },
      "display-md":  { sizePx: 36, lineHeightPx: 44, weight: 600 },
      "display-sm":  { sizePx: 30, lineHeightPx: 38, weight: 600 },
      "text-xl":     { sizePx: 20, lineHeightPx: 30, weight: 400 },
      "text-lg":     { sizePx: 18, lineHeightPx: 28, weight: 400 },
      "text-md":     { sizePx: 16, lineHeightPx: 24, weight: 400 },
      "text-sm":     { sizePx: 14, lineHeightPx: 20, weight: 400 },
      "text-xs":     { sizePx: 12, lineHeightPx: 18, weight: 400 },
    },
  },

  // ─── SPACING ──────────────────────────────────────────────────────────────
  // Base unit: 4px. Values match Tailwind's default scale.
  spacing: {
    px:  "1px",
    0:   "0px",
    1:   "4px",
    2:   "8px",
    3:   "12px",
    4:   "16px",
    5:   "20px",
    6:   "24px",
    8:   "32px",
    10:  "40px",
    12:  "48px",
    16:  "64px",
    20:  "80px",
    24:  "96px",
    32:  "128px",
  },

  // ─── BORDER RADIUS ────────────────────────────────────────────────────────
  radius: {
    none: "0px",
    sm:   "4px",
    md:   "8px",
    lg:   "12px",
    xl:   "16px",
    "2xl":"20px",
    "3xl":"24px",
    full: "9999px",
  },

  // ─── SHADOWS ──────────────────────────────────────────────────────────────
  shadows: {
    sm:        "0 1px 2px 0 rgba(0,0,0,0.05)",
    md:        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    lg:        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    xl:        "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
    card:      "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    "card-hover": "0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
    "brand-sm":   "0 0 12px rgba(140,69,255,0.7)",
    "brand-md":   "0 0 20px rgba(140,69,255,0.8)",
    "brand-inset":"0 0 10px rgb(140,69,255,.7) inset",
  },

  // ─── LOGO PATHS ───────────────────────────────────────────────────────────
  // These are the only valid logo references. Never use ad-hoc image paths.
  // Until brand SVGs are created, the Logo component uses the GTHIcon inline SVG.
  logos: {
    primary:   "/brand/gth-logo-primary.svg",
    white:     "/brand/gth-logo-white.svg",
    dark:      "/brand/gth-logo-dark.svg",
    icon:      "/brand/gth-icon.svg",
    iconWhite: "/brand/gth-icon-white.svg",
    favicon:   "/favicon/favicon.ico",
    ogImage:   "/brand/gth-og-image.png",
  },

  // ─── ANIMATION ────────────────────────────────────────────────────────────
  animation: {
    duration: {
      fast:   "100ms",
      normal: "200ms",
      slow:   "300ms",
      slower: "500ms",
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      in:      "cubic-bezier(0.4, 0, 1, 1)",
      out:     "cubic-bezier(0, 0, 0.2, 1)",
      spring:  "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────────────
  breakpoints: {
    sm:   "375px",
    md:   "768px",
    lg:   "1200px",
    xl:   "1280px",
    "2xl":"1536px",
  },
} as const;

// ─── DERIVED CONSTANTS ────────────────────────────────────────────────────────
// Commonly referenced values exported at the top level for convenience.

export const BRAND_PRIMARY   = GTH_BRAND.colors.primary[500];  // "#8c45ff"
export const BRAND_PRIMARY_DARK = GTH_BRAND.colors.primary[700]; // "#4a208a"
export const BRAND_BG_DEEP  = GTH_BRAND.colors.primary[950];   // "#190d2e"
export const BRAND_BG_DARK  = GTH_BRAND.colors.primary[900];   // "#0a0514"
export const BRAND_SUCCESS   = GTH_BRAND.colors.success.DEFAULT; // "#10b981"
export const BRAND_WARNING   = GTH_BRAND.colors.warning.DEFAULT; // "#f59e0b"
export const BRAND_ERROR     = GTH_BRAND.colors.error.DEFAULT;   // "#ef4444"
export const BRAND_WHATSAPP  = GTH_BRAND.colors.social.whatsapp; // "#25D366"

// ─── TYPE EXPORTS ─────────────────────────────────────────────────────────────
export type BrandColorKey    = keyof typeof GTH_BRAND.colors;
export type BrandPrimaryShade = keyof typeof GTH_BRAND.colors.primary;
