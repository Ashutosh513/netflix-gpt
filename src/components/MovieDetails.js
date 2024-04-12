import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import PersonCard from './PersonCard';
import { useDispatch } from 'react-redux';
import {
    addShowMovieDetails,
    addShowMovieDetailsTrailer,
} from '../utils/moviesSlice';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const movie = useSelector((store) => store.movies.movieDetails);
    const showTrailer = useSelector(
        (store) => store.movies.showMovieDetailsTrailer
    );
    const [movieCredit, setMovieCredit] = useState([]);
    const [showMovieTrailer, setShowMovieTrailer] = useState(showTrailer);
    const [movieVideoKey, setMovieVideoKey] = useState('');

    // Movie Runtime
    const runtimeInMinutes = movie?.runtime;
    const hours = Math.floor(runtimeInMinutes / 60);
    const minutes = runtimeInMinutes % 60;
    console.log(movie);

    const castDetails = async () => {
        const cast = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`,
            API_OPTIONS
        );
        const castJson = await cast.json();
        setMovieCredit(castJson.cast.slice(0, 5));

        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
            API_OPTIONS
        );

        const json = await data.json();
        const filterData = json.results?.filter(
            (video) => video.type === 'Trailer'
        );
        const video = filterData ? filterData[0] : json.results[0];
        setMovieVideoKey(video?.key);
        console.log(movieVideoKey);
    };

    const handleOverlay = () => {
        if (!showMovieTrailer) {
            dispatch(addShowMovieDetails(false));
        }
        setShowMovieTrailer(false);
        dispatch(addShowMovieDetailsTrailer(false));
    };

    useEffect(() => {
        castDetails();
    }, []);

    const fetchedUrl = `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`;

    return (
        <div
            className={`fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black backdrop-blur-3 bg-opacity-${
                showMovieTrailer ? '90' : '80'
            }`}
            onClick={handleOverlay}
        >
            <div
                className='w-[1000px] h-[450px] z-60 rounded-lg'
                style={{
                    backgroundImage: `url(${fetchedUrl})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div
                className='absolute w-[1000px] h-[450px] p-8 bg-black z-70 rounded-lg flex text-white bg-opacity-80'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='w-[250px] mr-10'>
                    <img
                        src={
                            'https://image.tmdb.org/t/p/w500/' +
                            movie.poster_path
                        }
                        alt='Movie Poster'
                        className='h-[90%] rounded-md'
                    />
                    <div className='px-7 py-2 mt-2 bg-transparent rounded-md hover:bg-opacity-90 flex justify-center items-center'>
                        <div
                            className='cursor-pointer'
                            onClick={() => setShowMovieTrailer(true)}
                        >
                            <span className='text-2xl mr-2'>▷</span>
                            <strong>Play Trailer</strong>
                        </div>
                    </div>
                </div>
                <div className='w-[750px] text-xs'>
                    <h1 className='text-3xl uppercase'>{movie.title}</h1>
                    <p className='bold'>
                        {movie?.genres?.map((genre, index, arr) => (
                            <span key={genre.id} className='mr-2'>
                                {genre.name}
                                {index !== arr.length - 1 ? ',' : ''}
                            </span>
                        ))}
                        <span className='text-2xl bold relative top-1 mr-2'>
                            &middot;
                        </span>
                        <span>{`${hours}h ${minutes}m`}</span>
                    </p>
                    <p className='my-1 bold'>
                        <span>On Digital</span>&nbsp;&nbsp; / &nbsp;&nbsp;
                        <span>Release Date: {movie.release_date} (US)</span>
                    </p>
                    <p className='h-20 overflow-y-scroll my-2'>
                        {movie.overview}
                    </p>

                    <div className='flex mt-4'>
                        {movieCredit?.map((person) => (
                            <PersonCard key={person.id} person={person} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`absolute w-[1000px] h-[450px] z-60 rounded-lg z-80 ${showMovieTrailer ? '' : 'hidden'}`}
            >
                {showMovieTrailer && (
                    <iframe
                        id='video-player'
                        className='w-full h-full'
                        src={
                            'https://www.youtube.com/embed/' +
                            movieVideoKey +
                            '?&autoplay=1&start=0'
                        }
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;
