import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useDispatch, useSelector } from "react-redux";
import {  removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from '../utils/fireBase'
// import { useDispatch } from 'react-redux'
import { addUser} from '../utils/userSlice'
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);
  const dispatch=useDispatch()

  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user Sign Up
        const{uid,email,displayName,photoURL}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        // if user SignUp then take him/her to browse page
        navigate('/browse')

        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
    // unSubscribe when component unMounts
    return ()=>unSubscribe()
    

  },[])






  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // User is signed out
        dispatch(removeUser())
        navigate('/');
      })
      .catch((error) => {
        // Log the error for debugging purposes
        console.error("Sign-out error:", error);

        // Display a user-friendly error message on the UI
        navigate('/error', { state: { errorMessage: "An error occurred during sign-out. Please try again." } });
      });
  };

  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 opacity-65 flex justify-between">
        <img className="w-44" src={LOGO} alt="Netflix logo" />
        {user ? (
          <div className="flex p-2">
            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="User icon" />
            <Button className="ml-2 bg-red" onClick={handleSignout}>
              Sign Out
            </Button>
            {/* <p>Welcome:{user.displayName}</p> */}
          </div>
        ):(null)}
      </div>
        
    </>
  );
};

export default Header;
