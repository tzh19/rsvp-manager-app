export default function SearchBar({
    searchQuery,
    filterStatus,
    sortStatus,
    handleSearchChange,
    handleFilterChange,
    handleSortChange
}) {
    return (
        <div className="flex flex-col md:flex-row gap-lg bg-white p-md rounded-xl border border-outline-variant shadow-sm">
            {/* Search Field */}
            <div className="flex-1">
                <label className="block text-body-sm font-label-bold mb-xs">Search</label>
                <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-lg focus-within:ring-2 focus-within:ring-primary transition-all">
                    <span className="material-symbols-outlined text-outline text-[20px] ml-3">
                        search
                    </span>
                    <input
                        className="w-full bg-transparent border-none rounded-lg px-3 py-2.5 focus:outline-none"
                        placeholder="Search by name..."
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            {/* Filter by Attendance */}
            <div className="md:w-64">
                <label className="block text-body-sm font-label-bold mb-xs">Filter by Attendance</label>
                <div className="relative">

                    <select
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-10 py-2.5 focus:ring-2 focus:ring-primary transition-all appearance-none focus:outline-none cursor-pointer"
                        value={filterStatus}
                        onChange={handleFilterChange}
                    >
                        <option value="all">All Players</option>
                        <option value="attending">Attending</option>
                        <option value="notAttending">Not Attending</option>
                    </select>


                </div>
            </div>

            {/* Sort by */}
            <div className="md:w-64">
                <label className="block text-body-sm font-label-bold mb-xs">Sort by</label>
                <div className="relative">
                    <select
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-10 py-2.5 focus:ring-2 focus:ring-primary transition-all appearance-none focus:outline-none cursor-pointer"
                        value={sortStatus}
                        onChange={handleSortChange}
                    >
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                        <option value="attending">Attending First</option>
                    </select>

                </div>
            </div>
        </div>
    );
}