import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CaseStudyPage } from "@/components/case-study-page";
import { getPortfolio } from "@/data/portfolio";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("CaseStudyPage", () => {
  it("tells the story in order: context, challenge, approach and outcome", () => {
    render(<CaseStudyPage locale="es" id="agropulse" />);
    expect(screen.getByRole("heading", { level: 1, name: "AgroPulse" })).toBeInTheDocument();
    const headings = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent);
    expect(headings.slice(0, 4)).toEqual(["Contexto", "El reto", "Cómo lo resolví", "Resultado"]);
    for (const label of ["Firmware", "Backend", "Frontend"]) {
      expect(screen.getByRole("link", { name: new RegExp(label) })).toHaveAttribute(
        "href",
        expect.stringContaining("github.com/diarpicu2022-commits/"),
      );
    }
  });

  it("links to the next project and to the same page in English", () => {
    const projects = getPortfolio("es").projects;
    render(<CaseStudyPage locale="es" id={projects[0].id} />);
    const next = screen.getByRole("navigation", { name: "Siguiente proyecto" });
    expect(within(next).getByRole("link")).toHaveAttribute("href", `/proyectos/${projects[1].id}`);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("href", `/en/projects/${projects[0].id}`);
    expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute("href", "/#projects");
  });

  it("renders every project in both languages", () => {
    for (const locale of ["es", "en"] as const) {
      for (const project of getPortfolio(locale).projects) {
        const { unmount } = render(<CaseStudyPage locale={locale} id={project.id} />);
        expect(screen.getByRole("heading", { level: 1, name: project.name })).toBeInTheDocument();
        unmount();
      }
    }
  });

  it("returns not found for unknown projects", () => {
    expect(() => render(<CaseStudyPage locale="es" id="no-existe" />)).toThrow("NEXT_NOT_FOUND");
  });
});
