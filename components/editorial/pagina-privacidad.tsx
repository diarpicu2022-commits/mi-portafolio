import { BorrarProgreso } from "@/components/editorial/borrar-progreso";
import { Pie } from "@/components/editorial/pie";
import { getPortfolio, homePath, type Locale } from "@/data/portfolio";
import { privacidad, privacyPath } from "@/data/privacidad";

/** Política de privacidad (anexo, sección 9). */
export function PaginaPrivacidad({ locale }: { locale: Locale }) {
  const { t } = getPortfolio(locale);
  const p = privacidad[locale];
  const otro: Locale = locale === "es" ? "en" : "es";
  const es = locale === "es";

  return (
    <>
      <a href="#contenido" className="salto-ed boton-ed boton-ed-primario sup-papel">
        {t.skipLink}
      </a>
      <header className="sup-papel border-b border-tinta">
        <nav aria-label={t.nav.label} className="reticula min-h-[72px] items-center">
          <div className="col-span-full flex items-center justify-between gap-e16">
            <a href={homePath[locale]} className="nav-ed-enlace voz-texto-fuerte -ml-e8 text-17">
              {p.volver}
            </a>
            <a className="nav-ed-enlace voz-dato text-13" href={privacyPath[otro]} hrefLang={otro} lang={otro}>
              {t.nav.switchLanguage}
            </a>
          </div>
        </nav>
      </header>
      <main id="contenido" tabIndex={-1} className="sup-papel voz-texto w-full flex-1 outline-none">
        <article className="reticula gap-y-e40 pt-e64 pb-e104">
          <header className="col-span-full flex flex-col gap-e24">
            <p className="filete-seccion voz-dato-fuerte text-13">
              {es ? "Versión" : "Version"} {p.version}, {es ? "vigente desde el" : "effective"} {p.vigencia}
            </p>
            <h1 className="voz-titular titular-seccion">{p.titulo}</h1>
          </header>
          <div className="col-span-full flex flex-col gap-e40 lg:col-span-8">
            {p.bloques.map((b) => (
              <section key={b.titulo} className="flex flex-col gap-e12">
                <h2 className="voz-texto-fuerte text-21">{b.titulo}</h2>
                {b.parrafos.map((texto) => (
                  <p key={texto} className="medida text-17">
                    {texto}
                  </p>
                ))}
                {b.lista && (
                  <ul className="medida flex list-disc flex-col gap-e8 pl-e24 text-17">
                    {b.lista.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <aside className="col-span-full lg:col-span-4">
            <BorrarProgreso boton={p.borrar.boton} hecho={p.borrar.hecho} vacio={p.borrar.vacio} />
          </aside>
        </article>
      </main>
      <Pie locale={locale} />
    </>
  );
}
