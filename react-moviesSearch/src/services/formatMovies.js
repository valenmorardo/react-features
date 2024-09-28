export function formatMovies( movies ) {
  return movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));
}
