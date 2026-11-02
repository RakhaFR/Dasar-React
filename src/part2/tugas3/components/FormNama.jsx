import { useState } from "react";
function FormNama({ onKirimNama }) {
    const [nama, setNama] = useState("");

    function kirim() {
        const namaBersih = nama.trim();

        if(namaBersih === "") {
            alert("Nama tidak boleh kosong")
            return;
        }
        onKirimNama(namaBersih);
        setNama("")
    }
    return (
        <div className="space-y-3">
            <input 
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            placeholder="Masukkan Nama"
            className="w-full rounded-lg border p-3"
            />
            <button 
            onClick={kirim}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >Kirim Nama</button>
        </div>
    );
}
export default FormNama;