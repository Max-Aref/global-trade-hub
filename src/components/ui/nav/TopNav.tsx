"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "../Logo";
import { Button } from "../Button";

/**
 * GTH TopNav — marketing / public website navigation.
 *
 * Used on all public-facing pages (landing page, about, etc.).
 * For dashboard navigation see DashboardSidebar + DashboardTopBar.
 *
 * The existing Header.tsx should be replaced with this component.
 */

interface NavLink {
  label: string;
  href: string;
}

interface TopNavProps {
  transparent?: boolean;
  sticky?: boolean;
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#gth-how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
];

export function TopNav({
  transparent = false,
  sticky = true,
  links = DEFAULT_LINKS,
}: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navBase = [
    sticky ? "sticky top-0 z-50" : "",
    transparent
      ? "bg-transparent border-b border-white/5"
      : "border-b border-white/10",
    "py-3",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navBase}>
      {/* Backdrop blur — only when not transparent */}
      {!transparent && (
        <div className='absolute inset-0 backdrop-blur-md bg-black/60 -z-10' />
      )}

      <div className='container max-w-full mx-auto px-4'>
        <div className='flex items-center justify-between border border-white/10 rounded-xl px-4 md:px-5 py-2 backdrop-blur-sm bg-white/[0.02]'>
          {/* Logo */}
          <Logo variant='white' size='md' href='/' />

          {/* Desktop nav links */}
          <nav
            className='hidden md:flex items-center gap-7'
            aria-label='Main navigation'
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-white/70 hover:text-white transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className='flex items-center gap-3'>
            {/* Auth CTAs */}
            <Link href='/auth' className='hidden md:block'>
              <Button variant='ghost' size='sm'>
                Sign In
              </Button>
            </Link>
            <Link href='/auth'>
              <Button variant='primary' size='sm'>
                Get Started
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              className='md:hidden p-2 text-white/70 hover:text-white transition-colors'
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  aria-hidden='true'
                >
                  <path
                    d='M4 4L16 16M16 4L4 16'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              ) : (
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  aria-hidden='true'
                >
                  <path
                    d='M3 10h14M3 5h14M3 15h14'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className='md:hidden mt-2 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-brand-900/95'>
            <nav className='flex flex-col' aria-label='Mobile navigation'>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className='px-5 py-4 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors'
                >
                  {link.label}
                </a>
              ))}
              <div className='px-5 py-4 flex flex-col gap-3'>
                <Link href='/auth' onClick={() => setMobileOpen(false)}>
                  <Button variant='outline' size='md' fullWidth>
                    Sign In
                  </Button>
                </Link>
                <Link href='/auth' onClick={() => setMobileOpen(false)}>
                  <Button variant='primary' size='md' fullWidth>
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
