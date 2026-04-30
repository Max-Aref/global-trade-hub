"use client";

import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import type { Locale } from "@/config/i18n";

const COPY = {
  en: {
    tagline:
      "AI-powered B2B trade platform connecting Egyptian exporters with international buyers.",
    columns: {
      company: "Company",
      educational: "Educational",
      legal: "Legal",
      connect: "Connect",
    },
    company: [
      { label: "Home", href: "/en" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/en#pricing" },
      { label: "Contact", href: "/en/legal/imprint" },
      { label: "Sitemap", href: "/sitemap" },
    ],
    educational: [
      { label: "All articles", href: "/en/learn" },
      { label: "Sourcing from Egypt", href: "/en/learn" },
      { label: "Trade & Logistics", href: "/en/learn" },
      { label: "Compliance & Quality", href: "/en/learn" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/en/legal/privacy-policy" },
      { label: "Terms of Service", href: "/en/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/en/legal/cookie-policy" },
      { label: "Acceptable Use", href: "/en/legal/acceptable-use" },
      { label: "Refund & Returns", href: "/en/legal/refund-and-returns" },
      { label: "Shipping Policy", href: "/en/legal/shipping-policy" },
      { label: "Imprint", href: "/en/legal/imprint" },
    ],
    rights: "All rights reserved.",
    draftBadge: "Working drafts pending counsel review",
  },
} as const;

export const Footer = () => {
  const lang: Locale = "en";
  const c = COPY[lang];

  const socialLinks = [
    { Icon: FaLinkedin, label: "LinkedIn", color: "#0A66C2", href: "#" },
    { Icon: FaXTwitter, label: "X", color: "#645b5b", href: "#" },
    { Icon: FaFacebook, label: "Facebook", color: "#1877F2", href: "#" },
    { Icon: FaInstagram, label: "Instagram", color: "#E1306C", href: "#" },
    { Icon: FaYoutube, label: "YouTube", color: "#FF0000", href: "#" },
  ] as const;

  return (
    <footer className='bg-black pt-16 pb-8' dir='ltr'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <Logo
              variant='white'
              size='sm'
              href={`/${lang}`}
              className='mb-4'
            />
            <p className='text-white/60 text-xs leading-relaxed mt-4'>
              {c.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.company}
            </h3>
            <ul className='space-y-2'>
              {c.company.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className='text-white/60 text-xs hover:text-white transition-colors'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.educational}
            </h3>
            <ul className='space-y-2'>
              {c.educational.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className='text-white/60 text-xs hover:text-white transition-colors'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.legal}
            </h3>
            <ul className='space-y-2'>
              {c.legal.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className='text-white/60 text-xs hover:text-white transition-colors'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-[10px] text-warning/80'>{c.draftBadge}</p>
          </div>

          {/* Connect */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.connect}
            </h3>
            <div className='flex gap-3 flex-wrap'>
              {socialLinks.map(({ Icon, label, color, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Visit our ${label} page`}
                  className='h-10 w-10 border border-white/10 rounded-lg inline-flex items-center justify-center hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
                >
                  <Icon
                    className='h-4 w-4'
                    style={{ color }}
                    aria-hidden='true'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/50 text-xs'>
            © {new Date().getFullYear()} Global Trade Hub. {c.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
