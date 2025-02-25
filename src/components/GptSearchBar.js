import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'
// import openAi from '../utils/openAi';

const GptSearchBar = () => {

  const langKey=useSelector(store=>store.config.lang);
  const searchText=useRef(null);

  const handleGptSearchClick= async()=>{
    console.log(searchText.current.value);

    //GPT key is Paid Unable to Use


    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Baahubali, Pushpa, RRR, KGF, Inception";


    // const gptResults = await openAi.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     {"role": "user", "content": gptQuery},
    //   ],
    // });


    // console.log(gptResults.choices);

  }


  return (
    <div className='pt-[30%] flex justify-center lg:pt-[10%]'>
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={searchText} placeholder={lang[langKey].gptSearchPlaceholder} className='px-4 py-2 m-5 col-span-9 rounded-lg' />
        <button className='col-span-3 m-5 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
