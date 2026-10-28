import type { ReactNode } from "react";

import {
  ContactLinks,
  ExperienceList,
  ProjectCard,
  SkillGroups,
  TestimonialCards,
} from "@/components/portfolio-blocks";
import { identity, projects } from "@/data/portfolio";

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-12">
      <h2 id={`${id}-title`} className="font-pixel mb-3 text-sm text-forest sm:text-base">
        {title}
      </h2>
      {intro && <p className="mb-6 max-w-2xl leading-7">{intro}</p>}
      {children}
    </section>
  );
}

export function ContentSections() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl divide-y-4 divide-dashed divide-forest/20 px-4">
        <Section id="about" title="Perfil" intro={identity.pitch}>
          <h3 className="mb-4 font-semibold">Habilidades y stack técnico</h3>
          <SkillGroups />
        </Section>

        <Section id="projects" title="Proyectos" intro="Software, hardware y juegos construidos durante la carrera.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experiencia">
          <ExperienceList />
        </Section>

        <Section
          id="testimonials"
          title="Testimonios"
          intro="Espacios reservados para testimonios reales; se reemplazarán cuando estén confirmados."
        >
          <TestimonialCards />
        </Section>

        <Section id="contact" title="Contacto" intro="¿Hablamos? Escríbeme o revisa mi código.">
          <ContactLinks />
        </Section>
      </div>
    </div>
  );
}
