import { useState } from "react";
import dataProduk from "./data/produk";
import SummaryCard from "./components/SummaryCard";
import ProductCard from "./components/ProductCard";

function App() {
  const [keyword, setKeyword] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [urutan, setUrutan] = useState("default");

  const totalProduk = dataProduk.length;
  const produkHabis = dataProduk.filter(p => p.stok === 0).length;
  const produkTersedia = dataProduk.filter(p => p.stok > 0).length;

  const hasilFilter = dataProduk
    .filter(item => {
      const cocokNama = item.nama.toLowerCase().includes(keyword.toLowerCase());
      const cocokKategori = kategori === "Semua" || item.kategori === kategori;
      return cocokNama && cocokKategori;
    })
    .sort((a, b) => {
      if (urutan === "termurah") return a.harga - b.harga;
      if (urutan === "termahal") return b.harga - a.harga;
      return 0;
    });

  return (
    <main className="min-h-screen bg-slate-900 p-6 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-3xl font-bold">Dashboard Minimarket SIJA</h1>

        {/* Ringkasan */}
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryCard judul="Total Produk" nilai={totalProduk} warna="text-blue-600" />
          <SummaryCard judul="Produk Tersedia" nilai={produkTersedia} warna="text-green-600" />
          <SummaryCard judul="Produk Habis" nilai={produkHabis} warna="text-red-600" />
        </div>

        {/* Filter & Kontrol */}
        <div className="grid gap-4 sm:grid-cols-3 bg-white p-4 rounded-xl text-slate-800">
          <input
            type="text"
            placeholder="Cari produk..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="rounded-lg border p-2"
          />
          <select value={kategori} onChange={(e) => setKategori(e.target.value)} className="rounded-lg border p-2">
            <option value="Semua">Semua Kategori</option>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
            <option value="Sembako">Sembako</option>
          </select>
          <select value={urutan} onChange={(e) => setUrutan(e.target.value)} className="rounded-lg border p-2">
            <option value="default">Urutan Default</option>
            <option value="termurah">Harga Termurah</option>
            <option value="termahal">Harga Termahal</option>
          </select>
        </div>

        {/* Grid Produk / Pesan Kosong */}
        {hasilFilter.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hasilFilter.map(item => (
              <ProductCard key={item.id} produk={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-10 text-center text-red-600 font-semibold shadow-sm">
            Produk tidak ditemukan atau data kosong.
          </div>
        )}
      </div>
    </main>
  );
}

export default App;