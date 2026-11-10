import { FlechaAbajo } from "@/components/editorial/iconos";
import type { Esquema } from "@/data/projects";

/**
 * Esquema de sistema (enmienda 13). Un solo componente dibujado por datos: etapas de arriba abajo,
 * nodos con filete de 1 px y la flecha abajo del repertorio entre etapas, con la etiqueta del enlace en voz dato.
 * Los nodos son HTML para que el texto no baje de 13 px al estrechar la columna. Las flechas son el icono SVG del sistema.
 * Siempre lleva el rótulo «Esquema» («Diagram»): nunca se presenta como captura.
 *
 * mini: miniatura sin texto para la tabla de experiencia; solo la forma del recorrido, con el rótulo debajo.
 */
export function EsquemaSistema({
  esquema,
  rotulo,
  luego,
  mini = false,
  className = "",
}: {
  esquema: Esquema;
  rotulo: string;
  /** Conector de la descripción accesible: «luego» o «then». */
  luego: string;
  mini?: boolean;
  className?: string;
}) {
  const descripcion = `${rotulo}. ${esquema.titulo}. ${esquema.etapas
    .map((e) => e.nodos.map((n) => `${n.etiqueta} (${n.detalle})`).join(", ") + (e.enlace ? `, ${e.enlace}` : ""))
    .join(`, ${luego} `)}.`;

  if (mini) {
    return (
      <figure className={`esquema esquema-mini ${className}`.trim()}>
        <div role="img" aria-label={descripcion} className="esquema-mini-dibujo">
          {esquema.etapas.map((e, i) => (
            <div key={i} className="esquema-mini-fila" aria-hidden="true">
              {e.nodos.map((_, j) => (
                <span key={j} className="esquema-mini-nodo" />
              ))}
            </div>
          ))}
        </div>
        <figcaption className="voz-dato text-13" aria-hidden="true">
          {rotulo}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure role="img" aria-label={descripcion} className={`esquema ${className}`.trim()}>
      <figcaption className="esquema-cabeza" aria-hidden="true">
        <span className="voz-dato-fuerte text-13">{rotulo}</span>
        <span className="voz-texto-fuerte text-15">{esquema.titulo}</span>
      </figcaption>
      <ol className="esquema-etapas" aria-hidden="true">
        {esquema.etapas.map((e, i) => (
          <li key={i} className="esquema-etapa">
            <div className="esquema-fila" style={{ gridTemplateColumns: `repeat(${e.nodos.length}, minmax(0, 1fr))` }}>
              {e.nodos.map((n) => (
                <div key={n.etiqueta} className="esquema-nodo">
                  <span className="voz-texto-fuerte text-15">{n.etiqueta}</span>
                  <span className="voz-dato text-13">{n.detalle}</span>
                </div>
              ))}
            </div>
            {e.enlace && (
              <div className="esquema-enlace">
                <FlechaAbajo tamano={24} />
                <span className="voz-dato text-13">{e.enlace}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
