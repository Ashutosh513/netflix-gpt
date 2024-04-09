import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='pt-4 pl-12 pr-6'>
            <h1 className='text-2xl py-3 text-white'>{title}</h1>
            <div className='flex overflow-x-auto overflow-y-hidden'>
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
