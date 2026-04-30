import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Card } from "@/components/ui/Card";
import { getAllLegalDocs } from "@/content/legal";
import { LEGAL_CATEGORY_LABELS } from "@/content/legal/types";
import type { LegalCategory } from "@/content/legal/types";
import { localeConfig, type Locale } from "@/config/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltradehub.com";

interface Props {
  params: { lang: string };
}

const COPY = {
  en: {
    eyebrow: "Legal",
    heading: "Legal & policies",
    sub: "Working drafts of our policies, prepared for transparency. Final versions will follow counsel review.",
    updated: "Updated",
    draft: "Draft",
  },
} as const;

const CATEGORY_ORDER: LegalCategory[] = [
  "privacy",
  "terms",
  "platform",
  "company",
];

export async function generateStaticParams() {
  return localeConfig.locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = (params.lang as Locale) ?? "en";
  const url = `${siteUrl}/${lang}/legal`;
  const title = "Legal & Policies — Global Trade Hub";
  const description = COPY[lang].sub;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${siteUrl}/en/legal`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_US",
    },
  };
}

export default function LegalIndexPage({ params }: Props) {
  const lang = (params.lang as Locale) ?? "en";
  const docs = getAllLegalDocs();
  const c = COPY[lang];

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    docs: docs.filter((d) => d.category === cat),
  })).filter((g) => g.docs.length > 0);

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <section className='container max-w-6xl mx-auto px-4 py-14 md:py-20'>
          <div className='mb-12' dir='ltr'>
            <p className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
              {c.eyebrow}
            </p>
            <h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-white'>
              {c.heading}
            </h1>
            <p className='mt-4 max-w-2xl text-base md:text-lg text-white/70'>
              {c.sub}
            </p>
          </div>

          <div className='space-y-12' dir='ltr'>
            {grouped.map((g) => (
              <div key={g.category}>
                <h2 className='text-sm uppercase tracking-wider text-brand-400 mb-4'>
                  {LEGAL_CATEGORY_LABELS[g.category][lang]}
                </h2>
                <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                  {g.docs.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/${lang}/legal/${d.slug}`}
                      className='group block focus:outline-none'
                    >
                      <Card hover bordered className='h-full'>
                        <h3 className='text-base font-semibold text-white leading-snug mb-2 group-hover:text-brand-200 transition-colors'>
                          {d.title[lang]}
                        </h3>
                        <p className='text-sm text-white/60 line-clamp-3 mb-4'>
                          {d.description[lang]}
                        </p>
                        <div className='flex items-center justify-between text-xs text-white/40'>
                          <span>
                            {c.updated}:{" "}
                            {new Date(d.lastUpdated).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                          {d.reviewStatus === "draft" && (
                            <span className='rounded-full border border-warning/40 bg-warning/10 px-2 py-0.5 text-warning'>
                              {c.draft}
                            </span>
                          )}
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
