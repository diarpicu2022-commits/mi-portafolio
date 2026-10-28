import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { PortfolioWorld } from "@/components/portfolio-world";

async function setup(locale: "es" | "en" = "es") {
  const user = userEvent.setup();
  render(<PortfolioWorld locale={locale} />);
  await user.click(screen.getByRole("application"));
  return user;
}

beforeEach(() => window.localStorage.clear());

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
    expect(screen.getByRole("application")).toHaveFocus();
  });

  it("blocks movement through trees and turns the player", async () => {
    const user = await setup();
    const player = screen.getByTestId("player");
    await user.keyboard("{ArrowLeft}{ArrowLeft}");
    expect(player).toHaveAttribute("data-x", "1");
    expect(player).toHaveAttribute("data-facing", "left");
    await user.keyboard("{ArrowUp}");
    expect(player).toHaveAttribute("data-facing", "up");
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

  it("tracks visited zones, persists them and unlocks the achievement", async () => {
    const user = await setup();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
    const names = ["Laboratorio", "Bosque de Código", "Invernadero IoT", "Academia", "Archivo", "Posada", "Plaza"];
    for (const name of names) {
      await user.click(screen.getByRole("button", { name: `Abrir ${name}` }));
      await user.keyboard("{Escape}");
    }
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "7");
    expect(screen.getByText(/logro desbloqueado/i)).toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem("diecu-visited")!)).toHaveLength(7);
  });

  it("shows the full dialogue to screen readers and lets sighted users skip the typing", async () => {
    const user = await setup();
    await user.click(screen.getByRole("button", { name: "Abrir Laboratorio" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent(/osciloscopios y teclados/);
    await user.click(screen.getByRole("button", { name: "Mostrar todo el texto" }));
    expect(screen.queryByRole("button", { name: "Mostrar todo el texto" })).not.toBeInTheDocument();
  });

  it("toggles sound and night mode", async () => {
    const user = await setup();
    const night = screen.getByRole("button", { name: /noche/i });
    const initial = night.getAttribute("aria-pressed");
    await user.click(night);
    expect(night).toHaveAttribute("aria-pressed", String(initial !== "true"));
    const sound = screen.getByRole("button", { name: /sonido/i });
    expect(sound).toHaveAttribute("aria-pressed", "false");
    await user.click(sound);
    expect(sound).toHaveAttribute("aria-pressed", "true");
  });

  it("renders in English", async () => {
    const user = await setup("en");
    await user.keyboard("{ArrowRight}e");
    expect(screen.getByRole("dialog", { name: "Laboratory" })).toBeVisible();
  });
});

describe("hold-to-move", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("keeps walking while a direction button is held and stops on release", () => {
    render(<PortfolioWorld locale="es" />);
    const player = screen.getByTestId("player");
    const up = screen.getByRole("button", { name: "Mover arriba" });
    fireEvent.pointerDown(up, { button: 0 });
    expect(player).toHaveAttribute("data-y", "3");
    act(() => vi.advanceTimersByTime(160));
    expect(player).toHaveAttribute("data-y", "2");
    fireEvent.pointerUp(up);

    const down = screen.getByRole("button", { name: "Mover abajo" });
    fireEvent.pointerDown(down, { button: 0 });
    fireEvent.pointerUp(down);
    act(() => vi.advanceTimersByTime(600));
    expect(player).toHaveAttribute("data-y", "3");
  });
});
