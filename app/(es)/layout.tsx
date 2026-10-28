import type { ReactNode } from "react";

import { RootShell } from "@/app/root-shell";
import { siteMetadata } from "@/app/site-metadata";

export const metadata = siteMetadata("es");

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
