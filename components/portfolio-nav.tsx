import { navLinks } from "@/data/portfolio";

export function PortfolioNav() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-forest/95 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3"
      >
        <a href="#top" className="font-pixel text-xs text-amber">
          Diecu&apos;s Quest
        </a>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-paper">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href} download={link.href.endsWith(".pdf") || undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
