import Navbar from "./part1/components/Navbar";
import Footer from "./part1/components/Footer";
import InfoCard from "./part1/components/InfoCard";
import ProductSection from "./part1/components/ProductSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col gap-4 p-4 md:flex-row">
        <main className="flex-1 rounded-lg border p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="grid gap-4 p-6 md:grid-cols-3">
            <InfoCard judul="Total Produk" jumlah={125} warna="text-blue-600" />
            <InfoCard judul="Total Pelanggan" jumlah={80} warna="text-green-600" />
            <InfoCard judul="Total Transaksi" jumlah={240} warna="text-purple-600" />
          </div>
          <ProductSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;