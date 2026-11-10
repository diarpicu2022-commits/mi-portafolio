import type { Metadata } from "next";

import { PaginaPrivacidad } from "@/components/editorial/pagina-privacidad";

export const metadata: Metadata = { title: "Política de privacidad · Diego Armando Pinta Cuasquen" };

export default function Privacidad() {
  return <PaginaPrivacidad locale="es" />;
}
