import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "People & Careers | Únete al equipo",
  description:
    "Únete a Adereso. Construimos el futuro de la experiencia del cliente.",
  icons: {
    icon: "/Adereso-logo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.variable} ${workSans.variable} bg-bg1 text-zinc-300 antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
