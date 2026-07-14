export default function PlayerForm({
    formData,
    errors,
    editId,
    handleChange,
    handleSubmit,
    clearForm
}) {
    return (
        <section className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] border border-outline-variant overflow-hidden">
            <form onSubmit={handleSubmit}>
                <div className="p-md bg-surface-container border-b border-outline-variant flex justify-between items-center">
                    <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-sm">
                        <span className="material-symbols-outlined">person_add</span> Add New Player
                    </h2>
                    <button
                        type="button"
                        onClick={clearForm}
                        className="text-error font-label-bold text-label-bold flex items-center gap-xs px-sm py-xs hover:bg-error/5 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined text-[18px]">delete_sweep</span> Clear Form
                    </button>
                </div>

                <div className="p-lg grid grid-cols-1 md:grid-cols-12 gap-lg items-end">
                    {/* Name Field */}
                    <div className="md:col-span-5">
                        <label className="block text-body-sm font-label-bold mb-xs">Name</label>
                        <input
                            className={`w-full bg-white border rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all ${errors.name ? 'border-error' : 'border-outline-variant'
                                }`}
                            placeholder="Enter player name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && (
                            <p className="mt-xs text-[10px] text-error font-medium">{errors.name}</p>
                        )}
                    </div>

                    {/* Role Field */}
                    <div className="md:col-span-5">
                        <label className="block text-body-sm font-label-bold mb-xs">Role</label>
                        <input
                            className={`w-full bg-white border rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all ${errors.role ? 'border-error' : 'border-outline-variant'
                                }`}
                            placeholder="Enter player role"
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        />
                        {errors.role && (
                            <p className="mt-xs text-[10px] text-error font-medium">{errors.role}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-label-bold text-label-bold px-lg py-[10px] rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all active:scale-95 flex justify-center items-center gap-sm"
                        >
                            <span className="material-symbols-outlined">add</span>
                            {editId !== null ? 'Update Player' : 'Add Player'}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}