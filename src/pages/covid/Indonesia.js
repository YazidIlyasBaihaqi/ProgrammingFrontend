import axios from "axios";
import { useEffect, useState } from "react";
import DataLabel from "../../components/DataLabel/DataLabel";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary";
import ENDPOINTS from "../../components/utils/constants/endpoint"

function Indonesia() {
    const [indonesia, setIndonesia] = useState([]);
    useEffect(() => {
        getIndonesia();
    }, [])

    async function getIndonesia() {
        const response = await axios(ENDPOINTS.INDONESIA);
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

        setIndonesia(covidData)
    }

    return (
        <>
            <Hero />
            <DataLabel data={indonesia} title="Indonesia" img={ENDPOINTS.IMGINDO} />
            <Summary img={ENDPOINTS.IMGINDO} title="Indonesia" />
        </>
    );
}

export default Indonesia;
