import { ImageResponse } from "next/og";

import { buildings, playerPixels, tiles, type Pixels } from "@/components/pixel-sprites";
import { NAME, type Locale } from "@/data/portfolio";

export const ogSize = { width: 1200, height: 630 };

const taglines: Record<Locale, string> = {
  es: "Ingeniería de Software + Electrónica · UCC",
  en: "Software + Electronic Engineering · UCC",
};

function PixelSprite({ pixels, size }: { pixels: Pixels; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
      {pixels.map(([x, y, w, h, fill], index) => (
        // Satori can't resolve CSS variables, so swap the night-mode window colour for its default.
        <rect key={index} x={x} y={y} width={w} height={h} fill={fill.startsWith("var(") ? "#7cc4e8" : fill} />
      ))}
    </svg>
  );
}

/** Social share card: title, name and a strip of the overworld. */
export function renderOgImage(locale: Locale) {
  const strip: Pixels[] = [
    tiles.tree,
    buildings.F,
    tiles.flowers,
    buildings.L,
    playerPixels("down", 0),
    buildings.G,
    tiles.flowers,
    buildings.A,
    tiles.tree,
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#164a3a",
          border: "16px solid #10263d",
          padding: "56px 64px 40px",
          color: "#fff3d4",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#e6a23c", letterSpacing: 4 }}>▶ PORTFOLIO</div>
          <div style={{ fontSize: 76, fontWeight: 800, marginTop: 16 }}>Diecu&apos;s Engineering Quest</div>
          <div style={{ fontSize: 36, marginTop: 20 }}>{NAME}</div>
          <div style={{ fontSize: 28, marginTop: 8, opacity: 0.8 }}>{taglines[locale]}</div>
        </div>
        <div style={{ display: "flex", background: "#3f9b5f", border: "8px solid #fff3d4", padding: 8 }}>
          {strip.map((pixels, index) => (
            <PixelSprite key={index} pixels={pixels} size={112} />
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
