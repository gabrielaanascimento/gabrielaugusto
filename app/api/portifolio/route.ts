import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

function validateApiKey(request: NextRequest) {
    const apiKey = request.headers.get('x-api-key');
    const validKey = process.env.API_SECRET_KEY;
    return apiKey === validKey;
}

export async function GET(request: NextRequest) {
    if (!validateApiKey(request)) {
        return NextResponse.json(
            { error: 'Acesso negado. API Key inválida ou ausente.' },
            { status: 401 }
        );
    }

    try {
        // Consulta em paralelo todas as tabelas no Neon DB
        const [
            navLinks,
            about,
            expertises,
            areas,
            engineeringProjects,
            softwareProjects,
            iotData
        ] = await Promise.all([
            prisma.navLink.findMany({ orderBy: { order: 'asc' } }),
            prisma.aboutInfo.findFirst(),
            prisma.expertise.findMany({ orderBy: { order: 'asc' } }),
            prisma.area.findMany({ include: { projects: true } }),
            prisma.engineeringProject.findMany(),
            prisma.softwareProject.findMany(),
            prisma.ioTSection.findFirst(),
        ]);

        return NextResponse.json({
            success: true,
            data: {
                navigation: navLinks,
                about,
                expertises,
                areas,
                engineeringProjects,
                softwareProjects,
                iot: iotData,
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Erro ao consultar banco de dados:', error);
        return NextResponse.json(
            { error: 'Erro interno ao consultar o Neon DB.' },
            { status: 500 }
        );
    }
}