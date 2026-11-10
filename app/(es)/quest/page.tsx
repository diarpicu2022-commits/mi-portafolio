import type { Metadata } from "next";

import { alternativas } from "@/app/site-metadata";
import { QuestPage } from "@/components/quest-page";

export const metadata: Metadata = {
  title: "Mapa 2D · Diego Armando Pinta Cuasquen",
  description: "La versión anterior del portafolio, un mapa 2D en pixel art que se recorre con teclado o controles táctiles.",
  alternates: alternativas("es", "/quest", "/en/quest"),
};

export default function Quest() {
  return <QuestPage locale="es" />;
}
