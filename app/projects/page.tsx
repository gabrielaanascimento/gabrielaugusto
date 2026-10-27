import { EngineeringSection } from '@/app/_components/home/EngineeringSection';
import { SoftwareSection } from '@/app/_components/home/SoftwareSection';
import { Particles } from "@/components/ui/particles";
import { fetchAllPortfolioData } from "@/services/portfolioService";

export const instant = false;

async function ProjectsContent() {
    const data = await fetchAllPortfolioData();

    return (
        <div className="relative min-h-screen bg-[#eaeaea]">
            <div className="relative z-10 divide-y divide-gray-300">
                <EngineeringSection engineeringProjects={data?.engineeringProjects || []} />

                {/* Passando os dados dinâmicos das skills e projetos de software */}
                <SoftwareSection
                    softwareProjects={data?.softwareProjects || []}
                    softwareSkills={data?.softwareSkills || []}
                />
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

export default function ProjectsPage() {
    return (
        <ProjectsContent />
    );
}