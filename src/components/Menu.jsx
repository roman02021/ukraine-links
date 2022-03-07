import React, {useState, useEffect, useContext} from 'react'
import styled, {useTheme} from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import Group from './Group';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'
import {variables} from '../theme/index';

import {ThemeContext} from '../contexts/themeStore';

const StyledMenu = styled.nav`
    display:flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    align-items: center;
    top: 0;
    position: sticky;
    padding: 0 1.5rem;
    z-index: 10;
    height: 60px;
    @media ${variables.breakpoints.tablet} {
        display: none;
    }
`
const StyledMenuItem = styled.a`
    text-decoration: none;
    display: block;
    color: ${props => props.theme.secondary};
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
    @media ${variables.breakpoints.tablet} {
        padding: 1rem 0;
        &:not(:last-child){
            margin-right: 0rem;
        }
        &:not(:first-child){
            padding: 1rem 0;
        }
    }
`
const StyledMenuBackground = styled.div`
    background-color: ${props => props.theme.primary}75;
    
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    position: relative;
    z-index: 10;
`

const MenuIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.secondary};
    cursor: pointer;
    font-size: ${(props) => props.isMenuOpen ? '1.5rem' : '1.25rem'};

    padding: 1rem;
    margin-right: -1rem;
    width: fit-content;
`
const StyledMobileMenuContainer = styled.div`
    display: none;
    justify-content: right;
    max-width: 800px;
    margin: 0 auto;
    background-color: ${props => props.theme.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    align-items: center;
    top: 0;
    position: sticky;
    padding: 0 1.5rem;
    z-index: 10;
    height: 60px;
    flex-direction: column;
    @media ${variables.breakpoints.tablet} {
        display: flex;
    }
`
const Box = styled.div`
    width: 50px;
    display: flex;
    justify-content: flex-end;
`
const StyledLogo = styled.img`
    height: 60px;
`
const StyledMobileMenu = styled.div`

    background-color: ${props => props.theme.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    position: absolute;
    padding: 1rem 1.5rem;

`
const themeOptions = [
    { value: 'saturated', label: 'Saturated' },
    { value: 'inverted', label: 'Inverted' },
    { value: 'light', label: 'Light' },
    { value: 'lightInverted', label: 'Light (inverted)' },
    { value: 'dark', label: 'Dark' },
    { value: 'darkInverted', label: 'Dark (inverted)' }
]

const selectOptions = [
    { value: 'ua', label: 'український' },
    { value: 'sk', label: 'Slovenčina' },
    { value: 'en', label: 'English' }
]

const Menu = ({setSearchTerm, setTheme}) => {
    const { t, i18n } = useTranslation();
    const [sections, setSections] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageChange = (e) =>{
        i18n.changeLanguage(e.value);
    }

    const handleThemeChange = (e) =>{
        setTheme(e.value);
    }

    // useEffect(()=>{
    // }, [currentTheme])

    useEffect(()=>{
        if(i18n){
            setSections(i18n.t('sections', {returnObjects: true}))
        }
        
    }, [i18n.language])
    return (
        
        <StyledMenuBackground>
            <StyledMobileMenuContainer>
                <Group align="center" fullWidth fullHeight horizontal>
                    <div>logo</div>
                    <Box>
                        {isMenuOpen ? 
                        <MenuIcon icon={faXmark} size="lg" isMenuOpen={isMenuOpen} onClick={()=>setIsMenuOpen(false)}></MenuIcon> 
                        : <MenuIcon isMenuOpen={isMenuOpen} icon={faBars} size="lg" onClick={()=>setIsMenuOpen(true)}></MenuIcon>}
                    </Box>
                </Group>
            </StyledMobileMenuContainer>
            {isMenuOpen && 
            <StyledMobileMenu >
                <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
                <Group>
                {sections && sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} key={index}>{section.sectionTitle}</StyledMenuItem>)}
                </Group>
                <SearchBar setSearchTerm={setSearchTerm}/>
            </StyledMobileMenu>}
            
            <StyledMenu>
                <StyledLogo src="./icon.png" alt="logo"/>
                <Group fullHeight align="center" horizontal>
                    {sections && sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} key={index}>{section.sectionTitle}</StyledMenuItem>)}
                </Group>
                <SearchBar setSearchTerm={setSearchTerm}/>
                
                <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
                <Select options={themeOptions} onChange={handleThemeChange} defaultValue={i18n.language} placeholder="Theme" isSearchable={false}/>
            </StyledMenu>
            
        </StyledMenuBackground>
    )
}

export default Menu;