function StudentList({ siswa }) {
  return (
    <div className="space-y-3">
      {siswa.map((item, index) => (
        <div key={index} className="flex justify-between rounded-lg border bg-white p-4 shadow-sm">
          <span className="font-semibold">{item.nama}</span>
          <span className="text-slate-500">{item.kelas}</span>
        </div>
      ))}
    </div>
  );
}

export default StudentList;