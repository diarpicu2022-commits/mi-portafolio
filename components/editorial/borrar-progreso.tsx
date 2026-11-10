"use client";

import { useState } from "react";

import { QUEST_KEYS } from "@/data/privacidad";

/** Borra del navegador lo que guarda el mapa 2D. El resultado se anuncia en una región viva. */
export function BorrarProgreso({ boton, hecho, vacio }: { boton: string; hecho: string; vacio: string }) {
  const [estado, setEstado] = useState("");

  function borrar() {
    let habia = false;
    try {
      for (const clave of QUEST_KEYS) {
        if (window.localStorage.getItem(clave) !== null) habia = true;
        window.localStorage.removeItem(clave);
      }
    } catch {
      // Almacenamiento bloqueado: no hay nada que borrar.
    }
    setEstado(habia ? hecho : vacio);
  }

  return (
    <div className="flex flex-col items-start gap-e12">
      <button type="button" className="boton-ed boton-ed-secundario" onClick={borrar}>
        {boton}
      </button>
      <p role="status" className="text-15">
        {estado}
      </p>
    </div>
  );
}
