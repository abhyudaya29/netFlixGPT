import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unSubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate('/error', { state: { errorMessage: "An error occurred during sign-out. Please try again." } });
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-full px-8 py-2 bg-gradient-to-b from-black z-10 opacity-65 flex flex-col md:flex-row justify-between items-center">
      <img className="w-32 md:w-44 cursor-pointer" src={LOGO} alt="Netflix logo" onClick={() => navigate('/')} />

      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select className="mr-2 md:mr-4" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <Button className="mr-2 md:mr-4 bg-purple-700 text-white" onClick={handleGptSearch}>{showGptSearch ? 'Home' : 'GPT Search'}</Button>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User icon" />
            <Button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleSignout}>Sign Out</Button>
            <p className="ml-2 md:ml-4 text-white font-semibold">Welcome: {user.displayName}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
