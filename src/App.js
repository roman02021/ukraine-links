import React, {Fragment} from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';
import Heading from './components/Heading';
import Menu from './components/Menu';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Menu/>
      <Container>
        <Heading text="Urad" id="urad"/>
        <LinkBtn text="Проживання - Ubytovanie" link="https://fontawesome.com/icons/bed?s=light" icon={faBed}></LinkBtn>
      </Container>
    </Fragment>
  );
}

export default App;
