function CategoryFilter({ kategori, onChange }) {
  const daftarKategori = ["Semua", "Makanan", "Minuman", "Sembako"];

  return (
    <div className="flex flex-wrap gap-2">
      {daftarKategori.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-lg px-4 py-2 ${
            kategori === item
              ? "bg-blue-600 text-white"
              : "border bg-white text-slate-700"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;