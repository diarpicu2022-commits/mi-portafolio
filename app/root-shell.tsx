import { Analytics } from "@vercel/analytics/next";
import { Archivo, Permanent_Marker } from "next/font/google";
import type { ReactNode } from "react";

import type { Locale } from "@/data/portfolio";
import "./globals.css";
import "./v2.css";

// Rediseño editorial (contrato 8.3). Archivo variable con eje de ancho: 62 para el titular, 100 para el texto.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});


const marcador = Permanent_Marker({ variable: "--font-marcador", weight: "400", subsets: ["latin"], preload: false });

// Tema (anexo 18.4). Corre en el <head> antes de pintar: lee la elección guardada («claro» u «oscuro»);
// si no hay elección válida usa la del sistema y la sigue si cambia. Escribe la elección en data-tema-eleccion para
// que la etiqueta del selector salga bien desde el HTML. Sin JS manda la media query de v2.css.
// Es una constante del código, sin datos externos interpolados.
const scriptTema = `(function(){var d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function a(){var t=null;try{t=localStorage.getItem("tema")}catch(e){}var e=t==="claro"||t==="oscuro"?t:"sistema";d.setAttribute("data-tema-eleccion",e);d.setAttribute("data-tema",e==="sistema"?(m.matches?"oscuro":"claro"):e)}a();try{m.addEventListener("change",a)}catch(e){}})()`;

/** Shared <html> shell for the Spanish and English root layouts. */
export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${archivo.variable} ${marcador.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        {/* Only report analytics from Vercel deployments; elsewhere the script would 404. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
