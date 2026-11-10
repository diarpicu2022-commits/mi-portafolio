import { ogSize, renderOgImage } from "@/app/og-image";
import { NAME } from "@/data/portfolio";

export const alt = NAME;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
