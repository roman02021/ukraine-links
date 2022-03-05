import React from 'react'
import styled, {useTheme} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../theme';
import {variables} from '../theme';

const StyledBtnLink = styled.a`
    color: ${props => props.theme.textSecondary};
    background-color: ${props => props.theme.secondary};
    padding: 1rem;
    text-decoration: none;
    display: block;
    border-radius: ${variables.radius.normal};
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


  const theme = useTheme();

  return (
    <StyledBtnLink href={link} target="_blank" rel="noopener noreferrer">
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