import { MovieCard } from "./MovieCard";

import './Movies.css'
export function Movies({ movies }) {

  return (
    <>
      {movies.Error ? (
        <p>{movies.Error}</p>
      ) : (
        <ul className="list-movies">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ul>
      )}
    </>
  );
}
