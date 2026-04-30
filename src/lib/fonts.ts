import { Inter } from "next/font/google";

/** Primary UI font — Latin subset, Inter */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

export const fontVariables = {
  inter: inter.variable,
};
