interface BadgeProps {
    name: string;
    level?: string;
}

export function Badge({ name, level }: BadgeProps) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-700 bg-white shadow-2xs">
            <span>{name}</span>
            {level && <span className="text-[10px] text-gray-400 font-normal">{level}</span>}
        </span>
    );
}