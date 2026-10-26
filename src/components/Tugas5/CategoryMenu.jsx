function CategoryMenu() {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">Semua</button>
      <button className="rounded-lg bg-slate-200 px-4 py-2">Makanan</button>
      <button className="rounded-lg bg-slate-200 px-4 py-2">Minuman</button>
      <button className="rounded-lg bg-slate-200 px-4 py-2">Sembako</button>
    </div>
  );
}
export default CategoryMenu;