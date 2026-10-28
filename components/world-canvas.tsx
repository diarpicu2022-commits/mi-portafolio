import type { Zone } from "@/data/portfolio";
import type { Direction, GridPoint, ParsedWorld } from "@/lib/world";

type WorldCanvasProps = {
  world: ParsedWorld;
  zonesBySymbol: Map<string, Zone>;
  player: GridPoint;
  facing: Direction;
  nearZoneId: string | null;
  onOpenZone: (zoneId: string) => void;
};

/** Pixel sprites drawn on a 16×16 grid: [x, y, w, h, color]. */
type Pixels = [number, number, number, number, string][];

const sprites: Record<string, Pixels> = {
  tree: [
    [6, 12, 4, 4, "#5b3a1e"],
    [3, 2, 10, 10, "#0f5a3c"],
    [5, 0, 6, 3, "#167a50"],
    [2, 5, 12, 5, "#167a50"],
    [5, 3, 3, 2, "#2f9e6e"],
  ],
  rock: [
    [2, 7, 12, 7, "#6b7280"],
    [4, 5, 8, 3, "#9ca3af"],
    [5, 6, 3, 2, "#d1d5db"],
  ],
  water: [
    [0, 0, 16, 16, "#1d5f8c"],
    [2, 4, 5, 1, "#7cc4e8"],
    [9, 10, 5, 1, "#7cc4e8"],
  ],
  player: [
    [5, 0, 6, 3, "#2a1a10"],
    [4, 2, 8, 2, "#2a1a10"],
    [5, 3, 6, 4, "#f1c08f"],
    [9, 4, 1, 1, "#10263d"],
    [4, 7, 8, 5, "#164a3a"],
    [6, 8, 4, 1, "#e6a23c"],
    [3, 8, 1, 3, "#f1c08f"],
    [12, 8, 1, 3, "#f1c08f"],
    [5, 12, 2, 3, "#10263d"],
    [9, 12, 2, 3, "#10263d"],
    [4, 15, 3, 1, "#2a1a10"],
    [9, 15, 3, 1, "#2a1a10"],
  ],
};

const buildingColors: Record<string, string> = {
  L: "#3b82f6",
  F: "#0f5a3c",
  G: "#7dd3a8",
  A: "#9b2c2c",
  X: "#10263d",
  I: "#b45309",
  Z: "#e6a23c",
};

function building(symbol: string): Pixels {
  const roof = buildingColors[symbol] ?? "#e6a23c";
  return [
    [1, 2, 14, 5, roof],
    [3, 0, 10, 3, roof],
    [2, 7, 12, 8, "#fff3d4"],
    [7, 10, 3, 5, "#5b3a1e"],
    [3, 9, 3, 3, "#7cc4e8"],
    [11, 9, 2, 3, "#7cc4e8"],
    [0, 15, 16, 1, "#10263d"],
  ];
}

function Sprite({ pixels, className }: { pixels: Pixels; className?: string }) {
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" className={className} aria-hidden>
      {pixels.map(([x, y, w, h, fill], index) => (
        <rect key={index} x={x} y={y} width={w} height={h} fill={fill} />
      ))}
    </svg>
  );
}

export function WorldCanvas({ world, zonesBySymbol, player, facing, nearZoneId, onOpenZone }: WorldCanvasProps) {
  const toPercent = (value: number, size: number) => `${(value / size) * 100}%`;

  return (
    <div
      className="world-grid relative grid w-full"
      style={{
        gridTemplateColumns: `repeat(${world.width}, 1fr)`,
        aspectRatio: `${world.width} / ${world.height}`,
      }}
    >
      {world.tiles.map((tile) => {
        const zone = tile.kind === "zone" ? zonesBySymbol.get(tile.symbol) : undefined;
        return (
          <div key={`${tile.x},${tile.y}`} className={`tile tile-${tile.kind === "zone" ? "grass" : tile.kind}`}>
            {tile.kind === "tree" && <Sprite pixels={sprites.tree} className="size-full" />}
            {tile.kind === "rock" && <Sprite pixels={sprites.rock} className="size-full" />}
            {tile.kind === "water" && <Sprite pixels={sprites.water} className="size-full" />}
            {zone && (
              <button
                type="button"
                tabIndex={-1}
                onClick={() => onOpenZone(zone.id)}
                className={`zone-building group relative size-full ${nearZoneId === zone.id ? "is-near" : ""}`}
                aria-label={`Abrir ${zone.name}`}
              >
                <Sprite pixels={building(tile.symbol)} className="size-full" />
                <span className="zone-label font-pixel">{zone.name}</span>
              </button>
            )}
          </div>
        );
      })}

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
      >
        <Sprite pixels={sprites.player} className={`size-full ${facing === "left" ? "-scale-x-100" : ""}`} />
        {nearZoneId && (
          <span className="interact-hint font-pixel" aria-hidden>
            E
          </span>
        )}
      </div>
    </div>
  );
}
