import "./App.css";

import { Movies } from "./components/Movies/Movies";

import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import { useRef } from "react";

function App() {
  const { search, updateSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const alreadySearched = useRef(false);
  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
    alreadySearched.current = true;
  };

  return (
    <div className="page">
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
      </header>
      <main>
        {!alreadySearched.current ? (
          <p>Realiaza tu busqueda</p>
        ) : loading ? (
          <p>Cargando...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </div>
  );
}

export default App;
