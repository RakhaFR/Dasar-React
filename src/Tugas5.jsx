import Header from "./components/Tugas5/Header";
import Footer from "./components/Tugas5/Footer";
import ProductSection from "./components/Tugas5/ProductSection";
import SearchBar from "./components/Tugas5/SearchBar";
import CategoryMenu from "./components/Tugas5/CategoryMenu";

function Tugas5() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col gap-4 p-4 md:flex-row">
        <main className="flex-1 rounded-lg p-6">
          <SearchBar />
          <CategoryMenu />
          <ProductSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default Tugas5;
