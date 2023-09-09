import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 '>{description}</p>
        <div className=''>
            <button className='bg-gray-500 bg-opacity-50 rounded-lg text-white p-4 px-12 text-xl'>▶ Play</button>
            <button className='mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white p-4 px-12 text-xl'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle