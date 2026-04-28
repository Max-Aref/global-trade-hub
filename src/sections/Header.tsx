"use client";

import { useState } from "react";
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
  if (pathname.startsWith("/ar")) return "ar";
  return "en";
}

export const Header = () => {
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const openDrawer = () => {
    setDrawerMounted(true);
    setDrawerOpen(true);
  };
  return (
    <header className='py-4 border-b border-b-[#2A2A2A] md:border-none sticky top-0 z-50  '>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className='container max-w-full mx-auto px-4'>
        <div className='flex justify-between items-center border border-white/15 md:p-2.5 rounded-xl w-90% mx-auto md:backdrop-blur '>
          <div>
            <Link href='/' className='inline-flex items-center gap-3 group'>
              <span className='border h-12 w-12 rounded-lg inline-flex justify-center border-[#2A2A2A] group-hover:border-[#8c45ff]/40 transition-colors duration-300 p-2 items-center'>
                <LiaGlobeAmericasSolid className='h-10 w-10 text-[#8c45ff]' />
              </span>
              <span className='hidden sm:inline-block text-[#8c45ff] font-semibold text-lg tracking-tight whitespace-nowrap'>
                Global Trade Hub
              </span>
            </Link>
          </div>
          {/* navigation menu */}
          <div>
            <nav className=' gap-8 text-lg font-medium hidden md:flex items-center'>
              <a href='#' className='text-white/70 hover:text-white transition'>
                Mission
              </a>
              <a href='#' className='text-white/70 hover:text-white transition'>
                Features
              </a>
              <EducationalMegaMenu lang={lang} />
              <a href='#' className='text-white/70 hover:text-white transition'>
                policies
              </a>
            </nav>
          </div>
          <div className='flex items-center gap-4'>
            <Button href='/auth'>Register</Button>
            <button
              type='button'
              aria-label='Open menu'
              aria-expanded={drawerOpen}
              aria-controls='mobile-drawer'
              onClick={openDrawer}
              className='md:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
            >
              <MenuIcon className='h-7 w-7' />
            </button>
          </div>
        </div>
      </div>
      {drawerMounted && (
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          lang={lang}
        />
      )}
    </header>
  );
};
