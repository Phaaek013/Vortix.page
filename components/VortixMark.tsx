import { useId } from "react";
import { DISC, CHANNEL_PATHS, CHANNEL_CAPS } from "@/lib/spiralData";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /** Emerald gradient endpoints. */
  from?: string;
  to?: string;
  title?: string;
};

/**
 * VortixMark — the true-vector Vortix vortex.
 *
 * A solid emerald disc with a white (transparent) double-spiral channel carved
 * out via a mask. Both arms are real, math-defined paths (Archimedean spiral
 * ribbons with rounded caps), 2-fold rotationally symmetric, ending in the
 * rounded "wave" tips. The channel is transparent, so on a dark surface the
 * background shows through — exactly like the original logo on its backdrop.
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
  const maskId = `vx-mask-${uid}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <mask id={maskId}>
          <circle cx={DISC.cx} cy={DISC.cy} r={DISC.r} fill="white" />
          {CHANNEL_PATHS.map((d, i) => (
            <path key={`p${i}`} d={d} fill="black" />
          ))}
          {CHANNEL_CAPS.map((c, i) => (
            <circle key={`c${i}`} cx={c.cx} cy={c.cy} r={c.r} fill="black" />
          ))}
        </mask>
      </defs>
      <circle
        cx={DISC.cx}
        cy={DISC.cy}
        r={DISC.r}
        fill={`url(#${gradId})`}
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}
