import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaCog } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

export function Footer() {
    const currentYear = 2026; // Ano fixo ou dinâmico sem quebrar o build estático

    return (
        <footer className="w-full bg-[#eaeaea] py-12 px-6 border-t border-gray-300/60 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Lado Esquerdo: Identidade e Frase Técnica */}
                <div className="text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="font-mono font-bold text-gray-900 text-base tracking-tight">
                            Gabriel Augusto
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                            <FaCog className="w-3 h-3 text-gray-700 animate-spin" /> Mecânica
                            <span className="text-gray-300">&bull;</span>
                            <BiCodeAlt className="w-3.5 h-3.5 text-gray-700" /> Software
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 max-w-sm">
                        Engenharia e desenvolvimento de sistemas integrados com foco em alta performance e minimalismo.
                    </p>
                </div>

                {/* Centro: Links Rápidos */}
                <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-gray-700">
                    <Link href="/" className="hover:text-black transition-colors">
                        Início
                    </Link>
                    <Link href="/projects" className="hover:text-black transition-colors">
                        Projetos
                    </Link>
                    <Link href="/#contact" className="hover:text-black transition-colors">
                        Contato
                    </Link>
                </div>

                {/* Lado Direito: Redes Sociais com Estilo Liquid Glass */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-2xs flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                        href="https://linkedin.com/in/gabriel-augusto-assis-nascimento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-2xs flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="mailto:gabrielaugustoassisnascimento@gmail.com"
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-2xs flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all"
                        aria-label="E-mail"
                    >
                        <FaEnvelope className="w-4 h-4" />
                    </a>
                </div>

            </div>

            {/* Linha de Direitos Autorais */}
            <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-300/40 text-center text-[11px] text-gray-500 font-mono">
                &copy; {currentYear} Gabriel Augusto. Todos os direitos reservados.
            </div>
        </footer>
    );
}