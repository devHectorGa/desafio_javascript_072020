import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");

  body {    
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    filter: rgba(0, 125, 0, 0.5);
    box-sizing: border-box;
  }
`;
