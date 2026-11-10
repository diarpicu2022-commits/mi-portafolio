import { readFileSync } from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Monograma tipográfico: la D de Diego en Archivo condensada sobre el bloque rojo. */
export default function Icon() {
  const titular = readFileSync(path.join(process.cwd(), "assets", "fuentes", "Archivo-Condensada-Black.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#D92B1F",
          color: "#F1ECE2",
          fontFamily: "Titular",
          fontSize: 22,
          lineHeight: 1,
        }}
      >
        DP
      </div>
    ),
    { ...size, fonts: [{ name: "Titular", data: titular, weight: 900, style: "normal" }] },
  );
}
