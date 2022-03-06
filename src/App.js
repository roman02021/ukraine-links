import React, { Suspense, useState, useEffect} from 'react';
import LinkBtn from './components/LinkBtn.jsx';

import GlobalStyle from './theme/globalStyle';
import styled, {ThemeProvider} from 'styled-components';
import Container from './components/Container';
import Heading from './components/Heading';
import { useTranslation } from 'react-i18next';
import LinkSection from './components/LinkSection';
import Menu from './components/Menu';
import Form from './components/Form';
import Group from './components/Group';
import Accordion from './components/Accordion';
import {colorTheme} from './theme/index';



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
  
  const [theme, setTheme] = useState(Object.keys(colorTheme)[0]);



  useEffect(()=>{
    setSections(i18n.t('sections', {returnObjects: true}))
  }, [i18n.language])

  useEffect(()=>{
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
    <ThemeProvider theme={colorTheme[theme]}>
        <GlobalStyle/>
        <Menu setSearchTerm={setSearchTerm} setTheme={setTheme}/>
        <Container justify={filteredSections.length > 0? 'left' : 'center'}>
            {filteredSections.length > 0 ? filteredSections.map((section, index) => {
              return (
              <LinkSection>
                <Heading text={section.sectionTitle} id={section.sectionTitle} icon={section.icon} key={section.sectionTitle}/>
                {section.links.map((link, index) => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>)}
              </LinkSection>)
            }) : <Heading text='No links found'></Heading>}
        </Container>
        <Accordion items={[{title: "title 1", content: "content 1"}, {title: "title 2", content: "content 2 ifsiaifaif iasi fiasi asifia sif iasi isai aisi isai isaif sai"}]}/>
        <Form/>
    </ThemeProvider>
  );
}

export default App;
