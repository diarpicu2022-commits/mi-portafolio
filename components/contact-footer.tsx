import { getPortfolio, type Locale } from "@/data/portfolio";

export function ContactFooter({ locale }: { locale: Locale }) {
  const { identity, cvPath, t } = getPortfolio(locale);

  return (
    <footer className="border-t-4 border-ink bg-ink px-4 py-8 text-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {identity.name}. {t.footer.rights}
        </p>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a className="nav-link" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
          </li>
          <li>
            <a className="nav-link" href={identity.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="nav-link" href={cvPath} download>
              {t.hero.downloadCv}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
