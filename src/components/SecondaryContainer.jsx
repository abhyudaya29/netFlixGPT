// import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies=useSelector((state)=>state.movies)
  return (
    <>
    <div className='-mt-10 relative z-20 bg-black'>
        <MovieList title={"Now playing Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Most Features"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Commedy"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Romantic"} movies={movies.nowPlayingMovies}/>
    </div>
   
   
    </>
  )
}

export default SecondaryContainer