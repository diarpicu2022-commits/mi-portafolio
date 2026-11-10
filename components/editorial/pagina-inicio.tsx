import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { Experiencia } from "@/components/editorial/experiencia";
import { FranjaDual } from "@/components/editorial/franja-dual";
import { Habilidades } from "@/components/editorial/habilidades";
import { FlechaDiagonal } from "@/components/editorial/iconos";
import { Navegacion } from "@/components/editorial/navegacion";
import { Pie } from "@/components/editorial/pie";
import { Portada } from "@/components/editorial/portada";
import { Seccion } from "@/components/editorial/seccion";
import { GaleriaProyectos } from "@/components/editorial/galeria-proyectos";
import { CintaTecnologias } from "@/components/editorial/cinta-tecnologias";
import { Revelar } from "@/components/editorial/revelar";
import { siteUrl } from "@/app/site-metadata";
import { getPortfolio, homePath, type Locale } from "@/data/portfolio";

/**
 * Página de inicio del rediseño. Orden de 8.7. Todo el texto sale de data/.
 * Cada sección comparte la cabecera (filete, cuadrado, rótulo y titular) y cambia de composición por dentro.
 */
export function PaginaInicio({ locale }: { locale: Locale }) {
  const p = getPortfolio(locale);
  const { identity, projects, education, languages, principles, testimonials, anchors, t } = p;
  const s = t.sections;
  const [principal, ...resto] = principles;

  return (
    <>
      <a href="#contenido" className="salto-ed boton-ed boton-ed-primario sup-papel">
        {t.skipLink}
      </a>
      <Navegacion locale={locale} />
      <script
        type="application/ld+json"
        // Datos estructurados Person solo con datos públicos ya presentes en el sitio. Sin teléfono.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: identity.name,
            email: `mailto:${identity.email}`,
            url: `${siteUrl}${homePath[locale]}`,
            sameAs: [identity.github],
            jobTitle: identity.role,
            alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.place })),
            knowsLanguage: languages.map((l) => l.name),
          }).replace(/</g, "\\u003c"),
        }}
      />

      <main id="contenido" tabIndex={-1} className="sup-papel voz-texto w-full flex-1 outline-none">
        <Portada locale={locale} projectsHref={`#${anchors.projects}`} />
        <CintaTecnologias locale={locale} />
        <Revelar />

        {/* Perfil: una entrada grande, la cita del lema al margen y los principios como índice editorial. */}
        <Seccion id={anchors.about} rotulo={`${identity.semester} · ${identity.university}`} titulo={s.aboutTitle}>
          <p className="perfil-entrada voz-texto-fuerte col-span-full lg:col-span-8">{identity.pitch}</p>
          <div className="perfil-margen col-span-full lg:col-span-4 lg:col-start-9">
            <blockquote className="perfil-lema text-17">{identity.motto}</blockquote>
            <p className="perfil-contacto">
              <a className="nav-ed-enlace -ml-e8 text-15 underline underline-offset-4" href={`mailto:${identity.email}`}>
                {identity.email}
              </a>
              <a className="nav-ed-enlace gap-e4 text-15" href={p.cvPath} download>
                {t.hero.downloadCv}
                <FlechaDiagonal tamano={16} />
              </a>
            </p>
          </div>
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
          <GaleriaProyectos locale={locale} />
        </Seccion>

        {/* Cuarto punto de entrada (8.6): el único corte diagonal del sitio. */}
        <FranjaDual locale={locale} />

        {/* Habilidades: cifra real de proyectos por grupo y cada tecnología enlazada a sus proyectos (enmienda 12). */}
        <Seccion id={anchors.skills} rotulo={identity.role} titulo={s.skillsTitle}>
          <Habilidades locale={locale} />
        </Seccion>

        {/* Experiencia: miniatura o esquema, periodo, cargo, logro y caso (enmienda 12). */}
        <Seccion id={anchors.experience} rotulo={s.experienceIntro} titulo={s.experienceTitle}>
          <Experiencia locale={locale} />
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

      <Pie locale={locale} />
    </>
  );
}
