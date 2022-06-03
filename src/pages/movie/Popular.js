import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
    //API Key
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getPopularMovies() {
        /**
         * Menggunakan library axios.
         * Axios digunakan untuk melakukan fetch data.
         */
        const response = await axios(URL);

        /**
         * Simpan data movies dari axios ke state movies.
         * Upadte state menggunakan setMovies().
         */
        console.log(response)
        setMovies(response.data.results);
    }

    console.log(movies);
    return (
        <>
            <Hero />
            <Movies movies={movies} />
        </>
    )
}

export default PopularMovie;