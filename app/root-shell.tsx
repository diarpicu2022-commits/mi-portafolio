import { Analytics } from "@vercel/analytics/next";
import { Archivo, Geist, IBM_Plex_Mono, Press_Start_2P } from "next/font/google";
import type { ReactNode } from "react";

import { MotionProvider } from "@/components/motion-provider";
import type { Locale } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pixelFont = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

// Rediseño editorial (contrato 8.3). Archivo variable con eje de ancho: 62 para el titular, 100 para el texto.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
});

/** Shared <html> shell for the Spanish and English root layouts. */
export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${pixelFont.variable} ${archivo.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <MotionProvider />
        {/* Only report analytics from Vercel deployments; elsewhere the script would 404. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
