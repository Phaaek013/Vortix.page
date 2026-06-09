"use client";

import { motion } from "framer-motion";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

const steps = [
  {
    num: "01",
    title: "Estudo do Negócio",
    body: "Antes de qualquer proposta, mergulhamos no contexto do cliente — fluxos, gargalos, KPIs que importam e os que só parecem importar. Nenhuma solução nasce sem esse diagnóstico.",
  },
  {
    num: "02",
    title: "Análise de Dados",
    body: "Mapeamos a estrutura de dados existente, identificamos o que falta e o que está no lugar errado. A fundação precisa ser sólida antes de construir qualquer inteligência em cima.",
  },
  {
    num: "03",
    title: "Solução Sob Medida",
    body: "Com o diagnóstico em mãos, desenhamos a solução certa — não a mais cara, não a mais genérica. Arquitetura, stack e escopo calibrados para o que o negócio precisa agora e consegue crescer depois.",
  },
  {
    num: "04",
    title: "Entrega & Acompanhamento",
    body: "Entregamos com documentação real e suporte pós-entrega. O projeto não termina no deploy — acompanhamos os primeiros resultados e ajustamos o que precisar.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="bg-ink-800 border-y border-white/[0.04]">
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">

        {/* Header */}
        <motion.div {...reveal(0)} className="mb-16 max-w-xl">
          <p className="mb-4 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70">
            Como trabalhamos
          </p>
          <h2 className="font-display text-[32px] font-bold leading-[1.06] tracking-tightest text-cream sm:text-[40px] lg:text-[52px]">
            Do diagnóstico
            <br />à entrega.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-4">

          {/* Linha conectora — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-0 right-0 top-[26px] hidden h-px origin-left bg-white/[0.07] lg:block"
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...reveal(0.1 + i * 0.08)}
              className="relative flex flex-col gap-4 border-b border-white/[0.05] px-0 py-10 lg:border-b-0 lg:border-r lg:border-white/[0.05] lg:px-8 lg:py-0 lg:first:pl-0 lg:last:border-r-0"
            >
              {/* Step dot — desktop */}
              <div className="absolute left-8 top-0 hidden h-[13px] w-[13px] -translate-y-1/2 rounded-full border-2 border-emerald bg-ink-800 lg:block" />
              <div className="absolute left-8 top-0 hidden h-[13px] w-[13px] -translate-y-1/2 animate-ping rounded-full bg-emerald/20 lg:block" />

              <div className="lg:pt-8">
                <span className="font-display text-[13px] font-semibold tracking-[0.12em] text-emerald/70">
                  {step.num}
                </span>
                <h3 className="mt-2 font-display text-[20px] font-semibold leading-tight tracking-tight text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.7] text-mist/65">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
