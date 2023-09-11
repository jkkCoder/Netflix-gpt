import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4 '>{description}</p>
        <div className='my-2 md:m-0'>
            <button className='bg-white rounded-lg hover:opacity-80 text-black py-1 px-3 md:py-4 md:px-12 text-xl'>Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 hover:opacity-80 bg-opacity-50 rounded-lg text-white p-4 px-12 text-xl'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle