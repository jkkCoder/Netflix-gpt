import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideBackground'

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0]
    
    const {original_title, overview, id} = mainMovie
  return (
    <div className='pt-[30%] bg-black md:bg-transparent md:pt-0'>
        <VideoTitle title={original_title} description={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer