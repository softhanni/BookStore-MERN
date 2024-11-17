import React from 'react'
import { Link } from 'react-router-dom';

const BackButton = ( { destination = '/' }) => {
  return (
    <div className='flex'>
        
        <Link to={destination} className='bg-sky-800 text-white px-5 py-1 rounded-lg w-fit'>
        <button className='text-2x1'>Back</button>
        </Link>
    </div>
  )
}

export default BackButton