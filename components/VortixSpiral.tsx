"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import VortixMark from "./VortixMark";

type Props = {
  /** Pixel size of the square mark. */
  size?: number;
  /** Seconds per full rotation (slow & continuous). */
  spin?: number;
  /** Show the soft emerald aura behind the mark. */
  glow?: boolean;
  /** How strongly it reacts to the mouse (deg of tilt). 0 disables. */
  tilt?: number;
  /** How strongly it drifts/rotates with scroll. 0 disables. */
  scroll?: number;
  className?: string;
};

/**
 * VortixSpiral — the living mark.
 *
 * Continuous slow rotation (the Stitch behaviour we liked) layered with a
 * subtle mouse tilt/parallax and a gentle scroll-driven rotation. All motion is
 * disabled gracefully when the user prefers reduced motion.
 */
export default function VortixSpiral({
  size = 420,
  spin = 40,
  glow = true,
  tilt = 8,
  scroll = 18,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Mouse parallax (springy)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [tilt, -tilt]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-tilt, tilt]), {
    stiffness: 120,
    damping: 18,
  });

  // Scroll-driven extra rotation
  const scrollRot = useMotionValue(0);
  const scrollRotS = useSpring(scrollRot, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set(Math.max(-0.5, Math.min(0.5, (e.clientX - cx) / window.innerWidth)));
      my.set(Math.max(-0.5, Math.min(0.5, (e.clientY - cy) / window.innerHeight)));
    };
    const onScroll = () => scrollRot.set(window.scrollY * (scroll / 1000));
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mx, my, scrollRot, scroll, reduce]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: size,
        height: size,
        position: "relative",
        perspective: 900,
      }}
    >
      {glow && (
        <div
          aria-hidden
          className="aura"
          style={{
            position: "absolute",
            inset: "-22%",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
        />
      )}

      {/* Mouse tilt layer */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          rotateX: reduce ? 0 : rx,
          rotateY: reduce ? 0 : ry,
        }}
      >
        {/* Scroll rotation layer */}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            rotate: reduce ? 0 : scrollRotS,
          }}
        >
          {/* Continuous spin layer */}
          <motion.div
            style={{ width: "100%", height: "100%" }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={
              reduce
                ? undefined
                : { duration: spin, ease: "linear", repeat: Infinity }
            }
          >
            <VortixMark
              className="h-full w-full"
              title="Vortix — vórtex"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
