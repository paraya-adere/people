"use client";

import Modal from "./Modal";

interface ProcesoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  "Evaluación de CV",
  "Entrevista online con People",
  "Evaluación técnica",
  "Entrevista con el líder del área",
  "Entrevista con el CEO",
  "Oferta",
];

export default function ProcesoModal({ isOpen, onClose }: ProcesoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-4 pt-10 sm:p-8 sm:pt-10">
        <h3 className="font-heading font-semibold text-2xl text-white mb-3">
          Etapas del proceso
        </h3>
        <p className="text-base text-zinc-400 leading-relaxed mb-6 pr-6">
          Nuestro proceso está diseñado para conocerte mejor, evaluar tus habilidades y
          que también puedas conocer cómo trabajamos en Adereso.
        </p>

        <div className="timeline flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="timeline-step"
              data-num={String(i + 1)}
            >
              <p className="font-body text-base text-zinc-300 leading-snug m-0">{step}</p>
            </div>
          ))}
        </div>

        <p className="text-base text-zinc-400 leading-relaxed mt-6 pt-5 border-t border-white/10">
          A medida que avances, te iremos informando del estado de tu postulación por
          correo electrónico.
        </p>
      </div>
    </Modal>
  );
}
