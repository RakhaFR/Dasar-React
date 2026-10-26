import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section className="p-6">
      <h2 className="mb-4 text-xl font-bold">Produk Pilihan</h2>
      <div className="container grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 lg:grid-cols-3 flex justify-center align-items-center flex-wrap">
        <ProductCard nama="Beras Premium" harga={75000} stok={20} emoji="🍚" />
        <ProductCard nama="Minyak Goreng" harga={18000} stok={15} emoji="🧴" />
        <ProductCard nama="Susu Kotak" harga={8000} stok={0} emoji="🥛" />
        <ProductCard nama="Gula Pasir" harga={15000} stok={30} emoji="🍬" />
        <ProductCard nama="Telur Ayam" harga={28000} stok={10} emoji="🥚" />
        <ProductCard nama="Teh Celup" harga={5000} stok={50} emoji="🍵" />
      </div>
    </section>
  );
}
export default ProductSection;
