import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";
import { projects } from "@/data/portfolio";

describe("Home", () => {
  it("shows the portfolio title", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: "Diecu's Engineering Quest" })).toBeInTheDocument();
  });

  it("exposes conventional sections outside the map", () => {
    render(<Home />);
    const nav = screen.getByRole("navigation", { name: /principal/i });
    expect(within(nav).getByRole("link", { name: /proyectos/i })).toHaveAttribute("href", "#projects");
    for (const name of ["Perfil", "Proyectos", "Experiencia", "Testimonios", "Contacto"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeVisible();
    }
  });

  it("lists every project and at least three testimonials", () => {
    render(<Home />);
    const section = screen.getByRole("region", { name: "Proyectos" });
    for (const project of projects) {
      expect(within(section).getByRole("heading", { name: project.name })).toBeInTheDocument();
    }
    const testimonials = within(screen.getByRole("region", { name: "Testimonios" })).getAllByRole("listitem");
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
  });

  it("links to the CV PDF and contact without a phone number", () => {
    const { container } = render(<Home />);
    const cvLinks = screen.getAllByRole("link", { name: /descargar cv/i });
    cvLinks.forEach((link) => expect(link).toHaveAttribute("href", "/cv-diego-armando-pinta-cuasquen.pdf"));
    expect(screen.getAllByRole("link", { name: "diarpicu2022@gmail.com" })[0]).toHaveAttribute(
      "href",
      "mailto:diarpicu2022@gmail.com",
    );
    expect(container.querySelector('a[href^="tel:"]')).toBeNull();
  });
});
