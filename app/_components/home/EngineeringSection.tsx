import { ENGINEERING_SKILLS } from '@/app/_constants/engineering';
import { SkillCategoryCard } from './SkillCategoryCard';
import { ItaquaeroCard } from './ItaquaeroCard';

export function EngineeringSection() {
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

        {/* Grid de Competências */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ENGINEERING_SKILLS.map((group) => (
            <SkillCategoryCard key={group.category} group={group} />
          ))}
        </div>

        {/* Projeto Itaquaero */}
        <ItaquaeroCard />

      </div>
    </section>
  );
}