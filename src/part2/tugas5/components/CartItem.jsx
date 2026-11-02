function CartItem({ item, onTambah, onKurang, onHapus }) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{item.emoji}</span>
        <div>
          <h3 className="font-bold">{item.nama}</h3>
          <p className="text-sm text-slate-500">
            Rp {item.harga.toLocaleString("id-ID")} x {item.jumlahBeli}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onKurang(item.id)}
            className="rounded-md bg-slate-100 px-3 py-1 font-bold hover:bg-slate-200"
          >
            -
          </button>
          <span className="w-6 text-center font-semibold">{item.jumlahBeli}</span>
          <button
            onClick={() => onTambah(item.id)}
            className="rounded-md bg-blue-600 px-3 py-1 font-bold text-white hover:bg-blue-700"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onHapus(item.id)}
          className="rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-100"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default CartItem;