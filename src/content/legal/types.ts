import type { ReactNode } from "react";
import type { Locale } from "@/config/i18n";

export type LegalCategory = "privacy" | "terms" | "platform" | "company";

export interface BilingualText {
  en: string;
}

export interface BilingualBody {
  en: ReactNode;
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
  privacy: { en: "Privacy & Data" },
  terms: { en: "Terms & Conditions" },
  platform: { en: "Platform Policies" },
  company: { en: "Company Information" },
};
