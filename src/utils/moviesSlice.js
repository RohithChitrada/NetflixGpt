import { createSlice } from "@reduxjs/toolkit";


const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        TopRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
    }
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies} =moviesSlice.actions;

export default moviesSlice.reducer;