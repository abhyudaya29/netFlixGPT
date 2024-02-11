import React, { useEffect } from "react";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPT from "./GPT";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies()
  return (
    <>
      <Header/>
        {showGptSearch?(<GPT/>):(<>
        <MainContainer/>
        <SecondaryContainer/>
    
    
      </>)}
    
   
    
    
    </>
  );
}

export default Browse;
