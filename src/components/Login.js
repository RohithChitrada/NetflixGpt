import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signup, setsignup] = useState(false);

  const handlesignup = () => {
    setsignup(!signup);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-full object-container"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <form className="absolute w-3/12 bg-black p-10 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50">
        <h1 className="font-bold text-3xl py-4 text-start">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup && (
          <input
            type="text"
            placeholder="UserName"
            className="p-4 my-4 rounded-lg w-full bg-gray-800 focus:outline focus:outline-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 rounded-lg w-full bg-gray-800 focus:outline focus:outline-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-lg w-full bg-gray-800 focus:outline focus:outline-white"
        />
        <button className="p-2 my-4 bg-red-700 text-lg font-semibold text-white w-full rounded-lg hover:bg-red-800">
          {signup ? "Sign Up" : "Sign In"}
        </button>
        <p>Forgot Password?</p>
        {signup ? (
          <p className="py-5 text-start cursor-pointer" onClick={handlesignup}>
            <span className="text-gray-400 ">Already Have an Account?</span>{" "}
            <span className="hover:underline underline-offset-2">
              Sign In Now.
            </span>
          </p>
        ) : (
          <p className="py-5 text-start cursor-pointer" onClick={handlesignup}>
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
