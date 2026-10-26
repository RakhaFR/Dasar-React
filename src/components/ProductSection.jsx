import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section className="p-6">
      <h2 className="mb-4 text-xl font-bold">Produk Pilihan</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard nama="Beras Premium" harga={75000} stok={20} emoji="🍚" />
        <ProductCard nama="Minyak Goreng" harga={18000} stok={15} emoji="🧴" />
        <ProductCard nama="Susu Kotak" harga={8000} stok={0} emoji="🥛" />
      </div>
    </section>
  );
}
export default ProductSection;