import * as iconos from "simple-icons";

import { getPortfolio, type Locale } from "@/data/portfolio";

type Icono = { title: string; hex: string; path: string };

// Nombre de la habilidad → icono de simple-icons. Lo que no tiene logo se muestra como etiqueta de texto.
const LOGO: Record<string, string> = {
  ESP32: "siEspressif",
  Arduino: "siArduino",
  "C/C++": "siCplusplus",
  Java: "siOpenjdk",
  TypeScript: "siTypescript",
  JavaScript: "siJavascript",
  Python: "siPython",
  Kotlin: "siKotlin",
  Dart: "siDart",
  GDScript: "siGodotengine",
  "Spring Boot": "siSpringboot",
  NestJS: "siNestjs",
  Express: "siExpress",
  FastAPI: "siFastapi",
  React: "siReact",
  "Next.js": "siNextdotjs",
  Vite: "siVite",
  "Tailwind CSS": "siTailwindcss",
  Flutter: "siFlutter",
  "Jetpack Compose": "siJetpackcompose",
  Tauri: "siTauri",
  Godot: "siGodotengine",
  "PostgreSQL (Supabase)": "siSupabase",
  MongoDB: "siMongodb",
  Redis: "siRedis",
  SQLite: "siSqlite",
  Docker: "siDocker",
  Render: "siRender",
  Vercel: "siVercel",
  "Git y GitHub": "siGit",
  "Git and GitHub": "siGit",
  PlatformIO: "siPlatformio",
};

const ALIAS: Record<string, string> = {
  "Java 17": "Java",
  "Tailwind CSS": "Tailwind",
  "C/C++": "C++",
  Godot: "Godot 4",
  "PostgreSQL (Supabase)": "Supabase",
};
const normal = (t: string) => ALIAS[t] ?? t;

/** Habilidades: cada grupo numerado, con la cifra real de proyectos que lo usan y los logos de cada tecnología. */
export function Habilidades({ locale }: { locale: Locale }) {
  const { projects, skillGroups } = getPortfolio(locale);
  const enProyectos = (items: string[]) =>
    projects.filter((p) => p.technologies.some((tech) => items.some((i) => normal(i) === tech || i === tech))).length;
  const rotulo = locale === "es" ? "proyectos" : "projects";

  return (
    <ol className="skills2 col-span-full">
      {skillGroups.map((g, gi) => {
        const n = enProyectos(g.items);
        return (
          <li key={g.title} className="skills2-grupo" data-revelar>
            <div className="flex items-baseline justify-between gap-e16">
              <span className="voz-dato text-13 text-gris">{String(gi + 1).padStart(2, "0")}</span>
              {n > 0 && (
                <span className="voz-dato text-13 text-gris">
                  <strong className="voz-titular skills2-cifra">{n}</strong> {rotulo}
                </span>
              )}
            </div>
            <h3 className="voz-texto-fuerte text-21">{g.title}</h3>
            <ul className="skills2-items">
              {g.items.map((item) => {
                const ic = (iconos as unknown as Record<string, Icono | undefined>)[LOGO[item] ?? ""];
                return (
                  <li key={item} className={ic ? "skills2-logo" : "skills2-chip"}>
                    {ic && (
                      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill={`#${ic.hex}`}>
                        <path d={ic.path} />
                      </svg>
                    )}
                    <span className="text-13">{item}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ol>
  );
}
