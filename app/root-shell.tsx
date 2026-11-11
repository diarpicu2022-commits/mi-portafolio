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

/** Shared <html> shell for the Spanish and English root layouts. */
export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${archivo.variable} ${marcador.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        {/* Only report analytics from Vercel deployments; elsewhere the script would 404. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
