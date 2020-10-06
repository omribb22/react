
import react, {useState, createContext} from "react"
import movieData from "movie-data.json"
const MovieContext = createContext()

export default function ProviderMovies({children}){

    const [moviesData, setMovies] = useState(movieData)

    const addMovie = (movie) => {
        setMovies([...moviesData, movie])
    }

    const removeMovie = (movie) =>{
        setMovies(movieData.filter(existMove => existMove.name !== movie.name))
    }



    return(
        <MovieContext.Provider value={{addMovie, removeMovie}}>
            {children}
        </MovieContext.Provider>
    )
}