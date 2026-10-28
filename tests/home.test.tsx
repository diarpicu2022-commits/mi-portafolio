import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PortfolioPage } from "@/components/portfolio-page";
import { getPortfolio } from "@/data/portfolio";

describe("PortfolioPage (es)", () => {
  it("shows the portfolio title", () => {
    render(<PortfolioPage locale="es" />);
    expect(screen.getByRole("heading", { level: 1, name: "Diecu's Engineering Quest" })).toBeInTheDocument();
  });

  it("exposes conventional sections outside the map", () => {
    render(<PortfolioPage locale="es" />);
    const nav = screen.getByRole("navigation", { name: /principal/i });
    expect(within(nav).getByRole("link", { name: /proyectos/i })).toHaveAttribute("href", "#projects");
    for (const name of ["Perfil", "Proyectos", "Experiencia", "Testimonios", "Proceso de diseño", "Contacto"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeVisible();
    }
  });

  it("lists every project and at least three testimonials", () => {
    render(<PortfolioPage locale="es" />);
    const section = screen.getByRole("region", { name: "Proyectos" });
    for (const project of getPortfolio("es").projects) {
      expect(within(section).getByRole("heading", { name: project.name })).toBeInTheDocument();
    }
    const testimonials = within(screen.getByRole("region", { name: "Testimonios" })).getAllByRole("listitem");
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
  });

  it("links to the CV PDF and contact without a phone number", () => {
    const { container } = render(<PortfolioPage locale="es" />);
    const cvLinks = screen.getAllByRole("link", { name: /descargar cv/i });
    cvLinks.forEach((link) => expect(link).toHaveAttribute("href", "/cv-diego-armando-pinta-cuasquen.pdf"));
    expect(screen.getAllByRole("link", { name: "diarpicu2022@gmail.com" })[0]).toHaveAttribute(
      "href",
      "mailto:diarpicu2022@gmail.com",
    );
    expect(container.querySelector('a[href^="tel:"]')).toBeNull();
  });

  it("links to the English version", () => {
    render(<PortfolioPage locale="es" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("href", "/en");
  });
});

describe("PortfolioPage (en)", () => {
  it("renders English content and the English CV", () => {
    render(<PortfolioPage locale="en" />);
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    for (const name of ["Profile", "Projects", "Experience", "Testimonials", "Design process", "Contact"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeVisible();
    }
    screen
      .getAllByRole("link", { name: /download cv/i })
      .forEach((link) => expect(link).toHaveAttribute("href", "/cv-diego-armando-pinta-cuasquen-en.pdf"));
    expect(screen.getByRole("link", { name: "Español" })).toHaveAttribute("href", "/");
  });

  it("has the same keys in both languages", () => {
    const es = getPortfolio("es");
    const en = getPortfolio("en");
    expect(en.projects.map((p) => p.id)).toEqual(es.projects.map((p) => p.id));
    expect(en.projects.every((p) => p.description)).toBe(true);
    expect(en.zones.every((z) => z.name && z.summary && z.dialogue)).toBe(true);
  });
});
