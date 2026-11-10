import type { ReactNode } from "react";

/**
 * Cascarón de sección (contrato 8.5): filete de 1 px con cuadrado y rótulo mono, titular condensado
 * y el contenido en la retícula. «oscura» pasa la sección a negro (solo proyectos, 8.7 punto 4).
 */
export function Seccion({
  id,
  rotulo,
  titulo,
  oscura = false,
  children,
}: {
  id: string;
  rotulo: string;
  titulo: string;
  oscura?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`seccion-ed ${oscura ? "sup-negro" : "sup-papel"}`}>
      <div className="reticula gap-y-e40 pt-e64 pb-e104">
        <div className="col-span-full flex flex-col gap-e24">
          <p className="filete-seccion voz-dato-fuerte text-13">{rotulo}</p>
          <h2 id={`${id}-titulo`} className="voz-titular titular-seccion">
            {titulo}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
