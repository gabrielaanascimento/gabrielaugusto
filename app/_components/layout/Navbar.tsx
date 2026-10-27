"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLinkItem {
    href: string;
    label: string;
}

interface NavbarProps {
    navLinks: NavLinkItem[];
}

export function Navbar({ navLinks = [] }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-xs">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" onClick={closeMenu} className="text-2xl font-bold tracking-wider text-black">
                    <img src="./logo.png" alt="Logo" className="h-14 w-auto rounded-full object-contain" />
                </Link>

                {/* Navegação Desktop (Escondida em mobile) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-black font-medium text-sm transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Botão de Contato Desktop */}
                    <Link href="/#contact">
                        <ShimmerButton className="bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-md cursor-pointer">
                            Contato
                        </ShimmerButton>
                    </Link>
                </nav>

                {/* Botão Hambúrguer para Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-800 focus:outline-none p-2 rounded-xl bg-white/60 border border-gray-200 shadow-2xs"
                    aria-label="Menu"
                >
                    {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

            </div>

            {/* Menu Dropdown Mobile (Exibido quando isOpen é verdadeiro) */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="text-gray-800 hover:text-black font-medium text-base py-2 border-b border-gray-100"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Botão de Contato Mobile */}
                    <Link href="/#contact" onClick={closeMenu} className="pt-2">
                        <button className="w-full bg-black text-white py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-md text-center">
                            Contato
                        </button>
                    </Link>
                </div>
            )}
        </header>
    );
}