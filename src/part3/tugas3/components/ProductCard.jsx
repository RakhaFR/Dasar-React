import StatusBadge from "./StatusBadge";

function ProductCard({ produk }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm p-4 space-y-2">
      <div className="flex h-24 items-center justify-center bg-slate-100 text-4xl rounded-lg">
        {produk.emoji}
      </div>
      <h3 className="font-bold">{produk.nama}</h3>
      <p className="font-semibold text-blue-600">Rp {produk.harga.toLocaleString("id-ID")}</p>
      <div className="flex justify-between items-center pt-2">
        <span className="text-sm text-slate-500">Stok: {produk.stok}</span>
        <StatusBadge stok={produk.stok} />
      </div>
    </div>
  );
}
export default ProductCard;