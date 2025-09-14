export const localeConfig = {
  defaultLocale: "en",
  locales: ["en", "ar"],
  // Add any locale-specific redirects or path rewrites here
  localeRedirects: {
    "ar-*": "ar", // Match any Arabic variants to main Arabic
    "en-*": "en", // Match any English variants to main English
  },
} as const;

export type Locale = (typeof localeConfig.locales)[number];

// Helper to check if a locale is RTL
export const isRTL = (locale: Locale) => {
  return locale === "ar";
};

// Helper to get the direction for a locale
export const getDirection = (locale: Locale) => {
  return isRTL(locale) ? "rtl" : "ltr";
};
