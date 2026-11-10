import { getPortfolio, type Locale } from "@/data/portfolio";

/**
 * Habilidades (enmienda 12). Cada grupo abre con la cifra real de proyectos que usan alguna de sus tecnologías,
 * contada desde data/projects.ts. Cada tecnología enlaza a esos proyectos en el selector por su número.
 * Las que no aparecen en ningún proyecto se listan sin número: son conocimiento declarado, no prueba.
 */

// Mismo nombre escrito distinto en habilidades y en proyectos.
const ALIAS: Record<string, string> = {
  "Java 17": "Java",
  "Tailwind CSS": "Tailwind",
  "C/C++": "C++",
  Godot: "Godot 4",
  "PostgreSQL (Supabase)": "Supabase",
  "Automatic control": "Control automático",
};
const normal = (t: string) => ALIAS[t] ?? t;

export function Habilidades({ locale }: { locale: Locale }) {
  const { projects, skillGroups, t } = getPortfolio(locale);
  const numero = new Map(projects.map((p, i) => [p.id, String(i + 1).padStart(2, "0")]));
  const usos = new Map<string, { id: string; name: string }[]>();
  for (const p of projects)
    for (const tech of new Set(p.technologies.map(normal)))
      usos.set(tech, [...(usos.get(tech) ?? []), { id: p.id, name: p.name }]);

  const grupos = skillGroups
    .map((g) => {
      const items = g.items.map((item) => ({ item, proyectos: usos.get(normal(item)) ?? [] }));
      const distintos = new Set(items.flatMap((i) => i.proyectos.map((p) => p.id)));
      return { ...g, items, cifra: distintos.size };
    })
    .sort((a, b) => b.cifra - a.cifra);

  return (
    <ul className="habilidades col-span-full">
      {grupos.map((g) => (
        <li key={g.title} className="habilidad">
          <p className="habilidad-cifra voz-titular" aria-hidden={g.cifra === 0 || undefined}>
            {g.cifra}
          </p>
          <h3 className="voz-texto-fuerte text-21">
            {g.title}
            <span className="sr-only">
              : {g.cifra} {t.portada.projects}
            </span>
          </h3>
          <p className="voz-dato text-13 text-gris" aria-hidden="true">
            {t.portada.projects}
          </p>
          <ul className="habilidad-items">
            {g.items.map(({ item, proyectos }) => (
              <li key={item} className={proyectos.length ? "habilidad-item" : "habilidad-item habilidad-sin-prueba"}>
                <span className="text-15">{item}</span>
                {proyectos.length > 0 && (
                  <span className="habilidad-enlaces">
                    {proyectos.map((p) => (
                      <a
                        key={p.id}
                        href={`#${t.card.hashPrefix}${p.id}`}
                        className="habilidad-enlace voz-dato-fuerte text-13"
                        aria-label={`${item}: ${p.name}`}
                      >
                        {numero.get(p.id)}
                      </a>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
