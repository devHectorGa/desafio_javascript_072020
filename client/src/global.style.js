import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
