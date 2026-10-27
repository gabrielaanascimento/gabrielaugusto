import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/_components/layout/Navbar";
import { fetchAllPortfolioData } from "@/services/portfolioService";

// Configurando a fonte Outfit (Sans-serif principal)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Configurando a fonte JetBrains Mono (Monospace para códigos/terminal)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Augusto - Portfólio",
  description: "Engenharia Mecânica & Desenvolvimento Full-Stack",
};

export const instant = false;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Busca os dados diretamente; o app/loading.tsx gerencia a espera de forma global
  const portfolioData = await fetchAllPortfolioData();
  const navLinks = portfolioData?.navigation || [];

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-white text-black font-sans">
        <Navbar navLinks={navLinks} />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}