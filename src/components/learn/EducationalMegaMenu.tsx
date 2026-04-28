"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { learnNavManifest } from "@/content/learn/nav-manifest";
import { CATEGORY_LABELS, type LearnCategory } from "@/content/learn/types";
import type { Locale } from "@/config/i18n";

interface EducationalMegaMenuProps {
  lang: Locale;
}

const TRIGGER_LABEL: Record<Locale, string> = {
  en: "Educational",
  ar: "التعليمية",
};

const VIEW_ALL: Record<Locale, string> = {
  en: "View all articles",
  ar: "كل المقالات",
};

const CATEGORY_ORDER: LearnCategory[] = ["sourcing", "logistics", "compliance"];

export function EducationalMegaMenu({ lang }: EducationalMegaMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const articles = learnNavManifest;
  const byCategory: Record<LearnCategory, typeof articles> = {
    sourcing: articles.filter((a) => a.category === "sourcing"),
    logistics: articles.filter((a) => a.category === "logistics"),
    compliance: articles.filter((a) => a.category === "compliance"),
  };

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <div ref={containerRef} className='relative'>
      <button
        ref={triggerRef}
        type='button'
        onClick={() => setOpen((p) => !p)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-controls='educational-menu-panel'
        className='inline-flex items-center gap-1.5 text-white/70 hover:text-white transition'
      >
        {TRIGGER_LABEL[lang]}
        <FaChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden='true'
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className='absolute top-full ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 mt-3 w-[min(95vw,920px)] z-50'
            id='educational-menu-panel'
            onMouseLeave={() => setOpen(false)}
          >
            <div className='rounded-2xl border border-white/15 bg-gradient-to-br from-brand-950/95 to-brand-900/95 backdrop-blur-xl shadow-2xl p-6 md:p-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                {CATEGORY_ORDER.map((cat) => (
                  <div key={cat}>
                    <h3 className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
                      {CATEGORY_LABELS[cat][lang]}
                    </h3>
                    <ul className='space-y-2'>
                      {byCategory[cat].map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/${lang}/learn/${a.slug}`}
                            onClick={() => setOpen(false)}
                            className='block rounded-md px-2 py-1.5 -mx-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition'
                          >
                            {a.title[lang]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className='mt-6 pt-5 border-t border-white/10 flex justify-end'>
                <Link
                  href={`/${lang}/learn`}
                  onClick={() => setOpen(false)}
                  className='inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200 transition'
                >
                  {VIEW_ALL[lang]}
                  <FaArrowRight
                    className='h-3 w-3 rtl:rotate-180'
                    aria-hidden='true'
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
