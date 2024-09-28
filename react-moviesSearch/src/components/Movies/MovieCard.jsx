export function MovieCard(movie) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} />
      <p>
        {movie.Title} - {movie.Year}
      </p>
    </li>
  );
}
