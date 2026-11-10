import { expect, test, type Page } from "@playwright/test";

/** En celular los enlaces viven en el menú; en escritorio, en la barra. */
async function enlaceNav(page: Page, name: string, isMobile: boolean) {
  if (isMobile) await page.getByRole("button", { name: /^(Menú|Menu)$/ }).click();
  const scope = isMobile ? page.locator(".nav-ed-panel") : page.getByRole("navigation");
  return scope.getByRole("link", { name, exact: true });
}

test("visitor can open a zone from the map and reach contact", async ({ page, isMobile }) => {
  await page.goto("/quest");
  await page.getByRole("application", { name: /mapa/i }).click();
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("KeyE");
  await expect(page.getByRole("dialog", { name: /laboratorio/i })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);

  await page.goto("/");
  await (await enlaceNav(page, "Contacto", isMobile)).click();
  await expect(page).toHaveURL(/#contacto$/);
  await expect(page.getByRole("region", { name: "Contacto" }).getByRole("link", { name: "diarpicu2022@gmail.com" })).toBeInViewport();
});

test("touch controls move the player and open a zone", async ({ page }) => {
  await page.goto("/quest");
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

test("English version works end to end", async ({ page, request, isMobile }) => {
  await page.goto("/");
  await (await enlaceNav(page, "English", isMobile)).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("link", { name: "Enter the map" }).click();
  await expect(page).toHaveURL(/\/en\/quest$/);
  await page.getByRole("button", { name: "Open Laboratory" }).click();
  await expect(page.getByRole("dialog", { name: "Laboratory" })).toBeVisible();

  const cv = await request.get("/cv-diego-armando-pinta-cuasquen-en.pdf");
  expect(cv.ok()).toBe(true);
});

test("zone progress survives a reload", async ({ page }) => {
  await page.goto("/quest");
  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "Abrir Posada" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "1");
  await page.reload();
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "1");
});

test("unknown pages show the themed 404 and social image exists", async ({ page, request }) => {
  const response = await page.goto("/no-existe");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /te perdiste/i })).toBeVisible();

  const html = await (await request.get("/")).text();
  const og = html.match(/property="og:image" content="[^"]*?(\/opengraph-image[^"?]*)/)?.[1];
  expect(og).toBeTruthy();
  const image = await request.get(og!);
  expect(image.headers()["content-type"]).toContain("image/png");
});

test("case studies are reachable from the project list and keep the language", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  // AgroPulse ya no es el primero (enmienda 10): se elige en el selector antes de abrir su caso.
  await page.getByRole("tab", { name: /AgroPulse/ }).click();
  await page.getByRole("link", { name: "Ver caso de estudio: AgroPulse" }).click();
  await expect(page).toHaveURL(/\/proyectos\/agropulse$/);
  await expect(page.getByRole("heading", { level: 1, name: "AgroPulse" })).toBeVisible();
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/projects\/agropulse$/);
  await expect(page.getByRole("heading", { name: "The challenge" })).toBeVisible();
  await page.getByRole("navigation", { name: "Next project" }).getByRole("link").click();
  await expect(page).toHaveURL(/\/en\/projects\/hidromon$/);
});

test("content stays visible with reduced motion", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/proyectos/ecos");
  await expect(page.getByRole("heading", { name: "Resultado" })).toBeVisible();
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await context.close();
});

test("navigation reaches every section and the skip link comes first", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  for (const [name, hash] of [
    ["Perfil", "perfil"],
    ["Proyectos", "proyectos"],
    ["Experiencia", "experiencia"],
    ["Formación", "formacion"],
    ["Contacto", "contacto"],
  ]) {
    await (await enlaceNav(page, name, isMobile)).click();
    await expect(page).toHaveURL(new RegExp(`#${hash}$`));
    // La sección queda justo debajo de la navegación fija de 72 px.
    const top = await page.locator(`#${hash}`).evaluate((el) => el.getBoundingClientRect().top);
    expect(Math.abs(top - 72)).toBeLessThanOrEqual(2);
  }
});

test("mobile menu opens, closes with Escape and returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const boton = page.getByRole("button", { name: "Menú" });
  await boton.click();
  await expect(boton).toHaveAttribute("aria-expanded", "true");
  const panel = page.locator(".nav-ed-panel");
  await expect(panel.getByRole("link", { name: "Perfil" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(boton).toBeFocused();
  await boton.click();
  await panel.getByRole("link", { name: "Proyectos" }).click();
  await expect(panel).toBeHidden();
  await expect(page).toHaveURL(/#proyectos$/);
});

test("the 2D map loads at /quest and links back to the portfolio", async ({ page }) => {
  const errores: string[] = [];
  page.on("pageerror", (e) => errores.push(e.message));
  await page.goto("/quest");
  await expect(page.getByRole("application", { name: /mapa/i })).toBeVisible();
  await page.getByRole("link", { name: /volver al portafolio/i }).click();
  await expect(page).toHaveURL(/\/#mapa$/);
  await page.goto("/en/quest");
  await expect(page.getByRole("application")).toBeVisible();
  expect(errores).toEqual([]);
});

test("project selector works with the keyboard and keeps the section height", async ({ page }) => {
  await page.goto("/");
  const lista = page.getByRole("tablist", { name: "Elige un proyecto" });
  const primera = lista.getByRole("tab").first();
  await primera.focus();
  const alto = await page.locator("#proyectos").evaluate((el) => el.getBoundingClientRect().height);
  await page.keyboard.press("ArrowDown");
  await expect(lista.getByRole("tab", { name: /Ecos de la Tierra/ })).toBeFocused();
  await expect(lista.getByRole("tab", { name: /Ecos de la Tierra/ })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: /Ecos de la Tierra/ })).toBeVisible();
  await page.keyboard.press("End");
  await expect(lista.getByRole("tab", { name: /Tower Defense/ })).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Home");
  await expect(primera).toHaveAttribute("aria-selected", "true");
  // Cambio por teclado: sin animación (8.8).
  const anim = await page.locator(".selector-panel[data-activo] .selector-anima").evaluate((el) => getComputedStyle(el).animationName);
  expect(anim).toBe("none");
  expect(await page.locator("#proyectos").evaluate((el) => el.getBoundingClientRect().height)).toBe(alto);
  await expect(page).toHaveURL(/#proyecto-siscan$/);
});

test("a direct link selects the project; missing capture and demo have their states", async ({ page }) => {
  await page.goto("/#proyecto-ecos");
  await expect(page.getByRole("tab", { name: /Ecos de la Tierra/ })).toHaveAttribute("aria-selected", "true");
  const ecos = page.getByRole("tabpanel", { name: /Ecos de la Tierra/ });
  await expect(ecos.getByRole("img", { name: /Combate de Ecos de la Tierra/ })).toBeVisible();
  await expect(ecos.getByText("Sin demo pública")).toBeVisible();
  await page.getByRole("tab", { name: /AgroPulse/ }).click();
  const agro = page.getByRole("tabpanel", { name: /AgroPulse/ });
  await expect(agro.locator(".selector-placa")).toHaveText("AgroPulse");
  await expect(agro.getByRole("img")).toHaveCount(0);
  await expect(agro.getByRole("link", { name: "Ver caso de estudio: AgroPulse" })).toHaveAttribute("href", "/proyectos/agropulse");
});

test("without JavaScript the eleven projects are listed with their links", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator(".selector-lista")).toBeHidden();
  await expect(page.locator(".selector-panel")).toHaveCount(11);
  for (const panel of await page.locator(".selector-panel").all()) await expect(panel).toBeVisible();
  await expect(page.locator('.selector a[href^="/proyectos/"]')).toHaveCount(11);
  await context.close();
});
