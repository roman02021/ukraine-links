import React, { Suspense, useState, useEffect } from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';
import Heading from './components/Heading';
import { useTranslation } from 'react-i18next';
import Menu from './components/Menu';

const Loader = () => (
  <div className="App">
    
    <div>loading...</div>
  </div>
);

function App() {
  const {t, i18n } = useTranslation();
  const [sections, setSections] = useState([]);
  console.log(sections);


  useEffect(()=>{
    setSections(i18n.t('sections', {returnObjects: true}))
  }, [i18n.language])

  return (
    <>
    
      <GlobalStyle/>
      <Menu/>
      <Container>
          {sections.map((section, index) => {
            return (
            <section>
              <Heading text={section.sectionTitle} id={section.sectionTitle} icon={section.icon} key={section.sectionTitle}/>
              {section.links.map((link, index) => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.url}></LinkBtn>)}
            </section>)
          })}
      </Container>
    
    </>
  );
}

export default App;
