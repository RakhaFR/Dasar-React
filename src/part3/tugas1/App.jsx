import { useState } from "react";
import SearchBarSiswa from "./components/SearchBarSiswa";
import StudentList from  "./components/StudentList";
import EmptySiswa from "./components/EmptySiswa";

function App() {
  const [keyword, setKeyword] = useState("");
  
  const dataSiswa = [
    { nama: "Naufal Zaki", kelas: "XI SIJA" },
    { nama: "Fathian", kelas: "XI SIJA" },
    { nama: "Rakha FR", kelas: "XI SIJA" },
    { nama: "Haffy's", kelas: "XI SIJA" },
  ];

  const hasilPencarian = dataSiswa.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Daftar Siswa SMKN 1 Cibinong</h1>
      
      <SearchBarSiswa keyword={keyword} onSearch={setKeyword} />

      {hasilPencarian.length > 0 ? (
        <StudentList siswa={hasilPencarian} />
      ) : (
        <EmptySiswa />
      )}
    </main>
  );
}

export default App;