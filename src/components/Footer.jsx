export default function Footer({ }) {
    return (
        <>
            <footer className="mt-8 py-6 text-center border-t border-outline-variant text-on-surface-variant text-sm">
                <div className="flex items-center justify-center gap-2">
                    <span
                        className="material-symbols-outlined text-primary text-lg"
                        style={{
                            fontVariationSettings: "'FILL' 1",
                        }}
                    >
                        favorite
                    </span>

                    Built with <span className="font-bold text-primary">React • Vite</span>
                </div>
            </footer>

            {/* Mobile Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center pt-1 pb-2 px-6 shadow-lg">
                <button className="flex flex-col items-center bg-primary-container text-on-primary-container rounded-full px-5 py-1">
                    <span className="material-symbols-outlined">
                        dashboard
                    </span>

                    <span className="text-sm font-semibold">
                        Dashboard
                    </span>
                </button>

                <button className="flex flex-col items-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">
                        groups
                    </span>

                    <span className="text-sm">
                        Players
                    </span>
                </button>

                <button className="flex flex-col items-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">
                        settings
                    </span>

                    <span className="text-sm">
                        Settings
                    </span>
                </button>
            </nav>
        </>
    );
};