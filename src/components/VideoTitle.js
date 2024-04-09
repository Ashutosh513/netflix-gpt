import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    addMovieDetails,
    addShowMovieDetails,
    addShowMovieDetailsTrailer,
} from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const VideoTitle = ({ title, overview, movieID }) => {
    const dispatch = useDispatch();

    const updateMovieDetails = async (showTrailer) => {
        const newDetails = await fetch(
            `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
            API_OPTIONS
        );
        const details = await newDetails.json();
        dispatch(addMovieDetails(details));
        dispatch(addShowMovieDetails(true));
        dispatch(addShowMovieDetailsTrailer(showTrailer));
    };

    return (
        <div className=' pt-[10%] px-12 w-full z-10 absolute text-white aspect-video bg-gradient-to-r from-black'>
            <h1 className='text-3xl bold'>{title}</h1>
            <p className='w-1/3 mt-2 mb-4 leading-5'>{overview}</p>
            <div className='flex'>
                <button
                    className='px-7 bg-white text-black rounded-md hover:bg-opacity-90 flex justify-center items-center'
                    onClick={() => updateMovieDetails(true)}
                >
                    <div className='text-3xl mr-2'>▷</div>
                    <div className='py-3'>
                        <strong>Play</strong>
                    </div>
                </button>
                <button
                    className='px-7 mx-4 bg-opacity-60 bg-gray-500 text-white hover:bg-opacity-90 rounded-md flex justify-center items-center'
                    onClick={() => updateMovieDetails(false)}
                >
                    <div className='text-3xl mr-2'>ⓘ</div>
                    <div className='py-3'>More Info</div>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
