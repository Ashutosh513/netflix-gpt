import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/' +
                movieID +
                '/videos?language=en-US',
            API_OPTIONS
        );

        const json = await data.json();
        const filterData = json.results?.filter(
            (video) => video.type === 'Trailer'
        );
        const video = filterData ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(video));
    };

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
};

export default useMovieTrailer;
