/**
 * Lightweight nav manifest for the Educational section.
 *
 * Pure-data module (no JSX, no React imports) so client menus can render
 * nav links without dragging the full bilingual article bodies (~20 kB) into
 * the client bundle. A unit test
 * (`src/__tests__/content-manifests.test.ts`) verifies this manifest stays
 * in sync with the canonical registry at `@/content/learn`.
 */
import type { LearnCategory, BilingualText } from "./types";

export interface LearnNavEntry {
  slug: string;
  category: LearnCategory;
  title: BilingualText;
}

export const learnNavManifest: LearnNavEntry[] = [
  {
    slug: "sourcing-guide-egypt",
    category: "sourcing",
    title: {
      en: "The complete buyer's guide to sourcing wholesale from Egypt",
      ar: "الدليل الكامل للمشتري للتوريد بالجملة من مصر",
    },
  },
  {
    slug: "egyptian-cotton-grades",
    category: "sourcing",
    title: {
      en: "Egyptian cotton grades explained: Giza 86, 87, 88, 92, 94, 96 and the CES trademark",
      ar: "شرح أصناف القطن المصري: جيزة ٨٦، ٨٧، ٨٨، ٩٢، ٩٤، ٩٦ وعلامة CES التجارية",
    },
  },
  {
    slug: "manufacturer-vetting-checklist",
    category: "sourcing",
    title: {
      en: "Manufacturer vetting checklist for Egyptian suppliers",
      ar: "قائمة فحص المصنعين لتقييم الموردين المصريين",
    },
  },
  {
    slug: "incoterms-2020-explained",
    category: "logistics",
    title: {
      en: "Incoterms 2020 explained for Egyptian export buyers",
      ar: "شرح Incoterms 2020 للمشترين من الصادرات المصرية",
    },
  },
  {
    slug: "shipping-from-egypt",
    category: "logistics",
    title: {
      en: "Shipping from Egypt: ports, transit times, FCL vs LCL, and Suez Canal economics",
      ar: "الشحن من مصر: الموانئ، أوقات العبور، FCL مقابل LCL، واقتصاديات قناة السويس",
    },
  },
  {
    slug: "customs-and-export-procedures",
    category: "logistics",
    title: {
      en: "Egyptian customs & export procedures: NAFEZA, ACI, HS codes, and free zones",
      ar: "الجمارك وإجراءات التصدير المصرية: نافذة، ACI، أكواد HS، والمناطق الحرة",
    },
  },
  {
    slug: "quality-inspection-standards",
    category: "compliance",
    title: {
      en: "Quality inspection standards: PSI, third-party labs, and AQL sampling under ISO 2859-1",
      ar: "معايير فحص الجودة: PSI، مختبرات الطرف الثالث، وأخذ العينات AQL وفق ISO 2859-1",
    },
  },
  {
    slug: "payment-and-trade-finance",
    category: "compliance",
    title: {
      en: "Payment terms and trade finance for Egyptian export deals",
      ar: "شروط الدفع والتمويل التجاري لعقود التصدير المصرية",
    },
  },
  {
    slug: "intellectual-property-protection",
    category: "compliance",
    title: {
      en: "Intellectual property protection for Egyptian exports: trademarks, designs, and customs recordation",
      ar: "حماية الملكية الفكرية للصادرات المصرية: العلامات والتصميمات والتسجيل الجمركي",
    },
  },
  {
    slug: "sustainability-and-esg",
    category: "compliance",
    title: {
      en: "Sustainability and ESG for Egyptian exporters: GOTS, OEKO-TEX, BCI, and EU CBAM",
      ar: "الاستدامة وحوكمة ESG للمصدّرين المصريين: GOTS و OEKO-TEX و BCI و CBAM الأوروبي",
    },
  },
];
