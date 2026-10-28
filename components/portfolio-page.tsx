import { ContactFooter } from "@/components/contact-footer";
import { ContentSections } from "@/components/content-sections";
import { Sprite, buildings, playerPixels, tiles } from "@/components/pixel-sprites";
import { PortfolioNav } from "@/components/portfolio-nav";
import { PortfolioWorld } from "@/components/portfolio-world";
import { getPortfolio, type Locale } from "@/data/portfolio";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const { identity, cvPath, t } = getPortfolio(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>
      <PortfolioNav locale={locale} />
      <main id="main" className="flex-1">
        <div id="top" className="bg-forest text-paper">
          <section
            aria-labelledby="hero-title"
            className="mx-auto grid max-w-5xl items-center gap-8 px-4 pt-14 pb-4 md:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="font-pixel mb-4 text-[0.65rem] text-amber">{t.hero.kicker}</p>
              <h1 id="hero-title" className="font-pixel text-xl leading-relaxed sm:text-3xl">
                Diecu&apos;s Engineering Quest
              </h1>
              <p className="mt-4 text-lg font-semibold">{identity.name}</p>
              <p className="text-paper/80">
                {t.hero.role} · {t.hero.semester}
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-paper/90">{identity.pitch}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="pixel-button pixel-button-amber" href="#explore">
                  {t.hero.explore}
                </a>
                <a className="pixel-button" href={cvPath} download>
                  {t.hero.downloadCv}
                </a>
                <a className="pixel-button" href={identity.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <a href="#explore" className="title-scene mx-auto block w-64 sm:w-72">
              <div className="title-scene-art relative grid grid-cols-4 grid-rows-3" aria-hidden>
                <Sprite pixels={tiles.tree} className="size-full" />
                <Sprite pixels={buildings.L} className="size-full" />
                <Sprite pixels={tiles.tree} className="size-full" />
                <Sprite pixels={buildings.G} className="size-full" />
                <Sprite pixels={tiles.flowers} className="size-full" />
                <Sprite pixels={playerPixels("down", 0)} className="title-hero size-full" />
                <Sprite pixels={tiles.flowers} className="size-full" />
                <Sprite pixels={tiles.tree} className="size-full" />
                <Sprite pixels={tiles.tree} className="size-full" />
                <Sprite pixels={buildings.Z} className="size-full" />
                <Sprite pixels={tiles.tree} className="size-full" />
                <Sprite pixels={buildings.I} className="size-full" />
              </div>
              <span className="press-start font-pixel mt-4 block text-center text-xs text-amber">
                <span aria-hidden>▶ </span>
                {t.hero.pressStart}
              </span>
            </a>
          </section>
          <PortfolioWorld locale={locale} />
        </div>
        <ContentSections locale={locale} />
      </main>
      <ContactFooter locale={locale} />
    </>
  );
}
