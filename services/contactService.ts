'use server';

import { prisma } from '@/lib/prisma';

export interface ContactFormData {
    name: string;
    email: string;
    content: string;
}

export async function saveContactMessage(data: ContactFormData) {
    try {
        if (!data.name || !data.email || !data.content) {
            return { success: false, error: 'Por favor, preencha todos os campos.' };
        }

        const newMessage = await prisma.message.create({
            data: {
                name: data.name,
                email: data.email,
                content: data.content,
            },
        });

        return { success: true, data: newMessage };
    } catch (error) {
        console.error('Erro ao salvar mensagem de contato:', error);
        return { success: false, error: 'Erro interno ao enviar a mensagem. Tente novamente mais tarde.' };
    }
}