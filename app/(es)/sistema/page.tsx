import type { Metadata } from "next";

import { FlechaAbajo, FlechaDiagonal } from "@/components/editorial/iconos";

/**
 * Hoja de especímenes del rediseño editorial (paso 1, tokens).
 * Muestra solo lo que fija el contrato de diseño, anexo 2026-11-10, sección 8. No se indexa.
 */
export const metadata: Metadata = {
  title: "Sistema del rediseño · Hoja de especímenes",
  robots: { index: false, follow: false },
};

type Par = { id: string; frente: string; fondo: string; nombreFrente: string; nombreFondo: string; uso: string; grande?: boolean };

const PAPEL = "#F1ECE2";
const NEGRO = "#0D0D0C";

const paresPapel: Par[] = [
  { id: "tinta-papel", frente: "#121211", fondo: PAPEL, nombreFrente: "tinta", nombreFondo: "papel", uso: "Texto y filetes" },
  { id: "gris-papel", frente: "#5A554C", fondo: PAPEL, nombreFrente: "gris", nombreFondo: "papel", uso: "Texto secundario" },
  { id: "rojo-papel", frente: "#D92B1F", fondo: PAPEL, nombreFrente: "rojo", nombreFondo: "papel", uso: "Bloque y titulares de 24 px o más", grande: true },
  { id: "rojo-texto-papel", frente: "#B81F14", fondo: PAPEL, nombreFrente: "rojo-texto", nombreFondo: "papel", uso: "Texto pequeño en rojo" },
];

const paresNegro: Par[] = [
  { id: "papel-negro", frente: PAPEL, fondo: NEGRO, nombreFrente: "papel", nombreFondo: "negro", uso: "Texto en secciones oscuras" },
  { id: "gris-claro-negro", frente: "#A39E94", fondo: NEGRO, nombreFrente: "gris-claro", nombreFondo: "negro", uso: "Texto secundario" },
  { id: "rojo-claro-negro", frente: "#FF4A3D", fondo: NEGRO, nombreFrente: "rojo-claro", nombreFondo: "negro", uso: "Texto pequeño en rojo" },
];

/** Contraste WCAG 2.x calculado desde el hex. La medida sobre el render está en el anexo, sección 11. */
function contraste(a: string, b: string) {
  const lum = (hex: string) => {
    const [r, g, bl] = [1, 3, 5].map((i) => {
      const c = parseInt(hex.slice(i, i + 2), 16) / 255;
      return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [alto, bajo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (alto + 0.05) / (bajo + 0.05);
}

/** Medido con Playwright sobre Archivo ancho 62 peso 900 (anexo 8.3). */
const MEDIDAS = [
  { ancho: "1440", reticula: "12 col, margen 64, canal 24", ocupa: "7 de 12", objetivo: "755.3", tamano: "324.0" },
  { ancho: "768", reticula: "8 col, margen 40, canal 24", ocupa: "8 de 8", objetivo: "688.0", tamano: "295.2" },
  { ancho: "390", reticula: "4 col, margen 20, canal 16", ocupa: "4 de 4", objetivo: "350.0", tamano: "150.1" },
];

const ESCALA_TEXTO = [
  [28, "text-28"],
  [21, "text-21"],
  [17, "text-17"],
  [15, "text-15"],
  [13, "text-13"],
] as const;
const ESCALA_ESPACIO = [4, 8, 12, 16, 24, 40, 64, 104, 168] as const;
const COLUMNAS = Array.from({ length: 12 }, (_, i) => i + 1);

/** Las columnas 5 a 8 aparecen desde tablet y las 9 a 12 desde escritorio, como la retícula. */
function visibilidadColumna(n: number) {
  if (n > 8) return "hidden lg:block";
  if (n > 4) return "hidden md:block";
  return "";
}

function Rotulo({ children }: { children: React.ReactNode }) {
  return <h2 className="filete-seccion voz-dato-fuerte text-13 uppercase">{children}</h2>;
}

function TarjetaPar({ par }: { par: Par }) {
  const razon = contraste(par.frente, par.fondo);
  const umbral = par.grande ? 3 : 4.5;
  return (
    <li
      data-par={par.id}
      data-frente-hex={par.frente}
      data-fondo-hex={par.fondo}
      className="col-span-full flex flex-col gap-e16 border-t border-current py-e16 md:col-span-4 lg:col-span-3"
      style={{ background: par.fondo }}
    >
      <div className="flex items-start justify-between gap-e16">
        <span data-muestra="frente" aria-hidden="true" className="block size-e40" style={{ background: par.frente }} />
        <span className="voz-dato-fuerte text-28 leading-none" style={{ color: par.frente }}>
          {razon.toFixed(2)}
        </span>
      </div>
      <p className={par.grande ? "voz-texto-fuerte text-28" : "voz-texto text-17"} style={{ color: par.frente }}>
        Del sensor a la interfaz
      </p>
      {/* Los datos van en el color de la superficie. El rojo a 13 px no cumpliría 8.2. */}
      <dl className="voz-dato grid grid-cols-[auto_1fr] gap-x-e12 gap-y-e4 text-13">
        <dt>par</dt>
        <dd>
          {par.nombreFrente} sobre {par.nombreFondo}
        </dd>
        <dt>hex</dt>
        <dd>
          {par.frente} / {par.fondo}
        </dd>
        <dt>uso</dt>
        <dd>{par.uso}</dd>
        <dt>piso</dt>
        <dd>
          {razon >= umbral ? "cumple" : "no cumple"} AA {par.grande ? "texto grande" : "texto normal"} ({umbral}:1)
        </dd>
      </dl>
    </li>
  );
}

export default function SistemaPage() {
  return (
    <main className="sup-papel voz-texto w-full flex-1">
      {/* Cabecera */}
      <header className="reticula gap-y-e24 pt-e64 pb-e40">
        <p className="voz-dato col-span-full text-13 text-gris">Rediseño editorial, paso 1, tokens</p>
        <h1 className="voz-texto-fuerte col-span-full text-28 lg:col-span-8">Hoja de especímenes del sistema</h1>
        <p className="medida col-span-full text-17 text-gris lg:col-span-7">
          Todo lo que sale de aquí está en el contrato de diseño del anexo del 10 de noviembre de 2026. Esta página no se
          indexa y no forma parte del portafolio.
        </p>
      </header>

      {/* Titular de portada con la retícula encima */}
      <section aria-labelledby="titular" className="portada-medida pb-e64">
        <div className="reticula">
          <div className="col-span-full pb-e24">
            <Rotulo>
              <span id="titular">Titular de portada</span>
            </Rotulo>
          </div>
        </div>
        <div className="relative">
          <div aria-hidden="true" className="reticula pointer-events-none absolute inset-0">
            {COLUMNAS.map((n) => (
              <span key={n} className={`border-x border-gris ${visibilidadColumna(n)}`} />
            ))}
          </div>
          <div className="reticula relative">
            <p data-titular-portada className="voz-titular titular-portada col-span-full lg:col-span-7">
              <span data-linea="1" className="block w-max">Diego</span>
              <span data-linea="2" className="block w-max">Pinta</span>
            </p>
          </div>
        </div>
        <div className="reticula pt-e24">
          <table className="voz-dato col-span-full text-13 lg:col-span-9">
            <caption className="voz-texto pb-e8 text-left text-15 text-gris">
              Tamaño medido para que DIEGO ocupe las columnas indicadas. Interlínea 0.82.
            </caption>
            <thead>
              <tr className="border-b border-tinta text-left">
                <th className="py-e8 pr-e16 font-medium">ancho</th>
                <th className="py-e8 pr-e16 font-medium">retícula</th>
                <th className="py-e8 pr-e16 font-medium">DIEGO ocupa</th>
                <th className="py-e8 pr-e16 font-medium">objetivo px</th>
                <th className="py-e8 font-medium">font-size px</th>
              </tr>
            </thead>
            <tbody>
              {MEDIDAS.map((m) => (
                <tr key={m.ancho}>
                  <td className="py-e8 pr-e16">{m.ancho}</td>
                  <td className="py-e8 pr-e16">{m.reticula}</td>
                  <td className="py-e8 pr-e16">{m.ocupa}</td>
                  <td className="py-e8 pr-e16">{m.objetivo}</td>
                  <td className="py-e8">{m.tamano}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Voces */}
      <section aria-labelledby="voces" className="reticula gap-y-e24 pb-e104">
        <div className="col-span-full">
          <Rotulo>
            <span id="voces">Tres voces</span>
          </Rotulo>
        </div>

        <div className="col-span-full flex flex-col gap-e12 md:col-span-4 lg:col-span-4">
          <p className="voz-dato text-13 text-gris">Titular, Archivo ancho 62 peso 900, mínimo 40 px</p>
          <p className="voz-titular" style={{ fontSize: 40 }}>
            Proyectos
          </p>
          <p className="voz-titular text-rojo" style={{ fontSize: 40 }}>
            Hardware
          </p>
        </div>

        <div className="col-span-full flex flex-col gap-e12 md:col-span-4 lg:col-span-5">
          <p className="voz-dato text-13 text-gris">Texto, Archivo ancho 100, pesos 400 y 600</p>
          <ul className="flex flex-col gap-e8">
            {ESCALA_TEXTO.map(([t, clase]) => (
              <li key={t} className="flex items-baseline gap-e16">
                <span className="voz-dato w-e40 flex-none text-13 text-gris">{t}</span>
                <span className={clase}>
                  Construyo <span className="voz-texto-fuerte">del sensor</span> a la interfaz
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full flex flex-col gap-e12 md:col-span-8 lg:col-span-3">
          <p className="voz-dato text-13 text-gris">Dato, IBM Plex Mono, pesos 400 y 500</p>
          <dl className="voz-dato grid grid-cols-[auto_1fr] gap-x-e16 gap-y-e8 text-15">
            <dt className="voz-dato-fuerte">01</dt>
            <dd>Rol, periodo, estado</dd>
            <dt className="voz-dato-fuerte">02</dt>
            <dd>2024 a 2026</dd>
            <dt className="voz-dato-fuerte">11</dt>
            <dd className="text-13 text-gris">rótulo de 13 px</dd>
          </dl>
        </div>
      </section>

      {/* Paleta sobre papel */}
      <section aria-labelledby="paleta" className="pb-e64">
        <div className="reticula gap-y-e24">
          <div className="col-span-full">
            <Rotulo>
              <span id="paleta">Color sobre papel</span>
            </Rotulo>
          </div>
          <ul className="col-span-full grid grid-cols-subgrid gap-y-e24">
            {paresPapel.map((par) => (
              <TarjetaPar key={par.id} par={par} />
            ))}
          </ul>
        </div>
      </section>

      {/* Espacio */}
      <section aria-labelledby="espacio" className="reticula gap-y-e24 pb-e104">
        <div className="col-span-full">
          <Rotulo>
            <span id="espacio">Escala de espacio</span>
          </Rotulo>
        </div>
        <ul className="col-span-full flex flex-col gap-e12 lg:col-span-8">
          {ESCALA_ESPACIO.map((e) => (
            <li key={e} className="flex items-center gap-e16">
              <span className="voz-dato w-e40 flex-none text-13 text-gris">{e}</span>
              <span aria-hidden="true" className="block h-e8 bg-tinta" style={{ width: e }} />
            </li>
          ))}
        </ul>
        <dl className="voz-dato col-span-full grid grid-cols-[auto_1fr] content-start gap-x-e16 gap-y-e8 text-13 lg:col-span-4">
          <dt className="text-gris">radio</dt>
          <dd>0 en todo</dd>
          <dt className="text-gris">filete</dt>
          <dd>1 px</dd>
          <dt className="text-gris">entrada</dt>
          <dd>700 ms, cubic-bezier(0.16, 1, 0.3, 1), 24 px</dd>
          <dt className="text-gris">selector</dt>
          <dd>200 ms, ease-out</dd>
          <dt className="text-gris">hover</dt>
          <dd>150 ms</dd>
        </dl>
      </section>

      {/* Retícula */}
      <section aria-labelledby="reticula" className="pb-e104">
        <div className="reticula gap-y-e24">
          <div className="col-span-full">
            <Rotulo>
              <span id="reticula">Retícula 12 / 8 / 4</span>
            </Rotulo>
          </div>
          {COLUMNAS.map((n) => (
            <div
              key={n}
              data-columna={n}
              className={`voz-dato flex h-e104 items-end border-x border-tinta p-e4 text-13 ${visibilidadColumna(n)}`}
            >
              {String(n).padStart(2, "0")}
            </div>
          ))}
          <p className="voz-dato col-span-full text-13 text-gris">
            Celular 4 columnas, margen 20, canal 16. Tablet desde 768 px, 8 columnas, margen 40, canal 24. Escritorio
            desde 1024 px, 12 columnas, margen 64, canal 24. Ancho máximo 1440 px.
          </p>
        </div>
      </section>

      {/* Superficie negra: pares oscuros, iconos e interacción */}
      <div className="sup-negro">
        <section aria-labelledby="oscuro" className="pt-e64 pb-e64">
          <div className="reticula gap-y-e24">
            <div className="col-span-full">
              <Rotulo>
                <span id="oscuro">Color sobre negro</span>
              </Rotulo>
            </div>
            <ul className="col-span-full grid grid-cols-subgrid gap-y-e24">
              {paresNegro.map((par) => (
                <TarjetaPar key={par.id} par={par} />
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="iconos" className="reticula gap-y-e24 pb-e64">
          <div className="col-span-full">
            <Rotulo>
              <span id="iconos">Iconos</span>
            </Rotulo>
          </div>
          <div className="col-span-full flex flex-wrap items-end gap-e40 md:col-span-4">
            <FlechaDiagonal tamano={64} />
            <FlechaAbajo tamano={64} />
            <FlechaDiagonal tamano={24} />
            <FlechaAbajo tamano={24} />
          </div>
          <p className="voz-dato col-span-full text-13 text-gris-claro md:col-span-4">
            Solo dos. Trazo de 1.5 px a cualquier tamaño, puntas rectas, sin relleno.
          </p>
        </section>

        <section aria-labelledby="interaccion" className="reticula gap-y-e24 pb-e104">
          <div className="col-span-full">
            <Rotulo>
              <span id="interaccion">Botones y foco</span>
            </Rotulo>
          </div>
          <p className="medida col-span-full text-17 text-gris-claro">
            Pulsa Tab para ver el foco. Contorno de 2 px en papel sobre negro y en tinta sobre papel.
          </p>
          <div className="col-span-full flex flex-wrap content-start items-start gap-e16 lg:col-span-6">
            <a href="#interaccion" className="boton-ed boton-ed-primario">
              Ver proyectos
              <FlechaAbajo tamano={16} />
            </a>
            <a href="#interaccion" className="boton-ed boton-ed-secundario">
              Bajar CV
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
          <div className="sup-papel col-span-full flex flex-wrap gap-e16 p-e24 lg:col-span-6">
            <a href="#interaccion" className="boton-ed boton-ed-primario">
              Ver proyectos
              <FlechaAbajo tamano={16} />
            </a>
            <a href="#interaccion" className="boton-ed boton-ed-secundario">
              Bajar CV
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
