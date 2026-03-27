"use client";

type Page = "home" | "cultura" | "beneficios" | "handbook" | "unete";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const navCards: {
  page: Page;
  title: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    page: "unete",
    title: "Únete al equipo",
    desc: "Vacantes y proceso de selección",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    page: "cultura",
    title: "Nuestra cultura",
    desc: "Valores, misión y virtudes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    page: "beneficios",
    title: "Beneficios",
    desc: "Chile, México y Global",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"/>
        <rect x="2" y="7" width="20" height="5"/>
        <line x1="12" y1="22" x2="12" y2="7"/>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
      </svg>
    ),
  },
  {
    page: "handbook",
    title: "Handbook",
    desc: "Cómo trabajamos, onboarding y herramientas",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
];

const BUK_URL = "https://adereso.buk.cl/trabaja-con-nosotros#Procesos_de_Sel";

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <section
      className="relative min-h-[calc(100vh-64px)] flex items-center px-4 sm:px-6 py-10 sm:py-16 overflow-hidden"
      style={{
        backgroundImage: "url(/bg-nh.png)",
        backgroundSize: "200%",
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-bg1/80 pointer-events-none" />
      <div className="relative max-w-ds mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.15] mb-4 sm:mb-5">
            Construimos el futuro de la{" "}
            <span className="text-brand">experiencia del cliente</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
            Únete a un equipo que combina tecnología, cultura y ejecución real
          </p>

          <a
            href={BUK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading font-semibold text-sm px-6 py-2.5 rounded-r6 bg-brand text-neutral-900 hover:bg-brand-hover active:bg-brand-active transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
          >
            Ver vacantes
          </a>

          {/* Navigation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mt-8 sm:mt-14">
            {navCards.map(({ page, title, desc, icon }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="flex items-start gap-3 text-left p-4 sm:p-5 rounded-r3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand/30 transition-all duration-200 hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                <span className="flex-shrink-0 text-brand mt-0.5 transition-transform duration-200 group-hover:scale-110">
                  {icon}
                </span>
                <span className="flex flex-col gap-0.5 sm:gap-1">
                  <span className="font-heading font-semibold text-lg sm:text-xl text-white">
                    {title}
                  </span>
                  <span className="font-body text-sm sm:text-base text-zinc-500 leading-snug">
                    {desc}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
