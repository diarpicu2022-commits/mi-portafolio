import Image from "next/image";

import { EsquemaSistema } from "@/components/editorial/esquema-sistema";
import { FlechaDiagonal } from "@/components/editorial/iconos";
import { IlustracionProyecto } from "@/components/editorial/ilustracion-proyecto";
import { getPortfolio, projectPath, type Locale } from "@/data/portfolio";

/**
 * Experiencia (enmienda 12): tabla cronológica con la miniatura real o el esquema del proyecto,
 * cargo, periodo, un logro tomado del resultado del caso y el enlace al caso.
 * Con puntero fino la miniatura de la fila señalada se amplía (200 ms, transform). En táctil y teclado todo se ve igual.
 */
export function Experiencia({ locale }: { locale: Locale }) {
  const { experience, projects, pasantia, medios, t } = getPortfolio(locale);
  const porId = new Map(projects.map((p) => [p.id, p]));

  return (
    <div className="col-span-full grid grid-cols-subgrid gap-y-e40">
    <article className="pasantia col-span-full" data-revelar>
      <div className="pasantia-cabeza">
        <p className="voz-dato text-13 pasantia-rotulo">{pasantia.rotulo}</p>
        <p className="voz-dato text-13">{pasantia.periodo}</p>
      </div>
      <h3 className="voz-titular pasantia-cargo">{pasantia.cargo}</h3>
      <p className="text-21 voz-texto-fuerte">{pasantia.lugar}</p>
      <div className="pasantia-etapas">
        {pasantia.etapas.map((etapa) => (
          <section key={etapa.nombre} className="pasantia-etapa">
            <p className="voz-dato text-13 pasantia-periodo">{etapa.periodo}</p>
            <h4 className="voz-texto-fuerte text-17">{etapa.nombre}</h4>
            <ul className="pasantia-logros">
              {etapa.logros.map((l) => (
                <li key={l} className="text-15">{l}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ul className="collage-tags pasantia-tags voz-dato text-13" aria-label="Herramientas">
        {pasantia.tecnologias.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
    <article className="medios col-span-full" data-revelar>
      <div className="medios-texto">
        <div className="pasantia-cabeza">
          <p className="voz-dato text-13 pasantia-rotulo">{medios.rotulo}</p>
          <p className="voz-dato text-13">{medios.periodo}</p>
        </div>
        <h3 className="voz-titular medios-cargo">{medios.cargo}</h3>
        <p className="text-21 voz-texto-fuerte">{medios.lugar}</p>
        <ul className="pasantia-logros">
          {medios.logros.map((l) => (
            <li key={l} className="text-15">{l}</li>
          ))}
        </ul>
        <ul className="collage-tags medios-tags voz-dato text-13">
          {medios.tecnologias.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="medios-imagenes">
        {medios.imagenes.map((img) => (
          <Image key={img.src} src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 1024px) 420px, 80vw" loading="lazy" />
        ))}
      </div>
    </article>
    <ol className="cronologia col-span-full">
      {experience.map((item) => {
        const p = porId.get(item.id)!;
        return (
          <li key={item.id} className="cronologia-fila">
            <div className="cronologia-miniatura" aria-hidden={p.image || p.ilustracion ? undefined : true}>
              {p.image ? (
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(min-width: 1024px) 200px, 160px"
                  loading="lazy"
                />
              ) : p.ilustracion ? (
                <IlustracionProyecto
                  ilustracion={p.ilustracion}
                  rotulo={t.card.illustration}
                  sizes="(min-width: 1024px) 200px, 160px"
                  className="ilustracion-mini"
                />
              ) : (
                p.esquema && <EsquemaSistema esquema={p.esquema} rotulo={t.card.diagram} luego={t.card.then} mini />
              )}
            </div>
            <p className="cronologia-periodo voz-dato text-13">{item.period}</p>
            <div className="cronologia-cargo">
              <h3 className="voz-texto-fuerte text-17">{item.position}</h3>
              <p className="medida text-15 text-gris">{p.outcome[0]}</p>
            </div>
            <a
              className="cronologia-caso nav-ed-enlace gap-e4 text-15"
              href={projectPath(locale, item.id)}
              aria-label={`${t.card.caseStudy}: ${item.project}`}
            >
              {item.project}
              <FlechaDiagonal tamano={16} />
            </a>
          </li>
        );
      })}
    </ol>
    </div>
  );
}
