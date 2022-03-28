import React, { Suspense, useState, useEffect} from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import ClipLoader from "react-spinners/ClipLoader";

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
import ReactFlagsSelect from 'react-flags-select';
import Footer from './components/Footer';
import AccordionWithLinks from './components/AccordionWithLinks/AccordionWithLinks.jsx';

import Row from './components/Row';
import Flags from 'country-flag-icons/react/3x2'
import NestedAccordion from './components/AccordionWithLinks/NestedAccordion.jsx';



function App() {
  const {t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [theme, setTheme] = useState(Object.keys(colorTheme)[0]);
  const date = new Date();
  const year = date.getFullYear();


  useEffect(()=>{
    setCountries(i18n.t('countries', {returnObjects: true}))
  }, [i18n.language])

  useEffect(()=>{
    setCountries(i18n.t('countries', {returnObjects: true}))
    // setFilteredSections(sections);
  }, [])

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries])

  // useEffect(()=>{
  //   if(searchTerm !== null || searchTerm !== ''){
  //     setFilteredSections(sections.map(section => {
  //       const filteredLinks = section.links.filter(link => link.title.toLowerCase().includes(searchTerm.toLowerCase()));
  //       return {sectionTitle: section.sectionTitle, icon: section.icon, links: filteredLinks};
  //     }).filter(section => section.links.length > 0));
  //   }
  // }, [searchTerm, sections])
  console.log('hey', countries);
    useEffect(()=>{

    if(searchTerm !== null || searchTerm !== ''){
      setFilteredCountries(countries.map(country =>{
        
        const filteredSections = country.sections.map(section => {
          const filteredLinks = section.links.filter(link => link.title.toLowerCase().includes(searchTerm.toLowerCase()));
          
            return {sectionTitle: section.sectionTitle, icon: section.icon, links: filteredLinks};
        })
        console.log('COUANWRNARWN', country);
        return {country: country.country, sections: filteredSections.filter(section => section.links.length > 0)};

      }).filter(country => country.sections.length > 0));
    }
  }, [searchTerm, countries])


  return (
    <ThemeProvider theme={colorTheme[theme]}>
        <GlobalStyle/>
        <Menu setSearchTerm={setSearchTerm} setTheme={setTheme}/>
        <div style={{flexGrow: 1}}>
        <Container justify={filteredCountries.sections && filteredCountries.sections.length > 0? 'left' : 'center'}>
{/*           
            {filteredSections.length > 0 ? filteredSections.map((section, index) => {
              return (
              <LinkSection>
                <Heading text={section.sectionTitle} id={section.sectionTitle.toLowerCase()} icon={section.icon} key={section.sectionTitle}/>
                {section.links.map((link, index) => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>)}
              </LinkSection>)
            }) : <Heading text='No links found'></Heading>} */}
<Heading text='Countries' id="links"></Heading>
<LinkSection>
{filteredCountries.length > 0 ? filteredCountries.map(country => <NestedAccordion content={country} root={true}></NestedAccordion>) : <Heading text="No results"/>}
{/* {filteredCountries.length > 0 ? filteredCountries.map(country => <AccordionWithLinks content={country} depth={0}></AccordionWithLinks>) : <Heading text='No links found'></Heading>} */}
</LinkSection>
        </Container>
        <Container>
          {/* <Heading text="FAQ"/>
            <Accordion items={[{section: "section1", title: "title 1", content: "content 1"}, {title: "title 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend rhoncus odio in lobortis. Duis laoreet posuere dolor sed mattis. Aenean lectus elit, scelerisque a pulvinar in, tincidunt ac tortor. Nunc nec pellentesque nisi. Mauris at metus ac risus porta vulputate. Aliquam eu purus nec diam egestas finibus quis commodo felis. Morbi auctor rhoncus lorem, a consectetur magna viverra ut. Vivamus rutrum nulla sed augue interdum sodales. Ut magna magna, hendrerit at egestas vel, dignissim vel ex. Nunc nibh urna, sagittis ac aliquet non, feugiat non dolor. Aliquam cursus eros ullamcorper risus accumsan venenatis. Duis a dolor et nulla tempor fermentum. Vivamus aliquet nisi viverra mauris vehicula bibendum."}]}/> */}
        </Container>
        <Container align='center' >
          {/* <Heading text="Posts" id="post"/>
          <MetaPost url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Femefka.sk%2Fposts%2F1995912470620050&show_text=true&width=auto"/>
          <div id="fb-root"></div>
<script async="1" defer="1" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v13.0" nonce="a6QytjgT"></script><div class="fb-post" data-href="https://www.facebook.com/refresher.sk/posts/5144967995563468" data-width="640"><blockquote cite="https://graph.facebook.com/107031879357130/posts/5144967995563468/" class="fb-xfbml-parse-ignore"><p>ŠLO O MESTÁ, KTORÉ UŽ OVLÁDAJÚ RUSI. 🇷🇺🇺🇦</p>Posted by <a href="https://www.facebook.com/107031879357130">REFRESHER</a> on&nbsp;<a href="https://graph.facebook.com/107031879357130/posts/5144967995563468/">Sunday, March 20, 2022</a></blockquote></div> */}
        </Container>
        <Container align='left'>
          <Heading text="Contact us" id="form"/>
          <Form/>
        </Container>
        </div>
        <Footer>
          <Container align='center'>
            <div>Say no to war</div> {year}
          </Container>
        </Footer>
    </ThemeProvider>
  );
}

export default App;

