import React from 'react'
import styled from 'styled-components'
import theme from '../theme';

const StyledSearchBar = styled.input`
    border-radius: ${theme.radius.normal};
    outline: none;
    border: none;
    height: 36px;
    &:focus {
        
    }
`

const SearchBar = () => {
  return (
    <StyledSearchBar type="search" placeholder='пошук'>
        
    </StyledSearchBar>
  )
}

export default SearchBar;