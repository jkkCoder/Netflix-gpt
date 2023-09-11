import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import {BACKGROUND_URL} from "../utils/constants"

const GptSearch = () => {
  return (
    <>
        <div className='fixed -z-10'>
            <img className='h-screen object-cover' src={BACKGROUND_URL} alt="bg-img" />
        </div>
        <div className='pt-[30%] md:p-0'>
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
    </>
    
  )
}

export default GptSearch