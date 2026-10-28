import { Sprite, buildings, playerPixels, tiles } from "@/components/pixel-sprites";
import type { Zone } from "@/data/portfolio";
import type { Direction, GridPoint, ParsedWorld } from "@/lib/world";

type WorldCanvasProps = {
  world: ParsedWorld;
  zonesBySymbol: Map<string, Zone>;
  player: GridPoint;
  facing: Direction;
  step: number;
  nearZoneId: string | null;
  visited: Set<string>;
  night: boolean;
  signLabel: string;
  openLabel: (zone: string) => string;
  onOpenZone: (zoneId: string) => void;
};

/** Tiles whose sprite sits on a grass background. */
const groundOf: Record<string, string> = {
  tree: "grass",
  rock: "grass",
  flowers: "grass",
  fence: "grass",
  sign: "path",
  zone: "grass",
};

export function WorldCanvas({
  world,
  zonesBySymbol,
  player,
  facing,
  step,
  nearZoneId,
  visited,
  night,
  signLabel,
  openLabel,
  onOpenZone,
}: WorldCanvasProps) {
  const toPercent = (value: number, size: number) => `${(value / size) * 100}%`;

  return (
    <div
      className={`world-grid relative grid w-full ${night ? "is-night" : ""}`}
      style={{
        gridTemplateColumns: `repeat(${world.width}, 1fr)`,
        aspectRatio: `${world.width} / ${world.height}`,
      }}
    >
      {world.tiles.map((tile) => {
        const zone = tile.kind === "zone" ? zonesBySymbol.get(tile.symbol) : undefined;
        const sprite = tiles[tile.kind];
        return (
          <div key={`${tile.x},${tile.y}`} className={`tile tile-${groundOf[tile.kind] ?? tile.kind}`}>
            {sprite && <Sprite pixels={sprite} className="size-full" />}
            {tile.kind === "sign" && <span className="sr-only">{signLabel}</span>}
            {zone && (
              <button
                type="button"
                tabIndex={-1}
                onClick={() => onOpenZone(zone.id)}
                className={`zone-building relative size-full ${nearZoneId === zone.id ? "is-near" : ""}`}
                aria-label={openLabel(zone.name)}
              >
                <Sprite pixels={buildings[tile.symbol]} className="size-full" />
                <span className="zone-label font-pixel">
                  {visited.has(zone.id) && <span aria-hidden>★ </span>}
                  {zone.name}
                </span>
              </button>
            )}
          </div>
        );
      })}

      <div className="night-overlay pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="player pointer-events-none absolute"
        style={{
          width: toPercent(1, world.width),
          height: toPercent(1, world.height),
          left: toPercent(player.x, world.width),
          top: toPercent(player.y, world.height),
        }}
        data-testid="player"
        data-x={player.x}
        data-y={player.y}
        data-facing={facing}
      >
        <Sprite pixels={playerPixels(facing, step)} className={`size-full ${facing === "left" ? "-scale-x-100" : ""}`} />
        {nearZoneId && (
          <span className="interact-hint font-pixel" aria-hidden>
            E
          </span>
        )}
      </div>
    </div>
  );
}
