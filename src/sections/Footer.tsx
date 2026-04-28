"use client";

import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/i18n";

function detectLang(pathname: string | null): Locale {
  if (!pathname) return "en";
  if (pathname.startsWith("/ar")) return "ar";
  return "en";
}

const COPY = {
  en: {
    tagline:
      "AI-powered B2B trade platform connecting Egyptian exporters with international buyers.",
    columns: {
      company: "Company",
      educational: "Educational",
      legal: "Legal",
      connect: "Connect",
    },
    company: [
      { label: "Home", href: "/en" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/en#pricing" },
      { label: "Contact", href: "/en/legal/imprint" },
      { label: "Sitemap", href: "/sitemap" },
    ],
    educational: [
      { label: "All articles", href: "/en/learn" },
      { label: "Sourcing from Egypt", href: "/en/learn" },
      { label: "Trade & Logistics", href: "/en/learn" },
      { label: "Compliance & Quality", href: "/en/learn" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/en/legal/privacy-policy" },
      { label: "Terms of Service", href: "/en/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/en/legal/cookie-policy" },
      { label: "Acceptable Use", href: "/en/legal/acceptable-use" },
      { label: "Refund & Returns", href: "/en/legal/refund-and-returns" },
      { label: "Shipping Policy", href: "/en/legal/shipping-policy" },
      { label: "Imprint", href: "/en/legal/imprint" },
    ],
    languageLabel: "Language",
    rights: "All rights reserved.",
    draftBadge: "Working drafts pending counsel review",
  },
  ar: {
    tagline:
      "منصّة تجارية بين الشركات مدعومة بالذكاء الاصطناعي تربط المصدّرين المصريين بالمشترين الدوليين.",
    columns: {
      company: "الشركة",
      educational: "التعليمية",
      legal: "الشؤون القانونية",
      connect: "تواصل",
    },
    company: [
      { label: "الرئيسية", href: "/ar" },
      { label: "من نحن", href: "/about" },
      { label: "الأسعار", href: "/ar#pricing" },
      { label: "تواصل معنا", href: "/ar/legal/imprint" },
      { label: "خريطة الموقع", href: "/sitemap" },
    ],
    educational: [
      { label: "كل المقالات", href: "/ar/learn" },
      { label: "التوريد من مصر", href: "/ar/learn" },
      { label: "التجارة واللوجستيات", href: "/ar/learn" },
      { label: "الامتثال والجودة", href: "/ar/learn" },
    ],
    legal: [
      { label: "سياسة الخصوصية", href: "/ar/legal/privacy-policy" },
      { label: "شروط الخدمة", href: "/ar/legal/terms-of-service" },
      { label: "سياسة ملفات تعريف الارتباط", href: "/ar/legal/cookie-policy" },
      { label: "سياسة الاستخدام المقبول", href: "/ar/legal/acceptable-use" },
      { label: "سياسة الردّ والإرجاع", href: "/ar/legal/refund-and-returns" },
      { label: "سياسة الشحن", href: "/ar/legal/shipping-policy" },
      { label: "المعلومات القانونية", href: "/ar/legal/imprint" },
    ],
    languageLabel: "اللغة",
    rights: "جميع الحقوق محفوظة.",
    draftBadge: "مسودّات عمل قيد المراجعة القانونية",
  },
} as const;

export const Footer = () => {
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const c = COPY[lang];
  const isRtl = lang === "ar";

  const socialLinks = [
    { Icon: FaLinkedin, label: "LinkedIn", color: "#0A66C2", href: "#" },
    { Icon: FaXTwitter, label: "X", color: "#645b5b", href: "#" },
    { Icon: FaFacebook, label: "Facebook", color: "#1877F2", href: "#" },
    { Icon: FaInstagram, label: "Instagram", color: "#E1306C", href: "#" },
    { Icon: FaYoutube, label: "YouTube", color: "#FF0000", href: "#" },
  ] as const;

  // Mirror current path in the other locale for the language switcher
  const otherLang: Locale = lang === "en" ? "ar" : "en";
  const switchHref = (() => {
    if (!pathname || pathname === "/") return `/${otherLang}`;
    if (pathname.startsWith("/en/") || pathname === "/en")
      return pathname.replace(/^\/en/, "/ar");
    if (pathname.startsWith("/ar/") || pathname === "/ar")
      return pathname.replace(/^\/ar/, "/en");
    return `/${otherLang}${pathname}`;
  })();

  return (
    <footer
      className={`bg-black pt-16 pb-8 ${isRtl ? "font-arabic" : ""}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <Logo
              variant='white'
              size='sm'
              href={`/${lang}`}
              className='mb-4'
            />
            <p className='text-white/60 text-xs leading-relaxed mt-4'>
              {c.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.company}
            </h3>
            <ul className='space-y-2'>
              {c.company.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className='text-white/60 text-xs hover:text-white transition-colors'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.educational}
            </h3>
            <ul className='space-y-2'>
              {c.educational.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className='text-white/60 text-xs hover:text-white transition-colors'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.legal}
            </h3>
            <ul className='space-y-2'>
              {c.legal.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className='text-white/60 text-xs hover:text-white transition-colors'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-[10px] text-warning/80'>{c.draftBadge}</p>
          </div>

          {/* Connect + language */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>
              {c.columns.connect}
            </h3>
            <div className='flex gap-3 flex-wrap'>
              {socialLinks.map(({ Icon, label, color, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Visit our ${label} page`}
                  className='h-10 w-10 border border-white/10 rounded-lg inline-flex items-center justify-center hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
                >
                  <Icon
                    className='h-4 w-4'
                    style={{ color }}
                    aria-hidden='true'
                  />
                </a>
              ))}
            </div>

            <div className='mt-6'>
              <p className='text-xs text-white/40 mb-2'>{c.languageLabel}</p>
              <div className='flex gap-2'>
                <Link
                  href={lang === "en" ? "#" : switchHref}
                  aria-current={lang === "en" ? "page" : undefined}
                  className={
                    lang === "en"
                      ? "text-xs px-3 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 font-medium"
                      : "text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/50 hover:border-white/20 hover:text-white transition-colors font-medium"
                  }
                >
                  EN
                </Link>
                <Link
                  href={lang === "ar" ? "#" : switchHref}
                  aria-current={lang === "ar" ? "page" : undefined}
                  className={
                    lang === "ar"
                      ? "text-xs px-3 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 font-medium font-arabic"
                      : "text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/50 hover:border-white/20 hover:text-white transition-colors font-arabic"
                  }
                >
                  عربي
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/50 text-xs'>
            © {new Date().getFullYear()} Global Trade Hub. {c.rights}
          </p>
          <p className='text-white/30 text-xs font-arabic' dir='rtl'>
            جميع الحقوق محفوظة · المنصّة العالمية للتجارة
          </p>
        </div>
      </div>
    </footer>
  );
};
