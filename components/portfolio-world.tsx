"use client";

import { useCallback, useRef, useState } from "react";

import { WorldCanvas } from "@/components/world-canvas";
import { ZonePanel } from "@/components/zone-panel";
import { zones } from "@/data/portfolio";
import {
  WORLD_LAYOUT,
  keyToDirection,
  movePlayer,
  nearestZone,
  parseWorld,
  type Direction,
  type MapZone,
} from "@/lib/world";

const world = parseWorld(WORLD_LAYOUT);
const zonesBySymbol = new Map(zones.map((zone) => [zone.symbol, zone]));
const mapZones: MapZone[] = world.tiles
  .filter((tile) => zonesBySymbol.has(tile.symbol))
  .map((tile) => ({ id: zonesBySymbol.get(tile.symbol)!.id, x: tile.x, y: tile.y }));

const pad: { direction: Direction; label: string; glyph: string; area: string }[] = [
  { direction: "up", label: "Mover arriba", glyph: "▲", area: "[grid-area:up]" },
  { direction: "left", label: "Mover a la izquierda", glyph: "◀", area: "[grid-area:left]" },
  { direction: "right", label: "Mover a la derecha", glyph: "▶", area: "[grid-area:right]" },
  { direction: "down", label: "Mover abajo", glyph: "▼", area: "[grid-area:down]" },
];

export function PortfolioWorld() {
  const [player, setPlayer] = useState(world.start);
  const [facing, setFacing] = useState<Direction>("right");
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const nearZoneId = nearestZone(player, mapZones);
  const nearZone = zones.find((zone) => zone.id === nearZoneId);
  const activeZone = zones.find((zone) => zone.id === activeZoneId);

  const move = useCallback((direction: Direction) => {
    setFacing(direction);
    setPlayer((position) => movePlayer(position, direction, world.blocked));
  }, []);

  const interact = useCallback(() => {
    if (nearZoneId) setActiveZoneId(nearZoneId);
  }, [nearZoneId]);

  const closeZone = useCallback((returnFocus = true) => {
    setActiveZoneId(null);
    if (returnFocus) mapRef.current?.focus();
  }, []);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (activeZoneId) return;
    const direction = keyToDirection[event.code];
    if (direction) {
      event.preventDefault();
      move(direction);
    } else if (event.code === "KeyE" || event.key === "Enter") {
      event.preventDefault();
      interact();
    }
  }

  const status = nearZone
    ? `Estás junto a ${nearZone.name}. Pulsa E o Enter para entrar.`
    : "Explora el mapa con flechas o WASD.";

  return (
    <section id="explore" aria-labelledby="explore-title" className="scroll-mt-20 mx-auto w-full max-w-5xl px-4 py-10">
      <h2 id="explore-title" className="font-pixel mb-2 text-sm text-paper sm:text-base">
        Explora el mapa
      </h2>
      <p className="mb-4 text-sm text-paper/80">
        Haz clic en el mapa (o tabula hasta él), muévete con flechas o WASD y pulsa E o Enter junto a un
        edificio. También puedes hacer clic directamente en cada edificio.
      </p>

      <div
        ref={mapRef}
        tabIndex={0}
        role="application"
        aria-label="Mapa de Diecu's Engineering Quest"
        aria-describedby="world-status"
        onKeyDown={handleKeyDown}
        onPointerDown={() => mapRef.current?.focus()}
        className="pixel-frame overflow-hidden bg-forest focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-amber"
      >
        <WorldCanvas
          world={world}
          zonesBySymbol={zonesBySymbol}
          player={player}
          facing={facing}
          nearZoneId={nearZoneId}
          onOpenZone={setActiveZoneId}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p id="world-status" role="status" className="pixel-card min-h-12 flex-1 px-4 py-3 text-sm">
          {status}
        </p>
        <div className="flex items-center gap-4">
          <div className="dpad grid gap-1" aria-label="Controles táctiles" role="group">
            {pad.map((button) => (
              <button
                key={button.direction}
                type="button"
                aria-label={button.label}
                className={`pixel-button size-12 justify-center p-0 ${button.area}`}
                onClick={() => move(button.direction)}
              >
                <span aria-hidden>{button.glyph}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="pixel-button pixel-button-amber size-16 justify-center rounded-full p-0"
            onClick={interact}
            disabled={!nearZoneId}
          >
            Entrar
          </button>
        </div>
      </div>

      {activeZone && <ZonePanel zone={activeZone} onClose={closeZone} />}
    </section>
  );
}
