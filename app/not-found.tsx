import Link from 'next/link';
import { FaCog, FaExclamationTriangle } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#eaeaea] flex items-center justify-center px-6 py-12">
            <div className="max-w-3xl w-full text-center space-y-8">

                {/* Pílula de Alerta */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 bg-transparent">
                        <FaExclamationTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Erro 404 — Rota Não Mapeada
                    </span>
                </div>

                {/* Título Principal 404 Estilo Terminal / Blueprint */}
                <div className="relative flex flex-col items-center justify-center py-6">
                    <h1 className="text-8xl md:text-9xl font-black font-mono tracking-tighter text-gray-900 select-none opacity-90">
                        404
                    </h1>

                    {/* Elementos visuais temáticos simulando falha de sistema / engenharia */}
                    <div className="absolute flex items-center gap-6 text-gray-500 font-mono text-xs md:text-sm bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-gray-300 shadow-2xs">
                        <span className="flex items-center gap-1.5 text-red-600">
                            <FaCog className="animate-spin w-4 h-4" /> CAD_ERR_NOT_FOUND
                        </span>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span className="flex items-center gap-1.5 text-gray-800">
                            <BiCodeAlt className="w-4 h-4" /> 404_ROUTE_EXCEPTION
                        </span>
                    </div>
                </div>

                {/* Descrição Alinhada com a temática */}
                <div className="max-w-md mx-auto space-y-2">
                    <h2 className="text-xl font-bold text-gray-900">
                        Página não encontrada!
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        O componente ou rota que você está procurando não existe, foi movido ou sofreu uma falha estrutural. Vamos retornar à base.
                    </p>
                </div>

                {/* Botão de Retorno */}
                <div className="pt-4 flex justify-center">
                    <Link
                        href="/"
                        className="bg-black text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-md inline-flex items-center gap-2"
                    >
                        &larr; Voltar para o Início
                    </Link>
                </div>

            </div>
        </div>
    );
}