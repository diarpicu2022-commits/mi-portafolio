"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

import { FlechaDiagonal } from "@/components/editorial/iconos";
import { getPortfolio, projectPath, type Locale } from "@/data/portfolio";
import { formatPeriod } from "@/data/projects";

const numero = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Selector de proyectos (contrato 8.5, 8.6 punto 3, 8.7 punto 4).
 * Pestañas verticales: lista numerada, captura sobre el bloque rojo y ficha en voz dato.
 * Los 11 paneles se apilan en la misma celda y solo el elegido es visible: el alto no cambia al elegir.
 * Sin JavaScript, la hoja de <noscript> enseña los 11 proyectos seguidos con sus enlaces.
 */
export function SelectorProyectos({ locale }: { locale: Locale }) {
  const { projects, t } = getPortfolio(locale);
  const c = t.card;
  const [elegido, setElegido] = useState(0);
  const [animar, setAnimar] = useState(false);
  const [vistos, setVistos] = useState<Set<number>>(() => new Set([0]));
  const pestanas = useRef<(HTMLButtonElement | null)[]>([]);

  const elegir = useCallback(
    (i: number, origen: "teclado" | "puntero" | "enlace") => {
      setElegido(i);
      setAnimar(origen === "puntero");
      setVistos((v) => (v.has(i) ? v : new Set(v).add(i)));
      if (origen !== "enlace") history.replaceState(null, "", `#${c.hashPrefix}${projects[i].id}`);
    },
    [c.hashPrefix, projects],
  );

  // Enlace directo: #proyecto-<id> en español, #project-<id> en inglés.
  useEffect(() => {
    const leer = () => {
      const id = decodeURIComponent(location.hash.slice(1)).replace(c.hashPrefix, "");
      const i = projects.findIndex((p) => p.id === id);
      if (i < 0) return;
      elegir(i, "enlace");
      document.getElementById(`selector-${locale}`)?.scrollIntoView?.({ block: "start" });
    };
    leer();
    window.addEventListener("hashchange", leer);
    return () => window.removeEventListener("hashchange", leer);
  }, [c.hashPrefix, elegir, locale, projects]);

  const alTeclear = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const ultimo = projects.length - 1;
    const destino =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? (i + 1) % projects.length
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? (i - 1 + projects.length) % projects.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? ultimo
              : null;
    if (destino === null) return;
    event.preventDefault();
    elegir(destino, "teclado");
    pestanas.current[destino]?.focus();
  };

  return (
    <div id={`selector-${locale}`} className="selector">
      <noscript>
        <style>{`
          .selector-lista { display: none !important; }
          .selector-paneles { row-gap: var(--e-104); }
          .selector-panel { visibility: visible !important; grid-row: auto !important; }
          .selector-bloque { display: none; }
        `}</style>
      </noscript>

      <div role="tablist" aria-label={c.choose} aria-orientation="vertical" className="selector-lista">
        {projects.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              pestanas.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`pestana-${p.id}`}
            aria-selected={i === elegido}
            aria-controls={`${c.hashPrefix}${p.id}`}
            tabIndex={i === elegido ? 0 : -1}
            className="selector-pestana"
            onClick={() => elegir(i, "puntero")}
            onKeyDown={(event) => alTeclear(event, i)}
          >
            <span className="selector-pestana-numero voz-dato-fuerte">{numero(i)}</span>
            <span className="selector-pestana-nombre">{p.name}</span>
          </button>
        ))}
      </div>

      <div className="selector-paneles">
        {projects.map((p, i) => {
          const activo = i === elegido;
          return (
            <article
              key={p.id}
              id={`${c.hashPrefix}${p.id}`}
              role="tabpanel"
              aria-labelledby={`pestana-${p.id}`}
              data-activo={activo ? "" : undefined}
              data-animar={activo && animar ? "" : undefined}
              className="selector-panel"
            >
              <div className="selector-escenario">
                <div aria-hidden="true" className="selector-bloque" />
                {p.image ? (
                  <div className="selector-captura selector-anima">
                    {vistos.has(i) ? (
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        width={p.image.width}
                        height={p.image.height}
                        sizes="(min-width: 1280px) 500px, (min-width: 1024px) 630px, (min-width: 768px) 380px, 90vw"
                        loading="lazy"
                      />
                    ) : (
                      <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} loading="lazy" />
                      </noscript>
                    )}
                  </div>
                ) : (
                  <p aria-hidden="true" className="selector-placa voz-titular selector-anima">
                    {p.name}
                  </p>
                )}
              </div>

              <div className="selector-ficha voz-dato">
                <p aria-hidden="true" className="selector-numero voz-titular">
                  {numero(i)}
                </p>
                <h3 className="selector-nombre voz-titular">{p.name}</h3>
                <p className="voz-texto medida text-15 text-gris-claro">{p.summary}</p>
                <dl className="selector-datos text-13">
                  <dt>{t.caseStudy.position}</dt>
                  <dd>{p.position}</dd>
                  <dt>{t.caseStudy.year}</dt>
                  <dd>{formatPeriod(locale, p)}</dd>
                  <dt>{t.caseStudy.status}</dt>
                  <dd>{c.status[p.status]}</dd>
                  <dt>{t.caseStudy.stack}</dt>
                  <dd>{p.technologies.join(", ")}</dd>
                </dl>
                <div className="flex flex-col items-start gap-e8">
                  <a
                    href={projectPath(locale, p.id)}
                    className="boton-ed boton-ed-primario"
                    aria-label={`${c.caseStudy}: ${p.name}`}
                  >
                    {c.caseStudy}
                    <FlechaDiagonal tamano={16} />
                  </a>
                  <ul className="flex flex-wrap gap-x-e16">
                    {p.links.map((link) => (
                      <li key={link.url}>
                        <a className="nav-ed-enlace -ml-e8 gap-e4 text-13" href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                          <span className="sr-only"> · {p.name} (GitHub)</span>
                          <FlechaDiagonal tamano={16} />
                        </a>
                      </li>
                    ))}
                  </ul>
                  {p.demo ? (
                    <a href={p.demo} className="boton-ed boton-ed-secundario" target="_blank" rel="noopener noreferrer">
                      {c.demo}
                      <span className="sr-only"> · {p.name}</span>
                      <FlechaDiagonal tamano={16} />
                    </a>
                  ) : (
                    <p className="selector-sin-demo text-13 text-gris-claro">{c.noPublicDemo}</p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
