import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import AsyncSelect from 'react-select/async';
import theme from '../theme';
import Group from './Group';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'

const StyledMenu = styled.nav`
    display:flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    background-color: ${theme.colors.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    align-items: center;
    top: 0;
    position: sticky;
    padding: 0 1.5rem;
    z-index: 10;
    height: 60px;
`
const StyledMenuItem = styled.a`
    text-decoration: none;
    display: block;
    color: ${theme.colors.secondary};
    transition: text-shadow .2s ease-in; 
    margin: auto 0;

    &:not(:first-child){
        padding: 0 1rem;
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
    &:hover {
        text-shadow: 2px 2px 10px #00000040;
    }
`
const StyledMenuBackground = styled.div`
    background-color: ${theme.colors.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
`


const selectOptions = [
    { value: 'ua', label: 'український' },
    { value: 'sk', label: 'Slovenčina' },
    { value: 'en', label: 'English' }
]

const Menu = () => {
    const { t, i18n } = useTranslation();
    const [sections, setSections] = useState(null);


    const handleLanguageChange = (e) =>{
        i18n.changeLanguage(e.value);
    }

    useEffect(()=>{
        console.log(i18n.t('sections', {returnObjects: true}), 'AAAAAAAAAAAAAAAAAAAAAAA', i18n.language);
        if(i18n){
            setSections(i18n.t('sections', {returnObjects: true}))
        }
        
    }, [i18n.language])
    return (
        
        <StyledMenuBackground>
            <StyledMenu>
                <Group fullHeight align="center">
                    {sections && sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} key={index}>{section.sectionTitle}</StyledMenuItem>)}
                </Group>
                <SearchBar/>
                
                <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
            </StyledMenu>
        </StyledMenuBackground>
    )
}

export default Menu;