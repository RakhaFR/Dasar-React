import { useState } from "react";
import StatusProduk from "./components/StatusProduk";
import dataProduk from "./data/produk";
import ProdukCard from "./components/ProdukCard";

function App() {
  const [nama, setNama] = useState("Rakha");
  const [umur, setUmur] = useState(17);
  const [kelas, setKelas] = useState("XI SIJA");
  const [aktif, setAktif] = useState("true");

  const [produk, setProduk] = useState(["Beras", "Minyak", "Gula"]);

  const daftarProduk = [
    { id: 1, nama: "Beras", stok: 20 },
    { id: 2, nama: "Minyak Goreng", stok: 3 },
    { id: 3, nama: "Susu", stok: 0 },
  ];

  const [keyword, setKeyword] = useState("");

  const [kategori, setKategori] = useState("semua");

  const hasilFilter = dataProduk.filter((item) => {
    const cocokNama = item.nama.toLowerCase().includes(keyword.toLowerCase());

    const cocoKategori = kategori == "semua" || item.kategori == kategori;

    return cocokNama && cocoKategori;
  });

  function tambahProduk() {
    setProduk((data) => [...data, "susu"]);
  }

  function hapusProduk(nama) {
    setProduk((data) => data.filter((item) => item != nama));
  }

  return (
    <>
      <main className="max-w-md space-y-4 p-6">
        <h1 className="text-2xl font-bold">Data Siswa</h1>
        <div className="rounded-xl border p-4">
          <p>Nama: {nama}</p>
          <p>Umur: {umur} Tahun</p>
          <p>Kelas: {kelas}</p>
          <p>Status: {aktif ? "Aktif" : "Tidak Aktif"}</p>
        </div>

        <button
          onClick={() => setNama("Naufal")}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Ubah Nama
        </button>

        <button
          onClick={() => setUmur(umur + 1)}
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Ubah Umur
        </button>

        <button
          onClick={() => setKelas("XI SIJA 2")}
          className="rounded bg-purple-600 px-4 py-2 text-white"
        >
          Ubah kelas
        </button>

        <button
          onClick={() => setAktif(!aktif)}
          className="rounded bg-slate-600 px-4 py-2 text-white"
        >
          Ubah Status
        </button>
      </main>

      <main className="space-y-4 p-6">
        <h1 className="text-2xl font-bold">Daftar Produk</h1>

        <button
          onClick={tambahProduk}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Tambah Susu
        </button>
        {produk.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex justify-between rounded border p-3"
          >
            {item}
            <button onClick={() => hapusProduk(item)} className="text-red-600">
              Hapus
            </button>
          </div>
        ))}
      </main>

      <main className="space-y-4 p-6">
        <h1 className="text-2xl font-bold">Status Persediaan</h1>

        {daftarProduk.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <h2 className="font-semibold">{item.nama}</h2>
              <p className="text-sm text-slate-500">Stok: {item.stok}</p>
            </div>
            <StatusProduk stok={item.stok} />
          </div>
        ))}
      </main>

      <main className="min-h-screen bg-slate-50 p-6">
        <h1 className="mb-5 text-2xl font-bold">Katalog Minimarket</h1>

        <div className="mb-6 flex flex-col gap-3 sm:flex-wrap">
          <input
            type="text"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Cari Nama Produk..."
            className="flex-1 rounded-lg border p-3"
          />

          <select
            value={kategori}
            onChange={(event) => setKategori(event.target.value)}
            className="rounded-lg border bg-white p-3"
          >
            <option value="semua">Semua Kategori</option>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
            <option value="Sembako">Sembako</option>
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hasilFilter.map((item) => (
            <ProdukCard key={item.id} produk={item} />
          ))}
        </div>

        {hasilFilter.length === 0 && (
          <p className="mt-6 text-center text-red-600">
            Produk Tidak Ditemukan.
          </p>
        )}
      </main>
    </>
  );
}

export default App;
