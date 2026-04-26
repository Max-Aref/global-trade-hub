import type { Config } from "tailwindcss";

/**
 * Global Trade Hub — Tailwind Configuration
 * All brand values sourced from src/lib/brand.ts.
 * Use `brand-*`, `success-*`, `warning-*`, `error-*` classes everywhere.
 * Never use generic Tailwind color classes (purple-*, blue-*) for brand colors.
 */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // ─── Brand primary scale ───────────────────────────────────────────
        // Usage: bg-brand-500 / text-brand-400 / border-brand-700 etc.
        brand: {
          50:  "#f7efff",
          100: "#eedbff",
          200: "#ddb3ff",
          300: "#c987ff",
          400: "#b665ff",
          500: "#8c45ff", // main brand purple
          600: "#6b2fd9", // hover
          700: "#4a208a", // active / dark button base
          800: "#2a1548", // card / panel backgrounds
          900: "#0a0514", // sidebar / deep background
          950: "#190d2e", // darkest background
        },

        // ─── Semantic colors ──────────────────────────────────────────────
        success: {
          light:   "#d1fae5",
          DEFAULT: "#10b981",
          dark:    "#059669",
        },
        warning: {
          light:   "#fef3c7",
          DEFAULT: "#f59e0b",
          dark:    "#d97706",
        },
        error: {
          light:   "#fee2e2",
          DEFAULT: "#ef4444",
          dark:    "#dc2626",
        },
        info: {
          light:   "#dbeafe",
          DEFAULT: "#3b82f6",
          dark:    "#2563eb",
        },

        // ─── Social brand colors ──────────────────────────────────────────
        // Only use these for social media icon contexts.
        social: {
          whatsapp:  "#25D366",
          linkedin:  "#0A66C2",
          facebook:  "#1877F2",
          instagram: "#E1306C",
          youtube:   "#FF0000",
        },
      },

      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
        arabic:  ["Cairo", "Noto Sans Arabic", "sans-serif"],
        mono:    ["Roboto Mono", "Courier New", "monospace"],
      },

      borderRadius: {
        none: "0px",
        sm:   "4px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        "2xl":"20px",
        "3xl":"24px",
        full: "9999px",
      },

      boxShadow: {
        card:          "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover":  "0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
        "brand-sm":    "0 0 12px rgba(140,69,255,0.7)",
        "brand-md":    "0 0 20px rgba(140,69,255,0.8)",
        "brand-inset": "0 0 10px rgb(140,69,255,.7) inset",
      },

      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInUp: {
          from: { opacity: "0", transform: "translateY(60px) scale(0.95)" },
          to:   { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        shimmer: {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      animation: {
        "fade-in":    "fadeIn 200ms cubic-bezier(0, 0, 0.2, 1)",
        "slide-up":   "slideUp 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-in-up":"slideInUp 600ms ease-out",
        shimmer:      "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
