import PlayerItem from "./PlayerItem";

export default function PlayerList({
    players,
    handleEdit,
    handleRemove,
    handleRSVP,
    selectedPlayers = [],
    handleSelectAll,
    handleSelectPlayer
}) {
    const allSelected = players.length > 0 && players.every(player => selectedPlayers.includes(player.id));
    const playerCount = players.length;

    // Optional: Bulk action buttons
    const handleBulkDelete = () => {
        if (selectedPlayers.length === 0) return;
        if (window.confirm(`Delete ${selectedPlayers.length} selected player(s)?`)) {
            selectedPlayers.forEach(id => handleRemove(id));
        }
    };

    const handleBulkRSVP = (status) => {
        if (selectedPlayers.length === 0) return;
        selectedPlayers.forEach(id => handleRSVP(id));
    };

    return (
        <section className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] border border-outline-variant overflow-hidden">
            <div className="p-md bg-surface-container border-b border-outline-variant flex justify-between items-center flex-wrap gap-2">
                <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-sm">
                    <span className="material-symbols-outlined">format_list_bulleted</span> Players List
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                    {selectedPlayers.length > 0 && (
                        <>
                            <span className="text-body-sm text-on-surface-variant">
                                {selectedPlayers.length} selected
                            </span>
                            <button
                                onClick={() => handleBulkRSVP(true)}
                                className="text-xs px-2 py-1 bg-tertiary/10 text-tertiary rounded hover:bg-tertiary/20 transition-colors"
                                type="button"
                            >
                                Mark Attending
                            </button>
                            <button
                                onClick={() => handleBulkRSVP(false)}
                                className="text-xs px-2 py-1 bg-error/10 text-error rounded hover:bg-error/20 transition-colors"
                                type="button"
                            >
                                Mark Not Attending
                            </button>
                            <button
                                onClick={handleBulkDelete}
                                className="text-xs px-2 py-1 bg-error/10 text-error rounded hover:bg-error/20 transition-colors"
                                type="button"
                            >
                                Delete Selected
                            </button>
                        </>
                    )}
                    <span className="bg-primary-container/10 text-primary font-label-bold text-label-bold px-md py-xs rounded-full">
                        {playerCount} {playerCount === 1 ? 'player' : 'players'}
                    </span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-surface-container-low border-b border-outline-variant">
                        <tr>
                            <th className="px-lg py-md text-left w-12">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    onChange={handleSelectAll}
                                    className="rounded text-primary border-outline focus:ring-primary cursor-pointer"
                                />
                            </th>
                            <th className="px-lg py-md text-left font-label-bold text-label-bold text-on-surface-variant">
                                Player Name &amp; Role
                            </th>
                            <th className="px-lg py-md text-left font-label-bold text-label-bold text-on-surface-variant">
                                Status
                            </th>
                            <th className="px-lg py-md text-right font-label-bold text-label-bold text-on-surface-variant">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                        {players.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-lg py-xl text-center text-on-surface-variant">
                                    <div className="flex flex-col items-center gap-sm">
                                        <span className="material-symbols-outlined text-4xl text-outline">sports</span>
                                        <p className="text-body-lg">No players found</p>
                                        <p className="text-body-sm text-on-surface-variant/70">Add a new player to get started</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            players.map(player => (
                                <PlayerItem
                                    key={player.id}
                                    player={player}
                                    handleEdit={handleEdit}
                                    handleRemove={handleRemove}
                                    handleRSVP={handleRSVP}
                                    isSelected={selectedPlayers.includes(player.id)}
                                    handleSelectPlayer={handleSelectPlayer}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}