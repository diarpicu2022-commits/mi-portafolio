/**
 * Monograma DP: la D en papel y la P roja, cuya asta baja como una pista de circuito
 * hasta un pad. Cuenta «del sensor a la interfaz» en un solo signo.
 */
export function LogoDP({ tamano = 40, className = "" }: { tamano?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={tamano}
      height={tamano}
      aria-hidden="true"
      focusable="false"
      className={`logo-dp ${className}`.trim()}
    >
      <rect className="logo-dp-fondo" x="0" y="0" width="48" height="48" rx="14" />
      {/* D en papel */}
      <path className="logo-dp-d" d="M9 12 V36 H15 A12 12 0 0 0 15 12 Z" />
      {/* P roja: el lazo arriba y el asta baja como pista de circuito hasta un pad */}
      <path className="logo-dp-p" d="M32 36 V12 H35.5 A5.5 5.5 0 0 1 35.5 23 H32" />
      <path className="logo-dp-pista" d="M32 30 H38 V36" />
      <circle className="logo-dp-pad" cx="38" cy="37.5" r="2.6" />
    </svg>
  );
}
