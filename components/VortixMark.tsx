import { useId } from "react";
import { VIEWBOX, ARMS } from "@/lib/spiralData";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /** Emerald gradient endpoints. Default = verde da identidade Vortix. */
  from?: string;
  to?: string;
  title?: string;
};

/**
 * VortixMark — a logo oficial da Vortix, vetorial.
 *
 * Dois braços (paths reais) que partem do centro e se enrolam para fora,
 * cada um terminando numa ponta arredondada em "onda". O espaço entre os
 * braços é transparente — num fundo escuro, o backdrop aparece através dele,
 * exatamente como o desenho original.
 */
export default function VortixMark({
  className,
  style,
  from = "#3DD9A0",
  to = "#2BB98A",
  title = "Vortix",
}: Props) {
  const uid = useId().replace(/:/g, "");
  const gradId = `vx-grad-${uid}`;

  return (
    <svg
      viewBox={VIEWBOX}
      className={className}
      style={style}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`}>
        {ARMS.map((d, i) => (
          <path key={`arm-${i}`} d={d} />
        ))}
      </g>
    </svg>
  );
}
