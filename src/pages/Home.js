import Hero from "../components/Hero/Hero";
import { useState } from "react";
import DataLabel from "../components/DataLabel/DataLabel";
import { useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../components/utils/constants/endpoint";
import Summary from "../components/Summary";

function Home() {
  const [global, setGlobal] = useState([]);
  useEffect(() => {
    getGlobal();
  }, [])

  async function getGlobal() {
    const response = await axios(ENDPOINTS.GLOBAL);
    const covidData = [{
      status: "Confirmed",
      ...response.data.confirmed
    }, {
      status: "Deaths",
      ...response.data.deaths
    }, {
      status: "Recovered",
      ...response.data.recovered
    }]

    setGlobal(covidData)
  }

  return (
    <>
      <Hero />
      <DataLabel data={global} title="Global" />
      <Summary img={ENDPOINTS.IMG} title="Global" />
    </>
  );
}

export default Home;
