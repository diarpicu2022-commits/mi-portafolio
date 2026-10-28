import {
  CV_PATH,
  experience,
  identity,
  repoUrl,
  skillGroups,
  testimonials,
  type Project,
} from "@/data/portfolio";

const externalLink = { target: "_blank", rel: "noopener noreferrer" } as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pixel-card flex flex-col gap-3 p-4">
      <h3 className="font-pixel text-xs leading-relaxed text-forest">{project.name}</h3>
      <p className="text-sm leading-6">{project.description}</p>
      <ul className="flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.name}`}>
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-sm bg-forest/10 px-2 py-0.5 text-xs font-medium text-forest">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 text-sm">
        <a className="pixel-link" href={repoUrl(project)} {...externalLink}>
          {project.repo ? "Código en GitHub" : "Buscar en GitHub"}
        </a>
        {project.demo ? (
          <a className="pixel-link" href={project.demo} {...externalLink}>
            Ver demo
          </a>
        ) : (
          <span className="text-ink/60">Demo no disponible</span>
        )}
      </div>
    </article>
  );
}

export function SkillGroups() {
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

export function ExperienceList() {
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

export function TestimonialCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {testimonials.map((item) => (
        <li key={item.author} className="pixel-card flex flex-col gap-3 p-4">
          {item.pending && (
            <span className="w-fit rounded-sm bg-amber px-2 py-0.5 text-xs font-bold text-ink">
              Pendiente
            </span>
          )}
          <blockquote className="text-sm italic leading-6">“{item.quote}”</blockquote>
          <p className="mt-auto text-sm font-semibold text-forest">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}

export function ContactLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a className="pixel-button" href={`mailto:${identity.email}`}>
        {identity.email}
      </a>
      <a className="pixel-button" href={identity.github} {...externalLink}>
        GitHub
      </a>
      <a className="pixel-button pixel-button-amber" href={CV_PATH} download>
        Descargar CV
      </a>
    </div>
  );
}
