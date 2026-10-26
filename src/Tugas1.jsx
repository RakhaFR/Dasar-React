import ProfileCard from './components/Tugas/ProfileCard.jsx';
function Tugas1() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="mb-6 text-2xl font-bold">Profil Siswa</h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <ProfileCard
          nama="Rakha Fadilah"
          kelas="XI"
          jurusan="SIJA"
          hobi="Coding & Gaming"
        />
        <ProfileCard
          nama="Fathian Hanief"
          kelas="XI"
          jurusan="SIJA"
          hobi="Editing & Desain"
        />
      </div>
    </div>
  );
}

export default Tugas1;
