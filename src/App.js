import React, {Fragment} from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';


function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Container>
        <LinkBtn text="ahahahha" link="https://fontawesome.com/v5/docs/web/use-with/react" icon={faCoffee}></LinkBtn>
      </Container>
    </Fragment>
  );
}

export default App;
