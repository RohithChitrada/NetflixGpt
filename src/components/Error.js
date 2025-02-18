import React from 'react'
import { useRouteError } from 'react-router-dom'



const Error = () => {
    const error=useRouteError();
    console.log(error);

console.log(error);
  return (
    <div className='text-center my-10'>
        <h1 className='text-8xl text-green-600'>{error.status} Error</h1>

      <h1 className='text-2xl'>Something went wrong</h1>
      <h1 className='text-2xl'>{error.data}</h1>
    </div>
  )
}

export default Error