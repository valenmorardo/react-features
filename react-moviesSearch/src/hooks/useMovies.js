import { useState } from "react";
import { fetchingMovies } from "../services/fetchingMovies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const newMovies = await fetchingMovies({ movieName: search });
      setMovies(newMovies);
    } catch (error) {
      console.log(error);
    }
  };

  return { movies, getMovies };
}
