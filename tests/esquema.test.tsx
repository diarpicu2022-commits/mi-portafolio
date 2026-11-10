import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EsquemaSistema } from "@/components/editorial/esquema-sistema";
import { getProjects } from "@/data/projects";

describe("EsquemaSistema", () => {
  it("only projects without a capture carry a diagram, and every diagram is labelled", () => {
    for (const locale of ["es", "en"] as const) {
      for (const p of getProjects(locale)) {
        if (p.image) continue;
        expect(p.esquema, p.id).toBeDefined();
        expect(p.esquema!.etapas.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it("describes the whole path as one accessible image", () => {
    const proxy = getProjects("es").find((p) => p.id === "proxy-ia")!;
    render(<EsquemaSistema esquema={proxy.esquema!} rotulo="Esquema" luego="luego" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAccessibleName(/^Esquema\. Cadena de proxies\. Cliente \(React y Vite\)/);
    expect(img.getAttribute("aria-label")).toContain("Generación (servicio simulado)");
  });
});
