import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className='bg-black pb-10'>
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
