import dynamic from "next/dynamic";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { WhyToJoinUS } from "@/sections/WhyToJoinUS";
import Footer from "@/sections/Footer";
import { localeConfig, type Locale } from "@/config/i18n";
import Loading from "@/components/Loading";

// Lazy load heavy sections below the fold for better performance
const HowItWorks = dynamic(() => import("@/sections/HowItWorks"), {
  loading: () => <Loading />,
});
const ManufacturersShowcase = dynamic(() => import("@/sections/ManufacturersShowcase"), {
  loading: () => <Loading />,
});
const WhyExportersChooseUs = dynamic(() => import("@/sections/WhyExportersChooseUs").then(mod => ({ default: mod.WhyExportersChooseUs })), {
  loading: () => <Loading />,
});
const BuyerNetworkShowcase = dynamic(() => import("@/sections/BuyerNetworkShowcase").then(mod => ({ default: mod.BuyerNetworkShowcase })), {
  loading: () => <Loading />,
});
const SecurityTrustFeatures = dynamic(() => import("@/sections/SecurityTrustFeatures").then(mod => ({ default: mod.SecurityTrustFeatures })), {
  loading: () => <Loading />,
});
const PricingTransparency = dynamic(() => import("@/sections/PricingTransparency").then(mod => ({ default: mod.PricingTransparency })), {
  loading: () => <Loading />,
});
const CallToAction = dynamic(() => import("@/sections/CallToAction").then(mod => ({ default: mod.CallToAction })), {
  loading: () => <Loading />,
});

export async function generateStaticParams() {
  return localeConfig.locales.map((lang) => ({ lang }));
}

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function Home({ params }: PageProps) {
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
      <SecurityTrustFeatures />
      <PricingTransparency />
      <CallToAction />
      <Footer />
    </>
  );
}
