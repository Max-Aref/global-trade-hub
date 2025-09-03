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

// This is the main entry point of the application
// It is responsible for rendering the main layout of the application

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
      <CallToAction />
      <Footer />
    </>
  );
}
