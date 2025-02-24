import React from "react";
import { WEBSITE_BG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <img
        className="absolute w-full h-full object-cover -z-10"
        src={WEBSITE_BG}
        alt="bg"
      />
      <GptSearchBar/>
    </div>
  );
};

export default GptSearchPage;
