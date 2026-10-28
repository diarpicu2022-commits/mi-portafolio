import type { Metadata } from "next";
import Link from "next/link";

import { RootShell } from "@/app/root-shell";
import { Sprite, playerPixels } from "@/components/pixel-sprites";

export const metadata: Metadata = {
  title: "404 · Diecu's Engineering Quest",
};

export default function GlobalNotFound() {
  return (
    <RootShell lang="es">
      <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-forest px-4 py-20 text-center text-paper">
        <Sprite pixels={playerPixels("down", 0)} className="size-24" />
        <h1 className="font-pixel text-lg leading-relaxed">404 · Te perdiste en el bosque</h1>
        <p lang="en" className="text-paper/80">
          You got lost in the forest. This page does not exist.
        </p>
        <Link className="pixel-button pixel-button-amber" href="/">
          Volver al mapa · Back to the map
        </Link>
      </main>
    </RootShell>
  );
}
