import { HeroSection } from '@/app/_components/home/HeroSection';
import { ExpertiseSection } from '@/app/_components/home/ExpertiseSection';
import { AboutSection } from '@/app/_components/home/AboutSection';
import { EngineeringSection } from '@/app/_components/home/EngineeringSection';
import { SoftwareSection } from '@/app/_components/home/SoftwareSection';
import { IoTSection } from '@/app/_components/home/IoTSection';
import { ContactSection } from '@/app/_components/home/ContactSection';

import { Particles } from "@/components/ui/particles"
import { Footer } from './_components/layout/Footer';
import { Suspense } from 'react';

function LoadingFallback() {
  return (
    <div className="flex justify-center items-center h-40">
      <p className="text-gray-500 animate-pulse">Carregando dados do portfólio...</p>
    </div>
  );
}
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#eaeaea]">
      <div className="relative z-10 divide-y divide-gray-300">
        <HeroSection />
        <ExpertiseSection />
        <IoTSection />
        <ContactSection />
        <Footer />
      </div>

      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        quantity={200}
        ease={80}
        color={"#000000"}
        refresh
      />

    </div>
  );
}