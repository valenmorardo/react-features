import "./App.css";

import resultsMovies from "./mocks/with-results.json";
import { Movies } from "./components/Movies/Movies";
import { useEffect, useState } from "react";

function App() {
  const moviesMock = resultsMovies.Search;

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return setMovies(moviesMock)
  };

  useEffect(() => {
    if (search.length < 3) {
      return setErrors(
        "El nombre de la pelicula debe tener mas de 3 caracteres"
      );
    }
    return setErrors();
  }, [search]);

  return (
    <header>
      <h1>React Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie name..."
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <main>
        <Movies movies={movies} />
      </main>
    </header>
  );
}

export default App;
