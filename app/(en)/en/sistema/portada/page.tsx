import type { Metadata } from "next";

import { Portada } from "@/components/editorial/portada";

/** Preview of the redesign cover (step 2). Not indexed. */
export const metadata: Metadata = {
  title: "Redesign system · Cover",
  robots: { index: false, follow: false },
};

export default function CoverPreview() {
  return (
    <main className="sup-papel w-full flex-1">
      <Portada locale="en" />
    </main>
  );
}
