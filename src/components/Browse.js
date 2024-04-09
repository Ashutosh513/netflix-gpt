import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MovieDetails from './MovieDetails';
import Footer from './Footer';

const Browse = () => {
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    const showMovieDetails = useSelector(
        (store) => store.movies.showMovieDetails
    );

    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();

    useEffect(() => {
        document.body.style.zoom = '100%';
    }, []);

    if (showMovieDetails) document.body.style.overflow = 'hidden';
    if (!showMovieDetails) document.body.style.overflow = '';

    return (
        <div>
            <div>
                <Header />
                {showGPTSearch ? (
                    <GPTSearchPage />
                ) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                        <Footer />
                    </>
                )}
                {showMovieDetails && <MovieDetails />}
            </div>
        </div>
    );
};

export default Browse;
