import Image from "next/image";

import { getPortfolio, palette, repoUrl, type Locale, type Project } from "@/data/portfolio";

const externalLink = { target: "_blank", rel: "noopener noreferrer" } as const;

type LocaleProps = { locale: Locale };

export function ProjectCard({ locale, project }: LocaleProps & { project: Project }) {
  const { t } = getPortfolio(locale);
  return (
    <article className="pixel-card flex flex-col gap-3 p-4">
      {project.image && (
        <Image
          src={project.image}
          alt={t.card.imageAlt(project.name)}
          width={640}
          height={360}
          className="aspect-video w-full border-2 border-ink object-cover"
        />
      )}
      <h3 className="font-pixel text-xs leading-relaxed text-forest">{project.name}</h3>
      <p className="text-sm leading-6">{project.description}</p>
      <ul className="flex flex-wrap gap-2" aria-label={t.card.techOf(project.name)}>
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-sm bg-forest/10 px-2 py-0.5 text-xs font-medium text-forest">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 text-sm">
        <a className="pixel-link" href={repoUrl(project)} {...externalLink}>
          {project.repo ? t.card.repo : t.card.searchRepo}
        </a>
        {project.demo ? (
          <a className="pixel-link" href={project.demo} {...externalLink}>
            {t.card.demo}
          </a>
        ) : (
          <span className="text-ink/70">{t.card.noDemo}</span>
        )}
      </div>
    </article>
  );
}

export function SkillGroups({ locale }: LocaleProps) {
  const { skillGroups } = getPortfolio(locale);
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="pixel-card p-4">
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
  const { experience } = getPortfolio(locale);
  return (
    <ol className="grid gap-4">
      {experience.map((item) => (
        <li key={item.title} className="pixel-card p-4">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-forest">{item.place}</p>
          <p className="mt-2 text-sm leading-6">{item.detail}</p>
        </li>
      ))}
    </ol>
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

export function ProcessSteps({ locale }: LocaleProps) {
  const { process } = getPortfolio(locale);
  return (
    <div className="grid gap-6">
      <ul className="flex flex-wrap gap-3" aria-label="Palette">
        {palette.map((color) => (
          <li key={color.name} className="flex items-center gap-2 text-sm">
            <span aria-hidden className="size-8 border-3 border-ink" style={{ background: color.value }} />
            <span>
              {color.name} <code className="text-xs text-ink/70">{color.value}</code>
            </span>
          </li>
        ))}
      </ul>
      <ol className="grid gap-4 md:grid-cols-2">
        {process.map((step) => (
          <li key={step.title} className="pixel-card p-4">
            <h3 className="font-pixel mb-2 text-[0.65rem] leading-relaxed text-forest">{step.title}</h3>
            <p className="text-sm leading-6">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
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
      <a className="pixel-button pixel-button-amber" href={cvPath} download>
        {t.hero.downloadCv}
      </a>
    </div>
  );
}
