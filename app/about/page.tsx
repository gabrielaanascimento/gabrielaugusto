
import { AboutSection } from '@/app/_components/home/AboutSection';

import { Particles } from "@/components/ui/particles"

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-[#eaeaea]">
            <div className="relative z-10 divide-y divide-gray-300">
                <AboutSection />
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