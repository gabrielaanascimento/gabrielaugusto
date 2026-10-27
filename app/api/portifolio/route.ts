import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

function validateApiKey(request: NextRequest) {
    const apiKey = request.headers.get('x-api-key');
    const validKey = process.env.API_SECRET_KEY;
    return apiKey === validKey;
}

export async function PUT(request: NextRequest) {
    if (!validateApiKey(request)) {
        return NextResponse.json(
            { error: 'Acesso negado. API Key inválida ou ausente.' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { type, id, ...data } = body;

        let updatedRecord;

        // O 'type' define qual tabela/model você deseja atualizar
        switch (type) {
            case 'about':
                updatedRecord = await prisma.aboutInfo.update({
                    where: { id },
                    data,
                });
                break;
            case 'navLink':
                updatedRecord = await prisma.navLink.update({
                    where: { id },
                    data,
                });
                break;
            case 'expertise':
                updatedRecord = await prisma.expertise.update({
                    where: { id },
                    data,
                });
                break;
            case 'engineeringProject':
                updatedRecord = await prisma.engineeringProject.update({
                    where: { id },
                    data,
                });
                break;
            case 'softwareProject':
                updatedRecord = await prisma.softwareProject.update({
                    where: { id },
                    data,
                });
                break;
            case 'iot':
                updatedRecord = await prisma.ioTSection.update({
                    where: { id },
                    data,
                });
                break;
            default:
                return NextResponse.json(
                    { error: 'Tipo de entidade inválido para atualização.' },
                    { status: 400 }
                );
        }

        return NextResponse.json({ success: true, data: updatedRecord }, { status: 200 });

    } catch (error) {
        console.error('Erro ao atualizar dados no Neon DB:', error);
        return NextResponse.json(
            { error: 'Erro interno ao atualizar os dados.' },
            { status: 500 }
        );
    }
}