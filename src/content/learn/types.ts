import type { ReactNode } from "react";
import type { Locale } from "@/config/i18n";

export type LearnCategory = "sourcing" | "logistics" | "compliance";

export interface BilingualText {
  en: string;
  ar: string;
}

export interface BilingualBody {
  en: ReactNode;
  ar: ReactNode;
}

export interface Article {
  slug: string;
  category: LearnCategory;
  title: BilingualText;
  description: BilingualText;
  reviewedDate: string; // ISO YYYY-MM-DD
  readingMinutes: number;
  authorName?: string;
  related: string[]; // slugs
  body: BilingualBody;
}

export const CATEGORY_LABELS: Record<LearnCategory, BilingualText> = {
  sourcing: { en: "Sourcing from Egypt", ar: "التوريد من مصر" },
  logistics: { en: "Trade & Logistics", ar: "التجارة واللوجستيات" },
  compliance: { en: "Compliance & Quality", ar: "الامتثال والجودة" },
};

export function getLocalized<T extends BilingualText | BilingualBody>(
  field: T,
  lang: Locale,
): T extends BilingualText ? string : ReactNode {
  return field[lang] as T extends BilingualText ? string : ReactNode;
}
