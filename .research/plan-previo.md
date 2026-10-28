# Diecu's Engineering Quest Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publishable personal portfolio in Next.js where an accessible 2D overworld leads to Diego's profile, projects, experience, CV and contact information.

**Architecture:** A client-side `PortfolioWorld` holds movement, collision and nearest-zone state. Typed portfolio data is independent from map behavior; `ZonePanel` renders a selected zone, while ordinary semantic sections and sticky navigation make all content accessible without playing. The CV is generated from a single structured source and placed in `public/` for download.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vitest + Testing Library, Playwright, `@react-pdf/renderer`.

---

## File structure

- `portafolio-diego/package.json`: scripts and dependencies.
- `portafolio-diego/app/layout.tsx`: fonts, metadata and global shell.
- `portafolio-diego/app/page.tsx`: composition of landing/map/content/footer.
- `portafolio-diego/app/globals.css`: tokens, pixel-inspired treatments and reduced-motion fallback.
- `portafolio-diego/data/portfolio.ts`: typed identity, projects, skills, experience, zones and testimonials.
- `portafolio-diego/lib/world.ts`: pure grid/movement/collision/nearest-zone functions.
- `portafolio-diego/components/portfolio-world.tsx`: keyboard and touch map controller.
- `portafolio-diego/components/world-canvas.tsx`: grid and accessible visual rendering.
- `portafolio-diego/components/zone-panel.tsx`: dialog panel for selected point of interest.
- `portafolio-diego/components/portfolio-nav.tsx`: sticky conventional navigation.
- `portafolio-diego/components/content-sections.tsx`: semantic fallback content sections.
- `portafolio-diego/components/contact-footer.tsx`: email, GitHub, CV and footer.
- `portafolio-diego/scripts/generate-cv.tsx`: CV PDF source/generator.
- `portafolio-diego/public/cv-diego-armando-pinta-cuasquen.pdf`: generated CV.
- `portafolio-diego/tests/world.test.ts`: pure world unit tests.
- `portafolio-diego/tests/portfolio-world.test.tsx`: interaction and dialog component tests.
- `portafolio-diego/e2e/portfolio.spec.ts`: keyboard, mobile and navigation smoke tests.

### Task 1: Scaffold the required stack

**Files:**
- Create: `portafolio-diego/package.json`
- Create: `portafolio-diego/app/layout.tsx`
- Create: `portafolio-diego/app/page.tsx`
- Create: `portafolio-diego/app/globals.css`

- [ ] **Step 1: Create the Next.js project with TypeScript and Tailwind**

Run:

```powershell
npx create-next-app@latest portafolio-diego --typescript --tailwind --eslint --app --src-dir=false --use-npm --import-alias "@/*"
```

Expected: `portafolio-diego/package.json` includes `next`, `react`, `typescript` and Tailwind configuration.

- [ ] **Step 2: Replace the generated page with a smoke-testable shell**

```tsx
export default function Home() {
  return <main><h1>Diecu&apos;s Engineering Quest</h1></main>;
}
```

- [ ] **Step 3: Start development server and verify the shell**

Run: `npm run dev`

Expected: the browser renders `Diecu's Engineering Quest` without console errors.

- [ ] **Step 4: Commit the scaffold**

```powershell
git add .
git commit -m "chore: scaffold portfolio application"
```

### Task 2: Model portfolio and map data

**Files:**
- Create: `portafolio-diego/data/portfolio.ts`
- Create: `portafolio-diego/lib/world.ts`
- Test: `portafolio-diego/tests/world.test.ts`

- [ ] **Step 1: Write failing tests for blocked movement and interaction range**

```ts
import { movePlayer, nearestZone } from "@/lib/world";

it("does not move into an obstacle", () => {
  expect(movePlayer({ x: 1, y: 1 }, "right", new Set(["2,1"]))).toEqual({ x: 1, y: 1 });
});

it("finds a zone one tile away", () => {
  expect(nearestZone({ x: 2, y: 1 }, [{ id: "lab", x: 3, y: 1 }])).toBe("lab");
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- world.test.ts`

Expected: FAIL because `@/lib/world` does not exist.

- [ ] **Step 3: Implement pure movement helpers and typed content**

```ts
export type Direction = "up" | "down" | "left" | "right";
export type GridPoint = { x: number; y: number };
export type MapZone = GridPoint & { id: string };

const delta: Record<Direction, GridPoint> = {
  up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 },
};

export function movePlayer(position: GridPoint, direction: Direction, blocked: Set<string>): GridPoint {
  const next = { x: position.x + delta[direction].x, y: position.y + delta[direction].y };
  return blocked.has(`${next.x},${next.y}`) ? position : next;
}

export function nearestZone(position: GridPoint, zones: MapZone[]): string | null {
  return zones.find((zone) => Math.abs(zone.x - position.x) + Math.abs(zone.y - position.y) <= 1)?.id ?? null;
}
```

- [ ] **Step 4: Add content for the approved projects and zones**

Create `portfolio.ts` with typed entries for Ecos de la Tierra, SISCAN, NotaScan, CampusWatch/Agenda, AgroPulse, Harmonia, EcoVolt, SETPasto+, Tower Defense and Proxy IA; include GitHub URLs under `https://github.com/diarpicu2022-commits/`.

- [ ] **Step 5: Run tests**

Run: `npm test -- world.test.ts`

Expected: PASS.

- [ ] **Step 6: Commit data model and world rules**

```powershell
git add data/portfolio.ts lib/world.ts tests/world.test.ts
git commit -m "feat: add typed portfolio data and world rules"
```

### Task 3: Implement the accessible world controller

**Files:**
- Create: `portafolio-diego/components/portfolio-world.tsx`
- Create: `portafolio-diego/components/world-canvas.tsx`
- Create: `portafolio-diego/components/zone-panel.tsx`
- Test: `portafolio-diego/tests/portfolio-world.test.tsx`

- [ ] **Step 1: Write failing component tests**

```tsx
it("opens the laboratory using keyboard interaction", async () => {
  render(<PortfolioWorld />);
  await userEvent.keyboard("{ArrowRight}{KeyE}");
  expect(await screen.findByRole("dialog", { name: /laboratorio/i })).toBeVisible();
});

it("closes an opened zone with Escape", async () => {
  render(<PortfolioWorld />);
  await userEvent.keyboard("{ArrowRight}{KeyE}{Escape}");
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- portfolio-world.test.tsx`

Expected: FAIL because `PortfolioWorld` does not exist.

- [ ] **Step 3: Implement keyboard, touch and panel behavior**

`PortfolioWorld` must use `useEffect` to convert Arrow/WASD keys into `movePlayer`, respond to E/Enter only when `nearestZone` returns a zone id, and set an `activeZoneId`. Render labelled on-screen directional buttons and an `Interact` button for touch users.

- [ ] **Step 4: Implement semantic panels**

`ZonePanel` must use `role="dialog"`, `aria-modal="true"`, a visible close button, Escape close support and a heading identified with `aria-labelledby`. Render project cards with safe external GitHub links and a plain non-link label for unavailable demos.

- [ ] **Step 5: Run component tests**

Run: `npm test -- portfolio-world.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit the interactive map**

```powershell
git add components/portfolio-world.tsx components/world-canvas.tsx components/zone-panel.tsx tests/portfolio-world.test.tsx
git commit -m "feat: add accessible interactive portfolio world"
```

### Task 4: Add conventional sections and visual system

**Files:**
- Create: `portafolio-diego/components/portfolio-nav.tsx`
- Create: `portafolio-diego/components/content-sections.tsx`
- Create: `portafolio-diego/components/contact-footer.tsx`
- Modify: `portafolio-diego/app/page.tsx`
- Modify: `portafolio-diego/app/globals.css`

- [ ] **Step 1: Add a failing page smoke test**

```tsx
it("exposes conventional sections outside the map", () => {
  render(<Home />);
  expect(screen.getByRole("link", { name: /proyectos/i })).toHaveAttribute("href", "#projects");
  expect(screen.getByRole("heading", { name: /experiencia/i })).toBeVisible();
});
```

- [ ] **Step 2: Implement navigation and semantic sections**

Render sticky navigation and sections with ids `about`, `projects`, `experience`, `testimonials` and `contact`. Include at least three explicitly pending testimonial cards, the project list, skills and experience at UCC.

- [ ] **Step 3: Implement design tokens and reduced-motion mode**

```css
:root { --ink: #10263d; --forest: #164a3a; --paper: #fff3d4; --amber: #e6a23c; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; scroll-behavior: auto !important; } }
```

- [ ] **Step 4: Run all unit tests**

Run: `npm test`

Expected: PASS.

- [ ] **Step 5: Commit content and style system**

```powershell
git add components app/page.tsx app/globals.css tests
git commit -m "feat: add portfolio content and pixel adventure design"
```

### Task 5: Generate and integrate the CV PDF

**Files:**
- Create: `portafolio-diego/scripts/generate-cv.tsx`
- Create: `portafolio-diego/public/cv-diego-armando-pinta-cuasquen.pdf`
- Modify: `portafolio-diego/components/contact-footer.tsx`

- [ ] **Step 1: Add a failing download-link assertion**

```tsx
it("links to Diego's CV PDF", () => {
  render(<ContactFooter />);
  expect(screen.getByRole("link", { name: /descargar cv/i })).toHaveAttribute("href", "/cv-diego-armando-pinta-cuasquen.pdf");
});
```

- [ ] **Step 2: Implement CV generation from confirmed content**

The generated one-page PDF must include: Diego Armando Pinta Cuasquen; UCC, Ingeniería de Software, quinto semestre; `diarpicu2022@gmail.com`; the GitHub profile; professional summary; stack; and selected projects. Do not include a phone number, invented dates or invented employer history.

- [ ] **Step 3: Generate and inspect the PDF**

Run: `npx tsx scripts/generate-cv.tsx`

Expected: `public/cv-diego-armando-pinta-cuasquen.pdf` exists and contains one readable page.

- [ ] **Step 4: Run the test and commit**

Run: `npm test -- contact-footer.test.tsx`

Expected: PASS.

```powershell
git add scripts/generate-cv.tsx public/cv-diego-armando-pinta-cuasquen.pdf components/contact-footer.tsx tests/contact-footer.test.tsx
git commit -m "feat: add downloadable professional CV"
```

### Task 6: End-to-end validation and deployment readiness

**Files:**
- Create: `portafolio-diego/e2e/portfolio.spec.ts`
- Modify: `portafolio-diego/README.md`
- Modify: `HISTORIAL_PORTAFOLIO.md`

- [ ] **Step 1: Write Playwright coverage for the essential journey**

```ts
test("visitor can navigate map and reach contact", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("KeyE");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("link", { name: /contacto/i }).click();
  await expect(page.getByText("diarpicu2022@gmail.com")).toBeVisible();
});
```

- [ ] **Step 2: Run static checks and build**

Run:

```powershell
npm run lint
npm test
npx playwright test
npm run build
```

Expected: all commands exit 0.

- [ ] **Step 3: Manually check responsive breakpoints**

Check 390px, 768px and 1440px widths. Confirm map controls work at 390px, conventional content remains readable, and no horizontal scrolling is introduced.

- [ ] **Step 4: Document local setup and Vercel deployment**

Add README instructions for `npm install`, `npm run dev`, testing and deployment via GitHub/Vercel. Do not claim a deployed URL until it exists.

- [ ] **Step 5: Record final verification and commit**

```powershell
git add README.md e2e/portfolio.spec.ts ..\HISTORIAL_PORTAFOLIO.md
git commit -m "test: validate portfolio journey and deployment readiness"
```
