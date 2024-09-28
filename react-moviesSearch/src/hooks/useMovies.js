
import { useState } from 'react';
import moviesMock from '../mocks/with-results.json'


export function useMovies({search}) {
    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        console.log(search)
        setMovies(moviesMock.Search)
    }

    return {movies, getMovies}
}