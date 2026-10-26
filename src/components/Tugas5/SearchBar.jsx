function SearchBar() {
  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Cari produk..." 
        className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
export default SearchBar;