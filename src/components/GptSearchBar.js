import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector(state => state.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" className='col-span-9 p-4 m-4' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar