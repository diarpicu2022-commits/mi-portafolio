import Image from "next/image";

import { FlechaAbajo, FlechaDiagonal } from "@/components/editorial/iconos";
import { getPortfolio, retrato, type Locale } from "@/data/portfolio";

const texto = {
  es: {
    lineas: [["DEL ", "SENSOR"], ["A LA"], ["INTERFAZ", "."]],
    hola: "Hola, soy",
    cinta: "Electrónica + Software",
    disponible: "Abierto a prácticas y proyectos",
    bajar: "Bajar",
  },
  en: {
    lineas: [["FROM ", "SENSOR"], ["TO THE"], ["INTERFACE", "."]],
    hola: "Hi, I'm",
    cinta: "Electronics + Software",
    disponible: "Open to internships and projects",
    bajar: "Scroll",
  },
} as const;

/** Portada: titular en tres líneas con palabras en rojo, retrato recortado tipo sticker sobre el bloque rojo y firma. */
export function Portada({ locale, projectsHref = "#proyectos" }: { locale: Locale; projectsHref?: string }) {
  const { identity, projects, education, cvPath, t } = getPortfolio(locale);
  const x = texto[locale];
  const [nombre, , apellido] = identity.name.split(" ");
  const ingenierias = education.filter((e) => /ingenier|engineering/i.test(e.title)).length;

  return (
    <section className="hero2 sup-papel">
      <div className="hero2-grid">
        <div className="hero2-texto">
          <p className="hero2-roles voz-dato">
            {identity.role.split("+").map((r) => (
              <span key={r}>{r.trim()}</span>
            ))}
          </p>
          <h1 className="hero2-titular voz-titular">
            <span className="sr-only">{identity.name}</span>
            {x.lineas.map((linea, i) => (
              <span key={i} aria-hidden="true" className="hero2-linea" style={{ animationDelay: `${120 + i * 110}ms` }}>
                {linea.map((parte, j) => (
                  <span key={j} className={j === 1 || (i === 2 && j === 0) ? "text-rojo" : undefined}>
                    {parte}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="hero2-acciones">
            <a href={projectsHref} className="boton-ed boton-ed-primario">
              {t.portada.viewProjects}
              <FlechaAbajo tamano={16} />
            </a>
            <a href={cvPath} download className="boton-ed boton-ed-secundario">
              {t.hero.downloadCv}
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
          <p className="hero2-disponible voz-dato">
            <span aria-hidden="true" className="hero2-punto" />
            {x.disponible}
          </p>
        </div>

        <div className="hero2-intro">
          <p className="text-17 leading-relaxed">
            {x.hola} <strong>{nombre} {apellido}</strong>. {identity.pitch}
          </p>
          <dl className="hero2-cifras">
            <div>
              <dt className="voz-dato text-13 text-gris">{t.portada.projects}</dt>
              <dd className="voz-titular portada-cifra-numero">{projects.length}</dd>
            </div>
            <div>
              <dt className="voz-dato text-13 text-gris">{t.portada.degrees}</dt>
              <dd className="voz-titular portada-cifra-numero">{ingenierias}</dd>
            </div>
          </dl>
        </div>

        <div className="hero2-foto">
          <div aria-hidden="true" className="hero2-bloque">
            <span className="voz-dato hero2-bloque-lista">
              {["ESP32", "Flutter", "React", "Spring", "Godot"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </span>
          </div>
          <Image
            src={retrato.src}
            alt={t.portada.portrait}
            width={retrato.ancho}
            height={retrato.alto}
            priority
            sizes="(min-width: 1024px) 300px, 55vw"
            className="hero2-retrato"
          />
          <span aria-hidden="true" className="hero2-cinta">{x.cinta}</span>
          <span aria-hidden="true" className="hero2-firma">
            {nombre} {apellido}
          </span>
          <span aria-hidden="true" className="hero2-bajar voz-dato">
            {x.bajar}
          </span>
        </div>
      </div>
    </section>
  );
}
