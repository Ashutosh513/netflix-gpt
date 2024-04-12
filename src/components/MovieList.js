import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MovieList = ({ title, movies }) => {
    const searchPage = useSelector((store) => store.search.showSearchPage);
    console.log(movies);

    return (
        <div className='pt-4 pl-12 pr-6'>
            {!searchPage && (
                <h1 className='text-2xl py-3 text-white'>{title}</h1>
            )}
            <div
                className={`flex ${!searchPage ? ' overflow-x-auto overflow-y-hidden' : 'overflow-x-hidden overflow-y-auto'}`}
            >
                <div
                    className={`${!searchPage ? 'flex' : 'flex flex-wrap overflow-y-scroll'}`}
                >
                    {movies?.map(
                        (movie) =>
                            movie?.poster_path && (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
