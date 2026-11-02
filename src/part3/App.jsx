import { useState } from "react";
import dataProduk from "./data/produk";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard3"; // Pastikan path sesuai file ProductCard kamu
import EmptyState from "./components/EmptyState";

function App() {
  const [keyword, setKeyword] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [urutan, setUrutan] = useState("default");
  const [hanyaTersedia, setHanyaTersedia] = useState(false);

  // Proses Filter dan Sorting Data
  const hasilFilter = dataProduk
    .filter((item) => {
      const cocokNama = item.nama
        .toLowerCase()
        .includes(keyword.toLowerCase());

      const cocokKategori =
        kategori === "Semua" || item.kategori === kategori;

      const cocokStok = !hanyaTersedia || item.stok > 0;

      return cocokNama && cocokKategori && cocokStok;
    })
    .sort((a, b) => {
      if (urutan === "termurah") {
        return a.harga - b.harga;
      }
      if (urutan === "termahal") {
        return b.harga - a.harga;
      }
      return 0;
    });

  // Fungsi mereset seluruh filter
  function resetFilter() {
    setKeyword("");
    setKategori("Semua");
    setUrutan("default");
    setHanyaTersedia(false);
  }

  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        
        <header>
          <h1 className="text-3xl font-bold text-white">
            <span className="text-teal-600">SIJA</span>
            <span className="text-gray-400">Mart</span>
          </h1>
          <p className="text-orange-400">Katalog Produk Minimarket</p>
        </header>

        <section className="space-y-4 rounded-xl bg-white p-5 shadow-sm">
          <SearchBar keyword={keyword} onSearch={setKeyword} />
          <CategoryFilter kategori={kategori} onChange={setKategori} />

          <div className="flex flex-wrap items-center gap-4">
            <select
              value={urutan}
              onChange={(event) => setUrutan(event.target.value)}
              className="rounded-lg border p-2 bg-white"
            >
              <option value="default">Urutan Default</option>
              <option value="termurah">Harga Termurah</option>
              <option value="termahal">Harga Termahal</option>
            </select>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hanyaTersedia}
                onChange={(event) => setHanyaTersedia(event.target.checked)}
                className="rounded"
              />
              Stok tersedia saja
            </label>

            <button
              onClick={resetFilter}
              className="rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
            >
              Reset Filter
            </button>
          </div>
        </section>

        <div className="flex justify-between items-center text-white">
          <h2 className="text-xl font-bold text-orange-400">Daftar Produk</h2>
          <p className="text-sm text-slate-300">
            {hasilFilter.length} produk ditemukan
          </p>
        </div>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hasilFilter.length > 0 ? (
            hasilFilter.map((item) => (
              <ProductCard key={item.id} produk={item} />
            ))
          ) : (
            <EmptyState />
          )}
        </section>

      </div>
    </main>
  );
}

export default App;