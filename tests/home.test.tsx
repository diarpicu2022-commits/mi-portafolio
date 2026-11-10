import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { PaginaInicio as PortfolioPage } from "@/components/editorial/pagina-inicio";
import { getPortfolio } from "@/data/portfolio";

describe("PortfolioPage (es)", () => {
  it("names Diego in full as the only h1", () => {
    render(<PortfolioPage locale="es" />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1, name: "Diego Armando Pinta Cuasquen" })).toBeInTheDocument();
  });

  it("derives the cover figures from the data and points to the projects anchor", () => {
    const { container } = render(<PortfolioPage locale="es" />);
    const cifras = [...container.querySelectorAll(".portada-cifra-numero")].map((n) => n.textContent);
    expect(cifras).toEqual([String(getPortfolio("es").projects.length), "2"]);
    expect(screen.getByRole("link", { name: /ver proyectos/i })).toHaveAttribute("href", "#proyectos");
    expect(screen.getByRole("region", { name: "Proyectos" })).toHaveAttribute("id", "proyectos");
  });

  it("opens the mobile menu, closes it with Escape and returns focus", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage locale="es" />);
    const boton = screen.getByRole("button", { name: "Menú" });
    expect(boton).toHaveAttribute("aria-expanded", "false");
    await user.click(boton);
    expect(boton).toHaveAttribute("aria-expanded", "true");
    const panel = document.getElementById(boton.getAttribute("aria-controls")!)!;
    expect(panel).toBeVisible();
    expect(within(panel).getAllByRole("link")[0]).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(panel).not.toBeVisible();
    expect(boton).toHaveFocus();
  });

  it("moves the 2D map to /quest and says the site uses no cookies", () => {
    render(<PortfolioPage locale="es" />);
    expect(screen.queryByRole("application")).toBeNull();
    expect(screen.getByRole("link", { name: /entrar al mapa/i })).toHaveAttribute("href", "/quest");
    expect(screen.getByText("Este sitio no usa cookies.")).toBeInTheDocument();
  });

  it("exposes conventional sections outside the map", () => {
    render(<PortfolioPage locale="es" />);
    const nav = screen.getByRole("navigation", { name: /principal/i });
    expect(within(nav).getByRole("link", { name: /proyectos/i })).toHaveAttribute("href", "#proyectos");
    for (const [name, href] of [["Perfil", "#perfil"], ["Experiencia", "#experiencia"], ["Formación", "#formacion"], ["Contacto", "#contacto"]]) {
      expect(within(nav).getByRole("link", { name })).toHaveAttribute("href", href);
    }
    for (const name of ["Perfil", "Proyectos", "Experiencia", "Formación", "Testimonios", "Contacto"]) {
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

  it("numbers every project and links each one to its case study and repository", () => {
    render(<PortfolioPage locale="es" />);
    const section = screen.getByRole("region", { name: "Proyectos" });
    for (const project of getPortfolio("es").projects) {
      expect(within(section).getByRole("link", { name: `Ver caso de estudio: ${project.name}` })).toHaveAttribute(
        "href",
        `/proyectos/${project.id}`,
      );
    }
    within(section)
      .getAllByRole("link", { name: /\(GitHub\)/ })
      .forEach((link) => expect(link.getAttribute("href")).toMatch(/^https:\/\/github\.com\/diarpicu2022-commits\//));
  });

  it("presents projects as work experience with a position and a period, newest first", () => {
    render(<PortfolioPage locale="es" />);
    const experience = screen.getByRole("region", { name: "Experiencia" });
    const entries = within(experience).getAllByRole("listitem").filter((item) => item.querySelector("h3"));
    expect(entries).toHaveLength(getPortfolio("es").projects.length);
    expect(entries[0]).toHaveTextContent("actualidad");
    expect(within(experience).getByRole("heading", { name: "Desarrollador IoT full stack" })).toBeInTheDocument();
    expect(within(experience).getByText("mar 2026 – may 2026")).toBeInTheDocument();
  });

  it("keeps education separate, real and free of course framing or private data", () => {
    const { container } = render(<PortfolioPage locale="es" />);
    const education = screen.getByRole("region", { name: "Formación" });
    expect(education).toHaveTextContent("Universidad de Nariño");
    expect(education).toHaveTextContent("Universidad Cooperativa de Colombia");
    expect(container.textContent).not.toMatch(/\+57|1004234190|Proceso de diseño|Proyecto final|cuarto semestre/);
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
    expect(within(screen.getByRole("navigation")).getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /enter the map/i })).toHaveAttribute("href", "/en/quest");
    for (const name of ["Profile", "Projects", "Experience", "Education", "Testimonials", "Contact"]) {
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
    expect(en.projects.every((p) => p.summary && p.challenge && p.approach.length && p.outcome.length)).toBe(true);
    expect(en.zones.every((z) => z.name && z.summary && z.dialogue)).toBe(true);
  });
});
