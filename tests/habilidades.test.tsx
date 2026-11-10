import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Habilidades } from "@/components/editorial/habilidades";
import { getPortfolio } from "@/data/portfolio";

describe("Habilidades", () => {
  it("counts the real projects behind each group, shows logos and never shows percentages", () => {
    const { container } = render(<Habilidades locale="es" />);
    const backend = screen.getByRole("heading", { name: "Backend" }).closest("li")!;
    const ids = new Set(
      getPortfolio("es")
        .projects.filter((p) => p.technologies.some((t) => ["Spring Boot", "NestJS", "Express", "FastAPI"].includes(t)))
        .map((p) => p.id),
    );
    expect(backend).toHaveTextContent(`${ids.size} proyectos`);
    expect(within(backend).getByText("NestJS")).toBeInTheDocument();
    expect(container.querySelectorAll(".skills2-logo svg").length).toBeGreaterThan(20);
    expect(container.textContent).not.toMatch(/%/);
  });
});
