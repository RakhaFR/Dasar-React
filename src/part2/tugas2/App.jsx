import { useState } from "react";
import LikeButton from "./components/likeButton";

function App() {
  const [jumlah, Setjumlah] = useState(0);
  function tambah() {
    Setjumlah((nilaiSebelumnya) => nilaiSebelumnya + 1);
  }
  return (
    <main className="space-y-5 p-6">
      <h1 className="text-2xl font-bold">Tombol Like</h1>
      <p className="text-5xl font-bold text-blue-600">{jumlah}</p>
      <LikeButton onLike={tambah} />
    </main>
  );
}

export default App;
