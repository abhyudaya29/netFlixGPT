import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailervideo } from "../utils/movieSlice";

const useMovieTrailer=(movie_id)=>{
    const dispatch=useDispatch()
  // fetch Trailer Video
    const getMovieVideos = async () => {
        const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
      API_OPTIONS
    );
    const resposne = await data.json();
    console.log(resposne);
    const filterMovies = resposne.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(filterMovies, ">>filterMovies");
    // if there is a trailer then take the 1st trailer or then take the  first video
    const trailer = filterMovies.length ? filterMovies[0] : resposne.results[0];
    console.log(trailer, "trailer1111");
    dispatch(addTrailervideo(trailer))}
    useEffect(()=>{
        getMovieVideos()

    },[])
    
}

export default useMovieTrailer
