/* eslint-disable no-undef */
import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/Validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/fireBase';
// import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import {toast} from 'react-hot-toast'
import {  updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { USER_AVTAR } from '../utils/constants';
import LoadingBar from 'react-top-loading-bar';
import { BG_URL } from '../utils/constants';
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState('');
  const [progress,setProgress] = useState(0);
  const email = useRef('');
  const password = useRef('');
  const userName = useRef('');
  const navigate=useNavigate()
  const [loading,setloading]=useState(false)
  const dispatch=useDispatch()


  const handleButtonClick = async () => {
    const message = checkValidateData(email.current.value, password.current.value, userName.current.value);
    seterrorMessage(message);
    if (message) return;

    setloading(true);

    try {
      if (!isSignIn) {
        // user creation
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value,userName.current.value);
        // console.log(email,password,userName,">>infooo")
        const user = userCredential.user;
        // console.log(user,">>>userrrr")


        await updateProfile(user, {
          displayName: userName.current.value,
          photoURL: USER_AVTAR
        }).then(()=>{
          const{uid,email,displayName,photoURL}=auth.currentUser
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL}))
        });

        // navigate('/browse');
        setloading(false);
        toast.success("User Created Successfully");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;     
        <LoadingBar color="#f11946" progress={progress}
    onLoaderFinished={() => setProgress(0)} />

        // console.log(user,'>>user')
        // 

        navigate('/browse');
        toast.success('Welcome to Browse');
        setloading(false);
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode + "-" + errorMessage);
      setloading(false);
      navigate('/')
      toast.error('Error in user operation');
    }
  };

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className='fixed'>
        <img className='h-screen object-cover w-screen'
          src={BG_URL}
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
          <h2 className='text-xl md:text-2xl font-bold mb-6'>
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
