import { useState } from "react";
import ProductCard from "./components/ProductCard";
import ItemBelanja from "./components/ItemBelanja";

const dataAwal = [
  { id: 1, nama: "Beras Premium", harga: 75000, stok: 10, emoji: "🍚" },
  { id: 2, nama: "Minyak Goreng", harga: 18000, stok: 8, emoji: "🛢️" },
  { id: 3, nama: "Susu Kotak", harga: 8000, stok: 0, emoji: "🥛" },
];

function App() {
  const [produk, setProduk] = useState(dataAwal);
  const [keranjang, setKeranjang] = useState([]);

  function tambahKeranjang(idProduk) {
    const itemProduk = produk.find((item) => item.id === idProduk);
    if (!itemProduk || itemProduk.stok === 0) return;

    setProduk((daftarLama) =>
      daftarLama.map((item) =>
        item.id === idProduk ? { ...item, stok: item.stok - 1 } : item
      )
    );

    setKeranjang((daftarLama) => {
      const adaDiKeranjang = daftarLama.find((item) => item.id === idProduk);
      if (adaDiKeranjang) {
        return daftarLama.map((item) =>
          item.id === idProduk ? { ...item, jumlahBeli: item.jumlahBeli + 1 } : item
        );
      } else {
        return [...daftarLama, { ...itemProduk, jumlahBeli: 1 }];
      }
    });
  }

  function tambahJumlahItem(idProduk) {
    const itemProduk = produk.find((item) => item.id === idProduk);
    if (!itemProduk || itemProduk.stok === 0) return;

    setProduk((daftarLama) =>
      daftarLama.map((item) =>
        item.id === idProduk ? { ...item, stok: item.stok - 1 } : item
      )
    );

    setKeranjang((daftarLama) =>
      daftarLama.map((item) =>
        item.id === idProduk ? { ...item, jumlahBeli: item.jumlahBeli + 1 } : item
      )
    );
  }

  function kurangJumlahItem(idProduk) {
    const itemKeranjang = keranjang.find((item) => item.id === idProduk);
    if (!itemKeranjang) return;

    setProduk((daftarLama) =>
      daftarLama.map((item) =>
        item.id === idProduk ? { ...item, stok: item.stok + 1 } : item
      )
    );

    if (itemKeranjang.jumlahBeli > 1) {
      setKeranjang((daftarLama) =>
        daftarLama.map((item) =>
          item.id === idProduk ? { ...item, jumlahBeli: item.jumlahBeli - 1 } : item
        )
      );
    } else {
      setKeranjang((daftarLama) => daftarLama.filter((item) => item.id !== idProduk));
    }
  }

  const totalItem = keranjang.reduce((total, item) => total + item.jumlahBeli, 0);

  return (
    <main className="min-h-screen bg-slate-50 p-6 space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">SIJA Mart</h1>

        <div className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-blue-800">
          🛒 Total Item di Keranjang: {totalItem} barang
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {produk.map((item) => (
            <ProductCard
              key={item.id}
              produk={item}
              onTambahKeranjang={tambahKeranjang}
            />
          ))}
        </div>
      </section>

      <section className="max-w-xl space-y-4">
        <h2 className="text-xl font-bold">Daftar Belanjaan</h2>
        {keranjang.length === 0 ? (
          <p className="text-slate-500">Keranjang masih kosong.</p>
        ) : (
          <div className="space-y-3">
            {keranjang.map((item) => (
              <ItemBelanja
                key={item.id}
                item={item}
                onTambah={tambahJumlahItem}
                onKurang={kurangJumlahItem}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;