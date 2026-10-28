import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study-page";
import { getPortfolio, projectPath } from "@/data/portfolio";
import { projectIds } from "@/data/projects";

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps<"/en/projects/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = getPortfolio("en").projects.find((item) => item.id === id);
  if (!project) return {};
  return {
    title: `${project.name} · Case study · Diecu's Engineering Quest`,
    description: project.summary,
    alternates: { canonical: projectPath("en", id), languages: { es: projectPath("es", id), en: projectPath("en", id) } },
  };
}

export default async function EnglishCaseStudy({ params }: PageProps<"/en/projects/[id]">) {
  const { id } = await params;
  return <CaseStudyPage locale="en" id={id} />;
}
