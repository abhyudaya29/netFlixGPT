import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
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
        <img className="w-44" src="https://images8.alphacoders.com/115/1152301.png" alt="Netflix logo" />
        {user && (
          <div className="flex p-2">
            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="User icon" />
            <Button className="ml-2 bg-red" onClick={handleSignout}>
              Sign Out
            </Button>
            <p>Welcome:{user.displayName}</p>
          </div>
        )}
      </div>
        
    </>
  );
};

export default Header;
