import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { PortfolioWorld } from "@/components/portfolio-world";

async function setup() {
  const user = userEvent.setup();
  render(<PortfolioWorld />);
  await user.click(screen.getByRole("application", { name: /mapa/i }));
  return user;
}

describe("PortfolioWorld", () => {
  it("opens the laboratory using keyboard interaction", async () => {
    const user = await setup();
    await user.keyboard("{ArrowRight}e");
    expect(await screen.findByRole("dialog", { name: /laboratorio/i })).toBeVisible();
  });

  it("closes an opened zone with Escape and returns focus to the map", async () => {
    const user = await setup();
    await user.keyboard("{ArrowRight}{Enter}");
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("application", { name: /mapa/i })).toHaveFocus();
  });

  it("blocks movement through trees", async () => {
    const user = await setup();
    const player = screen.getByTestId("player");
    await user.keyboard("{ArrowLeft}{ArrowLeft}");
    expect(player).toHaveAttribute("data-x", "1");
  });

  it("ignores interaction when no zone is near", async () => {
    const user = await setup();
    await user.keyboard("{ArrowDown}e");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Entrar" })).toBeDisabled();
  });

  it("supports touch controls", async () => {
    const user = await setup();
    await user.click(screen.getByRole("button", { name: "Mover a la derecha" }));
    await user.click(screen.getByRole("button", { name: "Entrar" }));
    expect(screen.getByRole("dialog", { name: /laboratorio/i })).toBeVisible();
  });

  it("opens a zone by clicking its building and shows project links without broken demos", async () => {
    const user = await setup();
    await user.click(screen.getByRole("button", { name: "Abrir Invernadero IoT" }));
    const dialog = screen.getByRole("dialog", { name: /invernadero iot/i });
    expect(dialog).toHaveTextContent("SISCAN");
    expect(dialog).toHaveTextContent("AgroPulse");
    expect(dialog).toHaveTextContent("Demo no disponible");
  });
});
