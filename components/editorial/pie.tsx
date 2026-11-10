import { getPortfolio, type Locale } from "@/data/portfolio";
import { privacyPath } from "@/data/privacidad";

/** Pie sobre negro (8.7 punto 10), común a todas las páginas: nombre, nota de cookies y política de privacidad. */
export function Pie({ locale }: { locale: Locale }) {
  const { identity, t } = getPortfolio(locale);
  return (
    <footer className="sup-negro">
      <div className="reticula gap-y-e12 py-e40">
        <p className="voz-dato col-span-full text-13 md:col-span-4 lg:col-span-6">© 2026 {identity.name}</p>
        <p className="voz-dato col-span-full text-13 text-gris-claro md:col-span-4 md:text-right lg:col-span-6">
          {t.footer.noCookies}{" "}
          <a href={privacyPath[locale]} className="nav-ed-enlace text-papel underline underline-offset-4">
            {t.footer.privacy}
          </a>
        </p>
      </div>
    </footer>
  );
}
