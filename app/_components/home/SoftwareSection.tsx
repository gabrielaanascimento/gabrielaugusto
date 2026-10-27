'use client';

import { useState } from 'react';
import { SoftwareCategory } from '@/app/_types';
import { SkillCategoryCard } from './SkillCategoryCard';
import { SoftwareProjectCard } from './SoftwareProjectCard';

const CATEGORIES: SoftwareCategory[] = ['Todos', 'Web', 'Back-end', 'Mobile'];

interface SoftwareSectionProps {
    softwareProjects: any[];
    softwareSkills: any[];
}

export function SoftwareSection({ softwareProjects = [], softwareSkills = [] }: SoftwareSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<SoftwareCategory>('Todos');

    const filteredProjects = softwareProjects.filter((project) =>
        selectedCategory === 'Todos' ? true : project.category === selectedCategory
    );

    return (
        <section id="software" className="py-16 px-6 flex justify-center">
            <div className="max-w-6xl w-full">

                {/* Cabeçalho */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 mb-4 bg-transparent">
                        &lt;/&gt; Desenvolvimento
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Meus Projetos de Software
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Alguns dos trabalhos que desenvolvi, com foco em performance e usabilidade.
                    </p>
                </div>

                {/* Competências de Software vindas do Banco */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {softwareSkills.map((group) => (
                        <SkillCategoryCard key={group.id} group={group} />
                    ))}
                </div>

                {/* Filtros por Categoria */}
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${selectedCategory === cat
                                    ? 'bg-black text-white shadow-xs'
                                    : 'bg-transparent text-gray-800 border border-gray-400 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid dos Projetos Filtrados */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <SoftwareProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}