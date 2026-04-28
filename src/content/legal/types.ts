import type { ReactNode } from "react";
import type { Locale } from "@/config/i18n";

export type LegalCategory = "privacy" | "terms" | "platform" | "company";

export interface BilingualText {
  en: string;
  ar: string;
}

export interface BilingualBody {
  en: ReactNode;
  ar: ReactNode;
}

export interface LegalDoc {
  slug: string;
  category: LegalCategory;
  title: BilingualText;
  description: BilingualText;
  lastUpdated: string; // ISO YYYY-MM-DD
  reviewStatus: "draft" | "counsel-reviewed" | "final";
  body: BilingualBody;
}

export const LEGAL_CATEGORY_LABELS: Record<LegalCategory, BilingualText> = {
  privacy: { en: "Privacy & Data", ar: "الخصوصية والبيانات" },
  terms: { en: "Terms & Conditions", ar: "الشروط والأحكام" },
  platform: { en: "Platform Policies", ar: "سياسات المنصة" },
  company: { en: "Company Information", ar: "معلومات الشركة" },
};
