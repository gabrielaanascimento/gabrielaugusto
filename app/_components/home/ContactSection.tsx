import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 flex justify-center">
            <div className="max-w-4xl w-full space-y-12">

                {/* Cabeçalho */}
                <div className="text-center space-y-3">
                    <span className="inline-block px-4 py-1 text-xs font-medium border border-gray-400 rounded-full text-gray-800 bg-white/50 backdrop-blur-md">
                        Contato
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                        Vamos conversar?
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Seja para um projeto de engenharia, uma oportunidade de estágio ou um sistema web — fale comigo.
                    </p>
                </div>

                {/* Cards de Informação de Contato (Grid 2x2 com Liquid Glass) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Email */}
                    <a
                        href="mailto:gabrielaugustoassisnascimento@gmail.com"
                        className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <FaEnvelope className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">E-mail</span>
                            <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">gabrielaugustoassisnascimento@gmail.com</p>
                        </div>
                    </a>

                    {/* Telefone */}
                    <a
                        href="tel:+5511952812474"
                        className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <FaPhone className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Telefone</span>
                            <p className="text-xs md:text-sm font-semibold text-gray-900">+55 (11) 95281-2474</p>
                        </div>
                    </a>

                    {/* Localização */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                            <FaMapMarkerAlt className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Localização</span>
                            <p className="text-xs md:text-sm font-semibold text-gray-900">Poá – SP</p>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/gabriel-augusto-assis-nascimento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <FaLinkedin className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">LinkedIn</span>
                            <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">gabriel-augusto-assis-nascimento</p>
                        </div>
                    </a>

                </div>

                {/* Bloco do Formulário */}
                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">
                        Envie uma mensagem
                    </h3>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Seu nome</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Carlos Silva"
                                    className="w-full bg-white/80 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Seu e-mail</label>
                                <input
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    className="w-full bg-white/80 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Sua mensagem</label>
                            <textarea
                                rows={4}
                                placeholder="Escreva os detalhes do projeto ou oportunidade..."
                                className="w-full bg-white/80 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors shadow-md cursor-pointer"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}