// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
 function Home() {
  return (
    <>
      <Hero />
      <Movies title="Latest Movies" />
    </>
  );
}

export default Home;
