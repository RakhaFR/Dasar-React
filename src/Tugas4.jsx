import Navbar from "./components/Tugas4/Navbar";
import Sidebar from "./components/Tugas4/Sidebar";
import SummaryCard from "./components/Tugas4/SummaryCard";
import StudentTable from "./components/Tugas4/StudentTable";
import Footer from "./components/Tugas4/Footer";

function Tugas4() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col gap-4 p-4 md:flex-row">
        <Sidebar />
        <main className="flex-1 rounded-lg border p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard Utama</h1>
          <div className="grid gap-4 sm:grid-cols-3">
            <SummaryCard title="Total Siswa" value="41 Siswa" />
            <SummaryCard title="Kehadiran" value="98%" />
            <SummaryCard title="Telat" value="2%" />
          </div>
          <StudentTable />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default Tugas4;