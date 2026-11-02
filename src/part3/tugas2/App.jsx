import { useState } from "react";
import StatusBadge from "./components/StatusBadge";

function App() {
  const [stok, setStok] = useState(5);

  function tambahStok() {
    setStok(stok + 1);
  }

  function kurangStok() {
    if (stok > 0) {
      setStok(stok - 1);
    }
  }

  return (
    <main className="mx-auto max-w-md space-y-6 p-6">
      <h1 className="text-2xl font-bold">Manajemen Stok Barang</h1>

      <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4 text-center">
        <h2 className="text-lg font-semibold">Stok Saat Ini</h2>
        <p className="text-5xl font-bold text-blue-600">{stok}</p>
        
        <div className="flex justify-center">
          <StatusBadge stok={stok} />
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={kurangStok}
            disabled={stok === 0}
            className="rounded-lg bg-red-600 px-4 py-2 text-white disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Kurangi
          </button>
          
          <button
            onClick={tambahStok}
            className="rounded-lg bg-green-600 px-4 py-2 text-white"
          >
            Tambah
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;