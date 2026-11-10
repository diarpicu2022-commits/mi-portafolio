import type { MetadataRoute } from "next";

import { siteUrl } from "@/app/site-metadata";
import { projectPath } from "@/data/portfolio";
import { projectIds } from "@/data/projects";

/** Cada página con su par en el otro idioma. /sistema queda fuera: es interna y no se indexa. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pares: [string, string][] = [
    ["/", "/en"],
    ...projectIds.map((id) => [projectPath("es", id), projectPath("en", id)] as [string, string]),
    ["/quest", "/en/quest"],
    ["/privacidad", "/en/privacy"],
  ];
  return pares.flatMap(([es, en]) =>
    [es, en].map((ruta) => ({
      url: `${siteUrl}${ruta}`,
      alternates: { languages: { es: `${siteUrl}${es}`, en: `${siteUrl}${en}` } },
    })),
  );
}
