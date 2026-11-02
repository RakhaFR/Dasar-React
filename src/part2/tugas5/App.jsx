import { useState } from "react";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

const dataAwal = [
  { id: 1, nama: "Beras Premium", harga: 75000, stok: 10, emoji: "🍚" },
  { id: 2, nama: "Minyak Goreng", harga: 18000, stok: 8, emoji: "🛢️" },
  { id: 3, nama: "Susu Kotak", harga: 8000, stok: 0, emoji: "🥛" },
];

function App() {
  const [produk, setProduk] = useState(dataAwal);
  const [keranjang, setKeranjang] = useState([]);

  function tambahKeranjang(idProduk) {
    const barangPilih = produk.find((item) => item.id === idProduk);
    if (!barangPilih || barangPilih.stok === 0) return;

    const produkBaru = produk.map((item) => {
      if (item.id === idProduk) {
        return { ...item, stok: item.stok - 1 };
      }
      return item;
    });
    setProduk(produkBaru);

    const sudahAda = keranjang.find((item) => item.id === idProduk);

    if (sudahAda) {
      const keranjangUpdate = keranjang.map((item) => {
        if (item.id === idProduk) {
          return { ...item, jumlahBeli: item.jumlahBeli + 1 };
        }
        return item;
      });
      setKeranjang(keranjangUpdate);
    } else {
      setKeranjang([...keranjang, { ...barangPilih, jumlahBeli: 1 }]);
    }
  }

  function tambahJumlah(idProduk) {
    tambahKeranjang(idProduk);
  }

  function kurangJumlah(idProduk) {
    const itemKeranjang = keranjang.find((item) => item.id === idProduk);
    if (!itemKeranjang) return;

    const produkBaru = produk.map((item) => {
      if (item.id === idProduk) {
        return { ...item, stok: item.stok + 1 };
      }
      return item;
    });
    setProduk(produkBaru);

    if (itemKeranjang.jumlahBeli > 1) {
      const keranjangUpdate = keranjang.map((item) => {
        if (item.id === idProduk) {
          return { ...item, jumlahBeli: item.jumlahBeli - 1 };
        }
        return item;
      });
      setKeranjang(keranjangUpdate);
    } else {
      const keranjangUpdate = keranjang.filter((item) => item.id !== idProduk);
      setKeranjang(keranjangUpdate);
    }
  }

  function hapusItem(idProduk) {
    const itemKeranjang = keranjang.find((item) => item.id === idProduk);
    if (!itemKeranjang) return;

    const produkBaru = produk.map((item) => {
      if (item.id === idProduk) {
        return { ...item, stok: item.stok + itemKeranjang.jumlahBeli };
      }
      return item;
    });
    setProduk(produkBaru);

    const keranjangUpdate = keranjang.filter((item) => item.id !== idProduk);
    setKeranjang(keranjangUpdate);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">SIJA Mart - Kasir Mini</h1>
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

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold">Keranjang Belanja</h2>
          {keranjang.length === 0 ? (
            <p className="text-slate-500">Keranjang masih kosong.</p>
          ) : (
            <div className="space-y-3">
              {keranjang.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onTambah={tambahJumlah}
                  onKurang={kurangJumlah}
                  onHapus={hapusItem}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <CartSummary keranjang={keranjang} />
        </div>
      </section>
    </main>
  );
}

export default App;