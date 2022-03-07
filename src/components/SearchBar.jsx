import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import {variables} from '../theme/index';

const StyledSearchBar = styled.input`
    border-radius: ${variables.radius.normal};
    outline: none;
    border: none;
    height: 36px;
    font-size: 1rem;
    padding: 0 0.5rem;
    margin: 0.5rem 0;
    width: ${props => props.fullWidth ? "100%" : "200px"};
    font-family: Inter, Helvetica, Sans-Serif;
    &:focus {
        
    }
`

const SearchBar = ({setSearchTerm, fullWidth}) => {

  const { t, i18n } = useTranslation();

  return (
    <StyledSearchBar type="search" fullWidth={fullWidth} placeholder={t('searchPlaceholder')} onChange={(e)=>setSearchTerm(e.currentTarget.value)}>
        
    </StyledSearchBar>
  )
}

export default SearchBar;