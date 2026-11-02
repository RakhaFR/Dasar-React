function StatusProduk({stok}) {
    if (stok == 0) {
        return (
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                Stok Habis
            </span>
        );
    }

    if (stok <= 5) {
        return(
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-orange-700">
                Stok Menipis
            </span>
        );
    }
    
    return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Tersedia
        </span>
    )
}

export default StatusProduk;