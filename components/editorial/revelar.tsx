"use client";

import { useEffect } from "react";

/** Aparición al hacer scroll. Sin JavaScript o con movimiento reducido todo se ve desde el principio. */
export function Revelar() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(
        "[data-revelar], .seccion-ed .filete-seccion, .seccion-ed h2, .cronologia-fila, .skills2-logo, .skills2-chip, .perfil-entrada, .perfil-margen, .pasantia-logros li, .seccion-ed .reticula > p, #testimonios li, #testimonials li, #formacion article, #education article, .franja-hardware, .franja-software, .franja-lema",
      ));
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("revelar-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("revelado");
            grupos.get(e.target as HTMLElement)?.forEach((h) => h.classList.add("revelado"));
            io.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    const alto = window.innerHeight;
    const grupos = new Map<HTMLElement, HTMLElement[]>();
    const grupo = (contenedor: HTMLElement, el: HTMLElement) => {
      if (!grupos.has(contenedor)) {
        grupos.set(contenedor, []);
        io.observe(contenedor);
      }
      grupos.get(contenedor)!.push(el);
    };
    const tops = els.map((el) => el.getBoundingClientRect().top);
    els.forEach((el, i) => {
      const hermanos = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.transitionDelay = `${Math.min(hermanos.indexOf(el), 8) * 70}ms`;
      if (tops[i] < alto) el.classList.add("revelado");
      else if (el.closest(".franja")) grupo(el.closest(".franja") as HTMLElement, el);
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
