import { Press_Start_2P } from "next/font/google";

import { Navegacion } from "@/components/editorial/navegacion";
import { Pie } from "@/components/editorial/pie";
import { PortfolioWorld } from "@/components/portfolio-world";
import { getPortfolio, questPath, sectionHref, type Locale } from "@/data/portfolio";

// La fuente pixel solo la carga el mapa.
const pixelFont = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

/**
 * El mapa 2D en pixel art, que salió de la portada. Conserva su estilo propio dentro de .quest-mundo,
 * pero usa la navegación y el pie del sitio para que no parezca otro sitio.
 */
export function QuestPage({ locale }: { locale: Locale }) {
  const { t } = getPortfolio(locale);
  const otro: Locale = locale === "es" ? "en" : "es";

  return (
    <>
      <a href="#contenido" className="salto-ed boton-ed boton-ed-primario sup-papel">
        {t.skipLink}
      </a>
      <Navegacion locale={locale} alternate={questPath[otro]} />
      <main id="contenido" tabIndex={-1} className={`quest-mundo ${pixelFont.variable} flex-1 bg-forest pt-[72px] text-paper outline-none`}>
        <div className="mx-auto max-w-5xl px-4 pt-8">
          <a href={sectionHref(locale, "quest")} className="boton-ed boton-ed-secundario">
            {t.sections.questBack}
          </a>
        </div>
        <h1 className="font-pixel display-title mx-auto max-w-5xl px-4 pt-6">Diecu&apos;s Engineering Quest</h1>
        <PortfolioWorld locale={locale} />
      </main>
      <Pie locale={locale} />
    </>
  );
}
