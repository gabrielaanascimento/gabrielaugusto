'use server';

import { prisma } from '@/lib/prisma';

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    content: string;
}

export async function saveContactMessage(data: ContactFormData) {
    try {
        if (!data.name || !data.email || !data.content) {
            return { success: false, error: 'Por favor, preencha os campos obrigatórios.' };
        }

        await prisma.message.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone || null, // Salva como null se estiver vazio
                content: data.content,
            },
        });

        return { success: true };
    } catch (error: any) {
        console.error('Erro ao salvar mensagem de contato:', error);
        return { success: false, error: error.message || 'Erro interno ao enviar a mensagem.' };
    }
}