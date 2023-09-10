import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const topRatedMovies = useSelector(state => state.movies.topRatedMovies)

  useEffect(() => {
    !topRatedMovies && getNowPlayingMovies()
  },[])
  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
    const json = await data.json()

    console.log("json is ", json)

    dispatch(addTopRatedMovies(json.results))
  }
}

export default useTopRatedMovies;