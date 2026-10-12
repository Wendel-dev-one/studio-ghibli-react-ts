import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState<number>(10);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        const data = await response.json();

        const sortedData = [...data].sort((a, b) =>
          a.title.localeCompare(b.title),
        );

        setMovies(sortedData);
      } catch (error) {
        console.error("Error ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const showMore = () => setVisibleMoviesCount((prev) => prev + 10);

  return { movies, loading, visibleMoviesCount, showMore };
}
