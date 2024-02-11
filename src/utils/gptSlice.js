import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false
    },
    reducers:{
        // use to show and hinde gpt search
        toggleGptSearchView:(state)=>{
            // if showGptSearch is true then make it false
            state.showGptSearch=!state.showGptSearch;
        }
    }
})
export const {toggleGptSearchView}=gptSlice.actions
export default gptSlice.reducer