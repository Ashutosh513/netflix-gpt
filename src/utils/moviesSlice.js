import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        upComingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        movieDetails: null,
        showMovieDetails: false,
        showMovieDetailsTrailer: false,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        addShowMovieDetails: (state, action) => {
            state.showMovieDetails = action.payload;
        },
        addShowMovieDetailsTrailer: (state, action) => {
            state.showMovieDetailsTrailer = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addTrailerVideo,
    addUpComingMovies,
    addTopRatedMovies,
    addPopularMovies,
    addMovieDetails,
    addShowMovieDetails,
    addShowMovieDetailsTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
