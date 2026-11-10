import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { FranjaDual } from "@/components/editorial/franja-dual";
import { FlechaDiagonal } from "@/components/editorial/iconos";
import { Navegacion } from "@/components/editorial/navegacion";
import { Portada } from "@/components/editorial/portada";
import { Seccion } from "@/components/editorial/seccion";
import { SelectorProyectos } from "@/components/editorial/selector-proyectos";
import { getPortfolio, projectPath, type Locale } from "@/data/portfolio";

/**
 * Página de inicio del rediseño. Orden de 8.7. Todo el texto sale de data/.
 * Cada sección comparte la cabecera (filete, cuadrado, rótulo y titular) y cambia de composición por dentro.
 */
export function PaginaInicio({ locale }: { locale: Locale }) {
  const p = getPortfolio(locale);
  const { identity, projects, experience, education, languages, principles, skillGroups, testimonials, anchors, t } = p;
  const s = t.sections;
  const [principal, ...resto] = principles;

  return (
    <>
      <a href="#contenido" className="salto-ed boton-ed boton-ed-primario sup-papel">
        {t.skipLink}
      </a>
      <Navegacion locale={locale} />

      <main id="contenido" tabIndex={-1} className="sup-papel voz-texto w-full flex-1 outline-none">
        <Portada locale={locale} projectsHref={`#${anchors.projects}`} />

        {/* Perfil: una entrada grande, la cita del lema al margen y los principios como índice editorial. */}
        <Seccion id={anchors.about} rotulo={`${identity.semester} · ${identity.university}`} titulo={s.aboutTitle}>
          <p className="perfil-entrada voz-texto-fuerte col-span-full lg:col-span-8">{identity.pitch}</p>
          <blockquote className="perfil-lema col-span-full text-17 lg:col-span-4 lg:col-start-9">{identity.motto}</blockquote>
          <div className="col-span-full flex flex-col gap-e24 pt-e40">
            <h3 className="voz-dato-fuerte text-13">{s.principlesTitle}</h3>
            <p className="perfil-principal voz-titular">{principal.title}</p>
            <p className="medida text-21">{principal.body}</p>
          </div>
          <ol className="perfil-principios col-span-full">
            {resto.map((principio) => (
              <li key={principio.title}>
                <p className="voz-texto-fuerte text-17">{principio.title}</p>
                <p className="text-15 text-gris">{principio.body}</p>
              </li>
            ))}
          </ol>
        </Seccion>

        <Seccion id={anchors.projects} rotulo={`${projects.length} ${t.portada.projects}`} titulo={s.projectsTitle} oscura>
          <p className="medida col-span-full text-17 text-gris-claro">{s.projectsIntro}</p>
          <SelectorProyectos locale={locale} />
        </Seccion>

        {/* Cuarto punto de entrada (8.6): el único corte diagonal del sitio. */}
        <FranjaDual locale={locale} />

        {/* Habilidades: hoja de especificaciones en voz dato. */}
        <Seccion id={anchors.skills} rotulo={identity.role} titulo={s.skillsTitle}>
          <table className="especificaciones voz-dato col-span-full lg:col-span-10">
            <tbody>
              {skillGroups.map((grupo) => (
                <tr key={grupo.title}>
                  <th scope="row" className="voz-dato-fuerte text-13">
                    {grupo.title}
                  </th>
                  <td className="text-15">{grupo.items.join(" / ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Seccion>

        {/* Experiencia: tabla cronológica, periodo en mono a la izquierda. */}
        <Seccion id={anchors.experience} rotulo={s.experienceIntro} titulo={s.experienceTitle}>
          <ol className="cronologia col-span-full">
            {experience.map((item) => (
              <li key={item.id} className="cronologia-fila">
                <p className="cronologia-periodo voz-dato text-13">{item.period}</p>
                <div className="cronologia-cargo">
                  {/* El resumen ya está en el selector: aquí la fila queda en una línea de lectura. */}
                  <h3 className="voz-texto-fuerte text-17">{item.position}</h3>
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
            ))}
          </ol>
        </Seccion>

        {/* Formación: dos entradas grandes lado a lado, idiomas al pie. */}
        <Seccion id={anchors.education} rotulo={`${education.length} ${t.portada.degrees}`} titulo={s.educationTitle}>
          <ol className="col-span-full grid gap-e40 md:grid-cols-2">
            {education.map((item) => (
              <li key={item.title} className="flex flex-col gap-e8">
                <p className="voz-dato-fuerte text-21">{item.period}</p>
                <h3 className="voz-texto-fuerte text-28">{item.title}</h3>
                <p className="text-17">{item.place}</p>
                <p className="medida text-15 text-gris">{item.detail}</p>
              </li>
            ))}
          </ol>
          <div className="col-span-full flex flex-col gap-e12 md:flex-row md:items-baseline md:gap-e40">
            <h3 className="voz-dato-fuerte text-13">{s.languagesTitle}</h3>
            <dl className="flex flex-col gap-e8 text-15 md:flex-row md:gap-e40">
              {languages.map((idioma) => (
                <div key={idioma.name} className="flex gap-e12">
                  <dt className="voz-texto-fuerte">{idioma.name}</dt>
                  <dd className="text-gris">{idioma.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Seccion>

        {/* Testimonios: estado pendiente diseñado (8.9), sin cita. */}
        <Seccion id={anchors.testimonials} rotulo={s.testimonialsIntro} titulo={s.testimonialsTitle}>
          <ul className="col-span-full grid gap-e24 md:grid-cols-3">
            {testimonials.map((testimonio) => (
              <li key={testimonio.author} className="testimonio-pendiente">
                <p className="voz-dato-fuerte text-13">{testimonio.pending ? s.pending : ""}</p>
                {!testimonio.pending && <blockquote className="text-21">{testimonio.quote}</blockquote>}
                <div>
                  <p className="voz-texto-fuerte text-21">{testimonio.author}</p>
                  <p className="text-13 text-gris">{t.testimonialsNote}</p>
                </div>
              </li>
            ))}
          </ul>
        </Seccion>

        {/* Mapa: sección adicional con la captura real del mapa. */}
        <Seccion id={anchors.quest} rotulo={t.hero.pressStart} titulo={t.world.title}>
          <div className="col-span-full flex flex-col items-start gap-e24 lg:col-span-4">
            <p className="medida text-21">{s.questIntro}</p>
            <a href={p.questPath} className="boton-ed boton-ed-primario">
              {s.questEnter}
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
          <a href={p.questPath} tabIndex={-1} aria-hidden="true" className="mapa-captura col-span-full lg:col-span-8">
            <Image src="/quest/mapa.webp" alt="" width={1952} height={1222} sizes="(min-width: 1024px) 860px, 100vw" />
          </a>
          <p className="sr-only">{t.questImageAlt}</p>
        </Seccion>

        {/* Contacto: el correo como titular de la sección, formulario a la derecha. */}
        <Seccion id={anchors.contact} rotulo={s.contactIntro} titulo={s.contactTitle}>
          <div className="col-span-full flex flex-col gap-e16 lg:col-span-6">
            <a className="contacto-correo voz-texto-fuerte" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
            <ul className="flex flex-wrap gap-x-e24">
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
          <div className="col-span-full lg:col-span-5 lg:col-start-8">
            <ContactForm locale={locale} />
          </div>
        </Seccion>
      </main>

      <footer className="sup-negro">
        <div className="reticula gap-y-e12 py-e40">
          <p className="voz-dato col-span-full text-13 md:col-span-4 lg:col-span-6">© 2026 {identity.name}</p>
          <p className="voz-dato col-span-full text-13 text-gris-claro md:col-span-4 md:text-right lg:col-span-6">
            {t.footer.noCookies}
          </p>
        </div>
      </footer>
    </>
  );
}
