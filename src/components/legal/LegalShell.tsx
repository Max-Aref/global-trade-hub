import Link from "next/link";
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { LegalDoc } from "@/content/legal/types";
import { LEGAL_CATEGORY_LABELS } from "@/content/legal/types";
import type { Locale } from "@/config/i18n";
import { Callout } from "@/components/learn/Callout";

interface LegalShellProps {
  doc: LegalDoc;
  lang: Locale;
}

const COPY = {
  en: {
    home: "Home",
    legal: "Legal",
    backToIndex: "All legal documents",
    updated: "Last updated",
    draftTitle: "Draft — pending legal review",
    draftBody:
      "This document is a working draft prepared by Global Trade Hub. It has not yet been reviewed by qualified Egyptian or international counsel. Do not rely on it as legal advice. The final, binding version will be published after counsel review.",
  },
  ar: {
    home: "الرئيسية",
    legal: "الشؤون القانونية",
    backToIndex: "كل المستندات القانونية",
    updated: "آخر تحديث",
    draftTitle: "مسودة — قيد المراجعة القانونية",
    draftBody:
      "هذا المستند مسودة عمل أعدّها فريق Global Trade Hub ولم تتم مراجعته بعد بواسطة محامين مصريين أو دوليين مؤهلين. يُرجى عدم الاعتماد عليه كمشورة قانونية. سيتم نشر الإصدار النهائي الملزم بعد مراجعة المحامين.",
  },
} as const;

export function LegalShell({ doc, lang }: LegalShellProps) {
  const c = COPY[lang];
  const isRtl = lang === "ar";
  const Arrow = isRtl ? FaArrowRight : FaArrowLeft;

  const updatedFormatted = new Date(doc.lastUpdated).toLocaleDateString(
    lang === "ar" ? "ar-EG" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <article
      className={`mx-auto w-full max-w-3xl px-4 py-10 md:py-16 ${
        isRtl ? "font-arabic" : ""
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
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
              href={`/${lang}/legal`}
              className='hover:text-white transition-colors'
            >
              {c.legal}
            </Link>
          </li>
          <li aria-hidden='true' className='text-white/30'>
            /
          </li>
          <li className='text-white/80 truncate max-w-[60vw]'>
            {doc.title[lang]}
          </li>
        </ol>
      </nav>

      <header className='mb-8 border-b border-white/10 pb-8'>
        <p className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
          {LEGAL_CATEGORY_LABELS[doc.category][lang]}
        </p>
        <h1 className='text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight'>
          {doc.title[lang]}
        </h1>
        <p className='mt-4 text-base text-white/70 leading-relaxed'>
          {doc.description[lang]}
        </p>
        <div className='mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50'>
          <span className='inline-flex items-center gap-1.5'>
            <FaCalendarAlt className='h-3 w-3' aria-hidden='true' />
            {c.updated}: {updatedFormatted}
          </span>
        </div>
      </header>

      {doc.reviewStatus === "draft" && (
        <Callout tone='warning' title={c.draftTitle}>
          <p>{c.draftBody}</p>
        </Callout>
      )}

      <div
        className={`prose-gth ${
          isRtl ? "text-end" : "text-start"
        } text-white/80 leading-relaxed space-y-5
          [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:tracking-tight
          [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white
          [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:ps-6 [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:ps-6 [&_ol]:space-y-2
          [&_li]:marker:text-brand-400
          [&_strong]:text-white [&_strong]:font-semibold
          [&_a]:text-brand-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-brand-200`}
      >
        {doc.body[lang]}
      </div>

      <div className='mt-12'>
        <Link
          href={`/${lang}/legal`}
          className='inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200 transition-colors'
        >
          <Arrow className='h-3 w-3' aria-hidden='true' />
          {c.backToIndex}
        </Link>
      </div>
    </article>
  );
}
