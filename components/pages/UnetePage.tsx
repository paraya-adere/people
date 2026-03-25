"use client";

import { useState } from "react";
import VacantesModal from "@/components/modals/VacantesModal";
import ProcesoModal from "@/components/modals/ProcesoModal";

interface UnetePageProps {
  openVacantes?: boolean;
}

export default function UnetePage({ openVacantes = false }: UnetePageProps) {
  const [vacantesOpen, setVacantesOpen] = useState(openVacantes);
  const [procesoOpen, setProcesoOpen] = useState(false);

  return (
    <>
      <section
        className="relative py-10 sm:py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${process.env.NODE_ENV === "production" ? "/people" : ""}/bg-nh.png)`,
          backgroundSize: "200%",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-bg1/70 pointer-events-none" />
        <div className="relative max-w-ds mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center mb-6 sm:mb-10">
            Únete al equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto">
            {/* Vacantes */}
            <article className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col gap-3 hover:border-white/20 transition-colors duration-200">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-white">
                Vacantes abiertas
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed flex-1">
                Revisa las posiciones disponibles y postula.
              </p>
              <button
                onClick={() => setVacantesOpen(true)}
                className="self-start font-heading font-semibold text-sm px-5 py-2 rounded-r6 bg-brand text-neutral-900 hover:bg-brand-hover active:bg-brand-active transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                Ver vacantes
              </button>
            </article>

            {/* Proceso */}
            <article className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col gap-3 hover:border-white/20 transition-colors duration-200">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-white">
                Proceso de selección
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed flex-1">
                Conoce las etapas y qué esperar en cada una.
              </p>
              <button
                onClick={() => setProcesoOpen(true)}
                className="self-start font-heading font-semibold text-sm px-5 py-2 rounded-r6 border border-white/10 text-white hover:border-brand/40 hover:text-brand transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                Saber más
              </button>
            </article>
          </div>
        </div>
      </section>

      <VacantesModal isOpen={vacantesOpen} onClose={() => setVacantesOpen(false)} />
      <ProcesoModal isOpen={procesoOpen} onClose={() => setProcesoOpen(false)} />
    </>
  );
}
