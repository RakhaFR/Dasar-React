function StudentTable() {
  return (
    <div className="mt-6 rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold">Data Siswa</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-slate-100">
            <th className="p-3">Nama</th>
            <th className="p-3">Kelas</th>
            <th className="p-3">Jurusan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">Rakha FR</td>
            <td className="p-3">XI</td>
            <td className="p-3">SIJA</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">Virqi AA</td>
            <td className="p-3">XI</td>
            <td className="p-3">SIJA</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="border-b">
            <td className="p-3">Naufal ZS</td>
            <td className="p-3">XI</td>
            <td className="p-3">SIJA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default StudentTable;
