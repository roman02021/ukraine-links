import React, {Fragment} from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';




function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <LinkBtn text="ahahahha" link="https://fontawesome.com/v5/docs/web/use-with/react" icon={faCoffee}></LinkBtn>
    </Fragment>
  );
}

export default App;
