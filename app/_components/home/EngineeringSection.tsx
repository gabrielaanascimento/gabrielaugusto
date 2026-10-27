import { SkillCategoryCard } from './SkillCategoryCard';
import { ItaquaeroCard } from './ItaquaeroCard';

interface EngineeringSectionProps {
  engineeringProjects?: any[]; // Você pode tipar melhor com a interface do seu Prisma se preferir
}

export function EngineeringSection({ engineeringProjects = [] }: EngineeringSectionProps) {
  return (
    <section id="engineering" className="py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 mb-4 bg-transparent">
            ⚙ Engenharia Mecânica
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Projetos & Competências em Engenharia
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Do modelo 3D à peça fabricada, com validação por simulação.
          </p>
        </div>

        {/* Grid de Projetos de Engenharia vindos do banco (se houver) */}
        {engineeringProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {engineeringProjects.map((project) => (
              <div key={project.id} className="p-6 border border-gray-300 rounded-lg bg-white shadow-xs">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projeto Itaquaero */}
        <ItaquaeroCard />

      </div>
    </section>
  );
}