import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useOnlineStatus from '../utils/useOnlineStatus';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearchPage from './GPTSearchPage';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import SearchPage from './SearchPage';
import UserOffline from './UserOffline';

const Browse = () => {
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    const showMovieDetails = useSelector(
        (store) => store.movies.showMovieDetails
    );
    const showSearchPage = useSelector((store) => store.search.showSearchPage);

    const onlineStatus = useOnlineStatus();

    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();

    useEffect(() => {
        document.body.style.zoom = '100%';
    }, []);

    if (!onlineStatus) {
        return <UserOffline />;
    }

    if (showMovieDetails) document.body.style.overflow = 'hidden';
    if (!showMovieDetails) document.body.style.overflow = '';

    if (showSearchPage) document.body.style.overflow = 'hidden';
    if (!showSearchPage) document.body.style.overflow = '';

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
                {showSearchPage && <SearchPage />}
            </div>
        </div>
    );
};

export default Browse;
