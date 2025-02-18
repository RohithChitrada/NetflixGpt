import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

const handleSignout=()=>{
  signOut(auth).then(() => {
  }).catch((error) => {
  navigate("/error")
  });
}
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return ()=> unsubscribe()

  }, [dispatch,navigate]);

  return (
    <div className="absolute p-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {user && (<div className="flex flex-row gap-1">
        <img className='w-10' src={user?.photoURL} alt='UserLogo'/>
        <p>{user?.name}</p>
        <button onClick={handleSignout} className="bg-red-600 text-white rounded-lg p-2">Sign Out</button>
      </div>)}

    </div>
  );
};

export default Header;
