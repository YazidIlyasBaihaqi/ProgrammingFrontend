// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovie/AddMovieForm";
import { useState } from "react";
import data from "../components/utils/constants/data";
import Counter from "../components/Counter";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
 function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovie movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
