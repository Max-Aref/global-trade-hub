import { test, expect } from "@playwright/test";

test.describe("locales", () => {
  test("/en renders LTR home with header and footer", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveURL(/\/en\/?$/);
    const html = page.locator("html");
    // English landing should not be RTL
    await expect(html).not.toHaveAttribute("dir", "rtl");
    // Footer is below the fold — assert it's attached.
    await expect(page.locator("footer").first()).toBeAttached();
  });

  test("/ar renders RTL home", async ({ page }) => {
    await page.goto("/ar");
    await expect(page).toHaveURL(/\/ar\/?$/);
    const footer = page.locator("footer").first();
    await expect(footer).toHaveAttribute("dir", "rtl");
  });
});
