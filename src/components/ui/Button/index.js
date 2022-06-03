import styled from "styled-components"
import { css } from "styled-components";

const colors = {
    primary: "#4361ee",
    secondary: "#b5179e"
};

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;

    //akses props variant
    background-color:${({variant, theme}) => theme.colors[variant] || colors.primary} ;

    //props full
    ${(props) =>
        props.full &&
        css`
          display: block;
          width: 100%;
        `}
`;

export default Button;