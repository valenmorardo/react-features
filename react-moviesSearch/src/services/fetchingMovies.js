export async function fetchingMovies({ movieName }) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=bdd97895&s=${movieName}`
  );
  const data = await response.json();
  const moviesResponse = data;

  return moviesResponse;
}
