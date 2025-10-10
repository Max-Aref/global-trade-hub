import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { getCurrentLocale } from "@/lib/i18n";
import { getDirection } from "@/config/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Trade Hub - Wholesale Suppliers from Egypt to the U.S.",
  description:
    "Discover a comprehensive resource hub connecting wholesale suppliers in Egypt with the American market. Explore high-quality products, streamline international trade, and grow your business with our AI-powered platform tailored for global trade success.",
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
          "bg-black text-white antialiased",
          dir === "rtl" ? "text-right" : "text-left"
        )}
      >
        {children}
        
        {/* Global Trade Hub AI Chat Assistant */}
        <Script 
          src="/ai-chat-assistant/index.js" 
          strategy="afterInteractive"
        />
        <Script id="gth-chat-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                if (window.GTHChat) {
                  window.GTHChat.init({
                    apiKey: '${process.env.NEXT_PUBLIC_CLAUDE_API_KEY || 'demo-mode'}',
                    theme: {
                      primaryColor: '#8c45ff',
                      secondaryColor: '#190d2e',
                      accentColor: '#4a208a',
                      position: 'bottom-right'
                    },
                    greeting: 'Welcome to Global Trade Hub! How can I assist you with your trade inquiries today?',
                    placeholder: 'Ask about trade, logistics, regulations...',
                    persistHistory: true
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
