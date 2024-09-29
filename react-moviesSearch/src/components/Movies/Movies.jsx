import { MovieCard } from "./MovieCard";

export function Movies({ movies }) {

  return (
    <section>
      {movies.Error ? (
        <p>{movies.Error}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ul>
      )}
    </section>
  );
}
