function SearchBarSiswa({ keyword, onSearch }) {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Cari nama siswa..."
      className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
    />
  );
}

export default SearchBarSiswa;