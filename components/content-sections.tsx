import type { ReactNode } from "react";

import { ContactForm } from "@/components/contact-form";
import {
  ContactLinks,
  ExperienceList,
  ProcessSteps,
  ProjectCard,
  SkillGroups,
  TestimonialCards,
} from "@/components/portfolio-blocks";
import { getPortfolio, type Locale } from "@/data/portfolio";

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

export function ContentSections({ locale }: { locale: Locale }) {
  const { identity, projects, t } = getPortfolio(locale);
  const s = t.sections;

  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl divide-y-4 divide-dashed divide-forest/20 px-4">
        <Section id="about" title={s.aboutTitle} intro={identity.pitch}>
          <h3 className="mb-4 font-semibold">{s.skillsTitle}</h3>
          <SkillGroups locale={locale} />
        </Section>

        <Section id="projects" title={s.projectsTitle} intro={s.projectsIntro}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} locale={locale} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title={s.experienceTitle}>
          <ExperienceList locale={locale} />
        </Section>

        <Section id="testimonials" title={s.testimonialsTitle} intro={s.testimonialsIntro}>
          <TestimonialCards locale={locale} />
        </Section>

        <Section id="process" title={s.processTitle} intro={s.processIntro}>
          <ProcessSteps locale={locale} />
        </Section>

        <Section id="contact" title={s.contactTitle} intro={s.contactIntro}>
          <ContactLinks locale={locale} />
          <ContactForm locale={locale} />
        </Section>
      </div>
    </div>
  );
}
