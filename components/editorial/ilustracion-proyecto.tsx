import Image from "next/image";

import type { ProjectIlustracion } from "@/data/projects";

/**
 * Ilustración de proyecto (enmienda 14). Ficha de papel con filete y el rótulo «Ilustración» encima:
 * el rojo del dibujo nunca toca el bloque rojo y nadie la confunde con una captura.
 * cargar=false deja la imagen solo para quien navega sin JavaScript (el selector la carga al elegir).
 */
export function IlustracionProyecto({
  ilustracion,
  rotulo,
  sizes,
  cargar = true,
  prioridad = false,
  className = "",
}: {
  ilustracion: ProjectIlustracion;
  rotulo: string;
  sizes: string;
  cargar?: boolean;
  prioridad?: boolean;
  className?: string;
}) {
  return (
    <figure className={`ilustracion ${className}`.trim()}>
      <figcaption className="voz-dato-fuerte text-13">{rotulo}</figcaption>
      {cargar ? (
        <Image
          src={ilustracion.src}
          alt={ilustracion.alt}
          width={ilustracion.width}
          height={ilustracion.height}
          sizes={sizes}
          priority={prioridad}
          loading={prioridad ? undefined : "lazy"}
        />
      ) : (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ilustracion.src} alt={ilustracion.alt} width={ilustracion.width} height={ilustracion.height} loading="lazy" />
        </noscript>
      )}
    </figure>
  );
}
