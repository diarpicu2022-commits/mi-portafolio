import { ogSize, renderOgImage } from "@/app/og-image";

export const alt = "Diecu's Engineering Quest";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
