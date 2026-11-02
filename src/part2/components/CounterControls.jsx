function CounterControls({onTambah,onKurang,onReset}) {
    return (
        <div className="flex flex-wrap gap-3">
            <button onClick={onKurang} className="rounded-lg bg-red-600 px-4 py-2 text-white">- kurang</button>
            <button onClick={onReset} className="rounded-lg bg-slate-600 px-4 py-2 text-white">- Reset</button>
            <button onClick={onTambah} className="rounded-lg bg-green-600 px-4 py-2 text-white">- Tambah</button>
        </div>
    );
}
export default CounterControls;