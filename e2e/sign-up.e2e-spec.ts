import { test, expect } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
  await page.goto("/sign-up", {
    waitUntil: "networkidle",
  });

  await page.getByRole('textbox', { name: 'Nome do estabelecimento' })
  .fill("Pizza Shop");
  await page.getByRole('textbox', { name: 'Seu nome' })
  .fill("Fulano");
  await page.getByRole('textbox', { name: 'Seu celular' })
  .fill("344234324");
  await page.getByRole('textbox', { name: 'Seu e-mail' })
  .fill("test@example.com");
  
  await page.getByRole("button", { name: "Finalizar Cadastro!" }).click();

  const toast = page.getByText(
    "Restaurante cadastrado com sucesso"
  );

  await expect(toast).toBeVisible();
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", {
    waitUntil: "networkidle",
  });

  await page.getByRole('textbox', { name: 'Nome do estabelecimento' })
  .fill("Invalid Name");
  await page.getByRole('textbox', { name: 'Seu nome' })
  .fill("Fulano");
  await page.getByRole('textbox', { name: 'Seu celular' })
  .fill("344234324");
  await page.getByRole('textbox', { name: 'Seu e-mail' })
  .fill("test@example.com");
  
  await page.getByRole("button", { name: "Finalizar Cadastro!" }).click();

  const toast = page.getByText(
    "Erro ao cadastrar suas credenciais."
  );

  await expect(toast).toBeVisible();
});

test("navigate to sign in page", async ({ page }) => {
  await page.goto("/sign-up", {
    waitUntil: "networkidle",
  });

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
});