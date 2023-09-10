import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import {BACKGROUND_URL} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={BACKGROUND_URL} alt="bg-img" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch