import type { Metadata } from "next";

import { alternativas } from "@/app/site-metadata";
import { PaginaPrivacidad } from "@/components/editorial/pagina-privacidad";

export const metadata: Metadata = {
  alternates: alternativas("es", "/privacidad", "/en/privacy"),
  title: "Política de privacidad · Diego Armando Pinta Cuasquen",
};

export default function Privacidad() {
  return <PaginaPrivacidad locale="es" />;
}
