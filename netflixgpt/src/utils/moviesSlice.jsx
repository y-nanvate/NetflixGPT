import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"c",
    initialState:{
    nowPlayingMovies:null,
    TrailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload;

        },
        addTrailerVideos:(state, action)=>{
         state.TrailerVideo=action.payload;
        }
    }

})

export const { addNowPlayingMovies, addTrailerVideos} = moviesSlice.actions;
export default moviesSlice.reducer;