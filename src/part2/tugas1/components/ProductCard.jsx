function ProductCard({ produk, onTambahKeranjang }) {
  const stockHabis = produk.stok === 0;
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-5 flex h-64 items-center justify-center rounded-lg bg-slate-100 text-5xl">
        <div className="mb-5 flex h-64 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
          <img
            src={produk.gambar}
            alt={produk.nama}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <h2 className="font-bold">{produk.nama}</h2>
      <p className="my-2 font-semibold text-blue-600">
        Rp {produk.harga.toLocaleString("id-ID")}
      </p>
      <p className="text-sm text-slate-500 capitalize">{produk.kategori}</p>
      <button
        onClick={() => onTambahKeranjang(produk.id)}
        disabled={stockHabis}
        className="w-full rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {stockHabis ? "Stok Habis" : "Tambah Keranjang"}
      </button>
    </article>
  );
}
export default ProductCard;
