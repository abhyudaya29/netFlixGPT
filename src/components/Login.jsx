import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/Validate';

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const[errorMessage,seterrorMessage]=useState('')
  const email = useRef('');
  const password = useRef('');
  const userName=useRef('')
  // const userName = useRef('');

  const handleButtonClick = () => {
    // validate form
    console.log(email.current.value, password.current.value,userName);
    const message=checkValidateData(email.current.value, password.current.value,userName.current.value);
    seterrorMessage(message)
  
    // Additional validation or form submission logic can be added here
    console.log(message)
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
          alt="back-ground image"
        />
      </div>

      <div className='formContainer '>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            
          }}
          className='w-3/12 absolute p-12 text-white bg-opacity-75 rounded-lg shadow-md my-36 mx-auto right-0 left-0 bg-black'
        >
          <h2 className='text-2xl font-bold mb-4'>
            {isSignIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
          </h2>

          <input
            ref={email}
            type='text'
            placeholder='Email Address'
            className='p-2 m-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='p-2 m-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
          />

          {!isSignIn && (
            <input
              ref={userName}
              type='text'
              placeholder='UserName'
              className='p-2 m-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          )}
          <p className='errorMessage text-red-500'>{errorMessage}</p>

          <button onClick={handleButtonClick} className='w-full bg-red text-white font-semibold p-4 rounded-lg hover:bg-red-700'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>

          <input type='checkbox' />
          <span className='text-gray-400 pr-4'>Remember me</span>{' '}
          <span className='pl-4'>Need help?</span>

          <p className='py-4 font-16 bg-333333 opacity-75 text-#333333'>
            {isSignIn ? 'New to Netflix?' : 'Already have an account?'}
            <span
              className='font-bold hover:bg-red-600 cursor-pointer rounded-lg w-30'
              onClick={toggleSignInForm}
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </span>{' '}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
