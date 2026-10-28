import Image from "next/image";
import Link from "next/link";

import { getPortfolio, projectPath, type Locale, type Project } from "@/data/portfolio";

const externalLink = { target: "_blank", rel: "noopener noreferrer" } as const;

type LocaleProps = { locale: Locale };

export const projectNumber = (index: number) => String(index + 1).padStart(2, "0");

export function ProjectCard({
  locale,
  project,
  number,
  featured = false,
}: LocaleProps & { project: Project; number: string; featured?: boolean }) {
  const { t } = getPortfolio(locale);
  return (
    <article className={`pixel-card flex flex-col gap-3 p-4 ${featured ? "sm:col-span-2 sm:p-6" : ""}`} data-reveal="fade">
      {project.image && (
        <Image
          src={project.image}
          alt={t.card.imageAlt(project.name)}
          width={640}
          height={360}
          className="aspect-video w-full border-2 border-ink object-cover"
        />
      )}
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-pixel text-[0.6rem] text-forest/70" aria-hidden>
          {number}
        </span>
        <span className={`status-badge status-${project.status}`}>{t.card.status[project.status]}</span>
      </div>
      <h3 className={`font-pixel leading-relaxed text-forest ${featured ? "text-sm sm:text-base" : "text-xs"}`}>
        {project.name}
      </h3>
      <p className={`leading-6 ${featured ? "text-base" : "text-sm"}`}>{project.summary}</p>
      <ul className="flex flex-wrap gap-2" aria-label={t.card.techOf(project.name)}>
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-sm bg-forest/10 px-2 py-0.5 text-xs font-medium text-forest">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 pt-1 text-sm">
        <Link className="pixel-link" href={projectPath(locale, project.id)}>
          <span className="sr-only">{`${t.card.caseStudy}: ${project.name}`}</span>
          <span aria-hidden>{t.card.caseStudy} →</span>
        </Link>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.links.map((link) => (
            <a key={link.url} className="pixel-link font-semibold" href={link.url} {...externalLink}>
              {link.label}
              <span className="sr-only"> · {project.name} (GitHub)</span>
            </a>
          ))}
          {project.demo ? (
            <a className="pixel-link" href={project.demo} {...externalLink}>
              {t.card.demo}
            </a>
          ) : (
            <span className="text-ink/70">{t.card.noDemo}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function SkillGroups({ locale }: LocaleProps) {
  const { skillGroups } = getPortfolio(locale);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.title} className="pixel-card p-4" data-reveal="fade">
          <h3 className="mb-3 font-pixel text-[0.65rem] text-forest">{group.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="rounded-sm bg-amber/25 px-2 py-0.5 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ExperienceList({ locale }: LocaleProps) {
  const { experience, t } = getPortfolio(locale);
  return (
    <ol className="grid gap-4">
      {experience.map((item) => (
        <li key={item.id} className="pixel-card grid gap-2 p-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:p-5" data-reveal="fade">
          <p className="font-pixel text-[0.6rem] leading-relaxed text-forest">{item.period}</p>
          <div>
            <h3 className="font-semibold">{item.position}</h3>
            <p className="text-sm font-semibold text-forest">
              <Link className="pixel-link" href={projectPath(locale, item.id)}>
                {item.project}
                <span className="sr-only">: {t.sections.caseStudyLink}</span>
              </Link>
            </p>
            <p className="mt-2 text-sm leading-6">{item.summary}</p>
            <ul className="mt-2 grid gap-1 text-sm leading-6">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden className="text-amber">
                    ▸
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function EducationList({ locale }: LocaleProps) {
  const { education } = getPortfolio(locale);
  return (
    <ol className="grid gap-4">
      {education.map((item) => (
        <li key={item.title} className="pixel-card grid gap-2 p-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:p-5" data-reveal="fade">
          <p className="font-pixel text-[0.6rem] leading-relaxed text-forest">{item.period}</p>
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-forest">{item.place}</p>
            <p className="mt-2 text-sm leading-6">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Principles({ locale }: LocaleProps) {
  const { principles } = getPortfolio(locale);
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((item, index) => (
        <li key={item.title} className="border-t-4 border-ink pt-3" data-reveal>
          <p className="font-pixel mb-2 text-[0.6rem] text-forest/70" aria-hidden>
            {projectNumber(index)}
          </p>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="mt-1 text-sm leading-6">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function Languages({ locale }: LocaleProps) {
  const { languages } = getPortfolio(locale);
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {languages.map((item) => (
        <div key={item.name} className="pixel-card p-4">
          <dt className="font-semibold">{item.name}</dt>
          <dd className="text-sm">{item.level}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TestimonialCards({ locale }: LocaleProps) {
  const { testimonials, t } = getPortfolio(locale);
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {testimonials.map((item) => (
        <li key={item.author} className="pixel-card flex flex-col gap-3 p-4">
          {item.pending && (
            <span className="w-fit rounded-sm bg-amber px-2 py-0.5 text-xs font-bold text-ink">
              {t.sections.pending}
            </span>
          )}
          <blockquote className="text-sm italic leading-6">“{item.quote}”</blockquote>
          <p className="mt-auto text-sm font-semibold text-forest">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}

export function ContactLinks({ locale }: LocaleProps) {
  const { identity, cvPath, t } = getPortfolio(locale);
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a className="pixel-button" href={`mailto:${identity.email}`}>
        {identity.email}
      </a>
      <a className="pixel-button" href={identity.github} {...externalLink}>
        GitHub
      </a>
      <a className="pixel-button pixel-button-amber" href={cvPath} download data-magnetic>
        {t.hero.downloadCv}
      </a>
    </div>
  );
}
