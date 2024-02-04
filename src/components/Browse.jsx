import React, { useEffect } from "react";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";


const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
    <Header/>
    </>
  );
}

export default Browse;
