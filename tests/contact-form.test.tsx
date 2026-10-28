import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

describe("ContactForm", () => {
  it("opens a pre-filled email to Diego", async () => {
    const user = userEvent.setup();
    const location = { href: "" };
    vi.stubGlobal("location", location);
    render(<ContactForm locale="es" />);
    await user.type(screen.getByLabelText("Tu nombre"), "Ana");
    await user.type(screen.getByLabelText("Mensaje"), "Hola Diego");
    await user.click(screen.getByRole("button", { name: "Abrir en mi correo" }));
    expect(location.href).toBe(
      "mailto:diarpicu2022@gmail.com?subject=Contacto%20desde%20el%20portafolio%20%E2%80%94%20Ana&body=Hola%20Diego",
    );
    vi.unstubAllGlobals();
  });
});
