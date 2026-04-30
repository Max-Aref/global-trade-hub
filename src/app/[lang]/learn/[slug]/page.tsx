import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ArticleShell } from "@/components/learn/ArticleShell";
import { getAllArticles, getArticleBySlug } from "@/content/learn";
import { localeConfig, type Locale } from "@/config/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltradehub.com";

interface Props {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllArticles().map((a) => a.slug);
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
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const url = `${siteUrl}/${lang}/learn/${article.slug}`;
  return {
    title: `${article.title[lang]} — Global Trade Hub`,
    description: article.description[lang],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${siteUrl}/en/learn/${article.slug}`,
      },
    },
    openGraph: {
      title: article.title[lang],
      description: article.description[lang],
      url,
      type: "article",
      locale: "en_US",
    },
  };
}

export default function LearnArticlePage({ params }: Props) {
  const lang = (params.lang as Locale) ?? "en";
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <ArticleShell article={article} lang={lang} />
      </main>
      <Footer />
    </>
  );
}
