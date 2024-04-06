import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className='bg-black'>
            <div className='-mt-60 relative z-20'>
                <MovieList
                    title={'Now Playing'}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
                <MovieList title={'Popular'} movies={movies.popularMovies} />
                <MovieList title={'Up coming'} movies={movies.upComingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
