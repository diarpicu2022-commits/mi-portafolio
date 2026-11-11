"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";

/**
 * Selector de tema (anexo 18.6 y enmienda 15). Tres estados: claro, oscuro y como el sistema.
 * El script del <head> (app/root-shell.tsx) ya aplicó el tema y escribió `data-tema-eleccion` antes de pintar,
 * así que la etiqueta visible la decide el CSS y no cambia al hidratar.
 */

export type Eleccion = "claro" | "oscuro" | "sistema";
export type TextosTema = { label: string; claro: string; oscuro: string; sistema: string; sistemaLargo: string };

const CLAVE = "tema";
const OPCIONES: Eleccion[] = ["claro", "oscuro", "sistema"];

function leerEleccion(): Eleccion {
  const valor = document.documentElement.getAttribute("data-tema-eleccion");
  return valor === "claro" || valor === "oscuro" ? valor : "sistema";
}

/** La elección vive en un atributo de <html>; los dos selectores la leen de ahí y se enteran si cambia. */
function suscribir(aviso: () => void) {
  const observador = new MutationObserver(aviso);
  observador.observe(document.documentElement, { attributes: true, attributeFilter: ["data-tema-eleccion"] });
  return () => observador.disconnect();
}
function useEleccion(): Eleccion | null {
  return useSyncExternalStore(suscribir, leerEleccion, () => null);
}

/** Guarda la elección y aplica el tema sin que las transiciones de color barran la página. */
export function aplicarTema(eleccion: Eleccion) {
  try {
    if (eleccion === "sistema") window.localStorage.removeItem(CLAVE);
    else window.localStorage.setItem(CLAVE, eleccion);
  } catch {
    // Almacenamiento bloqueado: la elección vale solo para esta visita.
  }
  const raiz = document.documentElement;
  const real = eleccion === "sistema" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro") : eleccion;
  const pausa = document.createElement("style");
  pausa.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(pausa);
  raiz.setAttribute("data-tema", real);
  raiz.setAttribute("data-tema-eleccion", eleccion);
  void window.getComputedStyle(raiz).color; // fuerza el cálculo con las transiciones apagadas
  requestAnimationFrame(() => requestAnimationFrame(() => pausa.remove()));
}

function nombreCorto(textos: TextosTema, opcion: Eleccion) {
  return opcion === "sistema" ? textos.sistema : textos[opcion];
}

/** Escritorio: píldora «Tema: …» que abre un menú de tres opciones. */
export function SelectorTemaMenu({ textos }: { textos: TextosTema }) {
  const [abierto, setAbierto] = useState(false);
  const eleccion = useEleccion() ?? "sistema";
  const boton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const idMenu = useId();

  useEffect(() => {
    if (!abierto) return;
    const marcado = menu.current?.querySelector<HTMLElement>('[aria-checked="true"]');
    marcado?.focus();
    const fuera = (evento: PointerEvent) => {
      const objetivo = evento.target as Node;
      if (!menu.current?.contains(objetivo) && !boton.current?.contains(objetivo)) setAbierto(false);
    };
    document.addEventListener("pointerdown", fuera);
    return () => document.removeEventListener("pointerdown", fuera);
  }, [abierto]);

  function abrir() {
    setAbierto(true);
  }

  function cerrar(devolverFoco: boolean) {
    setAbierto(false);
    if (devolverFoco) boton.current?.focus();
  }

  function elegir(opcion: Eleccion) {
    aplicarTema(opcion);
    cerrar(true);
  }

  function teclaBoton(evento: KeyboardEvent<HTMLButtonElement>) {
    if (evento.key === "ArrowDown" || evento.key === "ArrowUp") {
      evento.preventDefault();
      abrir();
    }
  }

  function teclaMenu(evento: KeyboardEvent<HTMLDivElement>) {
    const items = Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="menuitemradio"]') ?? []);
    const actual = items.indexOf(document.activeElement as HTMLElement);
    const mover = (indice: number) => items[(indice + items.length) % items.length]?.focus();
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        mover(actual + 1);
        break;
      case "ArrowUp":
        evento.preventDefault();
        mover(actual - 1);
        break;
      case "Home":
        evento.preventDefault();
        mover(0);
        break;
      case "End":
        evento.preventDefault();
        mover(items.length - 1);
        break;
      case "Escape":
        evento.preventDefault();
        cerrar(true);
        break;
      case "Tab":
        cerrar(false);
        break;
    }
  }

  return (
    <div className="tema">
      <button
        ref={boton}
        type="button"
        className="tema-boton"
        aria-haspopup="menu"
        aria-expanded={abierto}
        aria-controls={idMenu}
        aria-label={`${textos.label}: ${nombreCorto(textos, eleccion)}`}
        onClick={() => (abierto ? cerrar(false) : abrir())}
        onKeyDown={teclaBoton}
      >
        {textos.label}
        <span className="tema-dos">{": "}</span>
        {OPCIONES.map((opcion) => (
          <span key={opcion} className="tema-valor" data-v={opcion}>
            {nombreCorto(textos, opcion)}
          </span>
        ))}
      </button>
      <div ref={menu} id={idMenu} role="menu" aria-label={textos.label} hidden={!abierto} className="tema-menu" onKeyDown={teclaMenu}>
        {OPCIONES.map((opcion) => (
          <button
            key={opcion}
            type="button"
            role="menuitemradio"
            aria-checked={eleccion === opcion}
            tabIndex={eleccion === opcion ? 0 : -1}
            className="tema-opcion"
            onClick={() => elegir(opcion)}
          >
            {opcion === "sistema" ? textos.sistemaLargo : textos[opcion]}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Celular y tablet: tres píldoras de radio dentro del panel del menú. */
export function SelectorTemaRadios({ textos }: { textos: TextosTema }) {
  const eleccion = useEleccion();
  const nombre = useId();

  return (
    <fieldset className="tema-radios">
      <legend className="tema-leyenda">{textos.label}</legend>
      <div className="tema-radios-fila">
        {OPCIONES.map((opcion) => (
          <label key={opcion} className="tema-radio">
            <input
              type="radio"
              name={nombre}
              value={opcion}
              checked={eleccion === opcion}
              onChange={() => aplicarTema(opcion)}
            />
            <span>{opcion === "sistema" ? textos.sistemaLargo : textos[opcion]}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
