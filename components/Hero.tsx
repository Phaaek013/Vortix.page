"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─── Content fade-up ─── */
const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.18,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
});

/* ─────────────────────────────────────────────
   SpiralDecor
   One instance of the 3D render with a radial
   mask so the black background dissolves into
   the page — no hard edges, no clipping.
───────────────────────────────────────────── */
type SpiralDecorProps = {
  style?: React.CSSProperties;
  size?: number;
  floatDuration?: number;
  floatDelay?: number;
  initRotate?: number;
  peakRotate?: number;
  floatX?: number;
  floatY?: number;
  opacity?: number;
  enterDelay?: number;
  /** Size override on mobile (< 768px) */
  mobileSize?: number;
  /** Position override on mobile */
  mobileStyle?: React.CSSProperties;
  /** Hide completely on mobile */
  hideOnMobile?: boolean;
};

function SpiralDecor({
  style,
  size = 420,
  floatDuration = 12,
  floatDelay = 0,
  initRotate = -6,
  peakRotate = 4,
  floatX = -18,
  floatY = 14,
  opacity = 1,
  enterDelay = 0.3,
  mobileSize,
  mobileStyle,
  hideOnMobile = false,
}: SpiralDecorProps) {
  const mask =
    "radial-gradient(circle at center, #000 42%, rgba(0,0,0,0.92) 58%, transparent 82%)";

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const resolvedSize = isMobile && mobileSize ? mobileSize : size;
  const resolvedStyle = isMobile && mobileStyle ? mobileStyle : style;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity, scale: 1 }}
      transition={{
        duration: 1.8,
        delay: enterDelay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.4 },
      }}
      className={hideOnMobile ? "hidden md:block" : undefined}
      style={{
        position: "absolute",
        width: resolvedSize,
        height: resolvedSize,
        pointerEvents: "none",
        willChange: "transform",
        ...resolvedStyle,
      }}
    >
      <motion.div
        animate={{
          x: [0, floatX, 0],
          y: [0, floatY, 0],
          rotate: [initRotate, peakRotate, initRotate],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/vortix-spiral-hero-premium.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink-900">

      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,217,160,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Spiral instances ── */}

      {/* TOP-LEFT — desktop large / mobile small tucked off-screen */}
      <SpiralDecor
        size={480}
        enterDelay={0.2}
        floatDuration={13}
        floatDelay={0}
        initRotate={12}
        peakRotate={-4}
        floatX={14}
        floatY={18}
        opacity={0.72}
        style={{ top: "8%", left: "-8%" }}
        mobileSize={200}
        mobileStyle={{ top: "2%", left: "-18%" }}
      />

      {/* TOP-RIGHT — hide on mobile (overlaps headline) */}
      <SpiralDecor
        size={340}
        enterDelay={0.42}
        floatDuration={11}
        floatDelay={1.5}
        initRotate={-18}
        peakRotate={-4}
        floatX={-14}
        floatY={12}
        opacity={0.58}
        style={{ top: "6%", right: "-4%" }}
        mobileSize={160}
        mobileStyle={{ top: "2%", right: "-20%" }}
      />

      {/* BOTTOM-RIGHT — desktop large / mobile reduced */}
      <SpiralDecor
        size={460}
        enterDelay={0.32}
        floatDuration={14}
        floatDelay={2.5}
        initRotate={-6}
        peakRotate={8}
        floatX={-20}
        floatY={-16}
        opacity={0.78}
        style={{ bottom: "4%", right: "-6%" }}
        mobileSize={220}
        mobileStyle={{ bottom: "2%", right: "-22%" }}
      />

      {/* BOTTOM-LEFT — hide on mobile */}
      <SpiralDecor
        size={260}
        enterDelay={0.55}
        floatDuration={10}
        floatDelay={3.5}
        initRotate={20}
        peakRotate={6}
        floatX={12}
        floatY={-14}
        opacity={0.44}
        style={{ bottom: "10%", left: "4%" }}
        hideOnMobile
      />

      {/* TOP-CENTER-RIGHT — hide on mobile */}
      <SpiralDecor
        size={190}
        enterDelay={0.68}
        floatDuration={9}
        floatDelay={4.5}
        initRotate={-28}
        peakRotate={-10}
        floatX={10}
        floatY={16}
        opacity={0.32}
        style={{ top: "3%", right: "22%" }}
        hideOnMobile
      />

      {/* ── Text content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-8">
        <motion.h1
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="font-display font-bold leading-[1.03] tracking-tightest text-cream"
          style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
        >
          Estudamos seu negócio.
          <br />
          <span className="text-emerald">Desenhamos a solução certa.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp(1)}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-7 max-w-[500px] font-body text-[16px] leading-[1.75] text-mist/70"
        >
          Não somos uma fábrica de software. Cada projeto começa com
          análise real — Business Intelligence, estrutura de dados e IA
          aplicada ao que o seu negócio precisa de verdade.
        </motion.p>

        <motion.div
          variants={fadeUp(2)}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="#processo"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 font-body text-sm font-semibold text-ink-900 transition-colors hover:bg-emerald-bright"
          >
            Como trabalhamos
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://wa.me/5535984215199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-7 py-3.5 font-body text-sm text-mist transition-all hover:border-white/20 hover:text-cream"
          >
            Falar conosco
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink-900 to-transparent"
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />
    </section>
  );
}
