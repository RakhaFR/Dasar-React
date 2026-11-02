import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const dataAwal = [
    { id: 1, nama: "Beras Premium", gambar: "/assets/minyak.webp", harga: 75000, kategori: "sembako", stok: 10, emoji: "🍚" },
    { id: 2, nama: "Minyak Goreng", gambar: "/assets/beras.webp", harga: 18000, kategori: "sembako", stok: 8, emoji: "🛢️" },
    { id: 3, nama: "Susu Kotak", gambar: "/assets/susu.webp", harga: 8000, kategori: "minuman", stok: 0, emoji: "🥛" },
    { id: 3, nama: "Mie Instan", gambar: "/assets/mie.webp", harga: 3000, kategori: "makanan", stok: 20, emoji: "🥛" },
  ];

  const [produk, setProduk] = useState(dataAwal);
  const [keranjang, setKeranjang] = useState([]);
  function tambahKeranjang(idProduk) {
    const item = produk.find((item) => item.id === idProduk);
    if (!item || item.stok === 0) return;

    setProduk((daftarLama) =>
      daftarLama.map((item) =>
        item.id === idProduk ? { ...item, stok: item.stok - 1 } : item,
      ),
    );
    setKeranjang((daftarLama) => [...daftarLama, idProduk]);
  }
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">SIJA Mart</h1>

        <div className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-blue-800">
          🛒 Keranjang: {keranjang.length} barang
        </div>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {produk.map((item) => (
          <ProductCard
            key={item.id}
            produk={item}
            onTambahKeranjang={tambahKeranjang}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
