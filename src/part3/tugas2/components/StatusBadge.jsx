function StatusBadge({ stok }) {
  if (stok === 0) {
    return <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">Habis</span>;
  }
  if (stok <= 3) {
    return <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">Menipis</span>;
  }
  return <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">Tersedia</span>;
}

export default StatusBadge;