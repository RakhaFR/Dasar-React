function SearchBar({ keyword, onSearch }) {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(event) => onSearch(event.target.value)}
      placeholder="Cari produk minimarket..."
      className="w-full rounded-lg border bg-white p-3 outline-none focus:border-blue-500"
    />
  );
}

export default SearchBar;