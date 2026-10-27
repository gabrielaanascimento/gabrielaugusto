import Image from 'next/image';

interface ProfileCardProps {
    imageSrc?: any;
}

export function ProfileCard({ imageSrc }: ProfileCardProps) {
    return (
        <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] bg-gray-200/80 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt="Gabriel Augusto"
                    fill
                    className="object-cover"
                    priority
                />
            ) : (
                /* Placeholder caso ainda não tenha a imagem */
                <span className="text-6xl font-bold text-gray-400 select-none">
                    GA
                </span>
            )}
        </div>
    );
}