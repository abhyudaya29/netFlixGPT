// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
// import OpenAI from "openai"
import openai from "../utils/openAi"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovieresult } from "../utils/gptSlice"
// import { useDispatch } from 'react-redux';
const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.config.lang)
    const searchText=useRef(null)
    const dispatch=useDispatch()
    const fetchMovie=async(movie)=>{
      try{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const response=await data.json()
        // console.log(response,"response")
        return response.results

      }catch(error){
        console.loh("Error",error)

      }
      
    }
    const handleOpenaiApi = async () => {
      // console.log(searchText.current.value);
      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults.choices[0]?.message?.content,"gpt results")
    // if(!gptResults.choices) return ;
    const gptMovies=gptResults.choices[0]?.message?.content.split(',')
    // console.log(gptMovies,">>gpt Movies")
    // for each movie ,will search for tbmmb api
    const dataPromise=gptMovies.map((movie)=>(fetchMovie(movie)))
    const tmbdResults=await Promise.all(dataPromise)
    // console.log(tmbdResults,"tmbResults")
    dispatch(addGptMovieresult({movieNames: gptMovies, movieResults: tmbdResults}))

    
  };
  

    
  return (
    <>
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form className="w-full md:w-1/2  bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}  >
        <input 
        ref={searchText}
        className="p-4 m-4 col-span-9" 
        type="text" 
        placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white" onClick={handleOpenaiApi}>{lang[langKey].search}</button>
    </form>
    </div>
    </>
  )
}

export default GptSearchBar