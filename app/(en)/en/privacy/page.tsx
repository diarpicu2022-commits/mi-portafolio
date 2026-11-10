import type { Metadata } from "next";

import { PaginaPrivacidad } from "@/components/editorial/pagina-privacidad";

export const metadata: Metadata = { title: "Privacy policy · Diego Armando Pinta Cuasquen" };

export default function Privacy() {
  return <PaginaPrivacidad locale="en" />;
}
