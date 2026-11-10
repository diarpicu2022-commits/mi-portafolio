import type { Metadata } from "next";

import { QuestPage } from "@/components/quest-page";

export const metadata: Metadata = { title: "Mapa 2D · Diecu's Engineering Quest" };

export default function Quest() {
  return <QuestPage locale="es" />;
}
