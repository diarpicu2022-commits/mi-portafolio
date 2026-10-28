import { getPortfolio, homePath, type Locale } from "@/data/portfolio";

type PortfolioNavProps = {
  locale: Locale;
  /** Same page in the other language; defaults to the other home page. */
  alternate?: string;
};

export function PortfolioNav({ locale, alternate }: PortfolioNavProps) {
  const { navLinks, t } = getPortfolio(locale);
  const other: Locale = locale === "es" ? "en" : "es";
  // Off the home page, section anchors must point back to it.
  const anchorBase = alternate ? (homePath[locale] === "/" ? "/" : `${homePath[locale]}/`) : "";

  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-forest/95 backdrop-blur">
      <nav
        aria-label={t.nav.label}
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3"
      >
        <a href={`${anchorBase}#top`} className="font-pixel text-xs text-amber">
          Diecu&apos;s Quest
        </a>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-paper">
          {navLinks.map((link) => {
            const isFile = link.href.endsWith(".pdf");
            return (
              <li key={link.href}>
                <a
                  className="nav-link inline-block py-1"
                  href={isFile ? link.href : `${anchorBase}${link.href}`}
                  download={isFile || undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              className="nav-link inline-block rounded-sm border-2 border-paper/60 px-2 py-0.5"
              href={alternate ?? homePath[other]}
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
