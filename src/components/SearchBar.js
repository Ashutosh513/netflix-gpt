import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchMovies } from '../utils/searchMoviesSlice';
import { API_OPTIONS } from '../utils/constants';

const SearchBar = () => {
    const showSearch = useSelector((store) => store.search.showSearchPage);
    const movieName = useRef();
    const dispatch = useDispatch();
    console.log(showSearch);

    const handleSearchBtn = async () => {
        console.log(movieName);
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movieName.current.value}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS
        );

        const searchResult = await data.json();
        console.log(searchResult);
        dispatch(addSearchMovies(searchResult.results.slice(0, 16)));
    };

    return (
        <div className='w-screen h-16 flex justify-center'>
            <div className='text-lg'>
                <input
                    ref={movieName}
                    type='text'
                    placeholder='Search'
                    className='w-96 bg-white text-black px-7 py-3 rounded-l-md            hover:bg-gray-100'
                />
                <button
                    className='w-36 px-7 py-3 rounded-r-md bg-red-700 text-white hover:bg-red-600'
                    onClick={() => handleSearchBtn()}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
