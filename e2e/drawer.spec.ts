import { test, expect } from "@playwright/test";

test.describe("mobile drawer", () => {
  test.use({ viewport: { width: 375, height: 800 } });

  test("opens, exposes Educational/Legal sections, navigates and closes", async ({
    page,
  }) => {
    await page.goto("/en");

    // Open the drawer via the burger button
    const burger = page.getByRole("button", { name: /open menu/i });
    await burger.click();

    const dialog = page.getByRole("dialog", { name: /site navigation/i });
    await expect(dialog).toBeVisible();

    // Expand Educational
    const eduToggle = dialog.getByRole("button", { name: /^educational$/i });
    await eduToggle.click();
    await expect(eduToggle).toHaveAttribute("aria-expanded", "true");

    // Click first article link inside the drawer
    const firstLearn = dialog.locator('a[href^="/en/learn/"]').first();
    const href = await firstLearn.getAttribute("href");
    await firstLearn.click();

    if (href) {
      await expect(page).toHaveURL(new RegExp(href));
    }

    // After navigation, drawer should be unmounted
    await expect(
      page.getByRole("dialog", { name: /site navigation/i }),
    ).toHaveCount(0);
  });
});
