import { test, expect } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  
  await page.getByRole('textbox', { name: 'Nome' }).fill('Rocket Pizza')
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Another Description random to test the update')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle') //aguarda toda requisição http ser concluída.

  const toast = page.getByText(
    "Perfil atualizado com sucesso! uhuu."
  );
  
  await expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close', exact: true }).click()

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeInViewport()
});



