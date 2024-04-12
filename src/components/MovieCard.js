import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetails, addShowMovieDetails } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const MovieCard = ({ movie }) => {
    const searchPage = useSelector((store) => store.search.showSearchPage);
    const dispatch = useDispatch();

    const updateMovieDetails = async () => {
        const newDetails = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`,
            API_OPTIONS
        );
        const details = await newDetails.json();
        dispatch(addMovieDetails(details));
        dispatch(addShowMovieDetails(true));
    };

    return (
        <div
            className={`w-36 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer ${searchPage ? 'mr-8 mb-5' : 'mr-6'}`}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt='movie'
                onClick={updateMovieDetails}
            />
        </div>
    );
};

export default MovieCard;
