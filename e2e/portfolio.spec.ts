import { expect, test } from "@playwright/test";

test("visitor can open a zone from the map and reach contact", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("application", { name: /mapa/i }).click();
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("KeyE");
  await expect(page.getByRole("dialog", { name: /laboratorio/i })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);

  await page.getByRole("navigation").getByRole("link", { name: "Contacto" }).click();
  await expect(page.getByRole("region", { name: "Contacto" }).getByText("diarpicu2022@gmail.com")).toBeVisible();
});

test("touch controls move the player and open a zone", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Mover a la derecha" }).click();
  await page.getByRole("button", { name: "Entrar" }).click();
  await expect(page.getByRole("dialog", { name: /laboratorio/i })).toBeVisible();
});

test("page has no horizontal scroll and the CV is downloadable", async ({ page, request }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);

  const cv = await request.get("/cv-diego-armando-pinta-cuasquen.pdf");
  expect(cv.ok()).toBe(true);
  expect(cv.headers()["content-type"]).toContain("pdf");
});
