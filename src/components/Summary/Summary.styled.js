import styled from "styled-components";


const StyledSummary = styled.div`
margin: 1rem;
text-align: center;

h2 {
    font-size: 2.441rem;
    color: ${(props) =>
        props.theme.colors['primary']
    };
    margin: 0;
}

h3{ 
    font-size: 1.563rem;
    color: #118AB2;
    margin: 0;
}

img{
    margin: 1rem auto;
    max-width: 100%;
    height: 100%;
}

`

export default StyledSummary;