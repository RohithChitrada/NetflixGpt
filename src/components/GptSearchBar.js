import React from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='px-4 py-2 m-5 col-span-9 rounded-lg' />
        <button className='col-span-3 m-5 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
