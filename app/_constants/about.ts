import { SocialLink, TimelineItem } from '@/app/_types';

export const SOCIAL_LINKS: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Contato', href: '/contato' },
];

export const EDUCATION_TIMELINE: TimelineItem[] = [
    {
        period: '2026 – Atual',
        title: 'Bacharelado em Engenharia Mecânica',
        institution: 'IFSP – Campus Itaquaquecetuba',
    },
    {
        period: '2023 – 2025',
        title: 'Técnico em Informática para Internet (Mtec)',
        institution: 'ETEC de Poá',
    },
];