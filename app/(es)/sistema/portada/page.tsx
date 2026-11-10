import type { Metadata } from "next";

import { Portada } from "@/components/editorial/portada";

/** Vista previa de la portada del rediseño (paso 2). No se indexa. */
export const metadata: Metadata = {
  title: "Sistema del rediseño · Portada",
  robots: { index: false, follow: false },
};

export default function PortadaPreview() {
  return (
    <main className="sup-papel w-full flex-1">
      <Portada locale="es" />
    </main>
  );
}
