"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type Foto = { src: string; width: number; height: number; alt: string };

const texto = {
  es: {
    abrir: "Ver en grande",
    cerrar: "Cerrar",
    anterior: "Anterior",
    siguiente: "Siguiente",
    de: "de",
    ir: "Ir a la imagen",
  },
  en: {
    abrir: "View large",
    cerrar: "Close",
    anterior: "Previous",
    siguiente: "Next",
    de: "of",
    ir: "Go to image",
  },
} as const;

/**
 * Carrusel de capturas: pasa solo cada pocos segundos con un barrido, se detiene al pasar el cursor o al tener foco,
 * y abre un visor a pantalla completa con todas las imágenes. Con movimiento reducido no pasa solo.
 */
export function CarruselProyecto({
  fotos,
  nombre,
  locale,
  sizes,
  modo = "carrusel",
}: {
  fotos: Foto[];
  nombre: string;
  locale: "es" | "en";
  sizes: string;
  modo?: "carrusel" | "rejilla";
}) {
  const x = texto[locale];
  const [actual, setActual] = useState(0);
  const [visor, setVisor] = useState<number | null>(null);
  const [pausa, setPausa] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const origen = useRef<HTMLElement | null>(null);
  const total = fotos.length;

  // Pasa solo mientras está en pantalla, sin pausa y sin movimiento reducido.
  useEffect(() => {
    if (modo !== "carrusel" || total < 2 || pausa || visor !== null) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), {
      threshold: 0.3,
    });
    if (raiz.current) io.observe(raiz.current);
    const t = window.setInterval(
      () => visible && setActual((a) => (a + 1) % total),
      3200,
    );
    return () => {
      window.clearInterval(t);
      io.disconnect();
    };
  }, [modo, total, pausa, visor]);

  const abrir = (i: number, desde: HTMLElement) => {
    origen.current = desde;
    setVisor(i);
  };
  const cerrar = useCallback(() => {
    setVisor(null);
    origen.current?.focus();
  }, []);

  useEffect(() => {
    if (visor === null) return;
    cerrarRef.current?.focus();
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight")
        setVisor((v) => (v === null ? v : (v + 1) % total));
      if (e.key === "ArrowLeft")
        setVisor((v) => (v === null ? v : (v - 1 + total) % total));
    };
    document.addEventListener("keydown", tecla);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = "";
    };
  }, [visor, total, cerrar]);

  const primera = fotos[0];

  return (
    <div
      ref={raiz}
      className={modo === "carrusel" ? "carrusel" : "rejilla-fotos"}
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={() => setPausa(false)}
    >
      {modo === "carrusel" ? (
        <>
          <button
            type="button"
            className="carrusel-marco"
            style={{ aspectRatio: `${primera.width} / ${primera.height}` }}
            onClick={(e) => abrir(actual, e.currentTarget)}
            aria-label={`${x.abrir}: ${nombre}, ${actual + 1} ${x.de} ${total}`}
          >
            {fotos.map((f, i) => (
              <Image
                key={f.src}
                src={f.src}
                alt={i === actual ? f.alt : ""}
                aria-hidden={i === actual ? undefined : true}
                width={f.width}
                height={f.height}
                sizes={sizes}
                loading={i === 0 ? undefined : "lazy"}
                className={`carrusel-foto ${i === actual ? "es-actual" : ""}`}
              />
            ))}
            <span aria-hidden="true" className="carrusel-contador voz-dato">
              {String(actual + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </button>
          {total > 1 && (
            <div
              className="carrusel-miniaturas"
              role="group"
              aria-label={nombre}
            >
              {fotos.map((f, i) => (
                <button
                  key={f.src}
                  type="button"
                  className={`carrusel-mini ${i === actual ? "es-actual" : ""}`}
                  aria-label={`${x.ir} ${i + 1} ${x.de} ${total}`}
                  aria-current={i === actual ? "true" : undefined}
                  onClick={() => setActual(i)}
                >
                  <Image
                    src={f.src}
                    alt=""
                    width={f.width}
                    height={f.height}
                    sizes="96px"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <ul className="caso-galeria">
          {fotos.map((f, i) => (
            <li key={f.src}>
              <button
                type="button"
                className="rejilla-boton"
                onClick={(e) => abrir(i, e.currentTarget)}
                aria-label={`${x.abrir}: ${f.alt}`}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  sizes={sizes}
                  loading="lazy"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {visor !== null &&
        createPortal(
          <div
            className="visor"
            role="dialog"
            aria-modal="true"
            aria-label={nombre}
            onClick={cerrar}
          >
            <div className="visor-cabeza" onClick={(e) => e.stopPropagation()}>
              <p className="voz-dato text-15">
                {nombre} · {visor + 1} {x.de} {total}
              </p>
              <button
                ref={cerrarRef}
                type="button"
                className="visor-boton"
                onClick={cerrar}
                aria-label={x.cerrar}
              >
                ✕
              </button>
            </div>
            <figure
              className="visor-figura"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={fotos[visor].src}
                src={fotos[visor].src}
                alt={fotos[visor].alt}
                width={fotos[visor].width}
                height={fotos[visor].height}
                sizes="95vw"
                className="visor-foto"
              />
              <figcaption className="text-15">{fotos[visor].alt}</figcaption>
            </figure>
            {total > 1 && (
              <>
                <button
                  type="button"
                  className="visor-boton visor-anterior"
                  aria-label={x.anterior}
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisor((visor - 1 + total) % total);
                  }}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="visor-boton visor-siguiente"
                  aria-label={x.siguiente}
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisor((visor + 1) % total);
                  }}
                >
                  →
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
