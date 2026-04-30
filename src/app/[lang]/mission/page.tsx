import type { Metadata } from "next";
import {
  FaBullseye,
  FaCompass,
  FaHandshake,
  FaShieldAlt,
  FaGlobeAfrica,
  FaChartLine,
} from "react-icons/fa";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Button } from "@/components/Button";
import { localeConfig, type Locale } from "@/config/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltradehub.com";

interface Props {
  params: { lang: string };
}

const TITLE: Record<Locale, string> = {
  en: "Mission & Vision — Global Trade Hub",
  ar: "المهمة والرؤية — Global Trade Hub",
};

const DESC: Record<Locale, string> = {
  en: "Our mission is to unlock global markets for Egyptian exporters with verified U.S. buyer access, AI analytics, and transparent trade infrastructure.",
  ar: "مهمتنا هي فتح الأسواق العالمية أمام المصدّرين المصريين عبر وصول موثّق للمشترين الأمريكيين، وتحليلات الذكاء الاصطناعي، وبنية تجارية شفافة.",
};

interface Pillar {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    sub: string;
    missionEyebrow: string;
    missionHeading: string;
    missionBody: string[];
    visionEyebrow: string;
    visionHeading: string;
    visionBody: string[];
    valuesEyebrow: string;
    valuesHeading: string;
    pillars: Pillar[];
    statsHeading: string;
    stats: { value: string; label: string }[];
    ctaHeading: string;
    ctaSub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  en: {
    eyebrow: "Our purpose",
    heading: "Connecting Egyptian craftsmanship with global demand",
    sub: "Global Trade Hub exists to remove the friction between Egypt's world-class exporters and the buyers, retailers, and distributors who want their products.",
    missionEyebrow: "Mission",
    missionHeading: "Make cross-border trade simple, transparent, and fair",
    missionBody: [
      "We give Egyptian manufacturers, growers, and producers a direct line to verified U.S. and global buyers — without middlemen, opaque pricing, or guesswork.",
      "Through AI-powered market analytics, bilingual education, and end-to-end trade infrastructure, we turn export ambition into recurring revenue.",
    ],
    visionEyebrow: "Vision",
    visionHeading: "Egypt as a top-five global export economy by 2035",
    visionBody: [
      "We see a future where any Egyptian SME can reach a U.S. distributor by lunchtime, ship by week's end, and get paid in dollars without losing 30% to intermediaries.",
      "We are building the rails — verification, logistics, payments, and compliance — that make this future inevitable.",
    ],
    valuesEyebrow: "What we stand for",
    valuesHeading: "Six commitments that shape every product decision",
    pillars: [
      {
        icon: <FaBullseye className='h-5 w-5' />,
        title: "Outcome-driven",
        body: "We measure success in shipped containers and signed POs, not vanity metrics.",
      },
      {
        icon: <FaShieldAlt className='h-5 w-5' />,
        title: "Verified by default",
        body: "Every buyer and supplier is vetted before they appear in your network. No exceptions.",
      },
      {
        icon: <FaHandshake className='h-5 w-5' />,
        title: "Fair pricing",
        body: "Transparent fees with no hidden cuts on your margins. Your trade, your value.",
      },
      {
        icon: <FaCompass className='h-5 w-5' />,
        title: "Bilingual by design",
        body: "Arabic and English equally first-class — content, support, and contracts.",
      },
      {
        icon: <FaGlobeAfrica className='h-5 w-5' />,
        title: "Egypt-first, world-ready",
        body: "Built for Egyptian compliance reality, designed to meet U.S. and EU standards.",
      },
      {
        icon: <FaChartLine className='h-5 w-5' />,
        title: "Data over intuition",
        body: "AI surfaces tariff windows, demand spikes, and lane economics so you act on facts.",
      },
    ],
    statsHeading: "What we are building toward",
    stats: [
      { value: "50K+", label: "verified U.S. buyers" },
      { value: "$2.4B", label: "trade volume target by 2030" },
      { value: "12", label: "export sectors covered" },
      { value: "0", label: "hidden fees on margin" },
    ],
    ctaHeading: "Join the exporters building Egypt's next chapter",
    ctaSub: "Free to start. Verified buyer access in minutes.",
    ctaPrimary: "Get started",
    ctaSecondary: "Read the guides",
  },
  ar: {
    eyebrow: "هدفنا",
    heading: "ربط الصناعة المصرية بالطلب العالمي",
    sub: "تأسست Global Trade Hub لإزالة الحواجز بين المصدّرين المصريين والمشترين والموزّعين العالميين الذين يبحثون عن منتجاتهم.",
    missionEyebrow: "المهمة",
    missionHeading: "تجارة عابرة للحدود — بسيطة وشفافة وعادلة",
    missionBody: [
      "نمنح المصنّعين والمزارعين والمنتجين المصريين خطًا مباشرًا للمشترين الموثّقين في الولايات المتحدة والعالم — بدون وسطاء أو تسعير غامض أو تخمين.",
      "من خلال تحليلات السوق بالذكاء الاصطناعي، والتعليم ثنائي اللغة، والبنية التجارية الشاملة، نحوّل طموح التصدير إلى إيرادات متكررة.",
    ],
    visionEyebrow: "الرؤية",
    visionHeading: "مصر ضمن أكبر خمس اقتصادات تصدير عالميًا بحلول 2035",
    visionBody: [
      "نرى مستقبلًا تستطيع فيه أي شركة مصرية صغيرة الوصول إلى موزّع أمريكي قبل الغداء، والشحن خلال الأسبوع، والحصول على مدفوعاتها بالدولار دون فقدان 30٪ للوسطاء.",
      "نحن نبني السكك — التحقق، اللوجستيات، المدفوعات، والامتثال — التي تجعل هذا المستقبل حتميًا.",
    ],
    valuesEyebrow: "ما نلتزم به",
    valuesHeading: "ست التزامات تشكّل كل قرار منتج",
    pillars: [
      {
        icon: <FaBullseye className='h-5 w-5' />,
        title: "موجّهون بالنتائج",
        body: "نقيس النجاح بالحاويات المشحونة وأوامر الشراء الموقّعة، لا بالمقاييس الزائفة.",
      },
      {
        icon: <FaShieldAlt className='h-5 w-5' />,
        title: "موثّقون بشكل تلقائي",
        body: "كل مشترٍ ومورّد يُفحص قبل ظهوره في شبكتك. بدون استثناءات.",
      },
      {
        icon: <FaHandshake className='h-5 w-5' />,
        title: "تسعير عادل",
        body: "رسوم شفافة بدون اقتطاعات مخفية على هوامشك. تجارتك، قيمتك.",
      },
      {
        icon: <FaCompass className='h-5 w-5' />,
        title: "ثنائية اللغة بالتصميم",
        body: "العربية والإنجليزية بنفس الأولوية — في المحتوى والدعم والعقود.",
      },
      {
        icon: <FaGlobeAfrica className='h-5 w-5' />,
        title: "مصر أولًا، العالم بعدها",
        body: "مبني لواقع الامتثال المصري، ومصمَّم ليطابق معايير الولايات المتحدة والاتحاد الأوروبي.",
      },
      {
        icon: <FaChartLine className='h-5 w-5' />,
        title: "البيانات قبل الحدس",
        body: "يكشف الذكاء الاصطناعي نوافذ التعرفة، وتدفّقات الطلب، واقتصاديات الخطوط الملاحية لتتصرّف بناءً على الحقائق.",
      },
    ],
    statsHeading: "ما نعمل على بنائه",
    stats: [
      { value: "+50 ألف", label: "مشترٍ أمريكي موثّق" },
      { value: "2.4 مليار $", label: "هدف حجم التجارة بحلول 2030" },
      { value: "12", label: "قطاعًا تصديريًا" },
      { value: "0", label: "رسوم مخفية على الهامش" },
    ],
    ctaHeading: "انضم إلى المصدّرين الذين يبنون فصل مصر القادم",
    ctaSub: "البدء مجاني. وصول موثّق للمشترين خلال دقائق.",
    ctaPrimary: "ابدأ الآن",
    ctaSecondary: "اقرأ الأدلة",
  },
};

export async function generateStaticParams() {
  return localeConfig.locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = (params.lang as Locale) ?? "en";
  const url = `${siteUrl}/${lang}/mission`;
  return {
    title: TITLE[lang],
    description: DESC[lang],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${siteUrl}/en/mission`,
        "ar-EG": `${siteUrl}/ar/mission`,
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

export default function MissionPage({ params }: Props) {
  const lang = (params.lang as Locale) ?? "en";
  const c = COPY[lang];
  const isRtl = lang === "ar";
  const dirCls = isRtl ? "font-arabic text-end" : "";

  return (
    <>
      <Header />
      <main className='min-h-screen' dir={isRtl ? "rtl" : "ltr"}>
        {/* Hero */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(75%_75%_at_center_top,rgb(140,69,255,0.18)_0%,transparent_60%)]' />
          <div
            className={`container max-w-5xl mx-auto px-4 py-16 md:py-24 ${dirCls}`}
          >
            <p className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
              {c.eyebrow}
            </p>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white'>
              {c.heading}
            </h1>
            <p className='mt-5 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed'>
              {c.sub}
            </p>
          </div>
        </section>

        {/* Mission + Vision */}
        <section className='container max-w-6xl mx-auto px-4 pb-16 md:pb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <article
              className={`rounded-2xl border border-white/10 bg-gradient-to-br from-brand-950/60 to-brand-900/30 p-7 md:p-9 ${dirCls}`}
            >
              <div className='inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-wider text-brand-300'>
                <FaBullseye className='h-3 w-3' aria-hidden='true' />
                {c.missionEyebrow}
              </div>
              <h2 className='mt-4 text-2xl md:text-3xl font-semibold text-white tracking-tight'>
                {c.missionHeading}
              </h2>
              <div className='mt-4 space-y-3 text-white/70 leading-relaxed'>
                {c.missionBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>

            <article
              className={`rounded-2xl border border-white/10 bg-gradient-to-br from-brand-950/60 to-brand-900/30 p-7 md:p-9 ${dirCls}`}
            >
              <div className='inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-wider text-brand-300'>
                <FaCompass className='h-3 w-3' aria-hidden='true' />
                {c.visionEyebrow}
              </div>
              <h2 className='mt-4 text-2xl md:text-3xl font-semibold text-white tracking-tight'>
                {c.visionHeading}
              </h2>
              <div className='mt-4 space-y-3 text-white/70 leading-relaxed'>
                {c.visionBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Values / Pillars */}
        <section className='container max-w-6xl mx-auto px-4 pb-16 md:pb-20'>
          <div className={`mb-10 ${dirCls}`}>
            <p className='text-xs uppercase tracking-wider text-brand-400 mb-3'>
              {c.valuesEyebrow}
            </p>
            <h2 className='text-2xl md:text-4xl font-semibold tracking-tight text-white'>
              {c.valuesHeading}
            </h2>
          </div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
            {c.pillars.map((p) => (
              <li
                key={p.title}
                className={`group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-brand-500/40 hover:bg-white/[0.04] transition ${dirCls}`}
              >
                <div className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300 group-hover:bg-brand-500/25 transition'>
                  {p.icon}
                </div>
                <h3 className='mt-4 text-lg font-semibold text-white'>
                  {p.title}
                </h3>
                <p className='mt-2 text-sm text-white/70 leading-relaxed'>
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Stats */}
        <section className='container max-w-6xl mx-auto px-4 pb-16 md:pb-20'>
          <div
            className={`rounded-2xl border border-white/10 bg-gradient-to-br from-brand-950/70 to-brand-900/40 p-8 md:p-10 ${dirCls}`}
          >
            <h2 className='text-xl md:text-2xl font-semibold text-white tracking-tight'>
              {c.statsHeading}
            </h2>
            <dl className='mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
              {c.stats.map((s) => (
                <div key={s.label}>
                  <dt className='text-3xl md:text-4xl font-semibold text-white'>
                    {s.value}
                  </dt>
                  <dd className='mt-1 text-sm text-white/60'>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className='container max-w-4xl mx-auto px-4 pb-20 md:pb-28'>
          <div
            className={`rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-700/30 to-brand-950/40 p-8 md:p-10 text-center ${
              isRtl ? "font-arabic" : ""
            }`}
          >
            <h2 className='text-2xl md:text-3xl font-semibold text-white tracking-tight'>
              {c.ctaHeading}
            </h2>
            <p className='mt-3 text-white/70'>{c.ctaSub}</p>
            <div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-3'>
              <Button href='/auth' size='lg'>
                {c.ctaPrimary}
              </Button>
              <Button href={`/${lang}/learn`} size='lg' variant='ghost'>
                {c.ctaSecondary}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
