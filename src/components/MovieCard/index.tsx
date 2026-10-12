import { Link } from "react-router-dom";
import type { Movie } from "../../types/movie";

const cardBaseClass =
  "bg-slate-800/80 rounded-xl p-4 border border-slate-700 flex flex-col gap-1.5 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-400/10 hover:border-slate-500 transition-all duration-300 cursor-pointer";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link key={movie.id} to={`/movie/${movie.id}`} className={cardBaseClass}>
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-75 object-cover rounded-xl"
      />
      <h2 className="font-heading text-lg/tight font-bold text-amber-400">
        {movie.title}
      </h2>
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded font-semibold inline-block">
          🍅 {movie.rt_score}%
        </span>
        <span className="text-xs text-gray-300 bg-gray-500 px-2 py-1 rounded font-semibold inline-block">
          {movie.release_date}
        </span>
      </div>
    </Link>
  );
}

export { cardBaseClass };
