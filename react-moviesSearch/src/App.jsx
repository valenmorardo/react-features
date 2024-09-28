import "./App.css";

import resultsMovies from "./mocks/with-results.json";

import { Movies } from "./components/Movies/Movies";

function App() {
  const movies = resultsMovies.Search;

  return (
    <header>
      <h1>React Movies</h1>
      <form onSubmit={"#"}>
        <input type="text" placeholder="Movie name..." />
        <button type="submit">Buscar</button>
      </form>
      <main>
        <Movies movies={movies}/>
      </main>
    </header>
  );
}

export default App;
