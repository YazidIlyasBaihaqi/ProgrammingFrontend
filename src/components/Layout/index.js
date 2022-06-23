import Container from "..";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
