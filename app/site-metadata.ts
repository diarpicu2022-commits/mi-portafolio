import type { Metadata } from "next";

import { NAME, homePath, type Locale } from "@/data/portfolio";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const descriptions: Record<Locale, string> = {
  es: `Portafolio de ${NAME}, estudiante de Ingeniería de Software (UCC): proyectos de software, IoT y videojuegos en una aventura 2D.`,
  en: `Portfolio of ${NAME}, Software Engineering student (UCC): software, IoT and game projects in a 2D adventure.`,
};

export function siteMetadata(locale: Locale): Metadata {
  const title = `Diecu's Engineering Quest · ${NAME}`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description: descriptions[locale],
    alternates: {
      canonical: homePath[locale],
      languages: { es: homePath.es, en: homePath.en },
    },
    openGraph: {
      type: "website",
      title,
      description: descriptions[locale],
      locale: locale === "es" ? "es_CO" : "en_US",
      url: homePath[locale],
    },
  };
}
