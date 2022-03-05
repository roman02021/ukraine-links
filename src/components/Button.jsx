import React from 'react'
import styled from 'styled-components';
import {variables} from '../theme';

const StyledButton = styled.button`
    color: ${props => props.theme.textSecondary};
    background-color: ${props => props.theme.secondary};
    padding: 1rem;
    border: 2px solid ${props => props.theme.primary};
    text-decoration: none;
    display: block;
    border-radius: ${variables.radius.normal};
    margin: 1rem 0;
    cursor: pointer;
    outline: none;
    z-index: 0;
    font-family: ${variables.fontFamily};
    &:hover {
      background-color: ${props => props.theme.primary};
      border: 2px solid ${props => props.theme.secondary};
    }
`
const Button = ({text}) => {
  return (
    <StyledButton>{text}</StyledButton>
  )
}


export default Button;