import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Habilidades } from "@/components/editorial/habilidades";
import { getPortfolio } from "@/data/portfolio";

describe("Habilidades", () => {
  it("counts the real projects behind each group and never shows percentages", () => {
    const { container } = render(<Habilidades locale="es" />);
    const backend = screen.getByRole("heading", { name: /^Backend:/ });
    // Spring Boot (AgroPulse, Proxy IA), NestJS (HidroMon), Express (Harmonia y SETPasto+), FastAPI (EcoVolt).
    const ids = new Set(
      getPortfolio("es")
        .projects.filter((p) => p.technologies.some((t) => ["Spring Boot", "NestJS", "Express", "FastAPI"].includes(t)))
        .map((p) => p.id),
    );
    expect(backend).toHaveTextContent(`${ids.size} proyectos`);
    expect(container.textContent).not.toMatch(/%/);
    const grupo = backend.closest("li")!;
    expect(within(grupo).getByRole("link", { name: "NestJS: HidroMon" })).toHaveAttribute("href", "#proyecto-hidromon");
  });
});
