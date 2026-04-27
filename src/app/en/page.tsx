import {
  Header,
  Hero,
  WhyToJoinUS,
  LogoTicker,
  Features,
  HowItWorks,
  ManufacturersShowcase,
  WhyExportersChooseUs,
  BuyerNetworkShowcase,
  CallToAction,
  Footer,
} from "@/sections";
import ClientOnly from "@/components/ClientOnly";
import { Suspense } from "react";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ClientOnly>
          <WhyToJoinUS />
        </ClientOnly>
      </Suspense>
      <LogoTicker />
      <Features />
      <HowItWorks />
      <ManufacturersShowcase />
      <BuyerNetworkShowcase />
      <WhyExportersChooseUs />
      <CallToAction />
      <Footer />
    </main>
  );
}
