import Image from "next/image";
import Link from "next/link";

import { FlechaDiagonal } from "@/components/editorial/iconos";
import { formatPeriod } from "@/data/projects";
import { getPortfolio, projectPath, type Locale } from "@/data/portfolio";

const txt = {
  es: { caso: "Ver caso", casoLargo: "Ver caso de estudio", mas: "Más proyectos", masIntro: "Pasa el cursor o desliza para ver cada carta.", ilus: "Ilustración" },
  en: { caso: "View case", casoLargo: "View case study", mas: "More projects", masIntro: "Hover or swipe to see each card.", ilus: "Illustration" },
} as const;

/** Proyectos como collage sobre negro (destacados con captura) y un abanico de cartas (los ilustrados). */
export function GaleriaProyectos({ locale }: { locale: Locale }) {
  const { projects, t } = getPortfolio(locale);
  const x = txt[locale];
  const destacados = projects.filter((p) => p.image);
  const cartas = projects.filter((p) => !p.image);

  return (
    <div className="col-span-full flex flex-col gap-e104">
      <ol className="collage-lista">
        {destacados.map((p) => {
          const n = String(projects.indexOf(p) + 1).padStart(2, "0");
          const img = p.image!;
          const vertical = img.height > img.width;
          return (
            <li key={p.id} id={`proyecto-${p.id}`} className="collage-item" data-revelar>
              <div className={`collage-fig ${vertical ? "collage-vertical" : ""}`}>
                <span aria-hidden="true" className="collage-num voz-titular">{n}</span>
                <span aria-hidden="true" className="collage-bloque" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes={vertical ? "240px" : "(min-width: 1024px) 560px, 90vw"}
                  className="collage-img"
                />
              </div>
              <div className="collage-texto">
                <p className="voz-dato text-13 text-rojo-claro">
                  {n} · {formatPeriod(locale, p)} · {t.card.status[p.status]}
                </p>
                <h3 className="voz-titular collage-nombre">{p.name}</h3>
                <p className="text-17 text-gris-claro">{p.summary}</p>
                <ul className="collage-tags voz-dato text-13">
                  {p.technologies.slice(0, 5).map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-e16">
                  <Link href={projectPath(locale, p.id)} aria-label={`${x.casoLargo}: ${p.name}`} className="boton-ed boton-ed-claro">
                    {x.caso}
                    <FlechaDiagonal tamano={16} />
                  </Link>
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} aria-label={`${l.label}: ${p.name} (GitHub)`} className="enlace-claro voz-dato text-13">
                      {l.label} <FlechaDiagonal tamano={12} />
                    </a>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {cartas.length > 0 && (
        <div className="flex flex-col gap-e24">
          <div className="flex flex-wrap items-baseline justify-between gap-e16">
            <h3 className="voz-titular text-[clamp(40px,6vw,72px)] leading-[0.9]">{x.mas}</h3>
            <p className="voz-dato text-13 text-gris-claro">{x.masIntro}</p>
          </div>
          <ul className="abanico">
            {cartas.map((p, i) => {
              const n = String(projects.indexOf(p) + 1).padStart(2, "0");
              const giro = (i - (cartas.length - 1) / 2) * 5;
              return (
                <li key={p.id} id={`proyecto-${p.id}`} className="carta" style={{ ["--giro" as string]: `${giro}deg`, ["--alto" as string]: `${Math.abs(giro) * 2.4}px` }}>
                  <Link href={projectPath(locale, p.id)} aria-label={`${x.casoLargo}: ${p.name}`} className="carta-enlace">
                    <span className="carta-cabeza voz-dato text-13">
                      <span>{n}</span>
                      <span>{x.ilus}</span>
                    </span>
                    {p.ilustracion && (
                      <Image
                        src={p.ilustracion.src}
                        alt={p.ilustracion.alt}
                        width={p.ilustracion.width}
                        height={p.ilustracion.height}
                        sizes="300px"
                        className="carta-img"
                      />
                    )}
                    <h3 className="voz-titular carta-nombre">{p.name}</h3>
                    <span className="carta-resumen text-15">{p.summary}</span>
                    <span aria-hidden="true" className="carta-pie voz-dato text-13">
                      {x.caso} <FlechaDiagonal tamano={12} />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
