import "./globals.css";

import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { getCurrentLocale } from "@/lib/i18n";
import { getDirection } from "@/config/i18n";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Global Trade Hub - Wholesale Suppliers from Egypt to the U.S.",
  description:
    "Discover a comprehensive resource hub connecting wholesale suppliers in Egypt with the American market. Explore high-quality products, streamline international trade, and grow your business with our AI-powered platform tailored for global trade success.",
  keywords: [
    "wholesale suppliers",
    "Egypt exporters",
    "US market",
    "international trade",
    "B2B platform",
    "global trade",
    "AI-powered trade",
    "export business",
    "manufacturing",
    "suppliers directory"
  ],
  authors: [{ name: "Global Trade Hub" }],
  creator: "Global Trade Hub",
  publisher: "Global Trade Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://global-trade-hub.vercel.app",
    title: "Global Trade Hub - Wholesale Suppliers from Egypt to the U.S.",
    description:
      "Connect wholesale suppliers in Egypt with the American market through our AI-powered platform.",
    siteName: "Global Trade Hub",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Global Trade Hub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Trade Hub - Wholesale Suppliers from Egypt to the U.S.",
    description:
      "Connect wholesale suppliers in Egypt with the American market through our AI-powered platform.",
    images: ["/favicon/android-chrome-512x512.png"],
    creator: "@GlobalTradeHub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-167x167.png",
        sizes: "167x167",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
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
          "bg-black text-white antialiased font-sans",
          dir === "rtl" ? "text-right" : "text-left"
        )}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
