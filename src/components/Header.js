import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const user = useSelector((store) => store.user);

const handleSignout=()=>{
  signOut(auth).then(() => {
    navigate("/");
  }).catch((error) => {
  navigate("/error")
  });
}

  return (
    <div className="absolute p-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
