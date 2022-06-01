import Container from "../index.js";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({children}) {
    return (
        <>
            <Navbar/>
            <main>
                <Container>
                {children}    
                </Container>   
            </main>
            <Footer/>
        </>
    )
}

export default Layout;