import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function PopularMovie() {
    //API Key
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
        const response = await axios(ENDPOINTS.POPULAR);

        /**
         * Simpan data movies dari axios ke state movies.
         * Upadte state menggunakan setMovies().
         */
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