// Genera docs/legal desde data/privacidad.ts para que el texto legal tenga una sola fuente.
import { mkdirSync, writeFileSync } from "node:fs";

import { privacidad } from "../data/privacidad";

mkdirSync("docs/legal", { recursive: true });
for (const [locale, nombre] of [
  ["es", "Politica de privacidad.md"],
  ["en", "Privacy policy.md"],
] as const) {
  const p = privacidad[locale];
  const es = locale === "es";
  const lineas = [
    `# ${p.titulo}`,
    "",
    `**${p.aviso}**`,
    "",
    `${es ? "Versión" : "Version"} ${p.version}. ${es ? "Vigente desde el" : "Effective"} ${p.vigencia}.`,
    "",
  ];
  for (const b of p.bloques) {
    lineas.push(`## ${b.titulo}`, "", ...b.parrafos.flatMap((t) => [t, ""]));
    if (b.lista) lineas.push(...b.lista.map((i) => `- ${i}`), "");
  }
  writeFileSync(`docs/legal/${nombre}`, lineas.join("\n"));
}
