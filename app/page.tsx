"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/pages/HomePage";
import CulturaPage from "@/components/pages/CulturaPage";
import BeneficiosPage from "@/components/pages/BeneficiosPage";
import HandbookPage from "@/components/pages/HandbookPage";
import UnetePage from "@/components/pages/UnetePage";

export type Page = "home" | "cultura" | "beneficios" | "handbook" | "unete";

export default function PeopleWebsite() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [animKey, setAnimKey] = useState(0);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg1">
      <Header currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1 page-in" key={animKey}>
        {currentPage === "home" && <HomePage onNavigate={navigate} />}
        {currentPage === "cultura" && <CulturaPage />}
        {currentPage === "beneficios" && <BeneficiosPage />}
        {currentPage === "handbook" && <HandbookPage />}
        {currentPage === "unete" && <UnetePage />}
      </main>

      <Footer />
    </div>
  );
}
