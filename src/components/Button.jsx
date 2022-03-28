import React from 'react'
import styled from 'styled-components';
import {variables} from '../theme';

const StyledButton = styled.button`
    color: ${props => props.theme.textSecondary};
    background-color: ${props => props.theme.secondary};
    padding: ${props => props.wide ? '1rem 4rem' : '1rem'};
    border: 2px solid ${props => props.theme.primary};
    text-decoration: none;
    display: block;
    border-radius: ${variables.radius.normal};
    margin: 1rem 0;
    cursor: pointer;
    outline: none;
    z-index: 0;
    font-family: ${variables.fontFamily};
    transition: all .3s;
    &:hover {
      background-color: ${props => props.theme.primary};
      border: 2px solid ${props => props.theme.secondary};
      color: ${props => props.theme.secondary};
      transform: scale(1.05);
    }
`
const Button = ({text, wide}) => {
  return (
    <StyledButton wide={wide}>{text}</StyledButton>
  )
}


export default Button;