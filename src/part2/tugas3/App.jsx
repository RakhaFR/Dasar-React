import { useState } from "react";
import FormNama from "../components/FormNama";

function App() {
  const [daftarSiswa, setDaftarSiswa] = useState([]);
  function terimaNama(namaBaru) {
    setDaftarSiswa((daftarLama) => [...daftarLama, namaBaru]);
  }
  return (
    <main className="max-w-lg space-y-4 p-6">
      <h1 className="text-2xl font-bold">Form Nama Siswa</h1>
      <FormNama onKirimNama={terimaNama} />
      <ul className="space-y-2 mt-4">
        {daftarSiswa.map((nama, index) => (
          <li
            key={index}
            className="rounded-lg bg-green-100 p-3 text-green-800"
          >
            Halo, {nama} Selamat belajar react
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
