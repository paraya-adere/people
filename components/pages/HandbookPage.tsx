"use client";

const cards = [
  {
    title: "Cómo trabajamos",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD540" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    paragraphs: [
      "Trabajamos con foco en impacto, velocidad y mejora continua. Priorizamos avanzar por sobre la perfección, automatizar lo repetitivo y tomar decisiones basadas en datos.",
      "Nos organizamos de forma colaborativa, con equipos autónomos que se hacen cargo de sus resultados. Fomentamos el feedback directo, la comunicación transparente y el uso activo de inteligencia artificial para optimizar procesos y escalar nuestro trabajo.",
    ],
    subtitle: null,
    list: null,
  },
  {
    title: "Onboarding",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD540" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    paragraphs: [
      "Desde tu primer día buscamos que tengas claridad, contexto y autonomía para empezar a generar impacto.",
    ],
    subtitle: "Durante tus primeras semanas:",
    list: [
      "Conocerás al equipo y cómo trabajamos",
      "Tendrás acceso a nuestras herramientas y procesos",
      "Recibirás acompañamiento cercano de tu líder",
      "Empezarás a involucrarte en tareas reales desde el inicio",
    ],
    outro: "Creemos en aprender haciendo, con feedback constante y espacios de confianza para preguntar, proponer y construir.",
  },
  {
    title: "Herramientas que usamos",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD540" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    paragraphs: [
      "Trabajamos con un stack moderno que nos permite colaborar, automatizar y tomar decisiones informadas.",
    ],
    subtitle: "Usamos herramientas para:",
    list: [
      "Comunicación y colaboración del equipo",
      "Gestión de proyectos y tareas",
      "Análisis de datos y seguimiento de métricas",
      "Automatización de procesos",
      "Uso de inteligencia artificial en el día a día",
    ],
    outro: "Promovemos que todos puedan experimentar, aprender nuevas herramientas y construir soluciones que mejoren su forma de trabajar.",
  },
];

export default function HandbookPage() {
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
          Handbook
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-r3 border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col gap-3 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="mb-1">{c.icon}</div>
              <h3 className="font-heading font-semibold text-xl text-white">{c.title}</h3>
              {c.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-zinc-400 leading-relaxed">{p}</p>
              ))}
              {c.subtitle && (
                <p className="font-heading font-semibold text-base text-white mt-1">{c.subtitle}</p>
              )}
              {c.list && (
                <ul className="space-y-1.5 pl-0">
                  {c.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-zinc-400 leading-snug">
                      <svg className="flex-shrink-0 mt-0.5 text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {"outro" in c && c.outro && (
                <p className="text-base text-zinc-400 leading-relaxed">{c.outro as string}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
