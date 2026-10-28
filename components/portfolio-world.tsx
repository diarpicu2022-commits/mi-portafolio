"use client";

import { useEffect, useRef, useState } from "react";

import { WorldCanvas } from "@/components/world-canvas";
import { ZonePanel } from "@/components/zone-panel";
import { getPortfolio, type Locale } from "@/data/portfolio";
import { sounds } from "@/lib/sound";
import { readStored, writeStored } from "@/lib/storage";
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
const STEP_MS = 120;
const VISITED_KEY = "diecu-visited";
const SOUND_KEY = "diecu-sound";
const NIGHT_KEY = "diecu-night";

const pad: { direction: Direction; glyph: string; area: string }[] = [
  { direction: "up", glyph: "▲", area: "[grid-area:up]" },
  { direction: "left", glyph: "◀", area: "[grid-area:left]" },
  { direction: "right", glyph: "▶", area: "[grid-area:right]" },
  { direction: "down", glyph: "▼", area: "[grid-area:down]" },
];

export function PortfolioWorld({ locale }: { locale: Locale }) {
  const { zones, t } = getPortfolio(locale);
  const zonesBySymbol = new Map(zones.map((zone) => [zone.symbol, zone]));
  const mapZones: MapZone[] = world.tiles
    .filter((tile) => zonesBySymbol.has(tile.symbol))
    .map((tile) => ({ id: zonesBySymbol.get(tile.symbol)!.id, x: tile.x, y: tile.y }));

  const [player, setPlayer] = useState(world.start);
  const [facing, setFacing] = useState<Direction>("down");
  const [step, setStep] = useState(0);
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(() => new Set());
  const [achievement, setAchievement] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [night, setNight] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const lastKeyMoveRef = useRef(0);
  const holdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Preferences live in the browser only, so restore them after hydration.
  useEffect(() => {
    const hour = new Date().getHours();
    /* eslint-disable react-hooks/set-state-in-effect */
    setVisited(new Set(readStored<string[]>(VISITED_KEY, [])));
    setSoundOn(readStored(SOUND_KEY, false));
    setNight(readStored(NIGHT_KEY, hour >= 19 || hour < 6));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(
    () => () => {
      if (holdRef.current) clearInterval(holdRef.current);
    },
    [],
  );

  const nearZoneId = nearestZone(player, mapZones);
  const nearZone = zones.find((zone) => zone.id === nearZoneId);
  const activeZone = zones.find((zone) => zone.id === activeZoneId);

  function move(direction: Direction) {
    setFacing(direction);
    const next = movePlayer(player, direction, world.blocked);
    if (next === player) {
      if (soundOn) sounds.bump();
      return;
    }
    if (soundOn) sounds.step();
    setStep((value) => value + 1);
    setPlayer(next);
  }

  // Keep the latest `move` for the hold-to-move timer, which outlives a render.
  const moveRef = useRef(move);
  useEffect(() => {
    moveRef.current = move;
  });

  function openZone(zoneId: string) {
    setActiveZoneId(zoneId);
    if (soundOn) sounds.open();
    if (visited.has(zoneId)) return;
    const next = new Set(visited).add(zoneId);
    setVisited(next);
    writeStored(VISITED_KEY, [...next]);
    if (next.size === zones.length) {
      setAchievement(true);
      if (soundOn) setTimeout(sounds.achievement, 250);
    }
  }

  function interact() {
    if (nearZoneId) openZone(nearZoneId);
  }

  function closeZone(returnFocus = true) {
    setActiveZoneId(null);
    if (returnFocus) mapRef.current?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (activeZoneId) return;
    const direction = keyToDirection[event.code];
    if (direction) {
      event.preventDefault();
      // Held keys auto-repeat very fast; keep a steady walking pace.
      if (event.repeat && event.timeStamp - lastKeyMoveRef.current < STEP_MS) return;
      lastKeyMoveRef.current = event.timeStamp;
      move(direction);
    } else if (event.code === "KeyE" || event.key === "Enter") {
      event.preventDefault();
      interact();
    }
  }

  function startHold(direction: Direction) {
    stopHold();
    moveRef.current(direction);
    holdRef.current = setInterval(() => moveRef.current(direction), STEP_MS + 30);
  }

  function stopHold() {
    if (holdRef.current) clearInterval(holdRef.current);
    holdRef.current = null;
  }

  function toggleSound() {
    const next = !soundOn;
    setSoundOn(next);
    writeStored(SOUND_KEY, next);
    if (next) sounds.open();
  }

  function toggleNight() {
    setNight(!night);
    writeStored(NIGHT_KEY, !night);
  }

  const status = nearZone ? t.world.near(nearZone.name) : t.world.idle;
  const visitedCount = zones.filter((zone) => visited.has(zone.id)).length;

  return (
    <section id="explore" aria-labelledby="explore-title" className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="explore-title" className="font-pixel mb-2 text-sm text-paper sm:text-base">
            {t.world.title}
          </h2>
          <p className="max-w-2xl text-sm text-paper/80">{t.world.intro}</p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="pixel-button text-sm" aria-pressed={soundOn} onClick={toggleSound}>
            <span aria-hidden>{soundOn ? "♪" : "×"}</span> {t.world.sound}
          </button>
          <button type="button" className="pixel-button text-sm" aria-pressed={night} onClick={toggleNight}>
            <span aria-hidden>{night ? "☾" : "☀"}</span> {t.world.night}
          </button>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-3 text-sm text-paper">
        <span id="world-progress" className="font-pixel text-[0.6rem]">
          {t.world.progress(visitedCount, zones.length)}
        </span>
        <div
          className="h-3 flex-1 border-2 border-paper bg-ink"
          role="progressbar"
          aria-labelledby="world-progress"
          aria-valuemin={0}
          aria-valuemax={zones.length}
          aria-valuenow={visitedCount}
        >
          <div className="h-full bg-amber transition-[width]" style={{ width: `${(visitedCount / zones.length) * 100}%` }} />
        </div>
      </div>

      <div
        ref={mapRef}
        tabIndex={0}
        role="application"
        aria-label={t.world.mapLabel}
        aria-describedby="world-status"
        onKeyDown={handleKeyDown}
        // preventScroll: scrolling here would move the building out from under the pointer before the click lands.
        onPointerDown={() => mapRef.current?.focus({ preventScroll: true })}
        className="pixel-frame overflow-hidden bg-forest focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-amber"
      >
        <WorldCanvas
          world={world}
          zonesBySymbol={zonesBySymbol}
          player={player}
          facing={facing}
          step={step}
          nearZoneId={nearZoneId}
          visited={visited}
          night={night}
          signLabel={t.world.sign}
          openLabel={t.world.open}
          onOpenZone={openZone}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 basis-60" role="status" aria-live="polite">
          <p id="world-status" className="pixel-card min-h-12 px-4 py-3 text-sm">
            {status}
          </p>
          {achievement && (
            <p className="achievement font-pixel mt-3 px-4 py-3 text-[0.6rem] leading-relaxed">
              ★ {t.world.achievement}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="dpad grid gap-1" aria-label={t.world.touchControls} role="group">
            {pad.map((button) => (
              <button
                key={button.direction}
                type="button"
                aria-label={t.world[button.direction]}
                className={`pixel-button size-12 touch-none select-none justify-center p-0 ${button.area}`}
                onPointerDown={(event) => {
                  if (event.button === 0) startHold(button.direction);
                }}
                onPointerUp={stopHold}
                onPointerLeave={stopHold}
                onPointerCancel={stopHold}
                onContextMenu={(event) => event.preventDefault()}
                // Keyboard activation (Enter/Space) has no pointer events; detail is 0 there.
                onClick={(event) => event.detail === 0 && move(button.direction)}
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
            {t.world.enter}
          </button>
        </div>
      </div>

      {activeZone && <ZonePanel locale={locale} zone={activeZone} onClose={closeZone} />}
    </section>
  );
}
