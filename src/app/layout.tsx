import "./globals.css";

import type { Metadata } from "next";
import { inter, cairo, robotoMono } from "@/lib/fonts";
// cairo.variable → --font-cairo  (available for font-arabic class)
// robotoMono.variable → --font-roboto-mono (available for font-mono class)

import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { getCurrentLocale } from "@/lib/i18n";
import { getDirection } from "@/config/i18n";

// Fonts are optimized and exported from src/lib/fonts.ts

export const metadata: Metadata = {
  title: "Global Trade Hub - Wholesale Suppliers from Egypt to the U.S.",
  description:
    "Discover a comprehensive resource hub connecting wholesale suppliers in Egypt with the American market. Explore high-quality products, streamline international trade, and grow your business with our AI-powered platform tailored for global trade success.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico?v=2" },
      {
        url: "/favicon/favicon-16x16.png?v=2",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png?v=2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-96x96.png?v=2",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-icon-180x180.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-152x152.png?v=2",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-144x144.png?v=2",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-120x120.png?v=2",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-114x114.png?v=2",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-76x76.png?v=2",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-72x72.png?v=2",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-60x60.png?v=2",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-57x57.png?v=2",
        sizes: "57x57",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/android-icon-192x192.png?v=2",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-144x144.png?v=2",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-96x96.png?v=2",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-72x72.png?v=2",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-48x48.png?v=2",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-36x36.png?v=2",
        sizes: "36x36",
        type: "image/png",
      },
      {
        url: "/favicon/ms-icon-144x144.png?v=2",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/ms-icon-150x150.png?v=2",
        sizes: "150x150",
        type: "image/png",
      },
      {
        url: "/favicon/ms-icon-310x310.png?v=2",
        sizes: "310x310",
        type: "image/png",
      },
      {
        url: "/favicon/ms-icon-70x70.png?v=2",
        sizes: "70x70",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/manifest.json?v=2",
  other: {
    "msapplication-TileColor": "#4a208a",
    "msapplication-TileImage": "/favicon/ms-icon-144x144.png?v=2",
    "msapplication-config": "/favicon/browserconfig.xml?v=2",
    "theme-color": "#4a208a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getCurrentLocale();
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <body
        className={twMerge(
          inter.className,
          cairo.variable, // exposes --font-cairo for font-arabic class
          robotoMono.variable, // exposes --font-roboto-mono for font-mono class
          "bg-black text-white antialiased",
          dir === "rtl" ? "text-right" : "text-left",
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
