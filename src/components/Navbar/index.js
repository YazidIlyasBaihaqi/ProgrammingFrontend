import { StyledNavbar, StyledLink } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Covid App Final Project</h1>
        </div>
        <ul>
          <li><StyledLink to="/">Global</StyledLink></li>
          <li><StyledLink to="/covid/indonesia">Indonesia</StyledLink></li>
          <li><StyledLink to="/covid/provinsi">Provinsi</StyledLink></li>
          <li><StyledLink to="">About</StyledLink></li>
        </ul>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
