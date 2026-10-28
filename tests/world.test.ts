import { describe, expect, it } from "vitest";

import { getPortfolio } from "@/data/portfolio";
import { WORLD_LAYOUT, movePlayer, nearestZone, parseWorld, tileKey, type GridPoint } from "@/lib/world";

describe("world rules", () => {
  it("does not move into an obstacle", () => {
    expect(movePlayer({ x: 1, y: 1 }, "right", new Set(["2,1"]))).toEqual({ x: 1, y: 1 });
  });

  it("moves onto a free tile", () => {
    expect(movePlayer({ x: 1, y: 1 }, "down", new Set())).toEqual({ x: 1, y: 2 });
  });

  it("finds a zone one tile away and ignores diagonals", () => {
    expect(nearestZone({ x: 2, y: 1 }, [{ id: "lab", x: 3, y: 1 }])).toBe("lab");
    expect(nearestZone({ x: 2, y: 1 }, [{ id: "lab", x: 3, y: 2 }])).toBeNull();
  });
});

describe("world layout", () => {
  const world = parseWorld(WORLD_LAYOUT);

  it("is rectangular and closed by obstacles", () => {
    expect(WORLD_LAYOUT.every((row) => row.length === world.width)).toBe(true);
    for (let x = 0; x < world.width; x++) {
      expect(world.blocked.has(tileKey({ x, y: 0 }))).toBe(true);
      expect(world.blocked.has(tileKey({ x, y: world.height - 1 }))).toBe(true);
    }
    for (let y = 0; y < world.height; y++) {
      expect(world.blocked.has(tileKey({ x: 0, y }))).toBe(true);
      expect(world.blocked.has(tileKey({ x: world.width - 1, y }))).toBe(true);
    }
  });

  it("places every zone once and lets the player reach all of them", () => {
    const reached = new Set([tileKey(world.start)]);
    const queue: GridPoint[] = [world.start];
    while (queue.length) {
      const current = queue.shift()!;
      for (const direction of ["up", "down", "left", "right"] as const) {
        const next = movePlayer(current, direction, world.blocked);
        if (!reached.has(tileKey(next))) {
          reached.add(tileKey(next));
          queue.push(next);
        }
      }
    }

    for (const zone of getPortfolio("es").zones) {
      const tiles = world.tiles.filter((tile) => tile.symbol === zone.symbol);
      expect(tiles, zone.name).toHaveLength(1);
      const [{ x, y }] = tiles;
      const neighbours = [tileKey({ x: x + 1, y }), tileKey({ x: x - 1, y }), tileKey({ x, y: y + 1 }), tileKey({ x, y: y - 1 })];
      expect(neighbours.some((key) => reached.has(key)), `${zone.name} reachable`).toBe(true);
    }
  });
});
