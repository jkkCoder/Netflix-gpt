import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  useNowPlayingMovies()
  useTopRatedMovies()
  usePopularMovies()
  useUpcomingMovies()
  const showGptSearch = useSelector(state => state.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch />
        :(
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Browse