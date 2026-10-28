import { ContactFooter } from "@/components/contact-footer";
import { ContentSections } from "@/components/content-sections";
import { PortfolioNav } from "@/components/portfolio-nav";
import { PortfolioWorld } from "@/components/portfolio-world";
import { CV_PATH, identity } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <PortfolioNav />
      <main id="main" className="flex-1">
        <div id="top" className="bg-forest text-paper">
          <section aria-labelledby="hero-title" className="mx-auto max-w-5xl px-4 pt-14 pb-4">
            <p className="font-pixel mb-4 text-[0.65rem] text-amber">▶ Nueva partida</p>
            <h1 id="hero-title" className="font-pixel text-xl leading-relaxed sm:text-3xl">
              Diecu&apos;s Engineering Quest
            </h1>
            <p className="mt-4 text-lg font-semibold">{identity.name}</p>
            <p className="text-paper/80">
              {identity.role} · UCC · {identity.semester.toLowerCase()}
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-paper/90">{identity.pitch}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="pixel-button pixel-button-amber" href="#explore">
                Explorar
              </a>
              <a className="pixel-button" href={CV_PATH} download>
                Descargar CV
              </a>
              <a className="pixel-button" href={identity.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </section>
          <PortfolioWorld />
        </div>
        <ContentSections />
      </main>
      <ContactFooter />
    </>
  );
}
