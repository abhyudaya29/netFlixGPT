
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch=useDispatch();
  
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user Sign Up
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        // if user SignUp then take him/her to browse page
        // navigate('/browse')

        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        // navigate('/')
      }
    });
    

  },[])
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body