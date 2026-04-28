import { test, expect } from "@playwright/test";

test.describe("legal hub", () => {
  test("/en/legal lists at least 7 doc cards", async ({ page }) => {
    await page.goto("/en/legal");
    const docLinks = page.locator('a[href^="/en/legal/"]');
    expect(await docLinks.count()).toBeGreaterThanOrEqual(7);
  });

  test("a slug page renders successfully", async ({ page }) => {
    await page.goto("/en/legal/privacy-policy");
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeAttached();
  });

  test("draft slug page emits noindex meta robots", async ({ page }) => {
    const response = await page.goto("/en/legal/privacy-policy");
    expect(response?.status()).toBe(200);
    const robots = await page
      .locator('meta[name="robots"]')
      .getAttribute("content");
    // Drafts must not be indexed
    expect(robots ?? "").toMatch(/noindex/i);
  });
});
