import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function validateApiKey(request: NextRequest) {
    const apiKey = request.headers.get('x-api-key');
    const validKey = process.env.API_SECRET_KEY;

    if (!apiKey || apiKey !== validKey) {
        return NextResponse.json(
            { error: 'Acesso negado. API Key inválida ou ausente.' },
            { status: 401 }
        );
    }

    return null; // Retorna null se estiver autorizado
}