import { FlechaAbajo, FlechaDiagonal } from "@/components/editorial/iconos";
import { RetratoPortada } from "@/components/editorial/retrato-portada";
import type { CSSProperties } from "react";

import { getPortfolio, retrato, retratoTope, type Locale } from "@/data/portfolio";

/**
 * Portada del rediseño editorial (contrato 8.1, 8.5, 8.6 y 8.7 punto 2).
 * Todo el texto sale de data/portfolio.ts y data/projects.ts. Las cifras se cuentan, no se escriben.
 */
export function Portada({ locale, projectsHref = "#proyectos" }: { locale: Locale; projectsHref?: string }) {
  const { identity, projects, education, cvPath, t } = getPortfolio(locale);
  const [nombre, , apellido] = identity.name.split(" ");
  const proyectos = projects.length;
  // Programas de ingeniería en la formación: «Ingeniería …» en español, «… Engineering …» en inglés.
  const ingenierias = education.filter((e) => /ingenier|engineering/i.test(e.title)).length;
  const anchoTope = Math.round((retratoTope * retrato.ancho) / retrato.alto);
  const variables = {
    "--retrato-proporcion": `${retrato.ancho} / ${retrato.alto}`,
    "--retrato-tope": `${retratoTope}px`,
  } as CSSProperties;

  return (
    <section className="portada-medida sup-papel voz-texto overflow-hidden">
      <div className="portada reticula" style={variables}>
        {/* Fila 1: 72 px reservados para la navegación del paso 3. */}

        <div className="portada-cabeza">
          <p className="portada-rotulo voz-dato text-gris">{identity.role}</p>
          <h1 className="voz-titular titular-portada">
            <span className="sr-only">{identity.name}</span>
            <span aria-hidden="true" className="portada-linea block w-max">
              {nombre}
            </span>
            <span aria-hidden="true" className="portada-linea block w-max">
              {apellido}
            </span>
          </h1>
        </div>

        <div aria-hidden="true" className="portada-bloque" />
        <RetratoPortada
          alt={t.portada.portrait}
          src={retrato.src}
          sizes={`(min-width: 1024px) ${anchoTope}px, 50vw`}
        />

        <p className="portada-cifra">
          <span>
            <span className="portada-cifra-numero voz-titular">{proyectos}</span>{" "}
            <span className="portada-cifra-rotulo voz-dato">{t.portada.projects}</span>
          </span>{" "}
          <span>
            <span className="portada-cifra-numero voz-titular">{ingenierias}</span>{" "}
            <span className="portada-cifra-rotulo voz-dato">{t.portada.degrees}</span>
          </span>
        </p>

        <div className="portada-franja">
          <p className="portada-frase voz-texto-fuerte text-21 lg:text-28">{identity.tagline}</p>
          <div className="portada-acciones">
            <a href={projectsHref} className="boton-ed boton-ed-primario">
              {t.portada.viewProjects}
              <FlechaAbajo tamano={16} />
            </a>
            <a href={cvPath} download className="boton-ed boton-ed-secundario">
              {t.hero.downloadCv}
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
