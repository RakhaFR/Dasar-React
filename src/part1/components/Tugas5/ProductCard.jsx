function ProductCard({ nama, harga, stok, emoji }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="flex h-32 items-center justify-center bg-slate-100 text-6xl">
        {emoji}
      </div>
      <div className="space-y-2 p-4">
        <h2 className="font-bold">{nama}</h2>
        <p className="text-lg font-semibold text-blue-600">
          Rp {harga.toLocaleString("id-ID")}
        </p>
        <p className="text-sm text-slate-500">Stok: {stok}</p>
        <button
          disabled={stok === 0}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {stok === 0 ? "Stok Habis" : "Lihat Produk"}
        </button>
      </div>
    </div>
  );
}
export default ProductCard;