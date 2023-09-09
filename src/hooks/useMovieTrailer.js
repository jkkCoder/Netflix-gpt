import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()


    useEffect(() => {
        getMovieVideo()
    },[])

    //fetch trailer
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json()
        const filteredTrailer = json.results.filter(vid => vid.type === "Trailer")
        const trailer = filteredTrailer.length ? filteredTrailer[0] :json.results[0]
        dispatch(addTrailerVideo(trailer))
    }
}

export default useMovieTrailer;