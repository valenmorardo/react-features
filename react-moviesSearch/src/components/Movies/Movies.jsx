import { MovieCard } from "./MovieCard";

export function Movies({ movies }) {
  console.log(movies)
  return (
    <div>
      {!movies.length ? (
        <p>No hay movies</p>
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
