"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import VortixMark from "./VortixMark";

const links = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() { setOpen(false); }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/5 bg-ink-900/90 backdrop-blur-md"
            : ""
        }`}
      >
        <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-5 lg:px-12">
          <Link href="/" onClick={close} className="flex items-center gap-2.5">
            <VortixMark className="h-7 w-7" />
            <span className="font-display text-[15px] font-semibold tracking-tight text-cream">
              Vortix
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.slice(0, 4).map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-body text-sm text-slate transition-colors hover:text-cream"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5535984215199"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 font-body text-sm text-mist transition-all hover:border-emerald/40 hover:text-cream sm:px-5"
            >
              <span className="hidden sm:inline">Falar conosco</span>
              <span className="sm:hidden">Contato</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={`h-px w-5 bg-mist transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-mist transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-5 bg-mist transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink-900 pt-[72px] md:hidden"
          >
            <nav className="flex flex-1 flex-col px-6 py-10">
              {links.map(({ label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.04 + i * 0.05 }}
                >
                  <Link
                    href={href}
                    onClick={close}
                    className="flex items-center border-b border-white/[0.05] py-5 font-display text-[28px] font-semibold tracking-tight text-cream/80 transition-colors hover:text-cream"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
                className="mt-auto pt-10"
              >
                <a
                  href="https://wa.me/5535984215199"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-6 py-4 font-body text-sm font-semibold text-ink-900 transition-colors hover:bg-emerald-bright"
                >
                  Falar no WhatsApp →
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
