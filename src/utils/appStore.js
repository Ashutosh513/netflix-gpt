import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import langReducer from './languageSlice';
import searchMovieReducer from './searchMoviesSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        lang: langReducer,
        search: searchMovieReducer,
    },
});

export default appStore;
