import "./App.css";

import resultsMovies from "./mocks/with-results.json";
import { Movies } from "./components/Movies/Movies";
import { useEffect, useState } from "react";

import { useSearch } from "./hooks/useSearch";

function App() {
  const moviesMock = resultsMovies.Search;
  const { search, updateSearch } = useSearch();

  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return setMovies(moviesMock);
  };

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
