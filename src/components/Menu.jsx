import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import theme from '../theme';

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
    padding: 1rem;
    color: ${theme.colors.secondary};
    /* transition: background .1s ease-in; */
    &:not(:last-child){
        margin-right: 1rem;
    }
    &:hover {
        background: rgba(255, 255, 255, 0.05);
    }
`


const Menu = () => {
  return (
    <StyledMenu>
        <Container fullWidth horizontal align='center'>
            <StyledMenuItem href="#urad">
                Urady
            </StyledMenuItem>
            <StyledMenuItem href="#ubytovanie">
                Ubytovanie
            </StyledMenuItem>
        </Container>
    </StyledMenu>
  )
}

export default Menu;