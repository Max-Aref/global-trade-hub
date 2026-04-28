import { test, expect } from "@playwright/test";

test.describe("learn hub", () => {
  test("/en/learn lists articles and links to a slug page", async ({
    page,
  }) => {
    await page.goto("/en/learn");
    const firstArticle = page
      .locator('a[href^="/en/learn/"]')
      .filter({ hasNotText: /^\s*$/ })
      .first();
    await expect(firstArticle).toBeVisible();
    const href = await firstArticle.getAttribute("href");
    expect(href).toMatch(/^\/en\/learn\/[a-z0-9-]+/);
    await firstArticle.click();
    await expect(page).toHaveURL(new RegExp(href!));
  });

  test("/ar/learn renders Arabic with rtl footer", async ({ page }) => {
    await page.goto("/ar/learn");
    await expect(page.locator("footer").first()).toHaveAttribute("dir", "rtl");
  });
});
