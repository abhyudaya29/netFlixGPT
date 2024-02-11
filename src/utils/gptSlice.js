/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        // use to show and hinde gpt search
        toggleGptSearchView:(state)=>{
            // if showGptSearch is true then make it false
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieresult:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieNames=movieNames
            state.movieResults=movieResults
        }
    }
})
export const {toggleGptSearchView,addGptMovieresult}=gptSlice.actions
export default gptSlice.reducer