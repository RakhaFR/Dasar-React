function SummaryCard({ judul, nilai, warna }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{judul}</p>
      <h2 className={`mt-2 text-3xl font-bold ${warna}`}>{nilai}</h2>
    </div>
  );
}
export default SummaryCard;