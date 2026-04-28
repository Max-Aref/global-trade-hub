import { NextRequest, NextResponse } from "next/server";
import { localeConfig } from "@/config/i18n";

// Function to match locale variants (e.g., 'ar-EG' to 'ar')
function matchLocaleVariant(locale: string): string | undefined {
  // First, check exact matches
  if (localeConfig.locales.includes(locale as any)) {
    return locale;
  }

  // Then check locale redirects
  for (const [pattern, target] of Object.entries(
    localeConfig.localeRedirects,
  )) {
    if (pattern.endsWith("*")) {
      const prefix = pattern.slice(0, -1);
      if (locale.startsWith(prefix)) {
        return target;
      }
    }
  }
  return undefined;
}

// Function to get the preferred locale from accept-language header
function getPreferredLocale(request: NextRequest): string {
  // Check if there's a locale cookie first
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (localeCookie && localeConfig.locales.includes(localeCookie as any)) {
    return localeCookie;
  }

  // Get accepted languages from the header
  const acceptedLanguages = request.headers.get("accept-language");
  if (acceptedLanguages) {
    // Parse the accept-language header
    const languages = acceptedLanguages
      .split(",")
      .map((lang) => {
        const [language, weight = "1"] = lang.trim().split(";q=");
        return { language: language.split("-")[0], weight: parseFloat(weight) };
      })
      .sort((a, b) => b.weight - a.weight);

    // Find the first matching locale
    for (const { language } of languages) {
      const match = matchLocaleVariant(language);
      if (match) {
        return match;
      }
    }
  }

  return localeConfig.defaultLocale;
}

// Initial launch: only serve users from Egypt.
// Set ALLOW_ALL_COUNTRIES=true in env to disable the geo-gate.
const ALLOWED_COUNTRIES = ["EG"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude files and API routes from locale detection
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/static/") ||
    pathname.includes(".") // Files like favicon.ico, etc.
  ) {
    return;
  }

  // Geo-restrict to Egypt during initial launch.
  // Vercel populates `request.geo` and `x-vercel-ip-country` automatically.
  if (
    process.env.ALLOW_ALL_COUNTRIES !== "true" &&
    pathname !== "/unavailable"
  ) {
    const country =
      request.geo?.country || request.headers.get("x-vercel-ip-country") || "";

    // Only enforce when we actually have a country signal (skips localhost/dev).
    if (country && !ALLOWED_COUNTRIES.includes(country)) {
      const url = request.nextUrl.clone();
      url.pathname = "/unavailable";
      url.search = "";
      return NextResponse.rewrite(url);
    }
  }

  // Get the first path segment (if any)
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = pathSegments[0];

  // Check if current path already has a valid locale
  if (localeConfig.locales.includes(currentLocale as any)) {
    return;
  }

  // Get the preferred locale
  const preferredLocale = getPreferredLocale(request);

  // Create new URL with locale prefix
  const newUrl = new URL(`/${preferredLocale}${pathname}`, request.url);

  // Preserve query parameters
  newUrl.search = request.nextUrl.search;

  // Create response with redirect
  const response = NextResponse.redirect(newUrl);

  // Set locale cookie
  response.cookies.set("NEXT_LOCALE", preferredLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });

  return response;
}

export const config = {
  // Match all paths except for specific prefixes/files
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};
