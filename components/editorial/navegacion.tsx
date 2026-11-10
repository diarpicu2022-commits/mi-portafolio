"use client";

import { useEffect, useId, useRef, useState } from "react";

import { FlechaDiagonal } from "@/components/editorial/iconos";
import { NAME, getPortfolio, homePath, type Locale } from "@/data/portfolio";

/**
 * Navegación fija de 72 px (contrato 8.7 punto 1).
 * Desde 1024 px los enlaces van en línea. Por debajo, un menú que se abre con un botón,
 * se cierra con Escape y devuelve el foco al botón.
 */
export function Navegacion({ locale, alternate }: { locale: Locale; alternate?: string }) {
  const { navLinks, cvPath, t } = getPortfolio(locale);
  const otro: Locale = locale === "es" ? "en" : "es";
  const [abierto, setAbierto] = useState(false);
  const boton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const idPanel = useId();
  const [nombre, , apellido] = NAME.split(" ");
  // Fuera de la página de inicio, las anclas apuntan a ella y el idioma lleva a la misma página en el otro idioma.
  const base = alternate ? homePath[locale] : "";
  const secciones = navLinks
    .filter((link) => link.href.startsWith("#"))
    .map((link) => ({ ...link, href: `${base}${link.href}` }));

  useEffect(() => {
    if (!abierto) return;
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const alTeclear = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setAbierto(false);
      boton.current?.focus();
    };
    document.addEventListener("keydown", alTeclear);
    return () => document.removeEventListener("keydown", alTeclear);
  }, [abierto]);

  const idioma = (
    <a className="nav-ed-enlace voz-dato text-13" href={alternate ?? homePath[otro]} hrefLang={otro} lang={otro}>
      {t.nav.switchLanguage}
    </a>
  );

  return (
    <header className="nav-ed sup-papel">
      <nav aria-label={t.nav.label} className="reticula h-full items-center">
        <div className="col-span-full flex items-center justify-between gap-e16">
          <a href={alternate ? homePath[locale] : "#contenido"} className="nav-ed-enlace voz-texto-fuerte -ml-e8 text-17">
            {nombre} {apellido}
          </a>

          <ul className="hidden items-center gap-e4 lg:flex">
            {secciones.map((link) => (
              <li key={link.href}>
                <a className="nav-ed-enlace text-15" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-e12 lg:flex">
            {idioma}
            <a href={cvPath} download className="boton-ed boton-ed-secundario">
              {t.hero.downloadCv}
              <FlechaDiagonal tamano={16} />
            </a>
          </div>

          {/* El envoltorio oculta el botón en escritorio: .boton-ed fija su propio display. */}
          <div className="lg:hidden">
            <button
              ref={boton}
              type="button"
              className="boton-ed boton-ed-secundario"
              aria-expanded={abierto}
              aria-controls={idPanel}
              onClick={() => setAbierto((valor) => !valor)}
            >
              {t.nav.menu}
            </button>
          </div>
        </div>
      </nav>

      <div ref={panel} id={idPanel} hidden={!abierto} className="nav-ed-panel sup-papel lg:hidden">
        <ul className="flex flex-col gap-e8">
          {secciones.map((link) => (
            <li key={link.href}>
              <a className="voz-texto-fuerte text-28" href={link.href} onClick={() => setAbierto(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-e40 flex flex-wrap items-center gap-e16 border-t border-tinta pt-e24">
          <a href={cvPath} download className="boton-ed boton-ed-primario" onClick={() => setAbierto(false)}>
            {t.hero.downloadCv}
            <FlechaDiagonal tamano={16} />
          </a>
          {idioma}
        </div>
      </div>
    </header>
  );
}
