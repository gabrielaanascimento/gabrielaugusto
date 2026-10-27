import { Badge } from "@/app/_components/ui/Badge";

interface SkillCategoryCardProps {
    group: {
        id?: string;
        title?: string;
        category?: string;
        description?: string;
        skills?: Array<{ name: string; level?: string }>;
    };
}

export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
    // Se o banco não tiver skills cadastradas, usamos um array vazio para não quebrar o .map()
    const skillsList = group.skills || [];

    return (
        <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-xs">
            <h3 className="font-bold text-gray-900 text-sm mb-2">
                {group.title || group.category || "Competência"}
            </h3>
            {group.description && (
                <p className="text-gray-600 text-xs mb-4">{group.description}</p>
            )}

            <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                    <Badge key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
}