import { readFileSync } from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";
import sharp from "sharp";

import { NAME, getPortfolio, retrato, type Locale } from "@/data/portfolio";
import type { Esquema } from "@/data/projects";

export const ogSize = { width: 1200, height: 630 };

// Satori no admite fuentes variables ni WOFF2: usa las instancias estáticas de assets/fuentes (scripts/fuentes-estaticas.py).
const fuente = (archivo: string) => readFileSync(path.join(process.cwd(), "assets", "fuentes", archivo));
const fuentes = () => [
  { name: "Titular", data: fuente("Archivo-Condensada-Black.ttf"), weight: 900 as const, style: "normal" as const },
  { name: "Texto", data: fuente("Archivo-SemiBold.ttf"), weight: 600 as const, style: "normal" as const },
  { name: "Dato", data: fuente("IBMPlexMono-Medium.ttf"), weight: 500 as const, style: "normal" as const },
];

const C = { papel: "#F1ECE2", tinta: "#121211", gris: "#5A554C", rojo: "#D92B1F", negro: "#0D0D0C", rojoClaro: "#FF4A3D", grisClaro: "#A39E94" };

/** Imagen de public/ como PNG en data URL (Satori no lee WebP). */
async function imagenPng(rutaPublica: string, ancho: number) {
  const archivo = path.join(process.cwd(), "public", rutaPublica);
  const png = await sharp(archivo).resize({ width: ancho, withoutEnlargement: true }).png().toBuffer();
  const meta = await sharp(png).metadata();
  return { src: `data:image/png;base64,${png.toString("base64")}`, width: meta.width!, height: meta.height! };
}

/** Tarjeta social del sitio: nombre en titular, bloque rojo, retrato y frase. */
export async function renderOgImage(locale: Locale) {
  const { identity, projects, education } = getPortfolio(locale);
  const [nombre, , apellido] = NAME.split(" ");
  const foto = await imagenPng(retrato.src.replace(/^\//, ""), 250);
  const ingenierias = education.filter((e) => /ingenier|engineering/i.test(e.title)).length;
  const cifra =
    locale === "es"
      ? `${projects.length} proyectos, ${ingenierias} ingenierías`
      : `${projects.length} projects, ${ingenierias} engineering degrees`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: C.papel, position: "relative" }}>
        <div style={{ position: "absolute", left: 760, top: 170, width: 300, height: 380, background: C.rojo }} />
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori dibuja la tarjeta, no hay DOM ni next/image. */}
        <img src={foto.src} width={foto.width} height={foto.height} style={{ position: "absolute", left: 700, bottom: 80 }} alt="" />
        <div style={{ position: "absolute", left: 64, top: 56, display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Dato", fontSize: 22, color: C.gris }}>{identity.role}</div>
          <div style={{ fontFamily: "Titular", fontSize: 230, lineHeight: 0.82, color: C.tinta, marginTop: 24, textTransform: "uppercase" }}>
            {nombre}
          </div>
          <div style={{ fontFamily: "Titular", fontSize: 230, lineHeight: 0.82, color: C.tinta, textTransform: "uppercase" }}>
            {apellido}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            bottom: 0,
            height: 80,
            borderTop: `2px solid ${C.tinta}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: C.papel,
          }}
        >
          <div style={{ fontFamily: "Texto", fontSize: 32, color: C.tinta }}>{identity.tagline}</div>
          <div style={{ fontFamily: "Dato", fontSize: 24, color: C.tinta }}>{cifra}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fuentes() },
  );
}

function EsquemaOg({ esquema }: { esquema: Esquema }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: C.papel, border: `2px solid ${C.tinta}`, padding: 16, width: 520 }}>
      {esquema.etapas.map((e, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {e.nodos.map((n) => (
              <div
                key={n.etiqueta}
                style={{
                  flex: 1,
                  display: "flex",
                  border: `2px solid ${C.tinta}`,
                  padding: "6px 10px",
                  fontFamily: "Texto",
                  fontSize: 20,
                  color: i === 0 || i === esquema.etapas.length - 1 ? C.papel : C.tinta,
                  background: i === 0 || i === esquema.etapas.length - 1 ? C.tinta : C.papel,
                }}
              >
                {n.etiqueta}
              </div>
            ))}
          </div>
          {i < esquema.etapas.length - 1 && <div style={{ height: 14, width: 2, background: C.tinta, marginLeft: 24 }} />}
        </div>
      ))}
    </div>
  );
}

/** Tarjeta social de un proyecto: número, nombre y captura o esquema sobre el bloque rojo. */
export async function renderProjectOgImage(locale: Locale, id: string) {
  const { projects, t } = getPortfolio(locale);
  const i = projects.findIndex((p) => p.id === id);
  const p = projects[i];
  const numero = String(i + 1).padStart(2, "0");
  const imagen = p.image ? await imagenPng(p.image.src.replace(/^\//, ""), 560) : null;
  const escala = imagen ? Math.min(1, 520 / imagen.width, 470 / imagen.height) : 1;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: C.negro, position: "relative" }}>
        <div style={{ position: "absolute", left: 640, top: 100, width: 500, height: 470, background: C.rojo }} />
        <div style={{ position: "absolute", left: 610, top: 70, display: "flex" }}>
          {imagen ? (
            // eslint-disable-next-line @next/next/no-img-element -- Satori, sin next/image.
            <img src={imagen.src} width={imagen.width * escala} height={imagen.height * escala} alt="" />
          ) : (
            p.esquema && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "Dato", fontSize: 18, color: C.papel, marginBottom: 8 }}>{t.card.diagram}</div>
                <EsquemaOg esquema={p.esquema} />
              </div>
            )
          )}
        </div>
        <div style={{ position: "absolute", left: 64, top: 56, width: 520, display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Titular", fontSize: 180, lineHeight: 0.82, color: C.rojoClaro }}>{numero}</div>
          <div style={{ fontFamily: "Titular", fontSize: 84, lineHeight: 0.9, color: C.papel, textTransform: "uppercase", marginTop: 24 }}>
            {p.name}
          </div>
          <div style={{ fontFamily: "Texto", fontSize: 26, color: C.grisClaro, marginTop: 24, lineHeight: 1.3 }}>{p.summary}</div>
        </div>
        <div style={{ position: "absolute", left: 64, bottom: 40, fontFamily: "Dato", fontSize: 22, color: C.papel }}>{NAME}</div>
      </div>
    ),
    { ...ogSize, fonts: fuentes() },
  );
}
