export type Direction = "up" | "down" | "left" | "right";
export type GridPoint = { x: number; y: number };
export type MapZone = GridPoint & { id: string };

const delta: Record<Direction, GridPoint> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

export const tileKey = (point: GridPoint) => `${point.x},${point.y}`;

export function movePlayer(
  position: GridPoint,
  direction: Direction,
  blocked: Set<string>,
): GridPoint {
  const next = {
    x: position.x + delta[direction].x,
    y: position.y + delta[direction].y,
  };
  return blocked.has(tileKey(next)) ? position : next;
}

export function nearestZone(position: GridPoint, zones: MapZone[]): string | null {
  return (
    zones.find(
      (zone) => Math.abs(zone.x - position.x) + Math.abs(zone.y - position.y) <= 1,
    )?.id ?? null
  );
}

export const keyToDirection: Record<string, Direction> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  KeyW: "up",
  KeyS: "down",
  KeyA: "left",
  KeyD: "right",
};

/*
 * Map legend:
 *   T tree · W water · R rock (all blocked)
 *   . grass · : path · P player start (walkable)
 *   Any other letter is a zone building (blocked, interactable from an adjacent tile).
 */
export const WORLD_LAYOUT = [
  "TTTTTTTTTTTTTTT",
  "T.F...:...G...T",
  "T..T..:..WW..TT",
  "T.....:.......T",
  "T:P:L::::::A:.T",
  "T.....:....WW.T",
  "T.R...:.......T",
  "T..I..:.Z...X.T",
  "TTTTTTTTTTTTTTT",
] as const;

export type TileKind = "tree" | "water" | "rock" | "grass" | "path" | "zone";

export type ParsedWorld = {
  width: number;
  height: number;
  start: GridPoint;
  tiles: { x: number; y: number; kind: TileKind; symbol: string }[];
  blocked: Set<string>;
};

const symbolKind: Record<string, TileKind> = {
  T: "tree",
  W: "water",
  R: "rock",
  ".": "grass",
  ":": "path",
  P: "path",
};

export function parseWorld(layout: readonly string[]): ParsedWorld {
  const tiles: ParsedWorld["tiles"] = [];
  const blocked = new Set<string>();
  let start: GridPoint = { x: 0, y: 0 };

  layout.forEach((row, y) => {
    [...row].forEach((symbol, x) => {
      const kind = symbolKind[symbol] ?? "zone";
      if (symbol === "P") start = { x, y };
      if (kind !== "grass" && kind !== "path") blocked.add(tileKey({ x, y }));
      tiles.push({ x, y, kind, symbol });
    });
  });

  return { width: layout[0].length, height: layout.length, start, tiles, blocked };
}
