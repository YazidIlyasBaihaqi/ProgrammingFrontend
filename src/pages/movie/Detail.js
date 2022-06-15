/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DetailMovie from "../../components/DetailMovie";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));
    setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies" movies={movies} />
    </>
  );
}

export default Detail;
