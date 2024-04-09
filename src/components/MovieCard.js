import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieDetails, addShowMovieDetails } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const [movieCardClicked, setMovieCardClicked] = useState(false);

    const handleMovieClick = () => {
        setMovieCardClicked(true);
    };

    const updateMovieDetails = async () => {
        const newDetails = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`,
            API_OPTIONS
        );
        const details = await newDetails.json();
        dispatch(addMovieDetails(details));
        dispatch(addShowMovieDetails(true));
        setMovieCardClicked(false);
    };

    useEffect(() => {
        if (movieCardClicked) updateMovieDetails();
    }, [movieCardClicked]);

    return (
        <div className='w-36 mr-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer'>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt='movie'
                onClick={handleMovieClick}
            />
        </div>
    );
};

export default MovieCard;
