// import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBAckground from './VideoBAckground'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies===null) return
    const mainMovie=movies[0];
    console.log(mainMovie,">>>>")
    const{original_title,overview,id}=mainMovie
  return (
    <>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBAckground movie_id={id}/>
    <div>MainContainer</div>
    </>
  )
}

export default MainContainer