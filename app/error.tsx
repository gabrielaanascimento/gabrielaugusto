'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Particles } from "@/components/ui/particles";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Opcional: log do erro para monitoramento
        console.error('Erro capturado no layout:', error);
    }, [error]);

    return (
        <div className="relative min-h-screen bg-[#eaeaea] flex items-center justify-center px-6">
            <div className="relative z-10 max-w-md w-full text-center space-y-6">
                {/* Badge Superior */}
                <span className="px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 bg-transparent inline-block">
                    Erro 500
                </span>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Algo deu errado
                </h1>

                {/* Descrição */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Ocorreu um imprevisto ao carregar os dados. Pode ser uma oscilação temporária na conexão com o banco de dados.
                </p>

                {/* Botões de Ação */}
                <div className="flex items-center justify-center gap-4 pt-4">
                    <button
                        onClick={
                            // Tenta recuperar executando a renderização novamente
                            () => reset()
                        }
                        className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-md"
                    >
                        Tentar novamente
                    </button>

                    <Link
                        href="/"
                        className="px-6 py-2.5 rounded-full border border-gray-800 text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
                    >
                        Voltar ao início
                    </Link>
                </div>
            </div>

            {/* Partículas de fundo mantendo a identidade visual */}
            <Particles
                className="fixed inset-0 z-0 pointer-events-none"
                quantity={200}
                ease={80}
                color={"#000000"}
                refresh
            />
        </div>
    );
}