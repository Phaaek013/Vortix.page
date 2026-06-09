"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

const WA_NUMBER = "5535984215199";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", empresa: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}${form.empresa ? ` da ${form.empresa}` : ""}.\n\n${form.mensagem}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contato" className="bg-ink-800 border-t border-white/[0.04]">
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ── Lado esquerdo: texto ── */}
          <motion.div {...reveal(0)} className="flex flex-col gap-8">
            <div>
              <p className="mb-4 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70">
                Contato
              </p>
              <h2 className="font-display text-[32px] font-bold leading-[1.06] tracking-tightest text-cream sm:text-[40px] lg:text-[52px]">
                Vamos estudar
                <br />
                <span className="text-emerald">seu negócio.</span>
              </h2>
            </div>

            <p className="font-body text-[17px] leading-[1.7] text-mist/75">
              Antes de qualquer proposta, queremos entender o que você precisa de verdade.
              Conta o problema — a solução a gente desenha juntos.
            </p>

            {/* WhatsApp direto */}
            <div className="flex flex-col gap-3">
              <p className="font-body text-[13px] uppercase tracking-[0.14em] text-slate/50">
                Prefere pelo WhatsApp?
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-emerald/20 bg-emerald/5 px-6 py-3.5 font-body text-sm font-medium text-emerald transition-all hover:bg-emerald/10 hover:border-emerald/40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </motion.div>

          {/* ── Lado direito: formulário ── */}
          <motion.div {...reveal(0.12)}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-emerald/20 bg-emerald/[0.04] p-12 text-center">
                <div className="h-12 w-12 rounded-full border border-emerald/30 bg-emerald/10 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="font-display text-[20px] font-semibold text-cream">
                  Abrindo WhatsApp…
                </p>
                <p className="font-body text-[15px] text-mist/60">
                  Se não abriu automaticamente,{" "}
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-emerald underline underline-offset-2">
                    clique aqui
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="font-body text-[12px] uppercase tracking-[0.14em] text-slate/60">
                      Nome *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="rounded-xl border border-white/[0.08] bg-ink-700 px-4 py-3.5 font-body text-[15px] text-cream placeholder:text-slate/30 outline-none transition-colors focus:border-emerald/40 focus:bg-ink-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="empresa" className="font-body text-[12px] uppercase tracking-[0.14em] text-slate/60">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="rounded-xl border border-white/[0.08] bg-ink-700 px-4 py-3.5 font-body text-[15px] text-cream placeholder:text-slate/30 outline-none transition-colors focus:border-emerald/40 focus:bg-ink-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="mensagem" className="font-body text-[12px] uppercase tracking-[0.14em] text-slate/60">
                    O que você precisa? *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Descreve o problema ou o que você quer resolver. Quanto mais contexto, melhor."
                    className="resize-none rounded-xl border border-white/[0.08] bg-ink-700 px-4 py-3.5 font-body text-[15px] text-cream placeholder:text-slate/30 outline-none transition-colors focus:border-emerald/40 focus:bg-ink-600"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-body text-sm font-semibold text-ink-900 transition-colors hover:bg-emerald-bright"
                >
                  Enviar pelo WhatsApp
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>

                <p className="font-body text-[12px] text-slate/35 text-center">
                  Ao enviar, você será redirecionado ao WhatsApp com a mensagem preenchida.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
