import { ContactForm } from "@/components/contact-form";
import { FlechaDiagonal } from "@/components/editorial/iconos";
import { Navegacion } from "@/components/editorial/navegacion";
import { Portada } from "@/components/editorial/portada";
import { Seccion } from "@/components/editorial/seccion";
import { projectNumber } from "@/components/portfolio-blocks";
import { getPortfolio, projectPath, type Locale } from "@/data/portfolio";

/**
 * Página de inicio del rediseño (paso 3, esqueleto). Orden de 8.7.
 * Cada sección lleva su cascarón definitivo y, dentro, el contenido real en forma tipográfica simple.
 * El selector de proyectos (paso 4) y el contenido definitivo de cada sección (paso 5) llegan después.
 */
export function PaginaInicio({ locale }: { locale: Locale }) {
  const p = getPortfolio(locale);
  const { identity, projects, experience, education, languages, principles, skillGroups, testimonials, anchors, t } = p;
  const s = t.sections;

  return (
    <>
      <a href="#contenido" className="salto-ed boton-ed boton-ed-primario sup-papel">
        {t.skipLink}
      </a>
      <Navegacion locale={locale} />

      <main id="contenido" tabIndex={-1} className="sup-papel voz-texto w-full flex-1 outline-none">
        <Portada locale={locale} projectsHref={`#${anchors.projects}`} />

        <Seccion id={anchors.about} rotulo={`${identity.semester} · ${identity.university}`} titulo={s.aboutTitle}>
          <div className="col-span-full flex flex-col gap-e24 lg:col-span-7">
            <p className="medida text-21">{identity.pitch}</p>
            <p className="medida text-17 text-gris">{identity.motto}</p>
          </div>
          <div className="col-span-full lg:col-span-5">
            <h3 className="voz-texto-fuerte pb-e16 text-21">{s.principlesTitle}</h3>
            <ol className="flex flex-col gap-e16">
              {principles.map((principio) => (
                <li key={principio.title}>
                  <p className="voz-texto-fuerte text-17">{principio.title}</p>
                  <p className="text-15 text-gris">{principio.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Seccion>

        <Seccion id={anchors.projects} rotulo={`${projects.length} ${t.portada.projects}`} titulo={s.projectsTitle} oscura>
          <p className="medida col-span-full text-17 text-gris-claro">{s.projectsIntro}</p>
          <ol className="col-span-full flex flex-col gap-e40">
            {projects.map((project, index) => (
              <li key={project.id} className="grid grid-cols-subgrid gap-y-e12" style={{ gridColumn: "1 / -1" }}>
                <span aria-hidden="true" className="voz-dato-fuerte col-span-1 text-21">
                  {projectNumber(index)}
                </span>
                <div className="col-span-3 md:col-span-4 lg:col-span-6">
                  <h3 className="voz-texto-fuerte text-21">{project.name}</h3>
                  <p className="medida text-15 text-gris-claro">{project.summary}</p>
                  <p className="voz-dato pt-e8 text-13 text-gris-claro">
                    {t.card.status[project.status]} · {project.technologies.slice(0, 4).join(", ")}
                  </p>
                </div>
                <ul className="col-span-full flex flex-wrap content-start gap-x-e16 md:col-start-2 md:col-span-7 lg:col-start-8 lg:col-span-5">
                  <li>
                    <a className="nav-ed-enlace -ml-e8 text-15 underline underline-offset-4" href={projectPath(locale, project.id)}
                      aria-label={`${t.card.caseStudy}: ${project.name}`}
                    >
                      {t.card.caseStudy}
                    </a>
                  </li>
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a
                        className="nav-ed-enlace gap-e4 text-15"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <span className="sr-only"> · {project.name} (GitHub)</span>
                        <FlechaDiagonal tamano={16} />
                      </a>
                    </li>
                  ))}
                  {project.demo && (
                    <li>
                      <a className="nav-ed-enlace gap-e4 text-15" href={project.demo} target="_blank" rel="noopener noreferrer">
                        {t.card.demo}
                        <span className="sr-only"> · {project.name}</span>
                        <FlechaDiagonal tamano={16} />
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ol>
        </Seccion>

        <Seccion id={anchors.skills} rotulo={identity.role} titulo={s.skillsTitle}>
          <dl className="col-span-full grid gap-x-e24 gap-y-e24 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((grupo) => (
              <div key={grupo.title}>
                <dt className="voz-dato-fuerte pb-e8 text-13">{grupo.title}</dt>
                <dd className="text-17">{grupo.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Seccion>

        <Seccion id={anchors.experience} rotulo={s.experienceIntro} titulo={s.experienceTitle}>
          <ol className="col-span-full flex flex-col gap-e24">
            {experience.map((item) => (
              <li key={item.id} className="grid grid-cols-subgrid gap-y-e8" style={{ gridColumn: "1 / -1" }}>
                <p className="voz-dato col-span-full text-13 text-gris md:col-span-2 lg:col-span-3">{item.period}</p>
                <div className="col-span-full md:col-span-6 lg:col-span-7">
                  <h3 className="voz-texto-fuerte text-17">{item.position}</h3>
                  <p className="text-15">{item.project}</p>
                  <p className="medida text-15 text-gris">{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </Seccion>

        <Seccion id={anchors.education} rotulo={`${education.length} ${t.portada.degrees}`} titulo={s.educationTitle}>
          <ol className="col-span-full flex flex-col gap-e24 lg:col-span-8">
            {education.map((item) => (
              <li key={item.title} className="flex flex-col gap-e4">
                <p className="voz-dato text-13 text-gris">{item.period}</p>
                <h3 className="voz-texto-fuerte text-21">{item.title}</h3>
                <p className="text-17">{item.place}</p>
                <p className="medida text-15 text-gris">{item.detail}</p>
              </li>
            ))}
          </ol>
          <div className="col-span-full lg:col-span-4">
            <h3 className="voz-texto-fuerte pb-e12 text-17">{s.languagesTitle}</h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-e16 gap-y-e8 text-15">
              {languages.map((idioma) => (
                <div key={idioma.name} className="contents">
                  <dt className="voz-texto-fuerte">{idioma.name}</dt>
                  <dd className="text-gris">{idioma.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Seccion>

        <Seccion id={anchors.testimonials} rotulo={s.testimonialsIntro} titulo={s.testimonialsTitle}>
          <ul className="col-span-full grid gap-e24 md:grid-cols-3">
            {testimonials.map((testimonio) => (
              <li key={testimonio.author} className="flex flex-col gap-e8 border-t border-tinta pt-e16">
                <p className="voz-dato-fuerte text-13">{testimonio.pending ? s.pending : ""}</p>
                {!testimonio.pending && <blockquote className="text-17">{testimonio.quote}</blockquote>}
                <p className="text-17">{testimonio.author}</p>
              </li>
            ))}
          </ul>
        </Seccion>

        <Seccion id={anchors.quest} rotulo={t.hero.pressStart} titulo={t.world.title}>
          <p className="medida col-span-full text-21 lg:col-span-7">{s.questIntro}</p>
          <div className="col-span-full lg:col-span-5 lg:justify-self-end">
            <a href={p.questPath} className="boton-ed boton-ed-primario">
              {s.questEnter}
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
        </Seccion>

        <Seccion id={anchors.contact} rotulo={identity.email} titulo={s.contactTitle}>
          <div className="col-span-full flex flex-col gap-e16 lg:col-span-5">
            <p className="text-21">{s.contactIntro}</p>
            <ul className="flex flex-col">
              <li>
                <a className="nav-ed-enlace -ml-e8 text-17 underline underline-offset-4" href={`mailto:${identity.email}`}>
                  {identity.email}
                </a>
              </li>
              <li>
                <a className="nav-ed-enlace -ml-e8 gap-e4 text-17" href={identity.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <FlechaDiagonal tamano={16} />
                </a>
              </li>
              <li>
                <a className="nav-ed-enlace -ml-e8 gap-e4 text-17" href={p.cvPath} download>
                  {t.hero.downloadCv}
                  <FlechaDiagonal tamano={16} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-full lg:col-start-7 lg:col-span-6">
            <ContactForm locale={locale} />
          </div>
        </Seccion>
      </main>

      <footer className="sup-negro">
        <div className="reticula gap-y-e12 py-e40">
          <p className="voz-dato col-span-full text-13 md:col-span-4 lg:col-span-6">
            © 2026 {identity.name}
          </p>
          <p className="voz-dato col-span-full text-13 text-gris-claro md:col-span-4 lg:col-span-6 md:text-right">
            {t.footer.noCookies}
          </p>
        </div>
      </footer>
    </>
  );
}
