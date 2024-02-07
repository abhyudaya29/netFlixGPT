/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
// umport {useMovieTrailer}

const VideoBAckground = ({ movie_id }) => {
    // const[trailerKey,setTrailerKey]=useState(null)
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer(movie_id)
    
  return (
    // <div>VideoBAckground</div>
    <>
      <div className="">
        <iframe
        className="w-screen aspect-video"
          
          src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        ></iframe>
      </div>
    </>
  );
};

export default VideoBAckground;
