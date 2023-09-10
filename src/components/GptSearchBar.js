import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { getRandomUniqueMovies } from '../utils/movieConstants'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const langKey = useSelector(state => state.config.lang)
  const searchText = useRef()
  const dispatch =useDispatch()

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie, API_OPTIONS)
    const json = await data.json()

    return json.results
  }

  const handleGptSearchClick = async () => {
    //make an api call to gpt api and get movie results

      // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query "
      //       + searchText.current.value 
      //       + ". Only give me names of 5 movies, comma separatedlike the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

      //faking the api call
      const gptMovies = getRandomUniqueMovies()
      
      //for each movie make tdmi api call to get movie details
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
      //the above function will return promiseArray because searchMovieTmdb is an asynchronous function which is making api call

      const tmdbResults = await Promise.all(promiseArray)
      dispatch(addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbResults
      }))
  }
  
  return (
    <div className='pt-[10%] flex justify-center'>
        <form onSubmit={e => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12'>
            <input ref={searchText} type="text" className='col-span-9 p-4 m-4' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar