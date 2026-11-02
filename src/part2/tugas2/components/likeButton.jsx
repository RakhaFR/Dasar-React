function LikeButton({onLike}) {
    return (
        <div className="flex flex-wrap gap-3">
            <button onClick={onLike} className="rounded-lg bg-slate-700 px-4 py-2 text-white">Like 💖</button>
        </div>
    );
}
export default LikeButton;