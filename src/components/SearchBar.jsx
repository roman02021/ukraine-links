import React from 'react'
import styled from 'styled-components'
import theme from '../theme';
import { useTranslation } from 'react-i18next';

const StyledSearchBar = styled.input`
    border-radius: ${theme.radius.normal};
    outline: none;
    border: none;
    height: 36px;
    &:focus {
        
    }
`

const SearchBar = ({setSearchTerm}) => {

  const { t, i18n } = useTranslation();

  return (
    <StyledSearchBar type="search" placeholder={t('searchPlaceholder')} onChange={(e)=>setSearchTerm(e.currentTarget.value)}>
        
    </StyledSearchBar>
  )
}

export default SearchBar;