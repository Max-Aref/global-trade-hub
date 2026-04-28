"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Article, LearnCategory } from "@/content/learn/types";
import { CATEGORY_LABELS } from "@/content/learn/types";
import type { Locale } from "@/config/i18n";

interface LearnIndexClientProps {
  articles: Article[];
  lang: Locale;
}

const COPY = {
  en: {
    searchPlaceholder: "Search articles…",
    all: "All",
    minutes: "min",
    empty: "No articles match your search.",
  },
  ar: {
    searchPlaceholder: "ابحث في المقالات…",
    all: "الكل",
    minutes: "دقيقة",
    empty: "لا توجد مقالات تطابق بحثك.",
  },
} as const;

const CATEGORIES: LearnCategory[] = ["sourcing", "logistics", "compliance"];

export function LearnIndexClient({ articles, lang }: LearnIndexClientProps) {
  const c = COPY[lang];
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<LearnCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (activeCat !== "all" && a.category !== activeCat) return false;
      if (!q) return true;
      const hay = `${a.title[lang]} ${a.description[lang]}`.toLowerCase();
      return hay.includes(q);
    });
  }, [articles, query, activeCat, lang]);

  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-arabic" : ""}>
      <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <input
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={c.searchPlaceholder}
          className='w-full md:max-w-sm rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400'
          aria-label={c.searchPlaceholder}
        />
        <div className='flex flex-wrap gap-2'>
          <button
            type='button'
            onClick={() => setActiveCat("all")}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              activeCat === "all"
                ? "border-brand-400 bg-brand-500/20 text-white"
                : "border-white/15 text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            {c.all}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type='button'
              onClick={() => setActiveCat(cat)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                activeCat === cat
                  ? "border-brand-400 bg-brand-500/20 text-white"
                  : "border-white/15 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {CATEGORY_LABELS[cat][lang]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className='text-center text-white/60 py-16'>{c.empty}</p>
      ) : (
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((a) => (
            <Link
              key={a.slug}
              href={`/${lang}/learn/${a.slug}`}
              className='group block focus:outline-none'
            >
              <Card hover bordered className='h-full'>
                <p className='text-[11px] uppercase tracking-wider text-brand-400 mb-2'>
                  {CATEGORY_LABELS[a.category][lang]}
                </p>
                <h3 className='text-base font-semibold text-white leading-snug mb-2 group-hover:text-brand-200 transition-colors'>
                  {a.title[lang]}
                </h3>
                <p className='text-sm text-white/60 line-clamp-3 mb-4'>
                  {a.description[lang]}
                </p>
                <p className='text-xs text-white/40'>
                  {a.readingMinutes} {c.minutes}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
