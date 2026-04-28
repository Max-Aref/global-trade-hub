import { describe, it, expect } from "vitest";
import { getAllLegalDocs, getLegalDocBySlug } from "@/content/legal";

describe("legal registry", () => {
  const docs = getAllLegalDocs();

  it("contains all 7 expected slugs", () => {
    const expected = [
      "privacy-policy",
      "terms-of-service",
      "cookie-policy",
      "acceptable-use",
      "refund-and-returns",
      "shipping-policy",
      "imprint",
    ];
    expect(docs.map((d) => d.slug).sort()).toEqual(expected.sort());
  });

  it("uses ISO lastUpdated and a known reviewStatus", () => {
    for (const d of docs) {
      expect(d.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(["draft", "counsel-reviewed", "final"]).toContain(d.reviewStatus);
    }
  });

  it("has bilingual title and description on every doc", () => {
    for (const d of docs) {
      expect(d.title.en).toBeTruthy();
      expect(d.title.ar).toBeTruthy();
      expect(d.description.en).toBeTruthy();
      expect(d.description.ar).toBeTruthy();
    }
  });

  it("getLegalDocBySlug returns the right doc and undefined for misses", () => {
    expect(getLegalDocBySlug("imprint")?.slug).toBe("imprint");
    expect(getLegalDocBySlug("nope")).toBeUndefined();
  });
});
