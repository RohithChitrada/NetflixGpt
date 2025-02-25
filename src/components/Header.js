import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";
import {toggleGptSearchView} from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

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

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  return (
    <div className="md:absolute p-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />


      {user && (<div className="flex flex-row gap-2">

        {showGptSearch&& 
        <select className="p-2 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
        </select>}

        <button className="p-2 mx-5 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch?"HomePage":"GPT Search"}</button> 
        <diV className="flex">
          <img className='w-10' src={user?.photoURL} alt='UserLogo'/>
          <p className="text-white p-2">{user?.displayName}</p>
        </diV>
        <button onClick={handleSignout} className="bg-red-600 text-white rounded-lg p-2">Sign Out</button>
      </div>)}

    </div>
  );
};

export default Header;
