import { ContactFooter } from "@/components/contact-footer";
import { PortfolioWorld } from "@/components/portfolio-world";
import { getPortfolio, homePath, sectionHref, type Locale } from "@/data/portfolio";

/** El mapa 2D en pixel art, que salió de la portada. Funciona igual que antes; no se rediseña. */
export function QuestPage({ locale }: { locale: Locale }) {
  const { t } = getPortfolio(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>
      <main id="main" className="flex-1 bg-forest text-paper">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 pt-8">
          <a href={sectionHref(locale, "quest")} className="nav-link inline-flex min-h-11 items-center font-semibold">
            ← {t.sections.questBack}
          </a>
          <a href={homePath[locale]} className="font-pixel text-xs text-amber">
            Diecu&apos;s Quest
          </a>
        </div>
        <h1 className="font-pixel display-title mx-auto max-w-5xl px-4 pt-6">Diecu&apos;s Engineering Quest</h1>
        <PortfolioWorld locale={locale} />
      </main>
      <ContactFooter locale={locale} />
    </>
  );
}
