import { MovieCard } from "./MovieCard";

export function Movies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
}
