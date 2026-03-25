"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { basePath } from "@/lib/basePath";

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  { src: `${basePath}/assets/gallery-1.png`, alt: "Paseo Team Chile 2026", caption: "Paseo Team Chile 2026" },
  { src: `${basePath}/assets/gallery-2.png`, alt: "Paseo Team Colombia 2025", caption: "Paseo Team Colombia 2025" },
  { src: `${basePath}/assets/gallery-fiesta.png`, alt: "Halloween Virtual 2025", caption: "Halloween Virtual 2025" },
  { src: `${basePath}/assets/gallery-halloween-ofi-2025.png`, alt: "Halloween Ofi 2025", caption: "Halloween Ofi 2025" },
  { src: `${basePath}/assets/gallery-suelta-chisme.png`, alt: "Sesión Suelta tu chisme", caption: "Sesión Suelta tu chisme" },
  { src: `${basePath}/assets/gallery-meet.png`, alt: "Halloween Virtual 2021", caption: "Halloween Virtual 2021" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = slides.length;

  const go = useCallback((index: number) => {
    setCurrent(((index % n) + n) % n);
  }, [n]);

  const armTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!paused) setCurrent((c) => (c + 1) % n);
    }, 5000);
  }, [paused, n]);

  useEffect(() => {
    armTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [armTimer]);

  const prev = () => { go(current - 1); armTimer(); };
  const next = () => { go(current + 1); armTimer(); };

  return (
    <div
      className="max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería del equipo"
    >
      {/* Frame */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Prev arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/[0.06] text-white text-xl sm:text-2xl leading-none hover:bg-brand/15 hover:border-brand hover:text-brand transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        >
          ‹
        </button>

        {/* Viewport */}
        <div className="flex-1 overflow-hidden rounded-r3 sm:rounded-2xl bg-[#0a0a0a] border border-white/10 min-h-[200px] sm:min-h-[300px] md:min-h-[360px] max-h-[300px] sm:max-h-[440px] md:max-h-[560px]">
          <div
            className="flex h-full transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)`, transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full min-h-[200px] sm:min-h-[300px] md:min-h-[360px] max-h-[300px] sm:max-h-[440px] md:max-h-[560px] flex items-center justify-center p-2 sm:p-4"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1024}
                  height={768}
                  className="max-w-full max-h-[260px] sm:max-h-[400px] md:max-h-[520px] w-auto h-auto object-contain"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente foto"
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/[0.06] text-white text-xl sm:text-2xl leading-none hover:bg-brand/15 hover:border-brand hover:text-brand transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        >
          ›
        </button>
      </div>

      {/* Caption */}
      <p className="text-center mt-2 sm:mt-3 min-h-[1.5rem]">
        <span className="font-heading text-sm sm:text-base font-semibold text-zinc-400 tracking-wide">
          {slides[current].caption}
        </span>
      </p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3" role="tablist" aria-label="Seleccionar foto">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Foto ${i + 1}`}
            onClick={() => { go(i); armTimer(); }}
            className={`w-2 h-2 rounded-full border-none p-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${
              i === current
                ? "bg-brand scale-110"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
