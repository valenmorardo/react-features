import { useState } from "react";
import { fetchingMovies } from "../services/fetchingMovies";

import { useRef } from "react";

import { formatMovies } from "../services/formatMovies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (previousSearch.current === search) {
      return;
    }

    try {
      setLoading(true);
      previousSearch.current = search;
      const moviesResponse = await fetchingMovies({ movieName: search });
      if (moviesResponse.Search) {
        const newMovies = formatMovies(moviesResponse.Search);
        console.log(moviesResponse);
        return setMovies(newMovies);
      }

      return setMovies(moviesResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
