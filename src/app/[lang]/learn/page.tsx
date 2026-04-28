import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { LearnIndexClient } from "@/components/learn/LearnIndexClient";
import { getAllArticles } from "@/content/learn";
import { localeConfig, type Locale } from "@/config/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltradehub.com";

interface Props {
  params: { lang: string };
}

const TITLE: Record<Locale, string> = {
  en: "Educational — Global Trade Hub",
  ar: "التعليمية — Global Trade Hub",
};

const DESC: Record<Locale, string> = {
  en: "Practical guides for Egyptian exporters and overseas buyers: sourcing, shipping, customs, payment, IP, and ESG.",
  ar: "أدلة عملية للمصدّرين المصريين والمشترين الخارجيين: التوريد، الشحن، الجمارك، الدفع، الملكية الفكرية، والاستدامة.",
};

const HERO: Record<Locale, { eyebrow: string; heading: string; sub: string }> =
  {
    en: {
      eyebrow: "Educational",
      heading: "Trade knowledge built for Egypt",
      sub: "Bilingual, practitioner-grade guides on sourcing, logistics, and compliance.",
    },
    ar: {
      eyebrow: "التعليمية",
      heading: "معرفة تجارية مبنية لمصر",
      sub: "أدلة ثنائية اللغة بمستوى الممارسين حول التوريد واللوجستيات والامتثال.",
    },
  };

export async function generateStaticParams() {
  return localeConfig.locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = (params.lang as Locale) ?? "en";
  const url = `${siteUrl}/${lang}/learn`;
  return {
    title: TITLE[lang],
    description: DESC[lang],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${siteUrl}/en/learn`,
        "ar-EG": `${siteUrl}/ar/learn`,
      },
    },
    openGraph: {
      title: TITLE[lang],
      description: DESC[lang],
      url,
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
    },
  };
}

export default function LearnIndexPage({ params }: Props) {
  const lang = (params.lang as Locale) ?? "en";
  const articles = getAllArticles();
  const hero = HERO[lang];

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <section className='container max-w-6xl mx-auto px-4 py-14 md:py-20'>
          <div
            className={`mb-10 ${lang === "ar" ? "font-arabic text-end" : ""}`}
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <p className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
              {hero.eyebrow}
            </p>
            <h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-white'>
              {hero.heading}
            </h1>
            <p className='mt-4 max-w-2xl text-base md:text-lg text-white/70'>
              {hero.sub}
            </p>
          </div>

          <LearnIndexClient articles={articles} lang={lang} />
        </section>
      </main>
      <Footer />
    </>
  );
}
