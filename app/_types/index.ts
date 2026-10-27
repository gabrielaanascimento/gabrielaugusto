export interface ExpertiseItem {
    id: string;
    title: string;
    description: string;
    iconBgColor: string; // Cor do fundo do ícone
    topBorderColor: string; // Cor da linha superior do card
    icon: 'gear' | 'code' | 'chip';
    link: string;
}

export interface TimelineItem {
    period: string;
    title: string;
    institution: string;
}

export interface SocialLink {
    label: string;
    href: string;
}

export interface SkillGroup {
    category: string;
    skills: { name: string; level?: string }[];
}

export interface SubProjectFeature {
    title: string;
    description: string;
}

export type SoftwareCategory = 'Todos' | 'Web' | 'Back-end' | 'Mobile';

export interface SoftwareProject {
    id: string;
    title: string;
    description: string;
    category: 'Web' | 'Back-end' | 'Mobile';
    tags: string[];
    bannerText: string;
    link?: string;
}