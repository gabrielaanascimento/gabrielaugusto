import { FaCog, FaSyncAlt } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

export default function Loading() {
    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#eaeaea] flex items-center justify-center px-6 py-12">
            <div className="max-w-3xl w-full text-center space-y-8">

                {/* Pílula de Status / Carregando */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 bg-transparent">
                        <FaSyncAlt className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                        Sistema — Sincronizando Dados
                    </span>
                </div>

                {/* Título Principal com Engrenagem Girando */}
                <div className="relative flex flex-col items-center justify-center py-6">
                    <div className="text-8xl md:text-9xl font-black font-mono tracking-tighter text-gray-900 select-none opacity-90 flex items-center gap-4">
                        <FaCog className="w-16 h-16 md:w-24 md:h-24 text-gray-800 animate-spin" style={{ animationDuration: '4s' }} />
                    </div>

                    {/* Elementos visuais temáticos simulando compilação de arquitetura */}
                    <div className="absolute -bottom-2 flex items-center gap-6 text-gray-500 font-mono text-xs md:text-sm bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-gray-300 shadow-2xs">
                        <span className="flex items-center gap-1.5 text-blue-600">
                            <FaCog className="animate-spin w-4 h-4" /> FETCHING_DB_RECORDS
                        </span>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span className="flex items-center gap-1.5 text-gray-800">
                            <BiCodeAlt className="w-4 h-4" /> RENDERING_COMPONENTS
                        </span>
                    </div>
                </div>

                {/* Descrição Alinhada com a temática */}
                <div className="max-w-md mx-auto space-y-2">
                    <h2 className="text-xl font-bold text-gray-900 animate-pulse">
                        Carregando Portfólio...
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Estabelecendo conexão segura e compilando os módulos de engenharia e software. Por favor, aguarde um instante.
                    </p>
                </div>

                {/* Barra de Progresso Estilizada (Animada) */}
                <div className="pt-2 flex justify-center">
                    <div className="w-48 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-black animate-pulse rounded-full"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}