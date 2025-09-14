import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import { LogoTicker } from "@/sections/LogoTicker";
import ManufacturersShowcase from "@/sections/ManufacturersShowcase";
import { WhyToJoinUS } from "@/sections/WhyToJoinUS";
import { WhyExportersChooseUs } from "@/sections/WhyExportersChooseUs";
import { PricingTransparency } from "@/sections/PricingTransparency";
import { SecurityTrustFeatures } from "@/sections/SecurityTrustFeatures";
import { BuyerNetworkShowcase } from "@/sections/BuyerNetworkShowcase";
import { localeConfig, type Locale } from "@/config/i18n";

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
