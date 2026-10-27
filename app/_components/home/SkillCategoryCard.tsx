import { SkillGroup } from '@/app/_types';
import { Badge } from '@/app/_components/ui/Badge';

export function SkillCategoryCard({ group }: { group: SkillGroup }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs flex flex-col justify-start">
            <h3 className="font-bold text-gray-900 text-sm mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <Badge key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
}