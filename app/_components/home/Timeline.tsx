import { EDUCATION_TIMELINE } from '@/app/_constants/about';

export function Timeline() {
    return (
        <div className="relative border-l-2 border-gray-900 pl-6 space-y-8 ml-1">
            {EDUCATION_TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                    {/* Círculo indicador na linha */}
                    <span className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-gray-900" />

                    {/* Período */}
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wide block mb-1">
                        {item.period}
                    </span>

                    {/* Título do Curso/Grau */}
                    <h4 className="text-base font-bold text-gray-900">
                        {item.title}
                    </h4>

                    {/* Instituição */}
                    <p className="text-sm text-gray-500 font-medium mt-0.5">
                        {item.institution}
                    </p>
                </div>
            ))}
        </div>
    );
}