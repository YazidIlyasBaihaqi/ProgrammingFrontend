/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import DetailMovie from "../../components/DetailMovie";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import {useDispatch} from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));
    dispatch(updateMovies(response.data.results))
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies"/>
    </>
  );
}

export default Detail;
