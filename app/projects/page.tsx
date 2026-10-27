
import { EngineeringSection } from '@/app/_components/home/EngineeringSection';
import { SoftwareSection } from '@/app/_components/home/SoftwareSection';
import { Particles } from "@/components/ui/particles"

export default function ProjectsPage() {
    return (
        <div className="relative min-h-screen bg-[#eaeaea]">
            <div className="relative z-10 divide-y divide-gray-300">

                <EngineeringSection />
                <SoftwareSection />
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