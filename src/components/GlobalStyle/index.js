import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap');
  margin: 0;
  padding: 0;
    box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}
`

export default GlobalStyle