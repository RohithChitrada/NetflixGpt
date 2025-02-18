import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signup, setSignup] = useState(true);
  const [message, setMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setMessage(errorMessage);

    if (errorMessage) return;

    if (!signup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          updateProfile(user, {
            displayName: username.current.value,
            photoURL:
              "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setMessage(error.message);
            });
        })
        .catch((error) => {
          setMessage(error.code);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          setMessage(error.code); // Handle error during login
        });
    }
  };

  const handleSignupToggle = () => {
    setSignup(!signup);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <form className="absolute w-3/12 bg-black p-10 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50">
        <h1 className="font-bold text-3xl py-4 text-start">
          {!signup ? "Sign Up" : "Sign In"}
        </h1>
        {!signup && (
          <input
            ref={username}
            type="text"
            placeholder="UserName"
            className="p-4 my-4 rounded-lg w-full bg-gray-800 focus:outline focus:outline-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 rounded-lg w-full bg-gray-800 focus:outline focus:outline-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-lg w-full bg-gray-800 focus:outline focus:outline-white"
        />
        <p className="text-red-700 text-start">{message}</p>
        <button
          className="p-2 my-4 bg-red-700 text-lg font-semibold text-white w-full rounded-lg hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {!signup ? "Sign Up" : "Sign In"}
        </button>
        {signup && <p className="cursor-pointer">Forgot Password?</p>}
        {signup ? (
          <p
            className="py-5 text-start cursor-pointer"
            onClick={handleSignupToggle}
          >
            <span className="text-gray-400 ">Already Have an Account?</span>{" "}
            <span className="hover:underline underline-offset-2">
              Sign In Now.
            </span>
          </p>
        ) : (
          <p
            className="py-5 text-start cursor-pointer"
            onClick={handleSignupToggle}
          >
            <span className="text-gray-400 ">New to Netflix?</span>{" "}
            <span className="hover:underline underline-offset-2">
              Sign Up Now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
