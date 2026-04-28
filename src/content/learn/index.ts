import type { Article, LearnCategory } from "./types";
import { article as a1 } from "./sourcing-guide-egypt";
import { article as a2 } from "./egyptian-cotton-grades";
import { article as a3 } from "./manufacturer-vetting-checklist";
import { article as a4 } from "./incoterms-2020-explained";
import { article as a5 } from "./shipping-from-egypt";
import { article as a6 } from "./customs-and-export-procedures";
import { article as a7 } from "./quality-inspection-standards";
import { article as a8 } from "./payment-and-trade-finance";
import { article as a9 } from "./intellectual-property-protection";
import { article as a10 } from "./sustainability-and-esg";

export const articles: Article[] = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: LearnCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export type { Article, LearnCategory } from "./types";
