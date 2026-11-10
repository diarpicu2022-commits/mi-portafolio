import type { Metadata } from "next";

import Link from "next/link";

import { RootShell } from "@/app/root-shell";
import { FlechaDiagonal } from "@/components/editorial/iconos";
import { NAME, sectionHref } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `404 · ${NAME}`,
  robots: { index: false, follow: false },
};

/** 404 con el sistema editorial: la cifra en titular, el mensaje en los dos idiomas y dos salidas. */
export default function GlobalNotFound() {
  return (
    <RootShell lang="es">
      <main className="sup-papel voz-texto flex flex-1 flex-col justify-center">
        <div className="reticula gap-y-e24 py-e104">
          <p className="error-cifra voz-titular col-span-full" aria-hidden="true">
            404
          </p>
          <h1 className="voz-texto-fuerte col-span-full text-28">Esta página no existe.</h1>
          <p lang="en" className="col-span-full text-17 text-gris">
            This page does not exist.
          </p>
          <div className="col-span-full flex flex-wrap gap-e16 pt-e16">
            <Link className="boton-ed boton-ed-primario" href="/">
              Volver al inicio
              <FlechaDiagonal tamano={16} />
            </Link>
            <a className="boton-ed boton-ed-secundario" href={sectionHref("es", "projects")}>
              Ver proyectos
              <FlechaDiagonal tamano={16} />
            </a>
            <a className="boton-ed boton-ed-secundario" href="/en" lang="en" hrefLang="en">
              English
              <FlechaDiagonal tamano={16} />
            </a>
          </div>
        </div>
      </main>
    </RootShell>
  );
}
