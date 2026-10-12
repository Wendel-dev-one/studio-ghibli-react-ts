import { useMovies } from "../../hooks/useMovies";
import { MovieCard, cardBaseClass } from "../MovieCard";
import { LoadingSpinner } from "../LoadingSpinner";

export const ListMoviesCards = () => {
  const { movies, loading, visibleMoviesCount, showMore } = useMovies();

  if (loading) {
    return (
      <LoadingSpinner message="Carregando filmes do Studio Ghibli..." />
    );
  }

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.slice(0, visibleMoviesCount).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

        {visibleMoviesCount < movies.length && (
          <button
            onClick={showMore}
            className={`${cardBaseClass} items-center justify-center gap-2 min-h-80`}
          >
            <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-2">
              <span className="text-2xl font-bold text-amber-400 leading-none">
                +
              </span>
            </div>
            <span className="font-heading text-xl font-bold text-amber-400">
              Ver mais
            </span>
          </button>
        )}
      </div>
    </main>
  );
};
