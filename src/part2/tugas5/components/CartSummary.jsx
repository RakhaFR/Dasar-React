function CartSummary({ keranjang }) {
  let totalBarang = 0;
  let totalHarga = 0;

  for (let i = 0; i < keranjang.length; i++) {
    totalBarang = totalBarang + keranjang[i].jumlahBeli;
    totalHarga = totalHarga + (keranjang[i].harga * keranjang[i].jumlahBeli);
  }

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm space-y-3">
      <h2 className="text-xl font-bold">Ringkasan Belanja</h2>
      <div className="flex justify-between text-slate-600">
        <span>Total Barang:</span>
        <span className="font-semibold">{totalBarang} pcs</span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>Total Harga:</span>
        <span className="text-lg font-bold text-blue-600">
          Rp {totalHarga.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}

export default CartSummary;