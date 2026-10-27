import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"
import { RainbowButton } from "@/components/ui/rainbow-button"

import { FaCog } from "react-icons/fa"
import { BiCodeAlt } from "react-icons/bi"
import Link from "next/link"

export function TerminalCard() {
    return (
        <div className="flex flex-col items-start gap-6 max-w-lg">
            {/* Janela de Terminal */}
            <Terminal className="terminal">
                <TypingAnimation className='text-gray-800'>$ echo</TypingAnimation>
                <AnimatedSpan className='text-gray-800'>$ Olá! Meu nome é Gabriel Augusto.</AnimatedSpan>
                <AnimatedSpan className='text-gray-800'>$ Estudante de Engenharia Mecânica (IFSP).</AnimatedSpan>
                <AnimatedSpan className='text-gray-800'>$ Desenvolvedor Full-Stack.</AnimatedSpan>
                <AnimatedSpan className='text-gray-800'>$ CAD · FEA · CFD &nbsp;&nbsp;|&nbsp;&nbsp; React · Node.js</AnimatedSpan>
            </Terminal>

            {/* Botões/Tags de áreas abaixo do terminal */}
            <div className="flex items-center gap-3">
                <Link href="/projects#engineering">
                    <RainbowButton className="px-5 py-2.5 rounded-full font-medium text-sm cursor-pointer">
                        <span className="flex items-center gap-2">
                            <FaCog className="w-4 h-4" />
                            Engenharia
                        </span>
                    </RainbowButton>
                </Link>
                <Link href="/projects#software">
                    <div className="relative p-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer w-full h-full">
                            <BiCodeAlt className="w-4 h-4" />
                            Desenvolvimento
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}