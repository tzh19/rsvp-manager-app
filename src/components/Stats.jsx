export default function Stats({
    totalPlayers,
    totalAttending,
    totalNotAttending,
    attendanceRate
}) {
    const attendingPercentage = totalPlayers === 0 ? 0 : (totalAttending / totalPlayers) * 100;
    const notattendingPercentage = totalPlayers === 0 ? 0 : (totalNotAttending / totalPlayers) * 100;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                <div className="bg-white p-lg rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] border border-outline-variant hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-md mb-md">
                        <div className="bg-primary-container/10 p-sm rounded-lg text-primary">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <div>
                            <p className="text-body-sm font-body-sm text-on-surface-variant">Total Players</p>
                            <h3 className="text-stat-value font-stat-value text-on-surface">{totalPlayers}</h3>
                        </div>
                    </div>
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-full"></div>
                    </div>
                    <p className="mt-sm text-body-sm font-body-sm text-on-surface-variant italic">All registered players</p>
                </div>
                <div className="bg-white p-lg rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] border border-outline-variant hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-md mb-md">
                        <div className="bg-tertiary-container/10 p-sm rounded-lg text-tertiary">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                            <p className="text-body-sm font-body-sm text-on-surface-variant">Attending</p>
                            <h3 className="text-stat-value font-stat-value text-on-surface">{totalAttending}</h3>
                        </div>
                    </div>
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary" style={{ width: `${attendingPercentage}%` }}></div>
                    </div>
                    <p className="mt-sm text-body-sm font-body-sm text-on-surface-variant italic">Players attending</p>
                </div>
                <div className="bg-white p-lg rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] border border-outline-variant hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-md mb-md">
                        <div className="bg-error/10 p-sm rounded-lg text-error">
                            <span className="material-symbols-outlined">cancel</span>
                        </div>
                        <div>
                            <p className="text-body-sm font-body-sm text-on-surface-variant">Not Attending</p>
                            <h3 className="text-stat-value font-stat-value text-on-surface">{totalNotAttending}</h3>
                        </div>
                    </div>
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-error" style={{ width: `${notattendingPercentage}%` }}></div>
                    </div>
                    <p className="mt-sm text-body-sm font-body-sm text-on-surface-variant italic">Players not attending</p>
                </div>
                <div className="bg-white p-lg rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] border border-outline-variant hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-md mb-md">
                        <div className="bg-secondary/10 p-sm rounded-lg text-secondary">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <div>
                            <p className="text-body-sm font-body-sm text-on-surface-variant">Attendance Rate</p>
                            <h3 className="text-stat-value font-stat-value text-on-surface">{attendanceRate.toFixed(1)}%</h3>
                        </div>
                    </div>
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${attendanceRate}%` }} ></div>
                    </div>
                    <p className="mt-sm text-body-sm font-body-sm text-on-surface-variant italic">Of total players</p>
                </div>
            </div>
        </>
    )
}