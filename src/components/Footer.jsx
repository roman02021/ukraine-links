import React from 'react'
import styled from 'styled-components'
import {variables} from '../theme/index'

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    padding: ${variables.spacing.lg};
`



const Footer = ({children}) => {


    const date = new Date();
    const time = date.getTime();

  return (
    <StyledFooter>
        {children}

    </StyledFooter>
  )
}

export default Footer;