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
import { TransicionAnclas } from "@/components/editorial/transicion-anclas";
import { siteUrl } from "@/app/site-metadata";
import { LINKEDIN_PROFILE, getPortfolio, homePath, type Locale } from "@/data/portfolio";

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
            sameAs: [identity.github, LINKEDIN_PROFILE].filter(Boolean),
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
        <TransicionAnclas />

        {/* Perfil: una entrada grande, la cita del lema al margen y los principios como índice editorial. */}
        <Seccion id={anchors.about} rotulo={`${identity.semester} · ${identity.university}`} titulo={s.aboutTitle}>
          <p className="perfil-entrada voz-texto-fuerte col-span-full lg:col-span-8">{identity.pitch}</p>
          <div className="perfil-margen col-span-full lg:col-span-4 lg:col-start-9">
            <figure className="polaroid">
              <Image
                src="/retrato/diego-perfil.webp"
                alt={locale === "es" ? "Diego Armando Pinta Cuasquen sentado al aire libre con chaqueta de cuero" : "Diego Armando Pinta Cuasquen sitting outdoors in a leather jacket"}
                width={900}
                height={1125}
                sizes="(min-width: 1024px) 320px, 70vw"
                loading="lazy"
              />
              <figcaption className="polaroid-pie">Pasto, Nariño</figcaption>
            </figure>
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
          <ul className="testimonios2 col-span-full">
            {testimonials.map((testimonio, i) => (
              <li key={testimonio.author} className="testimonio2" data-revelar>
                <span aria-hidden="true" className="testimonio2-comilla voz-titular">“</span>
                {testimonio.pending ? (
                  <p className="voz-dato-fuerte text-13">{s.pending}</p>
                ) : (
                  <blockquote className="testimonio2-cita text-17">{testimonio.quote}</blockquote>
                )}
                <div className="testimonio2-autor">
                  <span aria-hidden="true" className={`testimonio2-inicial voz-titular ${i === 1 ? "es-rojo" : ""}`}>
                    {testimonio.author
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div className="flex-1">
                    <p className="voz-texto-fuerte text-17">{testimonio.author}</p>
                    <p className="text-13 text-gris">{testimonio.role}</p>
                  </div>
                  {testimonio.linkedin && (
                    <a
                      href={testimonio.linkedin}
                      className="testimonio2-linkedin"
                      aria-label={`LinkedIn de ${testimonio.author}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="col-span-full text-13 text-gris">{t.testimonialsNote}</p>
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
              {LINKEDIN_PROFILE && (
                <li>
                  <a className="nav-ed-enlace -ml-e8 gap-e4 text-17" href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <FlechaDiagonal tamano={16} />
                  </a>
                </li>
              )}
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
