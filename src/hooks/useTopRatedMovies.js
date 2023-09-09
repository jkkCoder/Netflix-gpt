import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

  useEffect(() => {
    getNowPlayingMovies()
  },[])
  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
    const json = await data.json()

    console.log("json is ", json)

    dispatch(addTopRatedMovies(json.results))
  }
}

export default useTopRatedMovies;