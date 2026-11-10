"use client";

import { useEffect } from "react";

/** Aparición al hacer scroll. Sin JavaScript o con movimiento reducido todo se ve desde el principio. */
export function Revelar() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-revelar], .seccion-ed .filete-seccion, .seccion-ed h2"));
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("revelar-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("revelado");
            io.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("revelado");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
