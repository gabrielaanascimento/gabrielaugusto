'use server';

import { prisma } from '@/lib/prisma';

export interface ProjectDetails {
    id: string;
    title: string;
    desc: string;
    owner: string;
    repo: string;
    techs: string[];
    githubUrl: string | null;
    projectUrl: string | null; // URL do site em produção (frontend)
}

function extractRepoPath(url: string): { owner: string; repo: string } | null {
    try {
        let cleanUrl = url.trim();
        if (cleanUrl.endsWith('.git')) {
            cleanUrl = cleanUrl.substring(0, cleanUrl.length - 4);
        }

        const match = cleanUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (match && match[1] && match[2]) {
            return { owner: match[1], repo: match[2] };
        }

        const parts = cleanUrl.split('/');
        if (parts.length === 2 && parts[0] && parts[1]) {
            return { owner: parts[0].trim(), repo: parts[1].trim() };
        }

        return null;
    } catch {
        return null;
    }
}

export async function getProjectDetailsService(id: string): Promise<ProjectDetails | null> {
    try {
        const projectRecord = await prisma.softwareProject.findUnique({
            where: { id },
        });

        // Agora validamos se existe o githubUrl para puxar a árvore do repositório
        if (!projectRecord || !projectRecord.githubUrl) {
            return null;
        }

        const repoInfo = extractRepoPath(projectRecord.githubUrl);
        if (!repoInfo) {
            throw new Error('Link do GitHub inválido cadastrado para este projeto.');
        }

        return {
            id: projectRecord.id,
            title: projectRecord.title || repoInfo.repo,
            desc: projectRecord.description || '',
            owner: repoInfo.owner,
            repo: repoInfo.repo,
            techs: projectRecord.tags || [],
            githubUrl: projectRecord.githubUrl,
            projectUrl: projectRecord.projectUrl || null, // URL do deploy/site
        };
    } catch (error) {
        console.error('Erro na getProjectDetailsService:', error);
        return null;
    }
}