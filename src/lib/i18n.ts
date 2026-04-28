import { headers } from "next/headers";
import { localeConfig, type Locale } from "@/config/i18n";

export function getCurrentLocale(): Locale {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";

  // Extract locale from pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const locale = pathSegments[0];

  if (localeConfig.locales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return localeConfig.defaultLocale;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (localeConfig.locales.includes(segments[0] as Locale)) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname;
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);
  return `/${locale}${pathnameWithoutLocale}`;
}
