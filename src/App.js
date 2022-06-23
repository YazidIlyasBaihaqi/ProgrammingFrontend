import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/covid/indonesia" element={<Indonesia />} />
            <Route path="/covid/provinsi" element={<Provinsi />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
