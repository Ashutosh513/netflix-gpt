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

const Browse = () => {
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();

    useEffect(() => {
        document.body.style.zoom = '100%';
    }, []);

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
                    </>
                )}
            </div>
        </div>
    );
};

export default Browse;
