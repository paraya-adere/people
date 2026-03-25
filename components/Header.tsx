"use client";

import { useState } from "react";
import Image from "next/image";

type Page = "home" | "cultura" | "beneficios" | "handbook" | "unete";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onUneteClick?: () => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Inicio", page: "home" },
  { label: "Nuestra cultura", page: "cultura" },
  { label: "Beneficios", page: "beneficios" },
  { label: "Handbook", page: "handbook" },
];

export default function Header({ currentPage, onNavigate, onUneteClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg1/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-ds mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo → adereso.ai */}
        <a
          href="https://adereso.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-r1"
          aria-label="Adereso – Ir a adereso.ai"
        >
          <Image
            src="/assets/logo-adereso.png"
            alt="Adereso"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNavigate(page)}
              className={`font-heading font-medium text-base transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-r1 px-1 py-0.5 ${
                currentPage === page
                  ? "text-brand"
                  : "text-white/75 hover:text-brand"
              }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => { onUneteClick ? onUneteClick() : handleNavigate("unete"); setMenuOpen(false); }}
            className={`font-heading font-semibold text-sm px-5 py-2 rounded-r6 transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${
              currentPage === "unete"
                ? "bg-brand-hover text-neutral-900"
                : "bg-brand text-neutral-900 hover:bg-brand-hover active:bg-brand-active"
            }`}
          >
            Únete
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-r1"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav
          className="md:hidden border-t border-white/10 bg-bg1/95 backdrop-blur-md px-4 pb-5 pt-3 flex flex-col gap-1"
          aria-label="Navegación móvil"
        >
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNavigate(page)}
              className={`font-heading font-medium text-base text-left px-3 py-2.5 rounded-r2 transition-colors duration-150 ${
                currentPage === page
                  ? "text-brand bg-white/[0.05]"
                  : "text-white/75 hover:text-brand hover:bg-white/[0.03]"
              }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => { onUneteClick ? onUneteClick() : handleNavigate("unete"); setMenuOpen(false); }}
            className={`font-heading font-semibold text-sm px-5 py-2.5 mt-2 rounded-r6 transition-colors duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${
              currentPage === "unete"
                ? "bg-brand-hover text-neutral-900"
                : "bg-brand text-neutral-900 hover:bg-brand-hover active:bg-brand-active"
            }`}
          >
            Únete
          </button>
        </nav>
      )}
    </header>
  );
}
