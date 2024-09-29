import './Movies.css'

export function MovieCard(movie) {
  return (
    <li key={movie.id}>
      <img src={movie.image} />
      <p>
        {movie.title} - {movie.year}
      </p>
    </li>
  );
}
