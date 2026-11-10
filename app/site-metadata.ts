import type { Metadata } from "next";

import { NAME, homePath, getPortfolio, type Locale } from "@/data/portfolio";

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const titulos: Record<Locale, string> = {
  es: `${NAME} · Electrónica y software, del sensor a la interfaz`,
  en: `${NAME} · Electronics and software, from sensor to interface`,
};

/** Descripción con cifras contadas desde los datos. */
export function descripcion(locale: Locale) {
  const { projects } = getPortfolio(locale);
  return locale === "es"
    ? `Portafolio de ${NAME}, estudiante de Ingeniería de Software (UCC) con formación en Ingeniería Electrónica (Universidad de Nariño). ${projects.length} proyectos de IoT, backend, apps y videojuegos, cada uno con caso de estudio y código.`
    : `Portfolio of ${NAME}, Software Engineering student (UCC) with an Electronic Engineering background (Universidad de Nariño). ${projects.length} IoT, backend, app and game projects, each with a case study and code.`;
}

/** Tecnologías que aparecen en dos proyectos o más, en orden de uso. */
function palabras(locale: Locale) {
  const cuenta = new Map<string, number>();
  for (const p of getPortfolio(locale).projects) for (const t of p.technologies) cuenta.set(t, (cuenta.get(t) ?? 0) + 1);
  return [...cuenta.entries()].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]).map(([t]) => t);
}

export function siteMetadata(locale: Locale): Metadata {
  const title = titulos[locale];
  return {
    metadataBase: new URL(siteUrl),
    title,
    description: descripcion(locale),
    keywords: [NAME, locale === "es" ? "portafolio" : "portfolio", "IoT", ...palabras(locale)],
    authors: [{ name: NAME }],
    alternates: {
      canonical: homePath[locale],
      languages: { es: homePath.es, en: homePath.en, "x-default": homePath.es },
    },
    openGraph: {
      type: "website",
      title,
      description: descripcion(locale),
      locale: locale === "es" ? "es_CO" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CO",
      url: homePath[locale],
      siteName: NAME,
    },
    twitter: { card: "summary_large_image", title, description: descripcion(locale) },
  };
}

/** Alternativas de idioma para una página con su par en el otro idioma. */
export function alternativas(locale: Locale, es: string, en: string): Metadata["alternates"] {
  return { canonical: locale === "es" ? es : en, languages: { es, en, "x-default": es } };
}
