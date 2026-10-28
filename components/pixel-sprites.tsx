import type { Direction } from "@/lib/world";

/** Pixel sprites drawn on a 16×16 grid: [x, y, w, h, color]. */
export type Pixels = [number, number, number, number, string][];

const C = {
  ink: "#10263d",
  hair: "#2a1a10",
  skin: "#f1c08f",
  shirt: "#164a3a",
  amber: "#e6a23c",
  wood: "#5b3a1e",
  paper: "#fff3d4",
  glass: "#7cc4e8",
  leaf: "#167a50",
  leafDark: "#0f5a3c",
  leafLight: "#2f9e6e",
  stone: "#9ca3af",
  stoneDark: "#6b7280",
};

/** Window colour comes from a CSS variable so night mode can light the windows up. */
const WINDOW = "var(--window, #7cc4e8)";

export const tiles: Record<string, Pixels> = {
  tree: [
    [6, 12, 4, 4, C.wood],
    [3, 2, 10, 10, C.leafDark],
    [5, 0, 6, 3, C.leaf],
    [2, 5, 12, 5, C.leaf],
    [5, 3, 3, 2, C.leafLight],
  ],
  rock: [
    [2, 7, 12, 7, C.stoneDark],
    [4, 5, 8, 3, C.stone],
    [5, 6, 3, 2, "#d1d5db"],
  ],
  water: [
    [0, 0, 16, 16, "#1d5f8c"],
    [2, 4, 5, 1, C.glass],
    [9, 10, 5, 1, C.glass],
  ],
  flowers: [
    [3, 4, 2, 2, "#f472b6"],
    [4, 6, 1, 2, C.leafDark],
    [10, 2, 2, 2, C.amber],
    [11, 4, 1, 2, C.leafDark],
    [7, 10, 2, 2, C.paper],
    [8, 12, 1, 2, C.leafDark],
    [12, 11, 2, 2, "#f472b6"],
    [13, 13, 1, 2, C.leafDark],
  ],
  fence: [
    [0, 6, 16, 2, C.wood],
    [0, 11, 16, 2, C.wood],
    [2, 4, 2, 11, "#8b5a2b"],
    [12, 4, 2, 11, "#8b5a2b"],
  ],
  crops: [
    [0, 0, 16, 16, "#6b4423"],
    [0, 3, 16, 1, "#5b3a1e"],
    [0, 9, 16, 1, "#5b3a1e"],
    [2, 0, 2, 3, C.leafLight],
    [7, 0, 2, 3, C.leafLight],
    [12, 0, 2, 3, C.leafLight],
    [2, 5, 2, 4, C.leaf],
    [7, 5, 2, 4, C.leaf],
    [12, 5, 2, 4, C.leaf],
    [3, 4, 1, 1, "#ef4444"],
    [8, 4, 1, 1, "#ef4444"],
    [2, 11, 2, 4, C.leafLight],
    [7, 11, 2, 4, C.leafLight],
    [12, 11, 2, 4, C.leafLight],
  ],
  sign: [
    [7, 8, 2, 8, C.wood],
    [2, 2, 12, 7, "#8b5a2b"],
    [3, 3, 10, 5, "#d9b779"],
    [4, 5, 3, 1, C.ink],
    [9, 5, 3, 1, C.ink],
  ],
};

export const buildings: Record<string, Pixels> = {
  // Laboratory: blue roof, antenna and a flask in the window.
  L: [
    [12, 0, 1, 4, C.stoneDark],
    [11, 0, 3, 1, "#ef4444"],
    [1, 3, 14, 4, "#3b82f6"],
    [2, 7, 12, 8, "#e5e7eb"],
    [3, 9, 4, 4, WINDOW],
    [4, 10, 2, 2, C.leafLight],
    [9, 10, 3, 5, C.ink],
    [0, 15, 16, 1, C.ink],
  ],
  // Code forest: wooden treehouse under a leaf canopy.
  F: [
    [1, 0, 14, 6, C.leafDark],
    [3, 1, 4, 2, C.leafLight],
    [2, 6, 12, 8, "#8b5a2b"],
    [2, 9, 12, 1, C.wood],
    [4, 7, 3, 2, WINDOW],
    [9, 10, 3, 4, C.wood],
    [6, 14, 4, 2, C.wood],
    [0, 15, 16, 1, C.ink],
  ],
  // Greenhouse: glass dome over green plants.
  G: [
    [4, 1, 8, 2, "#bfe8f5"],
    [2, 3, 12, 12, "#bfe8f5"],
    [2, 3, 12, 1, C.stoneDark],
    [7, 1, 2, 14, C.stoneDark],
    [2, 8, 12, 1, C.stoneDark],
    [3, 10, 3, 4, C.leafLight],
    [10, 10, 3, 4, C.leafLight],
    [3, 5, 3, 2, C.leaf],
    [10, 5, 3, 2, C.leaf],
    [0, 15, 16, 1, C.ink],
  ],
  // Academy: red roof, bell tower with flag, columns.
  A: [
    [7, 0, 1, 3, C.ink],
    [8, 0, 3, 2, C.amber],
    [5, 3, 6, 3, "#9b2c2c"],
    [6, 4, 4, 1, C.amber],
    [0, 6, 16, 3, "#9b2c2c"],
    [1, 9, 14, 6, C.paper],
    [2, 9, 2, 6, "#e7d7b0"],
    [12, 9, 2, 6, "#e7d7b0"],
    [7, 11, 3, 4, C.wood],
    [4, 10, 2, 2, WINDOW],
    [10, 10, 1, 2, WINDOW],
    [0, 15, 16, 1, C.ink],
  ],
  // Archive: dark bunker with a terminal screen.
  X: [
    [1, 2, 14, 13, "#1f3a56"],
    [1, 2, 14, 2, C.ink],
    [3, 5, 10, 6, "#0b1220"],
    [4, 6, 5, 1, "#4ade80"],
    [4, 8, 3, 1, "#4ade80"],
    [8, 8, 1, 1, "#4ade80"],
    [6, 12, 4, 3, C.ink],
    [0, 15, 16, 1, C.ink],
  ],
  // Inn: orange roof, smoking chimney and a hanging sign.
  I: [
    [11, 0, 2, 4, C.stoneDark],
    [10, 0, 1, 1, "#d1d5db"],
    [1, 3, 14, 4, "#b45309"],
    [2, 7, 12, 8, C.paper],
    [3, 9, 3, 3, WINDOW],
    [10, 9, 3, 3, WINDOW],
    [7, 10, 2, 5, C.wood],
    [6, 8, 4, 1, C.amber],
    [0, 15, 16, 1, C.ink],
  ],
  // Plaza: stone fountain.
  Z: [
    [1, 9, 14, 6, C.stoneDark],
    [2, 9, 12, 4, "#1d5f8c"],
    [3, 10, 3, 1, C.glass],
    [6, 4, 4, 6, C.stone],
    [7, 1, 2, 3, C.glass],
    [5, 0, 1, 2, C.glass],
    [10, 0, 1, 2, C.glass],
    [0, 15, 16, 1, C.ink],
  ],
};

const legs: Record<0 | 1, Pixels> = {
  0: [
    [5, 12, 2, 3, C.ink],
    [9, 12, 2, 3, C.ink],
    [4, 15, 3, 1, C.hair],
    [9, 15, 3, 1, C.hair],
  ],
  1: [
    [5, 12, 2, 2, C.ink],
    [9, 12, 2, 3, C.ink],
    [5, 14, 3, 1, C.hair],
    [9, 15, 3, 1, C.hair],
  ],
};

const bodyFront: Pixels = [
  [5, 0, 6, 3, C.hair],
  [4, 2, 8, 2, C.hair],
  [5, 3, 6, 4, C.skin],
  [6, 4, 1, 1, C.ink],
  [9, 4, 1, 1, C.ink],
  [4, 7, 8, 5, C.shirt],
  [6, 8, 4, 1, C.amber],
  [3, 8, 1, 3, C.skin],
  [12, 8, 1, 3, C.skin],
];

const bodyBack: Pixels = [
  [5, 0, 6, 3, C.hair],
  [4, 2, 8, 5, C.hair],
  [4, 7, 8, 5, C.shirt],
  [6, 7, 4, 4, C.amber],
  [3, 8, 1, 3, C.skin],
  [12, 8, 1, 3, C.skin],
];

const bodySide: Pixels = [
  [5, 0, 6, 3, C.hair],
  [4, 2, 6, 5, C.hair],
  [7, 3, 4, 4, C.skin],
  [9, 4, 1, 1, C.ink],
  [5, 7, 6, 5, C.shirt],
  [3, 8, 3, 3, C.amber],
  [8, 8, 1, 3, C.skin],
];

/** Walking frame for the player: a different body per facing and alternating legs per step. */
export function playerPixels(facing: Direction, step: number): Pixels {
  const body = facing === "up" ? bodyBack : facing === "down" ? bodyFront : bodySide;
  return [...body, ...legs[(step % 2) as 0 | 1]];
}

export function Sprite({ pixels, className }: { pixels: Pixels; className?: string }) {
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" className={className} aria-hidden>
      {pixels.map(([x, y, w, h, fill], index) => (
        <rect key={index} x={x} y={y} width={w} height={h} fill={fill} />
      ))}
    </svg>
  );
}
