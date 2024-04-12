import { createSlice } from '@reduxjs/toolkit';

const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchMovies: null,
        showSearchPage: false,
    },
    reducers: {
        addSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        },
        showSearchPage: (state, action) => {
            state.showSearchPage = action.payload;
        },
    },
});

export const { addSearchMovies, showSearchPage } = searchMovieSlice.actions;

export default searchMovieSlice.reducer;
