"use client";

import { useState } from "react";
import Carousel from "@/components/Carousel";
import { basePath } from "@/lib/basePath";
import ValorModal, { ValorData } from "@/components/modals/ValorModal";

const valores = [
  {
    title: "Buena onda con propósito",
    desc: "Somos amables, empáticos y respetuosos. Escuchamos de verdad, nos importa el otro y nos gusta trabajar bien con los demás.",
    modal: {
      title: "Buena onda con propósito",
      items: [
        "🎧 Escuchan activamente",
        "🙌🏼 Dan feedback con respeto",
        "🫱🏼‍🫲🏽 Ayudan aunque no se lo pidan",
        "☕️ Crean espacios de confianza",
      ],
    },
  },
  {
    title: "Clever y efectivos",
    desc: "Somos personas que obtienen resultados con el menor esfuerzo posible. Somos curiosas, analíticas, y obsesionadas con mejorar. Automatizamos, aprendemos y usamos la data para decidir mejor.",
    modal: {
      title: "Clever y efectivos",
      items: [
        "🔧 Proponen mejoras y definen procesos",
        "💾 Automatizan tareas repetitivas",
        "👾 Meten las manos en la masa y aprenden nuevas herramientas",
        "✅ Usan datos para sustentar decisiones",
        "🚀 Logran resultados con el menor esfuerzo posible",
      ],
    },
  },
  {
    title: "Ejecutores sin excusas",
    desc: "Somos autónomos, nos hacemos cargo y no nos quedamos esperando. Nos gusta resolver, sumar y llegar al resultado.",
    modal: {
      title: "Ejecutores sin excusas",
      items: [
        "🙋🏻‍♀️ Toman la iniciativa",
        "⭐️ Resuelven sin que se lo pidan",
        "👨🏽‍💻 Trabajan en equipo y colaboran sin traspasar problemas",
        "🚀 Cumplen objetivos con foco en el impacto organizacional",
        "🤩 Transmiten una ética laboral de responsabilidad y orientación al logro",
      ],
    },
  },
];

const virtudes = [
  {
    title: "Asumimos siempre la mejor intención",
    desc: "Preferimos confiar antes que desconfiar. No asumimos intencionalidad.",
    highlight: "confiar antes que desconfiar",
  },
  {
    title: "No a lo repetitivo",
    desc: "Si algo se repite más de dos veces, lo automatizamos.",
    highlight: "lo automatizamos",
  },
  {
    title: "Lo perfecto es enemigo de lo bueno",
    desc: "No nos quedamos pegados buscando el ideal. Avanzamos y entregamos valor de manera ágil.",
    highlight: "Avanzamos y entregamos valor",
  },
  {
    title: "Mejor pedir perdón que pedir permiso",
    desc: "Tomamos decisiones con criterio. No todo necesita aprobación previa.",
    highlight: "No todo necesita aprobación previa",
  },
  {
    title: "Todos podemos crear software con IA",
    desc: "Creemos en el aprendizaje continuo y en empoderar a todos con tecnología.",
    highlight: "aprendizaje continuo",
  },
  {
    title: "Feedback siempre, radical candor",
    desc: "Nos decimos las cosas, incluso las difíciles, siempre con empatía.",
    highlight: "siempre con empatía",
  },
];

function highlightText(text: string, highlight: string) {
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <strong className="text-white font-semibold">{highlight}</strong>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export default function CulturaPage() {
  const [selectedValor, setSelectedValor] = useState<ValorData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openValorModal = (valor: ValorData) => {
    setSelectedValor(valor);
    setModalOpen(true);
  };

  return (
    <>
      <section
        className="relative py-12 sm:py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${basePath}/bg-nh.png)`,
          backgroundSize: "200%",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-bg1/70 pointer-events-none" />
        <div className="relative max-w-ds mx-auto px-4 sm:px-6">
          {/* Así somos – Gallery */}
          <div className="mb-16 sm:mb-28">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center mb-3">
              Así somos
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 text-center mb-6 sm:mb-10">
              Un vistazo a nuestro día a día
            </p>
            <Carousel />
          </div>

          {/* Valores */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center mb-6 sm:mb-10">
            Valores organizacionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-16 sm:mb-28">
            {valores.map((v) => (
              <article
                key={v.title}
                className="rounded-r3 border border-white/10 bg-white/[0.03] p-6 flex flex-col hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <h3 className="font-heading font-semibold text-xl text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-base text-zinc-400 leading-relaxed">{v.desc}</p>
                <button
                  onClick={() => openValorModal(v.modal)}
                  className="mt-auto pt-4 text-base text-brand underline underline-offset-2 font-heading font-semibold hover:opacity-75 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-r1 self-start"
                >
                  Conoce aquí cómo lo vemos reflejado
                </button>
              </article>
            ))}
          </div>

          {/* Virtudes */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center mb-6 sm:mb-10">
            Virtudes de nuestra cultura
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 sm:mb-28">
            {virtudes.map((v, i) => (
              <article
                key={v.title}
                className="group rounded-r3 border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] hover:border-brand/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <span className="font-heading text-sm font-semibold text-brand/40 tracking-wider mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-semibold text-lg text-white mb-2 leading-snug">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {highlightText(v.desc, v.highlight)}
                </p>
              </article>
            ))}
          </div>

          {/* Misión & Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <article className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="text-brand flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
                <h3 className="font-heading font-semibold text-xl text-white">Misión</h3>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Nuestra misión es simplificar la relación entre las empresas y sus clientes
                mediante innovación continua.
              </p>
            </article>
            <article className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="text-brand flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <h3 className="font-heading font-semibold text-xl text-white">Visión</h3>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Ser la suite líder mundial en experiencia y relación con el cliente, pioneros
                en tecnología y ser reconocidos como un excelente lugar para trabajar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ValorModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        valor={selectedValor}
      />
    </>
  );
}
