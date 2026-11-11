import Image from "next/image";
import { notFound } from "next/navigation";

import { CarruselProyecto } from "@/components/editorial/carrusel-proyecto";
import { EsquemaSistema } from "@/components/editorial/esquema-sistema";
import { FlechaDiagonal } from "@/components/editorial/iconos";
import { Navegacion } from "@/components/editorial/navegacion";
import { Pie } from "@/components/editorial/pie";
import { getPortfolio, projectPath, sectionHref, type Locale } from "@/data/portfolio";
import { formatPeriod } from "@/data/projects";

const numero = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Página de caso con el sistema editorial: número y nombre en titular, ficha en voz dato,
 * captura o esquema sobre el bloque rojo, la historia en orden y el cierre con contacto.
 */
export function CaseStudyPage({ locale, id }: { locale: Locale; id: string }) {
  const { projects, identity, cvPath, t } = getPortfolio(locale);
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const c = t.caseStudy;
  const s = t.sections;
  const otro: Locale = locale === "es" ? "en" : "es";

  return (
    <>
      <a href="#contenido" className="salto-ed boton-ed boton-ed-primario sup-papel">
        {t.skipLink}
      </a>
      <Navegacion locale={locale} alternate={projectPath(otro, id)} />

      <main id="contenido" tabIndex={-1} className="sup-papel voz-texto w-full flex-1 outline-none">
        <article>
          <header className="caso-cabeza reticula">
            <a href={sectionHref(locale, "projects")} className="nav-ed-enlace -ml-e8 col-span-full w-fit text-15 underline underline-offset-4">
              {c.back}
            </a>
            <div className="col-span-full flex flex-col gap-e24 lg:col-span-9">
              <p className="caso-numero voz-titular" aria-hidden="true">
                {numero(index)}
              </p>
              <h1 className="caso-nombre voz-titular">{project.name}</h1>
              <p className="medida text-21">{project.summary}</p>
            </div>
            <dl className="caso-ficha voz-dato col-span-full">
              <div>
                <dt>{c.position}</dt>
                <dd>{project.position}</dd>
              </div>
              <div>
                <dt>{c.role}</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>{c.year}</dt>
                <dd>{formatPeriod(locale, project)}</dd>
              </div>
              <div>
                <dt>{c.status}</dt>
                <dd>{t.card.status[project.status]}</dd>
              </div>
            </dl>
          </header>

          <div className="reticula pb-e64">
            <div className="caso-escenario col-span-full lg:col-span-10">
              <div aria-hidden="true" className="caso-bloque" />
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width: 1024px) 1000px, 100vw"
                  className="caso-captura"
                  style={{
                    aspectRatio: `${project.image.width} / ${project.image.height}`,
                    // Nunca más ancha que el archivo ni más alta que el 80 % de la ventana.
                    width: `min(100%, ${project.image.width}px, calc(80vh * ${project.image.width / project.image.height}))`,
                  }}
                  priority
                />
              ) : project.ilustracion ? (
                <div className="caso-ilustrado">
                  <Image
                    src={project.ilustracion.src}
                    alt={project.ilustracion.alt}
                    width={project.ilustracion.width}
                    height={project.ilustracion.height}
                    sizes="(min-width: 1024px) 740px, 100vw"
                    className="caso-ilustracion"
                    priority
                  />
                  {project.esquema && (
                    <EsquemaSistema esquema={project.esquema} rotulo={t.card.diagram} luego={t.card.then} className="caso-esquema" />
                  )}
                </div>
              ) : (
                project.esquema && (
                  <EsquemaSistema esquema={project.esquema} rotulo={t.card.diagram} luego={t.card.then} className="caso-esquema" />
                )
              )}
            </div>
          </div>

          {project.galeria && project.galeria.length > 0 && (
            <section aria-label={locale === "es" ? "Galería" : "Gallery"} className="reticula pb-e64">
              <div className="col-span-full">
                <CarruselProyecto
                  modo="rejilla"
                  fotos={[...(project.image ? [project.image] : []), ...project.galeria]}
                  nombre={project.name}
                  locale={locale}
                  sizes="(min-width: 1024px) 460px, 90vw"
                />
              </div>
            </section>
          )}

          <div className="reticula gap-y-e64 pb-e104">
            <div className="col-span-full flex flex-col gap-e64 lg:col-span-8">
              <section aria-labelledby="contexto" className="caso-bloque-texto">
                <h2 id="contexto" className="voz-texto-fuerte text-28">
                  {c.context}
                </h2>
                <p className="medida text-21">{project.context}</p>
              </section>
              <section aria-labelledby="reto" className="caso-bloque-texto">
                <h2 id="reto" className="voz-texto-fuerte text-28">
                  {c.challenge}
                </h2>
                <p className="medida text-21">{project.challenge}</p>
              </section>
              <section aria-labelledby="enfoque" className="caso-bloque-texto">
                <h2 id="enfoque" className="voz-texto-fuerte text-28">
                  {c.approach}
                </h2>
                <ol className="caso-pasos">
                  {project.approach.map((paso) => (
                    <li key={paso} className="medida text-17">
                      {paso}
                    </li>
                  ))}
                </ol>
              </section>
              <section aria-labelledby="resultado" className="caso-bloque-texto">
                <h2 id="resultado" className="voz-texto-fuerte text-28">
                  {c.outcome}
                </h2>
                <ul className="caso-resultados">
                  {project.outcome.map((item) => (
                    <li key={item} className="medida text-21">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="caso-lateral col-span-full lg:col-span-3 lg:col-start-10">
              <div>
                <h2 className="voz-dato-fuerte pb-e8 text-13">{c.stack}</h2>
                <ul className="voz-dato flex flex-col gap-e4 text-15">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="voz-dato-fuerte pb-e8 text-13">{c.links}</h2>
                <ul className="flex flex-col">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a className="nav-ed-enlace -ml-e8 gap-e4 text-17" href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <span className="sr-only"> · {project.name} (GitHub)</span>
                        <FlechaDiagonal tamano={16} />
                      </a>
                    </li>
                  ))}
                </ul>
                {project.demo ? (
                  <a href={project.demo} className="boton-ed boton-ed-primario mt-e16" target="_blank" rel="noopener noreferrer">
                    {t.card.demo}
                    <FlechaDiagonal tamano={16} />
                  </a>
                ) : (
                  <p className="voz-dato pt-e8 text-13 text-gris">{t.card.noPublicDemo}</p>
                )}
              </div>
            </aside>
          </div>

          <nav aria-label={c.next} className="sup-negro">
            <a href={projectPath(locale, next.id)} className="caso-siguiente reticula">
              <span className="voz-dato-fuerte col-span-full text-13 text-gris-claro">{c.next}</span>
              <span className="caso-siguiente-nombre voz-titular col-span-full">
                <span className="text-rojo-claro">{numero((index + 1) % projects.length)}</span> {next.name}
              </span>
            </a>
          </nav>

          <section aria-labelledby="cierre" className="reticula gap-y-e24 py-e104">
            <h2 id="cierre" className="voz-titular titular-seccion col-span-full">
              {s.contactTitle}
            </h2>
            <p className="col-span-full text-21 lg:col-span-6">{s.contactIntro}</p>
            <div className="col-span-full flex flex-wrap items-center gap-e24">
              <a className="contacto-correo voz-texto-fuerte" href={`mailto:${identity.email}`}>
                {identity.email}
              </a>
              <a href={cvPath} download className="boton-ed boton-ed-secundario">
                {t.hero.downloadCv}
                <FlechaDiagonal tamano={16} />
              </a>
            </div>
          </section>
        </article>
      </main>
      <Pie locale={locale} />
    </>
  );
}
