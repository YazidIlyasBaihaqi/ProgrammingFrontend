import styled from "styled-components";


const StyledHero = styled.div`

`

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors[props.variant]};
  color: #fff;
`