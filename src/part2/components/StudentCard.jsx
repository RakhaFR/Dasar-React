function StudentCard({nama, kelas, jurusan}) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">{nama}</h2>
            <p className="mt-2 text-slate-600">Kelas : {kelas}</p>
            <p className="text-slate-600">Jurusan : {jurusan}</p>
        </div>
    );
}

export default StudentCard;