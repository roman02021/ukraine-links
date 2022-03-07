import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.primary};
    font-family: Inter, Helvetica, Sans-Serif;
    
    box-sizing: border-box;
  }
`;

export default GlobalStyle;