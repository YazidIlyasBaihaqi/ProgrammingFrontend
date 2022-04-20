import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Global from "../components/Global/Global";
import Data from "../utils/constants/indonesia";
import { useState } from "react";
import Provinces from "../components/Provinces/Provinces";
import ProvData from "../utils/constants/provinces"
import Form from "../components/Form/Form"

function Main() {
  const global = Data.indonesia;
  const [provinces, setProvinces] = useState(ProvData.provinces);

  return (
    <main>
      <Hero />
      <Global data={global}/>
      <Provinces provinces={provinces} updateProvinces={setProvinces}/>
      <Form provinces={provinces} updateProvinces={setProvinces}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
