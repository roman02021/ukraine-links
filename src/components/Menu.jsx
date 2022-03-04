import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import AsyncSelect from 'react-select/async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
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
    @media ${theme.breakpoints.tablet} {
        display: none;
    }
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
    @media ${theme.breakpoints.tablet} {
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
    background-color: ${theme.colors.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    position: relative;
    z-index: 10;
`

const MenuIcon = styled(FontAwesomeIcon)`
    color: ${theme.colors.secondary};
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
    background-color: ${theme.colors.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    align-items: center;
    top: 0;
    position: sticky;
    padding: 0 1.5rem;
    z-index: 10;
    height: 60px;
    flex-direction: column;
    @media ${theme.breakpoints.tablet} {
        display: flex;
    }
`
const Box = styled.div`
    width: 50px;
    display: flex;
    justify-content: flex-end;
`
const StyledMobileMenu = styled.div`
    background-color: ${theme.colors.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    padding: 1rem 0;

`


const selectOptions = [
    { value: 'ua', label: 'український' },
    { value: 'sk', label: 'Slovenčina' },
    { value: 'en', label: 'English' }
]

const Menu = ({setSearchTerm}) => {
    const { t, i18n } = useTranslation();
    const [sections, setSections] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageChange = (e) =>{
        i18n.changeLanguage(e.value);
    }

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
                    <SearchBar setSearchTerm={setSearchTerm}/>
                    <Box>
                        {isMenuOpen ? 
                        <MenuIcon icon={faXmark} size="lg" isMenuOpen={isMenuOpen} onClick={()=>setIsMenuOpen(false)}></MenuIcon> 
                        : <MenuIcon isMenuOpen={isMenuOpen} icon={faBars} size="lg" onClick={()=>setIsMenuOpen(true)}></MenuIcon>}
                    </Box>
                </Group>
            </StyledMobileMenuContainer>
            {isMenuOpen && <StyledMobileMenu align="center" fullWidth>
                {sections && sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} key={index}>{section.sectionTitle}</StyledMenuItem>)}
                <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
            </StyledMobileMenu>}
            
            <StyledMenu>
                <Group fullHeight align="center" horizontal>
                    {sections && sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} key={index}>{section.sectionTitle}</StyledMenuItem>)}
                </Group>
                <SearchBar setSearchTerm={setSearchTerm}/>
                
                <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
            </StyledMenu>
        </StyledMenuBackground>
    )
}

export default Menu;