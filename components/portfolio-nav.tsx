import { getPortfolio, homePath, type Locale } from "@/data/portfolio";

export function PortfolioNav({ locale }: { locale: Locale }) {
  const { navLinks, t } = getPortfolio(locale);
  const other: Locale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-forest/95 backdrop-blur">
      <nav
        aria-label={t.nav.label}
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3"
      >
        <a href="#top" className="font-pixel text-xs text-amber">
          Diecu&apos;s Quest
        </a>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-paper">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="nav-link inline-block py-1" href={link.href} download={link.href.endsWith(".pdf") || undefined}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-link inline-block rounded-sm border-2 border-paper/60 px-2 py-0.5"
              href={homePath[other]}
              hrefLang={other}
              lang={other}
            >
              {t.nav.switchLanguage}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
