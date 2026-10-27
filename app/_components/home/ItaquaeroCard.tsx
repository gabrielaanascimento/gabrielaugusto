import { ITAQUAERO_FEATURES } from '@/app/_constants/engineering';

export function ItaquaeroCard() {
    return (
        <div className="w-full bg-[#f8fafc] border border-gray-300 rounded-3xl p-6 md:p-10 relative overflow-hidden bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">

            {/* Topo do Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
                <div>
                    <span className="text-xs font-mono tracking-wider text-blue-900 uppercase font-semibold">
                        SAE Brasil Aerodesign · IFSP
                    </span>
                    <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
                        Projeto Itaquaero
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Integrante ativo da equipe de Aerodesign, participando do projeto, simulação e fabricação de uma aeronave rádio-controlada para competição.
                    </p>
                </div>

                {/* Desenho Técnico Vectorial do Avião */}
                <div className="flex justify-center items-center py-4">
                    <svg className="w-full max-w-sm h-36 text-blue-950" viewBox="0 0 300 120" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {/* Eixo Central */}
                        <line x1="20" y1="60" x2="280" y2="60" strokeDasharray="3 3" />
                        <circle cx="30" cy="60" r="4" fill="currentColor" />
                        {/* Asa Principal */}
                        <polygon points="60,60 100,10 160,10 200,60 160,110 100,110" strokeWidth="2" />
                        {/* Estabilizador Traseiro */}
                        <polygon points="230,60 250,30 270,30 280,60 270,90 250,90" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            {/* Grid com os 4 sub-blocos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ITAQUAERO_FEATURES.map((feature, idx) => (
                    <div key={idx} className="bg-white/90 backdrop-blur-2xs border border-gray-200 rounded-xl p-5 border-l-4 border-l-blue-900 shadow-2xs">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}