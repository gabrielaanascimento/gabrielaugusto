import { IOT_DATA } from '@/app/_constants/iot';

export function IoTSection() {
    return (
        <section className="py-16 px-6 flex justify-center">
            {/* Card com efeito Liquid Glass */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 md:p-12 max-w-4xl w-full text-center">

                {/* Pílula Superior */}
                <div className="flex justify-center mb-4">
                    <span className="px-4 py-1 text-xs font-medium border border-[#7ca993] rounded-full text-[#2c523e] bg-white/50">
                        {IOT_DATA.badge}
                    </span>
                </div>

                {/* Título e Descrição */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                    {IOT_DATA.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                    {IOT_DATA.description}
                </p>

                {/* Tags de Tecnologias / Conceitos */}
                <div className="flex flex-wrap justify-center gap-2">
                    {IOT_DATA.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-1.5 rounded-full border border-[#b8d4c5] bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-2xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}