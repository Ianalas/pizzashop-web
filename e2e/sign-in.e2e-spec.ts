import { test, expect } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
  await page.goto("/sign-in", {
    waitUntil: "networkidle",
  });

  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("test@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Enviamos um Link de Autenticação para seu email!"
  );

  await expect(toast).toBeVisible();
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", {
    waitUntil: "networkidle",
  });

  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Credenciais inválidas."
  );

  await expect(toast).toBeVisible();
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", {
    waitUntil: "networkidle",
  });

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')

});