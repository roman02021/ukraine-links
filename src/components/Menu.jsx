import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import AsyncSelect from 'react-select/async';
import theme from '../theme';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'

const StyledMenu = styled.nav`
    display:flex;
    justify-content: center;
    background-color: ${theme.colors.primary}75;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(16px);
    align-items: center;
    top: 0;
    position: sticky;
    z-index: 10;
`
const StyledMenuItem = styled.a`
    text-decoration: none;
    display: inline-block;
    color: ${theme.colors.secondary};
    transition: text-shadow .2s ease-in; 
    &:not(:first-child){
        padding: 1rem;
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
    &:hover {
        text-shadow: 2px 2px 10px #00000040;
    }
`
const selectOptions = [
    { value: 'ua', label: 'український' },
    { value: 'sk', label: 'Slovenčina' },
    { value: 'en', label: 'English' }
  ]


const Menu = () => {
    const { t, i18n } = useTranslation();
    const [sections, setSections] = useState([]);

    
    // i18n.store.data.translation.sections.map(section => console.log(section));
    
    const handleLanguageChange = (e) =>{
        i18n.changeLanguage(e.value);
    }

    useEffect(()=>{
        setSections(i18n.t('sections', {returnObjects: true}))
    }, [i18n.language])
    return (
        <StyledMenu>
            <Container fullWidth horizontal align='between'>
                <div>
                    {sections.map(section => <StyledMenuItem href="#urad">{section.sectionTitle}</StyledMenuItem>)}
                </div>
                <SearchBar/>
                <Select options={selectOptions} onChange={handleLanguageChange} defaultValue={i18n.language} isSearchable={false} placeholder={selectOptions.filter(option => option.value === i18n.language)[0].label} value={i18n.language}   />
            </Container>
        </StyledMenu>
    )
}

export default Menu;