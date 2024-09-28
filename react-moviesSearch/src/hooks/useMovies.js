import { useState } from "react";
import { fetchingMovies } from "../services/fetchingMovies";

import { useRef } from "react";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (previousSearch.current === search) {
      return;
    }
    try {
      setLoading(true)
      previousSearch.current = search;
      const newMovies = await fetchingMovies({ movieName: search });
      setMovies(newMovies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  return { movies, getMovies, loading };
}
