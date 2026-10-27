import { SkillGroup, SubProjectFeature } from '@/app/_types';

export const ENGINEERING_SKILLS: SkillGroup[] = [
    {
        category: 'CAD & CAE',
        skills: [
            { name: 'Autodesk Inventor', level: 'avançado' },
            { name: 'SolidWorks' },
            { name: 'AutoCAD' },
            { name: 'Fusion 360' },
            { name: 'FEA' },
            { name: 'Ansys CFD' },
            { name: 'SimScale' },
        ],
    },
    {
        category: 'Manufatura & Materiais',
        skills: [
            { name: 'Corte a Laser' },
            { name: 'Materiais Compósitos' },
            { name: 'Estruturas Leves' },
            { name: 'Dimensionamento Estrutural' },
        ],
    },
    {
        category: 'Ferramentas',
        skills: [
            { name: 'Excel', level: 'semi-avançado' },
            { name: 'Word' },
            { name: 'PowerPoint' },
            { name: 'Photoshop', level: 'intermediário' },
        ],
    },
];

export const ITAQUAERO_FEATURES: SubProjectFeature[] = [
    {
        title: 'Modelagem CAD & Análise Estrutural',
        description: 'Modelagem 3D detalhada no Autodesk Inventor e análises por Elementos Finitos para validação estrutural da aeronave.',
    },
    {
        title: 'Aerodinâmica & CFD',
        description: 'Estudo de perfis aerodinâmicos com simulações fluidodinâmicas em Ansys e SimScale.',
    },
    {
        title: 'Manufatura & Materiais',
        description: 'Fabricação com compósitos e estruturas leves, operando máquina de corte a laser para cortes de precisão.',
    },
    {
        title: 'Eletrônica & Instrumentação',
        description: 'Instrumentação embarcada, sensores de telemetria e integração com ESP32 / Raspberry Pi.',
    },
];