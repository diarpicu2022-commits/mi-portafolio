"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Retrato de la portada. Si la foto no carga, el contenedor se oculta y queda el bloque rojo solo (contrato 8.9).
 * El error puede ocurrir antes de hidratar, por eso también se revisa la imagen al montar.
 */
export function RetratoPortada({ alt, src, sizes }: { alt: string; src: string; sizes: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setError(true);
  }, []);

  return (
    <div className="portada-retrato" data-error={error ? "" : undefined}>
      <Image
        ref={ref}
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        className="object-contain object-bottom"
        onError={() => setError(true)}
      />
    </div>
  );
}
