import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study-page";
import { getPortfolio, projectPath } from "@/data/portfolio";
import { projectIds } from "@/data/projects";

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps<"/proyectos/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = getPortfolio("es").projects.find((item) => item.id === id);
  if (!project) return {};
  return {
    title: `${project.name} · Caso de estudio · Diecu's Engineering Quest`,
    description: project.summary,
    alternates: { canonical: projectPath("es", id), languages: { es: projectPath("es", id), en: projectPath("en", id) } },
  };
}

export default async function SpanishCaseStudy({ params }: PageProps<"/proyectos/[id]">) {
  const { id } = await params;
  return <CaseStudyPage locale="es" id={id} />;
}
