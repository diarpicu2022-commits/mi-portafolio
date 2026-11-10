import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study-page";
import { alternativas } from "@/app/site-metadata";
import { NAME, getPortfolio, projectPath } from "@/data/portfolio";
import { projectIds } from "@/data/projects";

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps<"/en/projects/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = getPortfolio("en").projects.find((item) => item.id === id);
  if (!project) return {};
  return {
    title: `${project.name} · Case study · ${NAME}`,
    description: project.summary,
    alternates: alternativas("en", projectPath("es", id), projectPath("en", id)),
  };
}

export default async function EnglishCaseStudy({ params }: PageProps<"/en/projects/[id]">) {
  const { id } = await params;
  return <CaseStudyPage locale="en" id={id} />;
}
