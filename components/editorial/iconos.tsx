import type { SVGProps } from "react";

/**
 * Los dos únicos iconos del rediseño (contrato 8.5): flecha diagonal y flecha abajo.
 * Trazo de 1.5 px a cualquier tamaño (non-scaling-stroke) y puntas rectas (butt, miter).
 * Se dibujan a mano porque el contrato fija su construcción. Ninguna librería de iconos entra.
 */
type IconoProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** Lado en px. Por defecto 24. */
  tamano?: number;
  /** Texto para lectores de pantalla. Sin él, el icono es decorativo. */
  titulo?: string;
};

function Base({ tamano = 24, titulo, className, children, ...resto }: IconoProps & { children: React.ReactNode }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      role={titulo ? "img" : undefined}
      aria-hidden={titulo ? undefined : true}
      aria-label={titulo}
      focusable="false"
      className={className}
      {...resto}
    >
      {children}
    </svg>
  );
}

export function FlechaDiagonal({ className = "", ...props }: IconoProps) {
  return (
    <Base className={`icono-ed icono-ed-diagonal ${className}`.trim()} {...props}>
      <path d="M6 18 L18 6" vectorEffect="non-scaling-stroke" />
      <path d="M8 6 H18 V16" vectorEffect="non-scaling-stroke" />
    </Base>
  );
}

export function FlechaAbajo({ className = "", ...props }: IconoProps) {
  return (
    <Base className={`icono-ed icono-ed-abajo ${className}`.trim()} {...props}>
      <path d="M12 4 V20" vectorEffect="non-scaling-stroke" />
      <path d="M5 13 L12 20 L19 13" vectorEffect="non-scaling-stroke" />
    </Base>
  );
}
