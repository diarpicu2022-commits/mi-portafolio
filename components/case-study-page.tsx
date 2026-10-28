import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactFooter } from "@/components/contact-footer";
import { projectNumber } from "@/components/portfolio-blocks";
import { PortfolioNav } from "@/components/portfolio-nav";
import { getPortfolio, homePath, projectPath, type Locale } from "@/data/portfolio";
import { formatPeriod } from "@/data/projects";

export function CaseStudyPage({ locale, id }: { locale: Locale; id: string }) {
  const { projects, t } = getPortfolio(locale);
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const c = t.caseStudy;
  const projectsHref = `${homePath[locale] === "/" ? "" : homePath[locale]}/#projects`;

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>
      <PortfolioNav locale={locale} alternate={projectPath(locale === "es" ? "en" : "es", id)} />
      <main id="main" className="flex-1 bg-paper text-ink">
        <header className="bg-forest text-paper">
          <div className="mx-auto max-w-5xl px-4 pt-12 pb-14">
            <Link href={projectsHref} className="nav-link inline-block py-1 text-sm font-semibold">
              {c.back}
            </Link>
            <p className="font-pixel mt-8 text-[0.65rem] text-amber" aria-hidden>
              {projectNumber(index)} / {projectNumber(projects.length - 1)}
            </p>
            <h1 className="font-pixel display-title mt-3">
              {project.name}
            </h1>
            <p className="lead mt-6 max-w-3xl text-paper/90">
              {project.summary}
            </p>
            <dl className="mt-10 grid gap-6 border-t-2 border-paper/30 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="font-pixel text-[0.6rem] text-amber">{c.position}</dt>
                <dd className="mt-2 text-sm leading-6">{project.position}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[0.6rem] text-amber">{c.role}</dt>
                <dd className="mt-2 text-sm leading-6">{project.role}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[0.6rem] text-amber">{c.year}</dt>
                <dd className="mt-2 text-sm">{formatPeriod(locale, project)}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[0.6rem] text-amber">{c.status}</dt>
                <dd className="mt-2 text-sm">{t.card.status[project.status]}</dd>
              </div>
            </dl>
          </div>
        </header>

        {project.image && (
          <div className="mx-auto max-w-5xl px-4 pt-12">
            <Image
              src={project.image}
              alt={t.card.imageAlt(project.name)}
              width={1280}
              height={720}
              className="w-full border-4 border-ink"
              priority
            />
          </div>
        )}

        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-14 lg:grid-cols-[1fr_16rem]">
          <div className="grid gap-12">
            <section aria-labelledby="context" data-reveal>
              <h2 id="context" className="font-pixel section-title mb-4 text-forest">
                {c.context}
              </h2>
              <p className="lead">{project.context}</p>
            </section>
            <section aria-labelledby="challenge" data-reveal>
              <h2 id="challenge" className="font-pixel section-title mb-4 text-forest">
                {c.challenge}
              </h2>
              <p className="lead">{project.challenge}</p>
            </section>
            <section aria-labelledby="approach">
              <h2 id="approach" className="font-pixel section-title mb-6 text-forest" data-reveal>
                {c.approach}
              </h2>
              <ol className="grid gap-4">
                {project.approach.map((step, stepIndex) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 leading-7" data-reveal>
                    <span className="font-pixel pt-1.5 text-[0.6rem] text-forest/70" aria-hidden>
                      {projectNumber(stepIndex)}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="outcome" className="pixel-card p-5 sm:p-6" data-reveal="fade">
              <h2 id="outcome" className="font-pixel section-title mb-4 text-forest">
                {c.outcome}
              </h2>
              <ul className="grid list-none gap-3 leading-7">
                {project.outcome.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-amber">
                      ★
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="grid content-start gap-8 lg:sticky lg:top-24">
            <div>
              <h2 className="font-pixel mb-3 text-[0.65rem] text-forest">{c.stack}</h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-sm bg-forest/10 px-2 py-0.5 text-sm text-forest">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-pixel mb-3 text-[0.65rem] text-forest">{c.links}</h2>
              <ul className="grid gap-2">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a className="pixel-button w-full justify-between" href={link.url} target="_blank" rel="noopener noreferrer" data-magnetic>
                      {link.label} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
                {project.demo ? (
                  <li>
                    <a className="pixel-button pixel-button-amber w-full justify-between" href={project.demo} target="_blank" rel="noopener noreferrer">
                      {t.card.demo} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ) : (
                  <li className="text-sm text-ink/70">{t.card.noDemo}</li>
                )}
              </ul>
            </div>
          </aside>
        </div>

        <nav aria-label={c.next} className="border-t-4 border-ink bg-ink text-paper">
          <Link href={projectPath(locale, next.id)} className="next-project mx-auto block max-w-5xl px-4 py-12">
            <span className="font-pixel text-[0.6rem] text-amber">
              {c.next} <span className="font-sans text-sm" aria-hidden>→</span>
            </span>
            <span className="font-pixel display-title mt-4 block">{next.name}</span>
          </Link>
        </nav>
      </main>
      <ContactFooter locale={locale} />
    </>
  );
}
