import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.primary};
    background-image: url("./blob-scene-haikei.svg");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Inter, Helvetica, Sans-Serif;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;