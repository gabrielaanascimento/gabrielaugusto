const API_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const API_KEY = process.env.API_SECRET_KEY || 'sua-chave-secreta-super-segura-123';

export async function fetchAllPortfolioData() {
    try {
        const res = await fetch(`${API_URL}/api/portfolio`, {
            headers: {
                'x-api-key': API_KEY,
            },
            // 'force-cache' ou revalidate garante que os dados sejam cacheados 
            // após a primeira requisição bem-sucedida, matando o loading nas próximas navegações
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error('Falha ao comunicar com a API do portfólio.');
        }

        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error('Erro no portfolioService:', error);
        throw error;
    }
}