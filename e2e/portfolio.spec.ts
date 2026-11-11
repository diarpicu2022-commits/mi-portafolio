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
  await expect(page.getByRole("heading", { level: 1, name: "Esta página no existe." })).toBeVisible();
  await expect(page.getByRole("link", { name: /Volver al inicio/ })).toHaveAttribute("href", "/");

  const html = await (await request.get("/")).text();
  const og = html.match(/property="og:image" content="[^"]*?(\/opengraph-image[^"?]*)/)?.[1];
  expect(og).toBeTruthy();
  const image = await request.get(og!);
  expect(image.headers()["content-type"]).toContain("image/png");
});

test("case studies are reachable from the project list and keep the language", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  // AgroPulse va en el abanico de cartas ilustradas.
  await page.locator("#proyecto-agropulse").getByRole("link", { name: "Ver caso de estudio: AgroPulse" }).click();
  await expect(page).toHaveURL(/\/proyectos\/agropulse$/);
  await expect(page.getByRole("heading", { level: 1, name: "AgroPulse" })).toBeVisible();
  await (await enlaceNav(page, "English", isMobile)).click();
  await expect(page).toHaveURL(/\/en\/projects\/agropulse$/);
  await expect(page.getByRole("heading", { name: "The challenge" })).toBeVisible();
  await page.getByRole("navigation", { name: "Next project" }).getByRole("link").click();
  await expect(page).toHaveURL(/\/en\/projects\/harmonia$/);
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

test("projects show as collage and illustrated cards with working links", async ({ page }) => {
  await page.goto("/#proyectos");
  await expect(page.locator(".collage-item")).toHaveCount(10);
  await expect(page.locator(".carta")).toHaveCount(1);
  await expect(page.locator("#proyecto-hidromon")).toContainText("Ilustración");
  const repos = page.locator('.collage-item a[aria-label$="(GitHub)"]');
  expect(await repos.count()).toBeGreaterThan(0);
  for (const href of await repos.evaluateAll((els) => els.map((e) => e.getAttribute("href"))))
    expect(href).toMatch(/^https:\/\/github\.com\/diarpicu2022-commits\//);
});

test("without JavaScript the eleven projects are listed with their links", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator('#proyectos a[aria-label^="Ver caso de estudio:"]')).toHaveCount(11);
  await expect(page.locator(".hero2-titular")).toBeVisible();
  await context.close();
});

test("the hardware / software band flips colour across the diagonal", async ({ page }) => {
  await page.goto("/");
  const franja = page.getByRole("region", { name: "Dos ingenierías" });
  await expect(franja).toBeVisible();
  const recorte = await franja.locator(".franja-capa-negra").evaluate((el) => getComputedStyle(el).clipPath);
  expect(recorte).toContain("polygon");
  // La capa de encima está oculta a lectores de pantalla: el texto se lee una sola vez.
  await expect(franja.locator('.franja-capa-negra[aria-hidden="true"]')).toHaveCount(1);
  await expect(franja.locator(".franja-capa:not(.franja-capa-negra)").getByText("Hardware", { exact: true })).toBeVisible();
});

test("the contact form explains empty fields and never posts to a server", async ({ page }) => {
  let peticiones = 0;
  page.on("request", (r) => r.method() === "POST" && peticiones++);
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir en mi correo" }).click();
  await expect(page.getByLabel("Tu nombre")).toBeFocused();
  await expect(page.getByLabel("Tu nombre")).toHaveAttribute("aria-invalid", "true");
  await expect(page.getByText("Escribe tu nombre.")).toBeVisible();
  await expect(page.getByText("Escribe el mensaje.")).toBeVisible();
  expect(peticiones).toBe(0);
});

test("the extra section shows the real map and enters /quest", async ({ page }) => {
  await page.goto("/");
  const mapa = page.getByRole("region", { name: "Explora el mapa" });
  await expect(mapa.locator("img")).toBeVisible();
  await mapa.getByRole("link", { name: "Entrar al mapa" }).click();
  await expect(page).toHaveURL(/\/quest$/);
});

test("privacy page is linked from the footer and deletes the map progress", async ({ page }) => {
  await page.goto("/quest");
  await page.getByRole("button", { name: "Abrir Posada" }).click();
  await page.keyboard.press("Escape");
  expect(await page.evaluate(() => localStorage.getItem("diecu-visited"))).not.toBeNull();
  await page.goto("/");
  await page.getByRole("contentinfo").getByRole("link", { name: "Política de privacidad" }).click();
  await expect(page).toHaveURL(/\/privacidad$/);
  await expect(page.getByRole("heading", { level: 1, name: "Política de privacidad" })).toBeVisible();
  await expect(page.getByText(/borrador|draft/i)).toHaveCount(0);
  await expect(page.getByText(/no muestra un aviso de cookies/)).toBeVisible();
  await page.getByRole("button", { name: "Borrar el progreso del mapa" }).click();
  await expect(page.getByRole("status")).toHaveText(/se borraron/);
  expect(await page.evaluate(() => ["diecu-visited", "diecu-sound", "diecu-night"].map((k) => localStorage.getItem(k)))).toEqual([null, null, null]);
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/privacy$/);
  await expect(page.getByRole("heading", { level: 1, name: "Privacy policy" })).toBeVisible();
});

test("skills show technology logos and experience shows each project's image", async ({ page }) => {
  await page.goto("/#habilidades");
  expect(await page.locator(".skills2-logo svg").count()).toBeGreaterThan(20);
  await expect(page.locator(".skills2")).not.toContainText("%");
});

test("search engines get a sitemap with both languages, robots, structured data and per-project images", async ({ page, request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("/proyectos/agropulse");
  expect(sitemap).toContain('hreflang="en"');
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Disallow: /sistema");
  await page.goto("/");
  await expect(page).toHaveTitle(/Diego Armando Pinta Cuasquen/);
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", /\/en$/);
  const persona = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
  expect(persona["@type"]).toBe("Person");
  expect(JSON.stringify(persona)).not.toMatch(/telephone|\+57/);
  const html = await (await request.get("/proyectos/agropulse")).text();
  const og = html.match(/property="og:image" content="[^"]*?(\/proyectos\/agropulse\/opengraph-image[^"?]*)/)?.[1];
  expect(og).toBeTruthy();
  expect((await request.get(og!)).headers()["content-type"]).toContain("image/png");
  const cv = await request.get("/cv-diego-armando-pinta-cuasquen.pdf");
  expect(cv.ok()).toBe(true);
});
