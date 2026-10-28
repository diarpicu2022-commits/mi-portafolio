import { Analytics } from "@vercel/analytics/next";
import { Geist, Press_Start_2P } from "next/font/google";
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

/** Shared <html> shell for the Spanish and English root layouts. */
export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${pixelFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <MotionProvider />
        {/* Only report analytics from Vercel deployments; elsewhere the script would 404. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
