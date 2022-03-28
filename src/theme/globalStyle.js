import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
background-color: red;
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    
    background-color: ${props => props.theme.primary};
    font-family: Inter, Helvetica, Sans-Serif;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;