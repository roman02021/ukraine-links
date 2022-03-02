import React, {Fragment} from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';
import Heading from './components/Heading';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Container>
        <Heading text="Urad" id="urad"/>
        <LinkBtn text="Проживання - Ubytovanie" link="https://fontawesome.com/icons/bed?s=light" icon={faBed}></LinkBtn>
      </Container>
    </Fragment>
  );
}

export default App;
