import { CV_PATH, identity } from "@/data/portfolio";

export function ContactFooter() {
  return (
    <footer className="border-t-4 border-ink bg-ink px-4 py-8 text-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {identity.name}. Pixel art y código originales.
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
            <a className="nav-link" href={CV_PATH} download>
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
