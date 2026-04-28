import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { LegalShell } from "@/components/legal/LegalShell";
import { getAllLegalDocs, getLegalDocBySlug } from "@/content/legal";
import { localeConfig, type Locale } from "@/config/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltradehub.com";

interface Props {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllLegalDocs().map((d) => d.slug);
  const params: { lang: string; slug: string }[] = [];
  for (const lang of localeConfig.locales) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = (params.lang as Locale) ?? "en";
  const doc = getLegalDocBySlug(params.slug);
  if (!doc) return {};
  const url = `${siteUrl}/${lang}/legal/${doc.slug}`;
  return {
    title: `${doc.title[lang]} — Global Trade Hub`,
    description: doc.description[lang],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${siteUrl}/en/legal/${doc.slug}`,
        "ar-EG": `${siteUrl}/ar/legal/${doc.slug}`,
      },
    },
    openGraph: {
      title: doc.title[lang],
      description: doc.description[lang],
      url,
      type: "article",
      locale: lang === "ar" ? "ar_EG" : "en_US",
    },
    robots:
      doc.reviewStatus === "draft" ? { index: false, follow: true } : undefined,
  };
}

export default function LegalDocPage({ params }: Props) {
  const lang = (params.lang as Locale) ?? "en";
  const doc = getLegalDocBySlug(params.slug);
  if (!doc) notFound();
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <LegalShell doc={doc} lang={lang} />
      </main>
      <Footer />
    </>
  );
}
