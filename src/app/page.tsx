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
// import { GettingStartedSection } from "@/sections/GettingStartedSection";

// This is the main entry point of the application

export default function Home() {
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
      {/* <GettingStartedSection /> */}
      <CallToAction />
      <Footer />
    </>
  );
}
