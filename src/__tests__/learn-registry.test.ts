import { describe, it, expect } from "vitest";
import {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
} from "@/content/learn";

describe("learn registry", () => {
  const articles = getAllArticles();

  it("returns at least 10 articles", () => {
    expect(articles.length).toBeGreaterThanOrEqual(10);
  });

  it("has unique slugs and ISO reviewedDate", () => {
    const slugs = articles.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const a of articles) {
      expect(a.reviewedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isFinite(Date.parse(a.reviewedDate))).toBe(true);
    }
  });

  it("only references existing slugs in `related`", () => {
    const slugSet = new Set(articles.map((a) => a.slug));
    for (const a of articles) {
      for (const rel of a.related) {
        expect(slugSet.has(rel), `bad related slug "${rel}" on ${a.slug}`).toBe(
          true,
        );
      }
    }
  });

  it("has English title and description for every article", () => {
    for (const a of articles) {
      expect(a.title.en.length).toBeGreaterThan(0);
      expect(a.description.en.length).toBeGreaterThan(0);
    }
  });

  it("getArticleBySlug returns the right article and undefined for misses", () => {
    expect(getArticleBySlug("incoterms-2020-explained")?.slug).toBe(
      "incoterms-2020-explained",
    );
    expect(getArticleBySlug("does-not-exist")).toBeUndefined();
  });

  it("getArticlesByCategory partitions correctly", () => {
    const sourcing = getArticlesByCategory("sourcing");
    const logistics = getArticlesByCategory("logistics");
    const compliance = getArticlesByCategory("compliance");
    expect(sourcing.every((a) => a.category === "sourcing")).toBe(true);
    expect(logistics.every((a) => a.category === "logistics")).toBe(true);
    expect(compliance.every((a) => a.category === "compliance")).toBe(true);
    expect(sourcing.length + logistics.length + compliance.length).toBe(
      articles.length,
    );
  });
});
