function ProdukCard({produk}) {
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <div className="flex h-32 items-center justify-center bg-slate-100 text-5xl">
                {produk.emoji}
            </div>

            <div className="space-y-2 p-4">
                <h2 className="font-bold">
                    {produk.nama}
                </h2>
                <p className="font-semibold text-blue-600">
                    Rp {produk.harga.toLocaleString("id-ID")}
                </p>

                <p className="text-sm text-slate-500">
                    Kategori: {produk.kategori} 
                </p>

                <p className="text-sm">
                    Stok: {produk.stok}
                </p>
            </div>
        </div>
    );
}

export default ProdukCard;