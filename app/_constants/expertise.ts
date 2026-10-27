import { ExpertiseItem } from '@/app/_types';

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
    {
        id: 'engenharia-mecanica',
        title: 'Engenharia Mecânica',
        description: 'Modelagem CAD 3D, análise estrutural (FEA), simulações CFD, materiais compósitos e manufatura.',
        iconBgColor: 'bg-[#1b4363]',
        topBorderColor: 'border-t-[#1b4363]',
        icon: 'gear',
        link: '/engenharia-mecanica',
    },
    {
        id: 'desenvolvimento-software',
        title: 'Desenvolvimento de Software',
        description: 'Aplicações web, mobile e back-end com React, React Native, Node.js, PHP e Python.',
        iconBgColor: 'bg-[#111111]',
        topBorderColor: 'border-t-[#111111]',
        icon: 'code',
        link: '/desenvolvimento-software',
    },
    {
        id: 'sistemas-embarcados',
        title: 'Sistemas Embarcados & IoT',
        description: 'ESP32, Raspberry Pi, sensores e telemetria — a ponte entre o físico e o digital.',
        iconBgColor: 'bg-[#2b684a]',
        topBorderColor: 'border-t-[#2b684a]',
        icon: 'chip',
        link: '/sistemas-embarcados',
    },
];