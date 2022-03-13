import React, {useState, useEffect, useContext} from 'react'
import styled, {useTheme} from 'styled-components'
import Row from './Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import Group from './Group';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';
import Select, {components} from 'react-select'
import {variables} from '../theme/index';
import logo from '../logo.png';
import Flags from 'country-flag-icons/react/3x2'




import {ThemeContext} from '../contexts/themeStore';

const StyledFix = styled.div`
    height: 60px;
    padding: .5rem 0;
`

const StyledMenu = styled.nav`
    display:flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;

    align-items: center;
    top: 0;
    padding: .5rem 1.5rem;
    z-index: 10;
    height: 60px;
    @media ${variables.breakpoints.tablet} {
        display: none;
    }
`
const StyledMenuItem = styled.a`
    text-decoration: none;
    display: block;
    box-sizing: border-box;
    /* color: ${props => props.theme.secondary}; */
    transition: text-shadow .2s ease-in; 
    margin: auto 0;
    color: ${props => props.theme.secondary};
    /* &:not(:first-child){
        padding: 0 1rem;
    } */

    margin: 0 1rem;
    &:first-of-type {
        margin-left: 1.5rem;
    }
    &:not(:last-child){
        /* margin-right: 1rem; */
    }
    &:hover {
        color: ${props => props.theme.text};
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

    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.primary}75;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    top: 0;
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
    /* background-color: ${props => props.theme.primary}75; */
    align-items: center;
    top: 0;
    /* position: sticky; */
    padding: .5rem 1.5rem;
    z-index: 10;
    height: 60px;

    flex-direction: column;
    @media ${variables.breakpoints.tablet} {
        display: flex;
    }
`
const StyledDropdownAnchor = styled.a`
    color: ${props => props.theme.secondary};
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    height: 100%;
    align-items:center;

`
const StyledDropdownOptions = styled.div`
    display: none;
    flex-direction: column;
    align-items: flex-start;
    left: 0;
    top: 100%;
    border-radius: 0 0 ${variables.radius.normal} ${variables.radius.normal};
    background-color: ${props => props.theme.secondary};
    position: absolute;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* z-index: 10;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px); */
    
`
const StyledDropdown = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    max-width: 200px;
    
    width: fit-content;
    &:hover {
        ${StyledDropdownOptions} {
            display: flex;
            
        }
        ${StyledMenuItem}{
            margin: 0;
            padding: .75rem;
            color: ${props => props.theme.textSecondary};
            width: 100%;
            &:not(:last-child){
                border-bottom: 1px solid ${props => props.theme.textSecondary};
            }
            &:hover {
                color: ${props => props.theme.primary};
            }
            
        }
    }
`

const StyledDropdownIcon = styled(FontAwesomeIcon)`
    margin-left: 0.5rem;
    
    ${StyledMenuItem} {
        display: none;
    }
`
const Box = styled.div`
    width: 50px;
    display: flex;
    justify-content: flex-end;
`
const StyledLogo = styled.img`
    height: 40px;
    margin-right: 1.75rem;
`
const StyledMobileMenu = styled.div`
    /* background-color: ${props => props.theme.primary}75; */
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: calc(100vh - 60px + 1rem);
    /* position: sticky; */
    padding: 1.5rem 1.5rem;
    ${StyledMenuItem}{
        &:not(:last-child){
            border-bottom: 1px solid ${props => props.theme.secondary};
        }
    }
`
const StyledOption = styled.div`
    display: flex;
`
const StyledFlagUA = styled(Flags.UA)`
    width: 20px;
    margin-right: .5rem;
`
const StyledFlagSK = styled(Flags.SK)`
    width: 20px;
    margin-right: .5rem;
`
const StyledFlagGB = styled(Flags.GB)`
    width: 20px;
    margin-right: .5rem;
`
const StyledSelect = styled(Select)`
    margin-bottom: .75rem;
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
    { value: 'ua', label: (<StyledOption><StyledFlagUA title="United States" className="..."/>український</StyledOption>) },
    { value: 'sk', label: (<StyledOption><StyledFlagSK title="United States" className="..."/>Slovenčina</StyledOption>) },
    { value: 'en', label: (<StyledOption><StyledFlagGB title="United States" className="..."/>English</StyledOption>) }
]

const Menu = ({setSearchTerm, setTheme}) => {
    const { t, i18n } = useTranslation();
    const [countries, setCountries] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false)
    const [mobileMenuHeight, setMoibleMenuHeight] = useState(false);


    const isMobile = useMediaQuery({
        query: variables.breakpoints.tablet
    })

    const handleLanguageChange = (e) =>{
        i18n.changeLanguage(e.value);
    }
    console.log(isMenuOpen);
    const handleThemeChange = (e) =>{
        setTheme(e.value);
    }

    useEffect(()=>{
        if(!isMobile){
            setIsMenuOpen(false);   
        }
    }, [isMobile])
    useEffect(()=>{
        if(i18n){
            setCountries(i18n.t('countries', {returnObjects: true}))
        }
        
    }, [i18n.language])

    console.log(countries);

    return (
        <>
        <StyledFix/>
        <StyledMenuBackground>
            
            <StyledMobileMenuContainer>
                <Group align="center" fullWidth fullHeight horizontal>
                    <StyledLogo src={logo} alt="logo"/>
                    <SearchBar setSearchTerm={setSearchTerm} fullWidth/>
                    <Box>
                        {isMenuOpen ? 
                        <MenuIcon icon={faXmark} size="lg" isMenuOpen={isMenuOpen} onClick={()=>setIsMenuOpen(false)}></MenuIcon> 
                        : <MenuIcon isMenuOpen={isMenuOpen} icon={faBars} size="lg" onClick={()=>setIsMenuOpen(true)}></MenuIcon>}
                    </Box>
                </Group>
            </StyledMobileMenuContainer>
            {isMenuOpen && 
            <StyledMobileMenu >
                {/* <StyledSelect options={selectOptions}  onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
                <Group>
                {sections && sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} onClick={()=>setIsMenuOpen(false)} key={index}>{section.sectionTitle}</StyledMenuItem>)}
                </Group> */}

                
            </StyledMobileMenu>}
            
            <StyledMenu>
                <StyledLogo src={logo}/>
                <Group fullHeight align="center" horizontal>
                {countries.sections && countries.sections.length < 4 ? countries.map(country => country.sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} onClick={()=>setIsMenuOpen(false)} key={index}>{section.sectionTitle}</StyledMenuItem>)) : <StyledDropdown>
                    <StyledDropdownAnchor>Section<StyledDropdownIcon icon={faChevronDown}></StyledDropdownIcon>
                    </StyledDropdownAnchor>
                    <StyledDropdownOptions>
                        {countries.map(country => country.sections.map((section, index) => <StyledMenuItem href={`#${section.sectionTitle.toLowerCase()}`} onClick={()=>setIsMenuOpen(false)} key={index}>{section.sectionTitle}</StyledMenuItem>))}
                    </StyledDropdownOptions>
                </StyledDropdown>}
                <StyledMenuItem href={`#post`} onClick={()=>setIsMenuOpen(false)}>Posts</StyledMenuItem>
                <StyledMenuItem href={`#form`} onClick={()=>setIsMenuOpen(false)} >Form</StyledMenuItem>
                </Group>
                <SearchBar setSearchTerm={setSearchTerm} />
                <Row>
                    <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
                     {/* <Select options={themeOptions} onChange={handleThemeChange} defaultValue={i18n.language} placeholder="Theme" isSearchable={false}/>  */}
                </Row>
            </StyledMenu>
            
        </StyledMenuBackground>
        </>
    )
}

export default Menu;