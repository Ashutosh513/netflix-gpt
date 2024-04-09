import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';

const usePopularMovies = () => {
    // Fetch data from TMDB and update store.
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addPopularMovies(json.results.reverse()));
    };

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);
};

export default usePopularMovies;
