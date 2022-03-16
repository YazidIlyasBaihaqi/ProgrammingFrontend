import "./App.css";
/**
 * Import Component Hello
 */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
