export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#eaeaea] backdrop-blur-md">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                <div className="text-center space-y-1">
                    <h2 className="text-sm font-mono font-bold text-gray-900 tracking-wider">
                        GABRIEL AUGUSTO
                    </h2>
                    <p className="text-xs text-gray-500 font-mono animate-pulse">
                        Sincronizando banco de dados e módulos...
                    </p>
                </div>
            </div>
        </div>
    );
}