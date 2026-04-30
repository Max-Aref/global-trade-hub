import Link from "next/link";
import { FaClock, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import type { Article } from "@/content/learn/types";
import { CATEGORY_LABELS } from "@/content/learn/types";
import type { Locale } from "@/config/i18n";
import { RelatedArticles } from "./RelatedArticles";

interface ArticleShellProps {
  article: Article;
  lang: Locale;
}

const COPY = {
  en: {
    home: "Home",
    learn: "Educational",
    backToIndex: "All articles",
    minutes: "min read",
    reviewed: "Last reviewed",
  },
} as const;

export function ArticleShell({ article, lang }: ArticleShellProps) {
  const c = COPY[lang];

  const reviewedFormatted = new Date(article.reviewedDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  // Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[lang],
    description: article.description[lang],
    inLanguage: "en-US",
    datePublished: article.reviewedDate,
    dateModified: article.reviewedDate,
    author: {
      "@type": "Organization",
      name: article.authorName ?? "Global Trade Hub",
    },
    publisher: {
      "@type": "Organization",
      name: "Global Trade Hub",
    },
    articleSection: CATEGORY_LABELS[article.category][lang],
  };

  return (
    <article className='mx-auto w-full max-w-3xl px-4 py-10 md:py-16' dir='ltr'>
      {/* JSON-LD */}
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label='Breadcrumb' className='mb-6 text-xs text-white/50'>
        <ol className='flex flex-wrap items-center gap-1.5'>
          <li>
            <Link
              href={`/${lang}`}
              className='hover:text-white transition-colors'
            >
              {c.home}
            </Link>
          </li>
          <li aria-hidden='true' className='text-white/30'>
            /
          </li>
          <li>
            <Link
              href={`/${lang}/learn`}
              className='hover:text-white transition-colors'
            >
              {c.learn}
            </Link>
          </li>
          <li aria-hidden='true' className='text-white/30'>
            /
          </li>
          <li className='text-white/80 truncate max-w-[60vw]'>
            {article.title[lang]}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className='mb-8 border-b border-white/10 pb-8'>
        <p className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
          {CATEGORY_LABELS[article.category][lang]}
        </p>
        <h1 className='text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight'>
          {article.title[lang]}
        </h1>
        <p className='mt-4 text-base text-white/70 leading-relaxed'>
          {article.description[lang]}
        </p>
        <div className='mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50'>
          <span className='inline-flex items-center gap-1.5'>
            <FaClock className='h-3 w-3' aria-hidden='true' />
            {article.readingMinutes} {c.minutes}
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <FaCalendarAlt className='h-3 w-3' aria-hidden='true' />
            {c.reviewed}: {reviewedFormatted}
          </span>
        </div>
      </header>

      {/* Body */}
      <div
        className={`prose-gth text-start text-white/80 leading-relaxed space-y-5
          [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:tracking-tight
          [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white
          [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:ps-6 [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:ps-6 [&_ol]:space-y-2
          [&_li]:marker:text-brand-400
          [&_strong]:text-white [&_strong]:font-semibold
          [&_a]:text-brand-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-brand-200
          [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-white/10 [&_code]:text-brand-300 [&_code]:text-[0.9em]`}
      >
        {article.body[lang]}
      </div>

      {/* Back link */}
      <div className='mt-12'>
        <Link
          href={`/${lang}/learn`}
          className='inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200 transition-colors'
        >
          <FaArrowLeft className='h-3 w-3' aria-hidden='true' />
          {c.backToIndex}
        </Link>
      </div>

      {/* Related */}
      <RelatedArticles slugs={article.related} lang={lang} />
    </article>
  );
}
