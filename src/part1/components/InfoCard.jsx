function InfoCard({judul,jumlah,warna}) {
  return (
    <div className="rounded-xl border p-5 shadow-sm">
      <p className="mt-2 text-slate-600">{judul}</p>
      <h2 className={`mt-2 text-3xl font-bold ${warna}`}>{jumlah}</h2>
    </div>
  );
}

export default InfoCard;
    