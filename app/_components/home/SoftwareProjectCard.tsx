import { SoftwareProject } from '@/app/_types';
import { Badge } from '@/app/_components/ui/Badge';

export function SoftwareProjectCard({ project }: { project: SoftwareProject }) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
                {/* Banner Escuro com Gradiente na base */}
                <div className="relative h-40 bg-[#121212] flex items-center justify-center p-4">
                    <span className="font-mono text-green-400 font-bold text-lg tracking-wide">
                        {project.bannerText}
                    </span>

                    {/* Gradiente sutil cobrindo a parte inferior da imagem/banner */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-b from-transparent to-white/10" />
                </div>

                {/* Detalhes do Projeto com margem negativa para sobrepor o banner */}
                <div className="relative -mt-6 p-6 bg-white rounded-t-3xl">
                    <h3 className="font-bold text-gray-900 text-base mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} name={tag} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Botão Ver Projeto */}
            <div className="px-6 pb-6 pt-0">
                <button className="w-full bg-black text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors shadow-xs">
                    Ver Projeto
                </button>
            </div>
        </div>
    );
}