import { test, expect } from "@playwright/test";

test("open new rating form", async ({ page }) => {
  await page.goto("/rating-meter");
  await expect(
    page.getByRole("button").and(page.getByText("New")),
  ).toBeVisible();
  await page.getByRole("button").and(page.getByText("New")).click();
  await page.waitForTimeout(2000);
  await page.waitForURL("**/new");
  await expect(page.getByText("Editing Rating Meter")).toBeVisible();
});
