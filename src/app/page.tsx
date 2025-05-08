import { Features } from "@/sections/Features";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";

// This is the main entry point of the application
// It is responsible for rendering the main layout of the application

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
    </>
  );
}
