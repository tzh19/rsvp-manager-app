export default function PlayerItem({
    player,
    handleEdit,
    handleRemove,
    handleRSVP,
    isSelected = false,
    handleSelectPlayer
}) {
    // Get initials from player name
    const getInitials = (name) => {
        if (!name) return '??';
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Get color based on role or random
    const getAvatarColor = (role) => {
        const colors = {
            'Goalkeeper': 'bg-tertiary',
            'Defender': 'bg-primary',
            'Midfielder': 'bg-on-primary-fixed-variant',
            'Striker': 'bg-secondary'
        };
        return colors[role] || 'bg-primary';
    };

    // Handle checkbox change for selection
    const handleCheckboxChange = (e) => {
        e.stopPropagation();
        if (handleSelectPlayer) {
            handleSelectPlayer(player.id);
        }
    };

    // Handle RSVP toggle when clicking the status badge
    const handleRSVPToggle = (e) => {
        e.stopPropagation();
        if (handleRSVP) {
            handleRSVP(player.id);
        }
    };

    const isAttending = player.isAttending || false;
    const statusColor = isAttending ? 'tertiary' : 'error';
    const statusText = isAttending ? 'Attending' : 'Not Attending';

    return (
        <tr className="hover:bg-surface transition-colors">
            <td className="px-lg py-md">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={handleCheckboxChange}
                    className="rounded text-primary border-outline focus:ring-primary cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                />
            </td>
            <td className="px-lg py-md">
                <div className="flex items-center gap-md">
                    <div className={`w-10 h-10 rounded-full ${getAvatarColor(player.role)} flex items-center justify-center text-white font-bold text-sm`}>
                        {getInitials(player.name)}
                    </div>
                    <div>
                        <p className="font-label-bold text-on-surface">{player.name}</p>
                        <p className="text-body-sm text-on-surface-variant">{player.role || 'No role specified'}</p>
                    </div>
                </div>
            </td>
            <td className="px-lg py-md">
                <button
                    onClick={handleRSVPToggle}
                    className={`inline-flex items-center gap-xs px-md py-xs bg-${statusColor}/10 text-${statusColor} rounded-full font-label-bold text-[12px] hover:opacity-80 transition-opacity cursor-pointer border-0`}
                    type="button"
                >
                    <span className={`w-1.5 h-1.5 rounded-full bg-${statusColor}`}></span>
                    {statusText}
                </button>
            </td>
            <td className="px-lg py-md text-right">
                <div className="flex justify-end gap-sm">
                    <button
                        onClick={() => handleEdit(player.id)}
                        className="flex items-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-primary font-label-bold text-[12px] hover:bg-primary/5 transition-colors"
                        type="button"
                    >
                        <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                    </button>
                    <button
                        onClick={() => handleRemove(player.id)}
                        className="flex items-center gap-xs px-md py-sm rounded-lg border border-error/20 text-error font-label-bold text-[12px] hover:bg-error/5 transition-colors"
                        type="button"
                    >
                        <span className="material-symbols-outlined text-[18px]">delete</span> Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}