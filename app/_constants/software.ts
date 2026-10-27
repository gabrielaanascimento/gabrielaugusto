import { SkillGroup, SoftwareProject } from '@/app/_types';

export const SOFTWARE_SKILLS: SkillGroup[] = [
    {
        category: 'Front-end & Mobile',
        skills: [
            { name: 'React' }, { name: 'Next.js' }, { name: 'React Native' },
            { name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' },
        ],
    },
    {
        category: 'Back-end & Dados',
        skills: [
            { name: 'Node.js' }, { name: 'Express' }, { name: 'PHP' }, { name: 'Python' },
            { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'SQLite' },
            { name: 'MongoDB' }, { name: 'Firebase' }, { name: 'REST APIs' },
        ],
    },
    {
        category: 'Ferramentas',
        skills: [
            { name: 'Git' }, { name: 'GitHub' }, { name: 'Vercel' }, { name: 'Gemini API' },
        ],
    },
];

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
    {
        id: 'crud-usuarios',
        title: 'CRUD Usuários',
        description: 'Projeto back-end de uma API REST para gerenciar usuários.',
        category: 'Back-end',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'Git'],
        bannerText: '{ API }',
    },
    {
        id: 'chat-imobiliaria',
        title: 'Chat Imobiliária',
        description: 'Chatbot com modelo de IA para auxiliar imobiliárias e corretores.',
        category: 'Web',
        tags: ['Node.js', 'Express', 'HTML', 'CSS', 'Gemini'],
        bannerText: 'AI · chat',
    },
    {
        id: 'previsao-tempo',
        title: 'Previsão do Tempo',
        description: 'Projeto front-end de previsão do tempo feito em React.',
        category: 'Web',
        tags: ['React', 'Node.js', 'CSS', 'JavaScript'],
        bannerText: '☁ 24°C',
    },
    {
        id: 'gerador-senha',
        title: 'Gerador de Senha',
        description: 'Aplicativo mobile gerador de senhas.',
        category: 'Mobile',
        tags: ['React Native', 'TypeScript', 'Node.js', 'Express'],
        bannerText: '••••••',
    },
];