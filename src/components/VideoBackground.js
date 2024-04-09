import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieID }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieID);

    const [reloadCount, setReloadCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment reload count to trigger iframe reload
            setReloadCount((prevCount) => prevCount + 1);
        }, 90000); // Reload every 1 minute (60,000 milliseconds)

        return () => clearInterval(interval);
    }, []); // Run effect only once on component mount

    return (
        <div className='w-full relative -mt-36'>
            <iframe
                key={reloadCount} // Use reloadCount as key to force iframe reload
                className='w-full aspect-[16/9]'
                src={
                    'https://www.youtube.com/embed/' +
                    trailerVideo?.key +
                    '?&autoplay=1&mute=1&start=3'
                }
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
            ></iframe>
        </div>
    );
};

export default VideoBackground;
