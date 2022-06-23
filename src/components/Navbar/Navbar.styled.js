import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledNavbar = styled.div`
  nav {
    display: flex;
    flex-direction: column;
    background-color: #06d6a0;
    padding: 1rem;
    color: #fff;
  }

  h1 {
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
    font-size: 3.052rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  Link {
    text-decoration: none;
    color: #fff;
  }
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;

export const StyledLink = styled(Link)`
margin-bottom: 1rem;
color: #FFFFFF;
text-decoration: none;
font-size: 1rem;
`
