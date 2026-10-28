import type { ReactNode } from "react";

import { RootShell } from "@/app/root-shell";
import { siteMetadata } from "@/app/site-metadata";

export const metadata = siteMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
