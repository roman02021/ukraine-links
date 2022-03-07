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
import MetaPost  from './components/MetaPost';
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
                <Heading text={section.sectionTitle} id={section.sectionTitle.toLowerCase()} icon={section.icon} key={section.sectionTitle}/>
                {section.links.map((link, index) => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>)}
              </LinkSection>)
            }) : <Heading text='No links found'></Heading>}
        </Container>
        <Container>
            <Accordion items={[{title: "title 1", content: "content 1"}, {title: "title 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend rhoncus odio in lobortis. Duis laoreet posuere dolor sed mattis. Aenean lectus elit, scelerisque a pulvinar in, tincidunt ac tortor. Nunc nec pellentesque nisi. Mauris at metus ac risus porta vulputate. Aliquam eu purus nec diam egestas finibus quis commodo felis. Morbi auctor rhoncus lorem, a consectetur magna viverra ut. Vivamus rutrum nulla sed augue interdum sodales. Ut magna magna, hendrerit at egestas vel, dignissim vel ex. Nunc nibh urna, sagittis ac aliquet non, feugiat non dolor. Aliquam cursus eros ullamcorper risus accumsan venenatis. Duis a dolor et nulla tempor fermentum. Vivamus aliquet nisi viverra mauris vehicula bibendum."}]}/>
        </Container>
        <Container justify='center' horizontal>
          <MetaPost url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Femefka.sk%2Fposts%2F1995912470620050&show_text=true&width=500"/>
        </Container>
        <Form/>
    </ThemeProvider>
  );
}

export default App;
