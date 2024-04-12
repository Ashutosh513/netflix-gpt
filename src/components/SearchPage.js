import React from 'react';
import SearchBar from './SearchBar';
import SearchMovies from './SearchMovies';
import { useSelector } from 'react-redux';

const SearchPage = () => {
    const movies = useSelector((store) => store.search.searchMovies);
    // className =
    //     'w-full h-[600px] bg-slate-100 z-30 top-0 fixed flex justify-center -mt-20 px-6 flex-col items-center';
    return (
        <div className='fixed top-0 pt-32 px-10 z-30 h-screen bg-black bg-opacity-80'>
            <SearchBar />
            {movies && <SearchMovies />}
        </div>
    );
};

export default SearchPage;
