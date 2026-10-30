import { TerminalCard } from './TerminalCard';
import { ProfileCard } from './ProfileCard';
import pictureProfile from '../../../public/picture-profile-2.png';

export function HeroSection() {
    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12 md:py-20">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                {/* Lado Esquerdo: Terminal e Tags */}
                <div className="w-full flex justify-center lg:justify-start">
                    <TerminalCard />
                </div>

                {/* Lado Direito: Foto / Card GA */}
                <div className="w-full flex justify-center lg:justify-end">
                    <ProfileCard imageSrc={pictureProfile} />
                </div>

            </div>
        </section>
    );
}
