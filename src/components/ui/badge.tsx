export default ({ icon, label }) => {
    return (
        <span className="rounded-lg bg-slate-800 border-2 border-blue-500 px-2 py-1 flex flex-row items-center justify-center space-x-3">
            <span className="text-2xl">{icon}</span>
            <p className="text-lg">{label}</p>
        </span>
    )
}