import React, { Suspense } from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';
import Heading from './components/Heading';
import { useTranslation } from 'react-i18next';
import Menu from './components/Menu';
import './i18next';

function App() {
  return (
    <Suspense fallback="loading">
      <GlobalStyle/>
      <Menu/>
      <Container>
        <Heading uaText="Проживання" skText="Urad" id="urad" icon="bed"/>
        <LinkBtn uaText="Проживання" skText="Ubytovanie" link="https://fontawesome.com/icons/bed?s=light" icon={faBed}></LinkBtn>
      </Container>
    </Suspense>
  );
}

export default App;
