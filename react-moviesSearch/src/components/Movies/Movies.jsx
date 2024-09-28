import { MovieCard } from "./MovieCard";

export function Movies({ movies }) {

  return (
    <div>
      {movies.Error ? (
        <p>{movies.Error}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ul>
      )}
    </div>
  );
}
