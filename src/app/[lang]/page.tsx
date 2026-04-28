import type { Metadata } from "next";
import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { LogoTicker } from "@/sections/LogoTicker";
import { ManufacturersShowcase } from "@/sections/ManufacturersShowcase";
import { WhyToJoinUS } from "@/sections/WhyToJoinUS";
import { WhyExportersChooseUs } from "@/sections/WhyExportersChooseUs";
import { PricingTransparency } from "@/sections/PricingTransparency";
import { BuyerNetworkShowcase } from "@/sections/BuyerNetworkShowcase";
import { localeConfig, type Locale } from "@/config/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltradehub.com";

export const metadata: Metadata = {
  title: "Global Trade Hub — Connect Egyptian Exporters with U.S. Buyers",
  description:
    "Access 50,000+ verified U.S. importers, retailers, and distributors. AI-powered market analytics. Zero cost to start. Egypt's leading B2B export platform.",
  keywords: [
    "B2B export platform",
    "Egyptian exporters",
    "US market access",
    "import export",
    "global trade",
    "منصة تجارة دولية",
    "تصدير مصر",
  ],
  authors: [{ name: "Global Trade Hub" }],
  creator: "Global Trade Hub",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: siteUrl,
    siteName: "Global Trade Hub",
    title: "Global Trade Hub — Unlock the U.S. Market",
    description:
      "Egypt's #1 B2B export platform. Connect with verified U.S. buyers in minutes.",
    images: [
      {
        url: "/brand/gth-og-image.png",
        width: 1200,
        height: 630,
        alt: "Global Trade Hub — Connect. Trade. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Trade Hub",
    description: "Egypt's #1 B2B export platform. Access 50,000+ U.S. buyers.",
    images: ["/brand/gth-og-image.png"],
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
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en`,
      "ar-EG": `${siteUrl}/ar`,
    },
  },
};

export async function generateStaticParams() {
  return localeConfig.locales.map((lang) => ({ lang }));
}

interface PageProps {
  params: { lang: Locale };
}

export default function Home({ params: _params }: PageProps) {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <WhyToJoinUS />
      <HowItWorks />
      <ManufacturersShowcase />
      <WhyExportersChooseUs />
      <BuyerNetworkShowcase />
      <PricingTransparency />
      <CallToAction />
      <Footer />
    </>
  );
}
