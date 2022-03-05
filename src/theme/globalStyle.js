import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.primary};
    font-family: Inter, Helvetica, Sans-Serif;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;