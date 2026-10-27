import { notFound } from "next/navigation";
import Link from "next/link";
import { AREAS_DATA } from "@/app/_constants/areasData";
import { FaArrowLeft, FaCog } from "react-icons/fa";

// 1. Gera as rotas estáticas antecipadamente para evitar o bloqueio de prerender
export async function generateStaticParams() {
    return Object.keys(AREAS_DATA).map((slug) => ({
        slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function AreaDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    const area = AREAS_DATA[slug];

    if (!area) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#eaeaea] py-12 px-6">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Botão Voltar */}
                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs"
                    >
                        <FaArrowLeft className="w-3.5 h-3.5" /> Voltar ao Início
                    </Link>
                </div>

                {/* Topo: Título e Tecnologias */}
                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 bg-white/50">
                            {area.badge}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            {area.title}
                        </h1>
                        <p className="text-gray-600 text-base leading-relaxed">
                            {area.description}
                        </p>
                    </div>

                    {/* Nuvem de Tecnologias */}
                    <div className="bg-white/60 backdrop-blur-md border border-white/80 p-6 rounded-2xl shadow-inner flex flex-wrap gap-2.5 items-center justify-center">
                        {area.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3.5 py-1.5 bg-white text-gray-800 rounded-full text-xs font-semibold border border-gray-200 shadow-2xs hover:scale-105 transition-transform"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Seção de Projetos */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 px-2">
                        Projetos & Realizações
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Grid com os Cards de Projetos */}
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {area.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                                >
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200/60 px-2 py-0.5 rounded-md">
                                            {project.tag}
                                        </span>
                                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-black">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-2 border-t border-gray-200/60 flex items-center justify-between text-xs font-medium text-gray-800">
                                        <span>Ver detalhes</span>
                                        <span>&rarr;</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mockup lateral */}
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[320px]">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/50 pointer-events-none" />

                            <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                                <FaCog className="w-8 h-8 animate-spin" />
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                                Visualização Técnica
                            </h3>
                            <p className="text-xs text-gray-600 max-w-xs">
                                Ambiente interativo estruturado para demonstração de códigos, simulações e modelos 3D desta área.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}