import Link from 'next/link';

interface AboutHeaderProps {
    about?: {
        name?: string;
        role?: string;
        linkedin?: string;
        github?: string;
        email?: string;
        [key: string]: any;
    };
}

export function AboutHeader({ about }: AboutHeaderProps) {
    // Monta os links sociais dinamicamente com base no que está cadastrado no banco
    const socialLinks = [
        about?.linkedin && { label: 'LinkedIn', href: about.linkedin },
        about?.github && { label: 'GitHub', href: about.github },
        about?.email && { label: 'E-mail', href: `mailto:${about.email}` },
    ].filter(Boolean) as Array<{ label: string; href: string }>;

    return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            {/* Badge Superior */}
            <span className="px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 mb-6 bg-transparent">
                Sobre mim
            </span>

            {/* Avatar GA */}
            <div className="w-20 h-20 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center mb-6 shadow-md">
                GA
            </div>

            {/* Nome e Apresentação Principal */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {about?.name || "Gabriel Augusto"}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {about?.role || "Estudante de Engenharia Mecânica no IFSP e desenvolvedor Full-Stack. Projeto componentes no CAD e construo software que funciona — dois mundos, o mesmo raciocínio lógico."}
            </p>

            {/* Botões Sociais Dinâmicos */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full border border-gray-800 text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}