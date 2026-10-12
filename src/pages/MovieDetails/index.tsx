import { Link, useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { movie, loading } = useMovieDetails(id);

  return (
    <section className="flex-1 max-w-7xl mx-auto w-full p-6 text-white">
      <div className="mt-4">
        <Link to="/" className="inline-block font-heading text-slate-600 hover:text-amber-400 font-semibold mb-4 transition-colors">
          ⬅ Voltar para a lista
        </Link>
      </div>

      {loading ? (
        <LoadingSpinner message="Carregando detalhes do filme..." />
      ) : movie ? (
        <div className="bg-slate-800/70 rounded-xl p-6 md:p-8 border border-slate-700 shadow-xl flex flex-col md:flex-row gap-8">
          
          <div className="w-full md:w-1/3 shrink-0">
            <img 
              src={movie.image} 
              alt={`Pôster do filme ${movie.title}`}
              className="w-full rounded-xl shadow-lg border border-slate-600"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-400">
              {movie.title} <span className="text-slate-400 text-2xl font-normal">({movie.release_date})</span>
            </h1>
            
            <p className="text-lg text-slate-300 italic">
              {movie.original_title} ( {movie.original_title_romanised} )
            </p>

            <div className="flex gap-3 my-2">
              <span className="bg-red-500/20 text-red-400 px-3 py-1.5 rounded-md font-semibold text-sm border border-red-500/30">
                🍅 Rotten Tomatoes: {movie.rt_score}%
              </span>
              <span className="bg-slate-700 text-slate-200 px-3 py-1.5 rounded-md font-semibold text-sm border border-slate-600">
                ⏱️ Duração: {movie.running_time} min
              </span>
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-semibold text-amber-400 mb-2">Sinopse</h2>
              <p className="text-slate-300 text-justify italic">
                {movie.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-sm">Diretor</p>
                <p className="font-semibold text-lg">{movie.director}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-sm">Produtor</p>
                <p className="font-semibold text-lg">{movie.producer}</p>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl font-semibold text-slate-300">Filme não encontrado.</p>
        </div>
      )}
    </section>
  )
}
