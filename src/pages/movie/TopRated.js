import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";


function TopRatedMovie() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTopRatedMovies()
    }, [])

    async function getTopRatedMovies() {
        const response = await axios(ENDPOINTS.TOP)
        setMovies(response.data.results)
    }

    return (
        <>
              <Hero />
      <Movies movies={movies} />
        </>
    )
}

export default TopRatedMovie;