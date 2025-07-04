import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(page.getByText('+5% em relação ao mês anterior')).toBeVisible()

});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText('10', { exact: true })).toBeVisible()
  expect(page.getByText('+4% em relação ao mês anterior')).toBeVisible()

});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText('R$ 340,00')).toBeVisible()
  expect(page.getByText('+15% em relação ao mes')).toBeVisible()

});