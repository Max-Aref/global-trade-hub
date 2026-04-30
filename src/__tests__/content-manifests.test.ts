import { describe, it, expect } from "vitest";
import { getAllArticles } from "@/content/learn";
import { learnNavManifest } from "@/content/learn/nav-manifest";
import { getAllLegalDocs } from "@/content/legal";
import { legalNavManifest } from "@/content/legal/nav-manifest";

describe("learn nav manifest", () => {
  const articles = getAllArticles();

  it("has the same number of entries as the registry", () => {
    expect(learnNavManifest).toHaveLength(articles.length);
  });

  it("has unique slugs", () => {
    const slugs = learnNavManifest.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("matches every article on slug, category, and title", () => {
    for (const article of articles) {
      const entry = learnNavManifest.find((m) => m.slug === article.slug);
      expect(
        entry,
        `manifest entry missing for slug "${article.slug}"`,
      ).toBeDefined();
      expect(entry!.category).toBe(article.category);
      expect(entry!.title.en).toBe(article.title.en);
    }
  });

  it("contains no extras not present in the registry", () => {
    const registrySlugs = new Set(articles.map((a) => a.slug));
    for (const m of learnNavManifest) {
      expect(registrySlugs.has(m.slug)).toBe(true);
    }
  });
});

describe("legal nav manifest", () => {
  const docs = getAllLegalDocs();

  it("has the same number of entries as the registry", () => {
    expect(legalNavManifest).toHaveLength(docs.length);
  });

  it("has unique slugs", () => {
    const slugs = legalNavManifest.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("matches every doc on slug, category, title, and reviewStatus", () => {
    for (const doc of docs) {
      const entry = legalNavManifest.find((m) => m.slug === doc.slug);
      expect(
        entry,
        `manifest entry missing for slug "${doc.slug}"`,
      ).toBeDefined();
      expect(entry!.category).toBe(doc.category);
      expect(entry!.title.en).toBe(doc.title.en);
      expect(entry!.reviewStatus).toBe(doc.reviewStatus);
    }
  });
});
