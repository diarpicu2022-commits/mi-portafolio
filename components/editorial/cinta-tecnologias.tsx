import { getPortfolio, type Locale } from "@/data/portfolio";

/** Cinta negra que corre bajo la portada con las tecnologías reales de los proyectos. */
export function CintaTecnologias({ locale }: { locale: Locale }) {
  const { projects } = getPortfolio(locale);
  const techs = Array.from(new Set(projects.flatMap((p) => p.technologies))).slice(0, 18);
  const fila = (oculta: boolean) => (
    <ul className="cinta-fila" aria-hidden={oculta || undefined}>
      {techs.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <span aria-hidden="true" className="cinta-sep">✶</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="cinta sup-negro voz-titular" role="presentation">
      <div className="cinta-pista">
        {fila(false)}
        {fila(true)}
      </div>
    </div>
  );
}
