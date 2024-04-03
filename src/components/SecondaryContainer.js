import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className='bg-black'>
            <div className='-mt-44 relative z-20'>
                <MovieList
                    title={'Now Playing'}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList
                    title={'Trending'}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
                <MovieList
                    title={'Up coming'}
                    movies={movies.nowPlayingMovies}
                />
            </div>
        </div>
    );
};

export default SecondaryContainer;
