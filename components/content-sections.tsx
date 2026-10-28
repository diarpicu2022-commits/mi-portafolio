import type { ReactNode } from "react";

import { ContactForm } from "@/components/contact-form";
import {
  ContactLinks,
  EducationList,
  ExperienceList,
  Languages,
  Principles,
  ProjectCard,
  SkillGroups,
  TestimonialCards,
  projectNumber,
} from "@/components/portfolio-blocks";
import { getPortfolio, type Locale } from "@/data/portfolio";

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-12">
      <h2 id={`${id}-title`} className="font-pixel section-title mb-4 text-forest" data-reveal>
        {title}
      </h2>
      {intro && (
        <p className="lead mb-8 max-w-3xl" data-reveal>
          {intro}
        </p>
      )}
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
          <p className="mb-10 max-w-3xl border-l-4 border-amber pl-4 leading-7" data-reveal>
            {identity.motto}
          </p>
          <h3 className="font-pixel mb-5 text-[0.7rem] text-forest">{s.principlesTitle}</h3>
          <Principles locale={locale} />
          <h3 className="font-pixel mt-12 mb-5 text-[0.7rem] text-forest">{s.skillsTitle}</h3>
          <SkillGroups locale={locale} />
        </Section>

        <Section id="projects" title={s.projectsTitle} intro={s.projectsIntro}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                locale={locale}
                project={project}
                number={projectNumber(index)}
                featured={index === 0}
              />
            ))}
          </div>
        </Section>

        <Section id="experience" title={s.experienceTitle} intro={s.experienceIntro}>
          <ExperienceList locale={locale} />
        </Section>

        <Section id="education" title={s.educationTitle}>
          <EducationList locale={locale} />
          <h3 className="font-pixel mt-12 mb-5 text-[0.7rem] text-forest">{s.languagesTitle}</h3>
          <Languages locale={locale} />
        </Section>

        <Section id="testimonials" title={s.testimonialsTitle} intro={s.testimonialsIntro}>
          <TestimonialCards locale={locale} />
        </Section>

        <Section id="contact" title={s.contactTitle} intro={s.contactIntro}>
          <ContactLinks locale={locale} />
          <ContactForm locale={locale} />
        </Section>
      </div>
    </div>
  );
}
