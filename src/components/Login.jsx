import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/Validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/fireBase';
// import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import {toast} from 'react-hot-toast'

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState('');
  const email = useRef('');
  const password = useRef('');
  const userName = useRef('');
  const navigate=useNavigate()
  const [loading,setloading]=useState(false)

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value, userName.current.value);
    seterrorMessage(message);
    if(message) return
    // otherwise sign In or Sin Up
    // for signUp logic
    setloading(true)
    if(!isSignIn){
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log(user,"sign Up")
        navigate('/browse')
        setloading(false)
        
        toast.success("User Created Successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode +"-"+errorMessage)
        setloading(false)
        toast.error("Error in user Creation");
        
        // ..
      });

    
      
      

    }
    else{
      // 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user,"regesterd user")
        navigate('/browse')
        toast.success('Welcome to Browse')
        setloading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + "-"+ errorMessage)
        setloading(false)
        toast.error('Error in user SignIn')
      });

    }
  };

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background image"
        />
      </div>

      <div className='formContainer'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='w-full md:w-3/4 lg:w-1/2 xl:w-1/3 absolute p-4 md:p-8 text-white bg-opacity-75 rounded-lg shadow-md my-16 mx-auto right-0 left-0 bg-black'
        >
          <h2 className='text-xl md:text-2xl font-bold mb-4'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>

          <input
            ref={email}
            type='text'
            placeholder='Email Address'
            className='p-2 m-2 md:w-full bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='p-2 m-2 md:w-full bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
          />

          {!isSignIn && (
            <input
              ref={userName}
              type='text'
              placeholder='UserName'
              className='p-2 m-2 md:w-full bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          )}

          <p className='errorMessage text-red-500'>{errorMessage}</p>

          <Button 
            onClick={handleButtonClick}
            // type='primary'
            loading={loading}
            className='w-full h-full bg-red text-white font-semibold p-3 md:p-4 rounded-lg hover:bg-red-700'
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>

          <div className='flex items-center my-2'>
            <input type='checkbox' />
            <span className='text-gray-400 pr-4'>Remember me</span>
            <span className='pl-4'>Need help?</span>
          </div>

          <p className='py-2 md:py-4 text-sm md:text-base bg-333333 opacity-75 text-#333333'>
            {isSignIn ? 'New to Netflix?' : 'Already have an account?'}
            <span
              className='font-bold hover:bg-red-600 cursor-pointer rounded-lg'
              onClick={toggleSignInForm}
            >
              {isSignIn ? ' Sign Up' : ' Sign In'}
            </span>{' '}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
