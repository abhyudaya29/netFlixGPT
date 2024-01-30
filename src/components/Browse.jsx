import React from "react";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {
  
  

  return (
    <>
    <Header/>
    </>
  );
}

export default Browse;
