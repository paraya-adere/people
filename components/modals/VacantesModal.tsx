"use client";

import Modal from "./Modal";

interface VacantesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const vacantes = [
  {
    emoji: "🔐",
    title: "Analista de Seguridad de la Información",
    desc: "Serás responsable de operar, mantener y evolucionar nuestro SGSI, asegurando el cumplimiento de estándares como ISO 27001 y liderando el roadmap hacia SOC 2 y CAS, alineando la seguridad con producto, tecnología y crecimiento.",
    location: "Santiago de Chile",
    url: "https://shorturl.at/LKS3e",
  },
  {
    emoji: "🤝",
    title: "Key Account Manager",
    desc: "Para quien disfrute construir relaciones estratégicas y generar crecimiento sostenible en clientes B2B. Serás responsable de gestionar y expandir cuentas existentes, impulsando el ARR mediante estrategias de upsell y cross-sell, asegurando renovaciones exitosas y reduciendo el churn a través de una gestión consultiva y orientada a resultados.",
    location: "Santiago de Chile",
    url: "https://shorturl.at/1b2j0",
  },
  {
    emoji: "✨",
    title: "Customer Success Manager",
    desc: "Una oportunidad para quienes disfrutan acompañar a los clientes en su crecimiento y convertirse en un socio estratégico en su día a día. Serás responsable de impulsar la retención y expansión de tu cartera, asegurando una adopción exitosa de nuestros productos.",
    location: "Santiago de Chile",
    url: "https://shorturl.at/P31sY",
  },
];

export default function VacantesModal({ isOpen, onClose }: VacantesModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="p-4 pt-10 sm:p-8 sm:pt-10">
        {vacantes.length > 0 ? (
          <>
            <h3 className="font-heading font-semibold text-2xl text-white mb-6">
              Posiciones abiertas
            </h3>
            <div className="flex flex-col gap-4">
              {vacantes.map((v, i) => (
                <article
                  key={i}
                  className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-colors duration-150"
                >
                  <h4 className="font-heading font-semibold text-xl text-white mb-2">
                    {v.emoji} {v.title}
                  </h4>
                  <p className="text-base text-zinc-400 leading-relaxed mb-3">{v.desc}</p>
                  <p className="text-base text-brand font-medium mb-4">📍 {v.location}</p>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-r6 bg-brand text-neutral-900 font-heading font-semibold text-sm hover:bg-brand-hover active:bg-brand-active transition-colors duration-200"
                  >
                    Postula aquí
                  </a>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="font-heading font-semibold text-2xl text-white mb-3">
              No hay vacantes abiertas por ahora
            </h3>
            <p className="text-base text-zinc-400 leading-relaxed max-w-md mx-auto">
              Estamos constantemente creciendo. Mantente atento, pronto publicaremos nuevas oportunidades para unirte al equipo.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
