import { getPortfolio, type Locale } from "@/data/portfolio";

/**
 * Franja Hardware / Software (contrato 8.5 y 8.6 punto 4). El único corte diagonal del sitio.
 * Dos capas idénticas: la de papel debajo y la de negro encima, recortada con clip-path.
 * El texto que cruza la diagonal cambia de color a cada lado. La capa de arriba se oculta a lectores de pantalla.
 * Sin rojo: el bloque rojo de la pantalla es del selector o de la portada.
 */
export function FranjaDual({ locale }: { locale: Locale }) {
  const { identity, education, t } = getPortfolio(locale);
  // Formación en el orden de los datos: la primera es Software (en curso), la segunda Electrónica.
  const software = education.find((e) => /software/i.test(e.title))!;
  const electronica = education.find((e) => !/software/i.test(e.title))!;

  const capa = (oculta: boolean) => (
    <div className={`franja-capa ${oculta ? "franja-capa-negra sup-negro" : "sup-papel"}`} aria-hidden={oculta || undefined}>
      <div className="franja-reticula reticula">
        <div className="franja-hardware">
          <p className="franja-palabra voz-titular">{t.franja.hardware}</p>
          <p className="franja-detalle voz-dato text-13">
            <span className="block">{electronica.title}</span>
            <span className="block">
              {electronica.place}, {electronica.period}
            </span>
          </p>
        </div>
        <p className="franja-lema voz-titular">{identity.tagline}</p>
        <div className="franja-software">
          <p className="franja-palabra voz-titular">{t.franja.software}</p>
          <p className="franja-detalle voz-dato text-13">
            <span className="block">{software.title}</span>
            <span className="block">
              {software.place}, {software.period}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section aria-label={t.franja.label} className="franja">
      {capa(false)}
      {capa(true)}
    </section>
  );
}
