import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import theme from '../theme';

const StyledBtnLink = styled.a`
    color: black;
    background-color: ${theme.colors.secondary};
    padding: 1rem;
    text-decoration: none;
    display: block;
    border-radius: ${theme.radius.normal};
    margin: 1rem 0;
    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 0;
    &:hover {
      transform: scale(1.02);
    }
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

function LinkBtn({link, text, icon}) {
  return (
    <StyledBtnLink href={link}>
      <StyledIcon icon={['fas', icon]} />
      {text}
      {/* &nbsp;
      -
      &nbsp;
      {skText} */}
    </StyledBtnLink>
  )
}

export default LinkBtn