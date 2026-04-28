"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaTimes,
  FaChevronDown,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { Button } from "@/components/Button";
import { Logo } from "@/components/ui/Logo";
import { learnNavManifest } from "@/content/learn/nav-manifest";
import { CATEGORY_LABELS, type LearnCategory } from "@/content/learn/types";
import { legalNavManifest } from "@/content/legal/nav-manifest";
import {
  LEGAL_CATEGORY_LABELS,
  type LegalCategory,
} from "@/content/legal/types";
import type { Locale } from "@/config/i18n";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  lang: Locale;
}

const COPY = {
  en: {
    close: "Close menu",
    primary: [
      { label: "Mission", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
    educational: "Educational",
    legal: "Legal",
    viewAll: "View all",
    languageLabel: "Language",
    register: "Register",
    signIn: "Sign in",
    home: "Home",
  },
  ar: {
    close: "إغلاق القائمة",
    primary: [
      { label: "المهمة", href: "#" },
      { label: "الميزات", href: "#" },
      { label: "الأسعار", href: "#pricing" },
    ],
    educational: "التعليمية",
    legal: "الشؤون القانونية",
    viewAll: "عرض الكل",
    languageLabel: "اللغة",
    register: "سجّل الآن",
    signIn: "تسجيل الدخول",
    home: "الرئيسية",
  },
} as const;

const LEARN_CATEGORY_ORDER: LearnCategory[] = [
  "sourcing",
  "logistics",
  "compliance",
];

const LEGAL_CATEGORY_ORDER: LegalCategory[] = [
  "privacy",
  "terms",
  "platform",
  "company",
];

export function MobileDrawer({ open, onClose, lang }: MobileDrawerProps) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const c = COPY[lang];
  const isRtl = lang === "ar";
  const Arrow = isRtl ? FaArrowLeft : FaArrowRight;

  const [learnOpen, setLearnOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const articles = learnNavManifest;
  const articlesByCat: Record<LearnCategory, typeof articles> = {
    sourcing: articles.filter((a) => a.category === "sourcing"),
    logistics: articles.filter((a) => a.category === "logistics"),
    compliance: articles.filter((a) => a.category === "compliance"),
  };
  const legalDocs = legalNavManifest;

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Esc to close + initial focus
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    // Focus close button on open for accessibility
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Compute language switcher target by mirroring pathname
  const otherLang: Locale = lang === "en" ? "ar" : "en";
  const switchHref = (() => {
    if (!pathname || pathname === "/") return `/${otherLang}`;
    if (pathname.startsWith("/en/") || pathname === "/en")
      return pathname.replace(/^\/en/, "/ar");
    if (pathname.startsWith("/ar/") || pathname === "/ar")
      return pathname.replace(/^\/ar/, "/en");
    return `/${otherLang}${pathname}`;
  })();

  const slideFrom = isRtl ? "-100%" : "100%";
  const side = isRtl ? "left-0" : "right-0";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='fixed inset-0 z-[100] md:hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
          aria-hidden={!open}
        >
          {/* Overlay */}
          <button
            type='button'
            aria-label={c.close}
            onClick={onClose}
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role='dialog'
            aria-modal='true'
            aria-label='Site navigation'
            dir={isRtl ? "rtl" : "ltr"}
            className={`absolute top-0 ${side} h-full w-[88%] max-w-sm bg-[#0b061f] ${
              isRtl ? "border-r" : "border-l"
            } border-white/10 shadow-2xl flex flex-col ${
              isRtl ? "font-arabic" : ""
            }`}
            initial={{ x: slideFrom }}
            animate={{ x: 0 }}
            exit={{ x: slideFrom }}
            transition={{
              type: reduceMotion ? "tween" : "spring",
              stiffness: 360,
              damping: 36,
              duration: reduceMotion ? 0 : undefined,
            }}
          >
            {/* Header */}
            <div className='flex items-center justify-between px-5 py-4 border-b border-white/10'>
              <Logo
                variant='white'
                size='sm'
                href={`/${lang}`}
                onClick={onClose}
              />
              <button
                ref={closeBtnRef}
                type='button'
                aria-label={c.close}
                onClick={onClose}
                className='h-10 w-10 inline-flex items-center justify-center rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
              >
                <FaTimes className='h-4 w-4' aria-hidden='true' />
              </button>
            </div>

            {/* Body */}
            <nav className='flex-1 overflow-y-auto overscroll-contain px-5 py-6'>
              <ul className='space-y-1'>
                <li>
                  <Link
                    href={`/${lang}`}
                    onClick={onClose}
                    className='block px-3 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition'
                  >
                    {c.home}
                  </Link>
                </li>
                {c.primary.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className='block px-3 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Educational */}
                <li>
                  <button
                    type='button'
                    aria-expanded={learnOpen}
                    onClick={() => setLearnOpen((v) => !v)}
                    className='w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition'
                  >
                    <span>{c.educational}</span>
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${
                        learnOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden='true'
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {learnOpen && (
                      <motion.div
                        key='learn-panel'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.2,
                        }}
                        className='overflow-hidden'
                      >
                        <div className='px-3 pt-1 pb-2 space-y-4'>
                          {LEARN_CATEGORY_ORDER.map((cat) => {
                            const list = articlesByCat[cat];
                            if (!list.length) return null;
                            return (
                              <div key={cat}>
                                <p className='text-[10px] uppercase tracking-wider text-brand-400 mb-1'>
                                  {CATEGORY_LABELS[cat][lang]}
                                </p>
                                <ul className='space-y-0.5'>
                                  {list.map((a) => (
                                    <li key={a.slug}>
                                      <Link
                                        href={`/${lang}/learn/${a.slug}`}
                                        onClick={onClose}
                                        className='block px-2 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/5 transition'
                                      >
                                        {a.title[lang]}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                          <Link
                            href={`/${lang}/learn`}
                            onClick={onClose}
                            className='inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-brand-300 hover:text-brand-200 transition'
                          >
                            {c.viewAll}
                            <Arrow className='h-3 w-3' aria-hidden='true' />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Legal */}
                <li>
                  <button
                    type='button'
                    aria-expanded={legalOpen}
                    onClick={() => setLegalOpen((v) => !v)}
                    className='w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition'
                  >
                    <span>{c.legal}</span>
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${
                        legalOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden='true'
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {legalOpen && (
                      <motion.div
                        key='legal-panel'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.2,
                        }}
                        className='overflow-hidden'
                      >
                        <div className='px-3 pt-1 pb-2 space-y-3'>
                          {LEGAL_CATEGORY_ORDER.map((cat) => {
                            const list = legalDocs.filter(
                              (d) => d.category === cat,
                            );
                            if (!list.length) return null;
                            return (
                              <div key={cat}>
                                <p className='text-[10px] uppercase tracking-wider text-brand-400 mb-1'>
                                  {LEGAL_CATEGORY_LABELS[cat][lang]}
                                </p>
                                <ul className='space-y-0.5'>
                                  {list.map((d) => (
                                    <li key={d.slug}>
                                      <Link
                                        href={`/${lang}/legal/${d.slug}`}
                                        onClick={onClose}
                                        className='block px-2 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/5 transition'
                                      >
                                        {d.title[lang]}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                          <Link
                            href={`/${lang}/legal`}
                            onClick={onClose}
                            className='inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-brand-300 hover:text-brand-200 transition'
                          >
                            {c.viewAll}
                            <Arrow className='h-3 w-3' aria-hidden='true' />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </nav>

            {/* Footer: language + CTAs */}
            <div className='border-t border-white/10 px-5 py-5 space-y-4'>
              <div>
                <p className='text-xs text-white/40 mb-2'>{c.languageLabel}</p>
                <div className='flex gap-2'>
                  <Link
                    href={lang === "en" ? "#" : switchHref}
                    aria-current={lang === "en" ? "page" : undefined}
                    onClick={lang === "en" ? undefined : onClose}
                    className={
                      lang === "en"
                        ? "text-xs px-3 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 font-medium"
                        : "text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition"
                    }
                  >
                    EN
                  </Link>
                  <Link
                    href={lang === "ar" ? "#" : switchHref}
                    aria-current={lang === "ar" ? "page" : undefined}
                    onClick={lang === "ar" ? undefined : onClose}
                    className={
                      lang === "ar"
                        ? "text-xs px-3 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 font-medium font-arabic"
                        : "text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition font-arabic"
                    }
                  >
                    عربي
                  </Link>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <Button href='/auth' onClick={onClose}>
                  {c.register}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
