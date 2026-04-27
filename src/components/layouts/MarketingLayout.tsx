import React from "react";
import { TopNav } from "../ui/nav/TopNav";
import { Footer } from "@/sections/Footer";

/**
 * GTH MarketingLayout
 *
 * Wraps all public-facing pages (landing page, about, sitemap).
 * Renders TopNav + children + Footer.
 *
 * Usage:
 *   <MarketingLayout>
 *     <Hero />
 *     <Features />
 *   </MarketingLayout>
 */

interface MarketingLayoutProps {
  children:        React.ReactNode;
  showNav?:        boolean;
  transparentNav?: boolean;
  showFooter?:     boolean;
}

export function MarketingLayout({
  children,
  showNav        = true,
  transparentNav = false,
  showFooter     = true,
}: MarketingLayoutProps) {
  return (
    <>
      {showNav && (
        <TopNav transparent={transparentNav} sticky />
      )}

      <main>{children}</main>

      {showFooter && <Footer />}
    </>
  );
}
