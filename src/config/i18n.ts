export const localeConfig = {
  defaultLocale: "en",
  locales: ["en"],
} as const;

export type Locale = (typeof localeConfig.locales)[number];

export const isRTL = (_locale: Locale) => false;

export const getDirection = (_locale: Locale) => "ltr" as const;
