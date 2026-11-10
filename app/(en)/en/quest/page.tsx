import type { Metadata } from "next";

import { alternativas } from "@/app/site-metadata";
import { QuestPage } from "@/components/quest-page";

export const metadata: Metadata = {
  title: "2D map · Diego Armando Pinta Cuasquen",
  description: "The previous version of the portfolio, a 2D pixel-art map you walk with the keyboard or touch controls.",
  alternates: alternativas("en", "/quest", "/en/quest"),
};

export default function Quest() {
  return <QuestPage locale="en" />;
}
