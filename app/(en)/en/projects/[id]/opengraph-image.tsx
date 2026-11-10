import { ogSize, renderProjectOgImage } from "@/app/og-image";
import { projectIds } from "@/data/projects";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case study";

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return renderProjectOgImage("en", id);
}
