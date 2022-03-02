import { createGlobalStyle } from 'styled-components';
import theme from './index';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.primary};
    font-family: Inter, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;