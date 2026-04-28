import { Inter, Roboto_Mono, Cairo } from "next/font/google";

/** Primary UI font — Latin subset, Inter */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

/** Monospace font — IDs, codes, numeric data */
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["monospace"],
  variable: "--font-roboto-mono",
});

/**
 * Arabic UI font — Cairo supports Arabic + Latin.
 * Apply via `font-arabic` Tailwind class or `[dir="rtl"]` CSS selector.
 */
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  preload: false,
  fallback: ["Noto Sans Arabic", "sans-serif"],
  variable: "--font-cairo",
});

export const fontVariables = {
  inter:      inter.variable,
  robotoMono: robotoMono.variable,
  cairo:      cairo.variable,
};
