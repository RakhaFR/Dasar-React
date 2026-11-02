import Button from "./components/Tugas/Button";

function Tugas2() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex gap-3">
        <Button teks="Simpan" warna="bg-green-600 hover:bg-green-700" />
        <Button teks="Edit" warna="bg-yellow-500 hover:bg-yellow-600" />
        <Button teks="Hapus" warna="bg-red-600 hover:bg-red-700" />
      </div>
    </div>
  );
}
export default Tugas2;