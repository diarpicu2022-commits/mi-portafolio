import type { Metadata } from "next";

import { alternativas } from "@/app/site-metadata";
import { PaginaPrivacidad } from "@/components/editorial/pagina-privacidad";

export const metadata: Metadata = {
  alternates: alternativas("en", "/privacidad", "/en/privacy"),
  title: "Privacy policy · Diego Armando Pinta Cuasquen",
};

export default function Privacy() {
  return <PaginaPrivacidad locale="en" />;
}
