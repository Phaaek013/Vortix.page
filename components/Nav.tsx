"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import VortixMark from "./VortixMark";

const links = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink-900/80 backdrop-blur-md"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <VortixMark className="h-7 w-7" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-cream">
            Vortix
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-body text-sm text-slate transition-colors hover:text-cream"
            >
              {label}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/5535984215199"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-4 py-2 font-body text-sm text-mist transition-all hover:border-emerald/40 hover:text-cream sm:px-5"
        >
          <span className="hidden sm:inline">Falar conosco</span>
          <span className="sm:hidden">Contato</span>
        </a>
      </nav>
    </header>
  );
}
