import { prisma } from '@/lib/prisma';

export async function fetchAllPortfolioData() {
    try {
        const [
            navLinks,
            about,
            expertises,
            areas,
            engineeringProjects,
            softwareProjects,
            iotData,
            softwareSkillGroups // <--- Adicionado aqui
        ] = await Promise.all([
            prisma.navLink.findMany({ orderBy: { order: 'asc' } }),
            prisma.aboutInfo.findFirst(),
            prisma.expertise.findMany({ orderBy: { order: 'asc' } }),
            prisma.area.findMany({ include: { projects: true } }),
            prisma.engineeringProject.findMany(),
            prisma.softwareProject.findMany(),
            prisma.ioTSection.findFirst(),
            prisma.softwareSkillGroup.findMany({
                orderBy: { order: 'asc' },
                include: { skills: true }, // Traz as habilidades relacionadas de cada grupo
            }),
        ]);

        return {
            navigation: navLinks,
            about,
            expertises,
            areas,
            engineeringProjects,
            softwareProjects,
            iot: iotData,
            softwareSkills: softwareSkillGroups, // <--- Retorna para o front-end
        };
    } catch (error) {
        console.error('Erro no portfolioService ao consultar o Prisma:', error);
        return null;
    }
}