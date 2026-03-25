"use client";

const countries = [
  {
    name: "Chile",
    emoji: "🇨🇱",
    benefits: [
      "15 días extras administrativos al año",
      "Trabajo híbrido",
      "Flexibilidad horaria",
      "Medio día de descanso por cumpleaños",
      "Capacitación continua con Platzi",
      "Seguro complementario de Salud + Dental (BICE VIDA)",
      "Se pagan los 3 primeros días de licencia",
      "Aguinaldo Fiestas Patrias (75.000)",
      "Aguinaldo Navidad (135.000)",
    ],
  },
  {
    name: "México",
    emoji: "🇲🇽",
    benefits: [
      "18 días extra administrativos al año",
      "Medio día de descanso por cumpleaños y te mandamos un detallito para endulzar tu día",
      "Capacitación continua con Platzi & Masterclass",
      "Seguro de gastos médicos mayores (Kalmy)",
      "30 días de aguinaldo en total (15 obligatorio + 15 adicionales)",
    ],
  },
  {
    name: "Global",
    emoji: "🌍",
    benefits: [
      "15 días administrativos al año",
      "Medio día de descanso por cumpleaños",
      "Capacitación continua con Platzi",
      "Aguinaldo Navidad (150 USD)",
      "Aguinaldo Festivos (78 USD)",
    ],
  },
];

export default function BeneficiosPage() {
  return (
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
          Beneficios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {countries.map((c) => (
            <article
              key={c.name}
              className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="font-heading font-semibold text-xl text-white mb-4">
                {c.emoji} {c.name}
              </h3>
              <ul className="space-y-2.5">
                {c.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-zinc-400 leading-snug">
                    <svg className="flex-shrink-0 mt-0.5 text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
