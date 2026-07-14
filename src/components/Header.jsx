export default function Header() {
    return (
        <header className="w-full sticky top-0 z-50 bg-surface shadow-sm px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-primary-container p-2 rounded-xl text-white">
                    <span className="material-symbols-outlined block">
                        sports_soccer
                    </span>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-primary">
                        RSVP Manager
                    </h1>

                    <p className="text-sm text-on-surface-variant">
                        Manage your players and track attendance
                    </p>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <nav className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-semibold">
                        <span className="material-symbols-outlined">
                            dashboard
                        </span>

                        Dashboard
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition">
                        <span className="material-symbols-outlined">
                            groups
                        </span>

                        Players
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition">
                        <span className="material-symbols-outlined">
                            settings
                        </span>

                        Settings
                    </button>
                </nav>

                <button className="bg-white border border-outline-variant px-4 py-2 rounded-lg shadow-sm hover:bg-surface-container transition flex items-center gap-2">
                    <span className="material-symbols-outlined">
                        person_add
                    </span>

                    Add & Manage Players
                </button>
            </div>
        </header>
    );
}