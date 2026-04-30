/**
 * Lightweight nav manifest for the Legal section.
 *
 * Pure-data module — see `src/content/learn/nav-manifest.ts` for rationale.
 * A unit test verifies this stays in sync with `@/content/legal`.
 */
import type { LegalCategory, BilingualText } from "./types";

export interface LegalNavEntry {
  slug: string;
  category: LegalCategory;
  title: BilingualText;
  reviewStatus: "draft" | "counsel-reviewed" | "final";
}

export const legalNavManifest: LegalNavEntry[] = [
  {
    slug: "privacy-policy",
    category: "privacy",
    title: { en: "Privacy Policy" },
    reviewStatus: "draft",
  },
  {
    slug: "terms-of-service",
    category: "terms",
    title: { en: "Terms of Service" },
    reviewStatus: "draft",
  },
  {
    slug: "cookie-policy",
    category: "privacy",
    title: { en: "Cookie Policy" },
    reviewStatus: "draft",
  },
  {
    slug: "acceptable-use",
    category: "platform",
    title: { en: "Acceptable Use Policy" },
    reviewStatus: "draft",
  },
  {
    slug: "refund-and-returns",
    category: "platform",
    title: { en: "Refund & Returns Policy" },
    reviewStatus: "draft",
  },
  {
    slug: "shipping-policy",
    category: "platform",
    title: { en: "Shipping Policy" },
    reviewStatus: "draft",
  },
  {
    slug: "imprint",
    category: "company",
    title: {
      en: "Imprint & Company Information",
    },
    reviewStatus: "draft",
  },
];
