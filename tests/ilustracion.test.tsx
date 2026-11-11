import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PaginaInicio } from "@/components/editorial/pagina-inicio";
import { getProjects } from "@/data/projects";

describe("Ilustraciones de proyecto (enmienda 14)", () => {
  it("every project without a capture carries an illustration with a real alt in both languages", () => {
    for (const locale of ["es", "en"] as const) {
      for (const p of getProjects(locale)) {
        if (!p.image) {
          expect(p.ilustracion, p.id).toBeDefined();
          expect(p.ilustracion!.alt).toMatch(locale === "es" ? /^Ilustración de / : /^Illustration of /);
        }
      }
    }
  });

  it("projects without a capture appear as cards labelled Ilustración, never as a diagram", () => {
    const { container } = render(<PaginaInicio locale="es" />);
    const carta = container.querySelector("#proyecto-hidromon")!;
    expect(within(carta as HTMLElement).getByText("Ilustración")).toBeInTheDocument();
    expect(carta.querySelector(".esquema")).toBeNull();
    expect(container.querySelector("#proyecto-siscan .carta-img")).toBeNull();
  });
});
