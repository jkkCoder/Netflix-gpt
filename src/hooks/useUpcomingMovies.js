import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const upcomingMovies = useSelector(state => state.movies.upcomingMovies)

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies()
  },[])
  const getUpcomingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS)
    const json = await data.json()

    dispatch(addUpcomingMovies(json.results))
  }
}

export default useUpcomingMovies