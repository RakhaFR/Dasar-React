function EmptyState() {
  return (
    <div className="col-span-full rounded-xl bg-white p-10 text-center shadow-sm">
      <div className="text-5xl">📦</div>
      <h2 className="mt-3 font-bold text-lg">Produk Tidak Ditemukan</h2>
      <p className="text-sm text-slate-500">
        Silakan gunakan kata kunci atau kategori lain.
      </p>
    </div>
  );
}

export default EmptyState;