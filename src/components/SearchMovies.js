import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SearchMovies = () => {
    const movies = useSelector((store) => store.search.searchMovies);
    console.log(movies);

    return (
        <div className='w-screen z-40 min-h-96'>
            {movies.length > 0 ? (
                <MovieList movies={movies} />
            ) : (
                <div className='text-6xl p-36 text-white flex justify-center items-center'>
                    <h1>No Movies Found</h1>
                </div>
            )}
        </div>
    );
};

export default SearchMovies;
