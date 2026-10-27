import { AboutHeader } from './AboutHeader';
import { Timeline } from './Timeline';

export function AboutSection() {
    return (
        <section className="py-20 px-6 flex justify-center">
            <div className="max-w-4xl w-full">
                {/* Cabeçalho do Perfil */}
                <AboutHeader />

                {/* Bloco "Quem eu sou" e Linha do Tempo */}
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-xl font-bold text-gray-900">
                        Quem eu sou
                    </h2>

                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p>
                            Olá! Meu nome é Gabriel Augusto, moro em Poá – SP. Minha jornada começou na tecnologia: no Técnico em Informática para Internet na ETEC de Poá (2023–2025) descobri a paixão por resolver problemas através do código, desenvolvendo projetos web, mobile e APIs.
                        </p>
                        <p>
                            Em 2026 iniciei o Bacharelado em Engenharia Mecânica no IFSP – Campus Itaquaquecetuba, e hoje faço parte da equipe <strong className="text-gray-900 font-semibold">Itaquaero (SAE Brasil Aerodesign)</strong>, atuando em dimensionamento estrutural, modelagem 3D e simulações FEA e CFD. Tenho forte senso de organização e comunicação, essenciais em equipes multidisciplinares, e minha base em TI me dá facilidade para transitar entre ferramentas e aprender rápido.
                        </p>
                    </div>

                    {/* Linha do Tempo / Formação */}
                    <div className="pt-6">
                        <Timeline />
                    </div>
                </div>
            </div>
        </section>
    );
}