import axios from "axios";
import { useEffect} from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovies } from "../../features/moviesSlice";
import {useDispatch} from "react-redux";

function PopularMovie() {
    //API Key
    const dispatch = useDispatch();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.POPULAR);
        //jalankan action updateMovies
        dispatch(updateMovies(response.data.results))
    }
    return (
        <>
            <Hero />
            <Movies title="Popular Movies"/>
        </>
    )
}

export default PopularMovie;