function Button({ teks, warna }) {
  return (
    <button className={`rounded-lg px-4 py-2 font-semibold text-white shadow ${warna}`}>
      {teks}
    </button>
  );
}
export default Button;