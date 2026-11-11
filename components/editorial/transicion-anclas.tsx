"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Transición al navegar por anclas: baja un telón negro con el nombre de la sección, la página salta
 * por debajo y el telón sale hacia arriba. Con movimiento reducido o sin JavaScript, el salto es el normal.
 */
export function TransicionAnclas() {
  const [fase, setFase] = useState<"quieta" | "entra" | "sale">("quieta");
  const [rotulo, setRotulo] = useState("");
  const ocupada = useRef(false);

  useEffect(() => {
    const reducido = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const alHacerClic = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (reducido?.matches || ocupada.current) return;
      const enlace = (e.target as HTMLElement).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!enlace) return;
      const url = new URL(enlace.href, location.href);
      if (url.pathname !== location.pathname || !url.hash || url.hash === "#contenido") return;
      const destino = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!destino) return;
      e.preventDefault();
      ocupada.current = true;
      const titulo = destino.querySelector("h2")?.textContent?.trim() || enlace.textContent?.trim() || "";
      setRotulo(titulo);
      setFase("entra");
      window.setTimeout(() => {
        destino.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
        history.pushState(null, "", url.hash);
        setFase("sale");
        window.setTimeout(() => {
          setFase("quieta");
          ocupada.current = false;
        }, 650);
      }, 420);
    };
    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);

  return (
    <div aria-hidden="true" className={`telon telon-${fase}`}>
      <span className="telon-rojo" />
      <span className="telon-negro">
        <span className="telon-rotulo voz-titular">{rotulo}</span>
      </span>
    </div>
  );
}
