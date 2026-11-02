function ProfileCard({ nama, kelas, jurusan, hobi }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm max-w-sm">
      <h2 className="text-xl font-bold text-slate-800">{nama}</h2>
      <p className="text-sm text-slate-500">Kelas: {kelas}</p>
      <p className="text-sm text-slate-500">Jurusan: {jurusan}</p>
      <p className="mt-3 text-sm font-medium text-blue-600">Hobi: {hobi}</p>
    </div>
  );
}
export default ProfileCard;