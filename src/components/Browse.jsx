import React, { useEffect } from "react";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    {/* {

      Main Conatiner
        -Video Background
        -Video Title
      Secondary Container
        -MovieList *n
          -Cards *n

    } */}
    </>
  );
}

export default Browse;
