import { useState } from "react";
import CounterControls from "./components/CounterControls";
import StudentCard from "./components/StudentCard";
import SapaSiswa from "./components/SapaSiswa";
import FormNama from "./components/FormNama";
import ProductCard from "./components/ProductCard";

const dataAwal = [
  { id: 1, nama: "Beras Premium", harga: 75000, stok: 10, emoji: "🍚" },
  { id: 2, nama: "Minyak Goreng", harga: 18000, stok: 8, emoji: "🛢️" },
  { id: 3, nama: "Susu Kotak", harga: 8000, stok: 0, emoji: "🥛" },
];

function App() {
  const [jumlah, Setjumlah] = useState(0);
  const [namaSiswa, setNamaSiswa] = useState("");
  const [produk, setProduk] = useState(dataAwal);
  const [keranjang, setKeranjang] = useState([]);

  function sapaSiswa() {
    alert("Halo,siswa SIJA! Semangat belajar React.");
  }
  function tambah() {
    Setjumlah((nilaiSebelumnya) => nilaiSebelumnya + 1);
  }
  function kurang() {
    Setjumlah((nilaiSebelumnya) => nilaiSebelumnya - 1);
  }
  function reset() {
    Setjumlah(0);
  }
  function terimaNama(nama) {
    setNamaSiswa(nama);
  }

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
    <>
      <main className="grid gap-4 p-6 md:grid-cols-2">
        <StudentCard
          nama="Rakha"
          kelas="XI SIJA 1"
          jurusan="Sistem Informasi Jarigan dan Aplikasi"
        />
        <StudentCard
          nama="Naufal"
          kelas="XI SIJA 1"
          jurusan="Sistem Informasi Jarigan dan Aplikasi"
        />
      </main>

      <main className="space-y-4 p-6">
        <h1 className="text-2xl font-bold">Belajar Event Handling</h1>
        <SapaSiswa onSapa={sapaSiswa} />
      </main>

      <main className="space-y-5 p-6">
        <h1 className="text-2xl font-bold">Counter React</h1>
        <p className="text-5xl font-bold text-blue-600">{jumlah}</p>
        <CounterControls onTambah={tambah} onKurang={kurang} onReset={reset} />
      </main>
      
      <main className="max-w-lg space-y-4 p-6">
        <h1 className="text-2xl font-bold">Form Nama Siswa</h1>
        <FormNama onKirimNama={terimaNama} />
        {namaSiswa && (
          <p className="rounded-lg bg-green-100 p-4 text-green-800">
            Halo, {namaSiswa} Selamat belajar react
          </p>
        )}
      </main>

      <main className="min-h-screen bg-slate-50 p-6">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">SIJA Mart</h1>

          <div className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-blue-800">
            🛒 Keranjang: {keranjang.length} barang
          </div>
        </header>

          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {produk.map((item) =>(
              <ProductCard
              key={item.id}
              produk={item}
              onTambahKeranjang={tambahKeranjang}
              />
            ))}
          </section>
      </main>
    </>
  );
}

export default App;
