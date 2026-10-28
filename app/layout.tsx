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
  title: 'Gabriel Augusto | Portfólio & Engenharia',
  description: 'Estudante de Engenharia Mecânica no IFSP e desenvolvedor Full-Stack. Projeto componentes no CAD e construo software que funciona.',
  keywords: ['Desenvolvedor Full-Stack', 'Engenharia Mecânica', 'React', 'Next.js', 'TypeScript', 'Portfólio', 'FEA', 'CAD', 'IFSP', 'Gabriel Augusto', 'Desenvolvimento Web', 'Programação', 'Tecnologia', 'Inovação', 'Projetos de Engenharia', 'Simulação Estrutural', 'Análise de Elementos Finitos', 'Desenvolvimento de Aplicações', 'Engenharia e Tecnologia', 'Tecnico em Informática para internet'],
  authors: [{ name: 'Gabriel Augusto' }],
  creator: 'Gabriel Augusto',

  // Configuração para Redes Sociais (Open Graph)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gabrielaugusto.online',
    title: 'Gabriel Augusto | Portfólio & Engenharia',
    description: 'Estudante de Engenharia Mecânica no IFSP e desenvolvedor Full-Stack.',
    siteName: 'Portfólio Gabriel Augusto',
    images: [
      {
        url: 'https://github.com/gabrielaanascimento/gabrielaugusto/blob/main/public/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Gabriel Augusto Portfólio',
      },
    ],
  },

  // Configuração para o Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Augusto | Portfólio & Engenharia',
    description: 'Estudante de Engenharia Mecânica no IFSP e desenvolvedor Full-Stack.',
    images: ['https://github.com/gabrielaanascimento/gabrielaugusto/blob/main/public/banner.jpg'],
  },

  // Outras configurações (Robôs e Tema)
  robots: {
    index: true,
    follow: true,
  },
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