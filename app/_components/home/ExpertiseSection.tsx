import Link from 'next/link';

export function ExpertiseSection() {
    const areas = [
        {
            title: "Engenharia Mecânica",
            description: "Modelagem CAD 3D, análise estrutural (FEA), simulações CFD, materiais compósitos e manufatura.",
            link: "/operation/engenharia-mecanica",
        },
        {
            title: "Desenvolvimento de Software",
            description: "Aplicações web, mobile e back-end com React, React Native, Node.js, PHP e Python.",
            link: "/operation/desenvolvimento-software",
        },
        {
            title: "Sistemas Embarcados & IoT",
            description: "ESP32, Raspberry Pi, sensores e telemetria — a ponte entre o físico e o digital.",
            link: "/operation/iot-sistemas-embarcados",
        },
    ];

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Caixa Principal com efeito Liquid Glass e espaçamento responsivo */}
                <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 md:p-12 w-full">

                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Áreas de Atuação
                    </h2>

                    {/* Grid responsivo: empilhado em mobile (1 coluna) e lado a lado em telas médias/grandes (3 colunas) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {areas.map((area, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/60 backdrop-blur-lg border border-white/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {area.description}
                                    </p>
                                </div>

                                <Link
                                    href={area.link}
                                    className="inline-flex items-center text-sm font-semibold text-black group-hover:translate-x-1 transition-transform"
                                >
                                    Ver mais &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}