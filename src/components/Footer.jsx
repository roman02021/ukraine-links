import React from 'react'
import styled from 'styled-components'
import {variables} from '../theme/index'

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textSecondary};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    padding: ${variables.spacing.lg};
    margin-top: 2rem;
`



const Footer = ({children}) => {




  return (
    <StyledFooter>
        {children}
        
    </StyledFooter>
  )
}

export default Footer;