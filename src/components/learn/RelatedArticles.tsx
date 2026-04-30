import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Locale } from "@/config/i18n";
import { getArticleBySlug } from "@/content/learn";
import { CATEGORY_LABELS } from "@/content/learn/types";

interface RelatedArticlesProps {
  slugs: string[];
  lang: Locale;
}

const HEADING: Record<Locale, string> = {
  en: "Related articles",
};

export function RelatedArticles({ slugs, lang }: RelatedArticlesProps) {
  const articles = slugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  if (articles.length === 0) return null;

  return (
    <section
      className='mt-12 pt-8 border-t border-white/10'
      aria-labelledby='related-heading'
    >
      <h2
        id='related-heading'
        className='text-lg font-semibold text-white mb-4'
      >
        {HEADING[lang]}
      </h2>
      <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/${lang}/learn/${a.slug}`}
              className='group block rounded-xl border border-white/10 bg-brand-950/40 p-4 hover:border-brand-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
            >
              <p className='text-xs text-brand-400 uppercase tracking-wide mb-1'>
                {CATEGORY_LABELS[a.category][lang]}
              </p>
              <p className='text-sm font-medium text-white group-hover:text-brand-300 transition-colors'>
                {a.title[lang]}
              </p>
              <span className='mt-3 inline-flex items-center gap-1.5 text-xs text-white/50 group-hover:text-brand-300 transition-colors'>
                Read article
                <FaArrowRight className='h-3 w-3' aria-hidden='true' />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
