"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import MenuIcon from "@/components/MenuIcon";
import { Button } from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EducationalMegaMenu } from "@/components/learn/EducationalMegaMenu";
import type { Locale } from "@/config/i18n";

// Defer drawer until the user actually needs it. Cuts ~5–7 kB off the
// initial header chunk (framer-motion AnimatePresence + drawer markup).
const MobileDrawer = dynamic(
  () => import("@/components/nav/MobileDrawer").then((m) => m.MobileDrawer),
  { ssr: false },
);

function detectLang(pathname: string | null): Locale {
  if (!pathname) return "en";
  return "en";
}

export const Header = () => {
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Mount the drawer on first hover/focus/touch so the chunk is ready
  // before the user clicks. Click also forces mount as a fallback.
  const [drawerMounted, setDrawerMounted] = useState(false);
  const mountDrawer = useCallback(() => {
    setDrawerMounted(true);
    void import("@/components/nav/MobileDrawer");
  }, []);
  const openDrawer = useCallback(() => {
    setDrawerMounted(true);
    setDrawerOpen(true);
  }, []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  return (
    <header className='py-4 border-b border-b-[#2A2A2A] md:border-none sticky top-0 z-50'>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className='container max-w-full mx-auto px-4'>
        <div className='flex justify-between items-center gap-3 border border-white/15 p-2 md:p-2.5 rounded-xl md:backdrop-blur'>
          <div className='shrink-0'>
            <Link href='/' className='inline-flex items-center gap-3 group'>
              <span className='border h-10 w-10 md:h-12 md:w-12 rounded-lg inline-flex justify-center border-[#2A2A2A] group-hover:border-[#8c45ff]/40 transition-colors duration-300 p-1.5 md:p-2 items-center'>
                <LiaGlobeAmericasSolid className='h-7 w-7 md:h-10 md:w-10 text-[#8c45ff]' />
              </span>
              <span className='hidden sm:inline-block text-[#8c45ff] font-semibold text-base md:text-lg tracking-tight whitespace-nowrap'>
                Global Trade Hub
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className='gap-8 text-base lg:text-lg font-medium hidden md:flex items-center'>
            <Link
              href={`/${lang}/mission`}
              className='text-white/70 hover:text-white transition'
            >
              Mission
            </Link>
            <a href='#' className='text-white/70 hover:text-white transition'>
              Features
            </a>
            <EducationalMegaMenu lang={lang} />
            <Link
              href={`/${lang}/legal`}
              className='text-white/70 hover:text-white transition'
            >
              Policies
            </Link>
          </nav>
          <div className='flex items-center gap-2 md:gap-4 shrink-0'>
            {/* Desktop: full Register CTA */}
            <div className='hidden md:inline-flex'>
              <Button href='/auth'>Register</Button>
            </div>
            {/* Mobile: compact Sign in / Register link, always visible */}
            <Link
              href='/auth'
              className='md:hidden inline-flex items-center h-9 px-3 rounded-lg text-sm font-medium text-white bg-brand-500 hover:bg-brand-400 active:bg-brand-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300'
            >
              Sign in
            </Link>
            <button
              type='button'
              aria-label='Open menu'
              aria-expanded={drawerOpen}
              aria-controls='mobile-drawer'
              onClick={openDrawer}
              onMouseEnter={mountDrawer}
              onFocus={mountDrawer}
              onTouchStart={mountDrawer}
              className='md:hidden h-11 w-11 inline-flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
            >
              <MenuIcon className='h-7 w-7' />
            </button>
          </div>
        </div>
      </div>
      {drawerMounted && (
        <MobileDrawer open={drawerOpen} onClose={closeDrawer} lang={lang} />
      )}
    </header>
  );
};
