import React, { Suspense, useState, useEffect } from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';
import Heading from './components/Heading';
import { useTranslation } from 'react-i18next';
import LinkSection from './components/LinkSection';
import Menu from './components/Menu';

const Loader = () => (
  <div className="App">
    
    <div>loading...</div>
  </div>
);

function App() {
  const {t, i18n } = useTranslation();
  const [sections, setSections] = useState([]);
  const [filteredSections, setFilteredSections] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  console.log(searchTerm, "halo");
  useEffect(()=>{
    setSections(i18n.t('sections', {returnObjects: true}))
  }, [i18n.language])
  useEffect(()=>{
    console.log('haloaaaaaaaaaaaaaa')
    setSections(i18n.t('sections', {returnObjects: true}))
    // setFilteredSections(sections);
  }, [])
  useEffect(() => {
    setFilteredSections(sections);
  }, [sections])
  useEffect(()=>{
    if(searchTerm !== null || searchTerm !== ''){
      setFilteredSections(sections.map(section => {
        const filteredLinks = section.links.filter(link => link.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return {sectionTitle: section.sectionTitle, icon: section.icon, links: filteredLinks};
      }).filter(section => section.links.length > 0));
    }
  }, [searchTerm, sections])
  return (
    <>
    
      <GlobalStyle/>
      <Menu setSearchTerm={setSearchTerm}/>
      <Container>
          {filteredSections.map((section, index) => {
            return (
            <LinkSection>
              <Heading text={section.sectionTitle} id={section.sectionTitle} icon={section.icon} key={section.sectionTitle}/>
              {section.links.map((link, index) => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>)}
            </LinkSection>)
          })}
      </Container>
    
    </>
  );
}

export default App;
