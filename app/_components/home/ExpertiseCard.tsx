import Link from 'next/link';
import { ExpertiseItem } from '@/app/_types';

// Função utilitária para renderizar o ícone correspondente
function renderIcon(iconType: ExpertiseItem['icon']) {
    switch (iconType) {
        case 'gear':
            return (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'code':
            return <span className="text-white font-mono font-bold text-xs">&lt;/&gt;</span>;
        case 'chip':
            return (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                </svg>
            );
    }
}

export function ExpertiseCard({ item }: { item: ExpertiseItem }) {
    return (
        <div
            className={`bg-white rounded-2xl border-t-4 ${item.topBorderColor} p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow`}
        >
            <div>
                {/* Ícone com fundo colorido */}
                <div
                    className={`w-10 h-10 rounded-lg ${item.iconBgColor} flex items-center justify-center mb-5`}
                >
                    {renderIcon(item.icon)}
                </div>

                {/* Título e Descrição */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                </p>
            </div>

            {/* Link Ver Mais */}
            <Link
                href={item.link}
                className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
                Ver mais &rarr;
            </Link>
        </div>
    );
}