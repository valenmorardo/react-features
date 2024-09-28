export async function fetchingMovies({ movieName }) {

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=bdd97895&s=${movieName}`
  );
  const data = await response.json();
  const movies = data.Search;

  return movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));
}
