import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://itsme.senriy.dev/");
});

test("Top Check 1", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Sen" })).toBeVisible();
});

test("mdファイル Check 1", async ({ page }) => {
  await page.getByRole("link", { name: "Weblog" }).click();
  await page.getByRole("link", { name: "ポートフォリオを作成" }).click();
  await expect(page.getByRole("heading", { name: "はじめに" })).toBeVisible();
});
