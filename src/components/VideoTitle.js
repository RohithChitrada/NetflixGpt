import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-60 px-20 text-left absolute text-white bg-gradient-to-tr from-black w-screen aspect-video'>
      <h1 className='text-4xl py-5 font-bold'>{title}</h1>
      <p className='text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
