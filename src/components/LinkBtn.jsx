import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledBtnLink = styled.a`
    color: 'black'
`;

function LinkBtn({link, text, icon}) {
  return (
    <StyledBtnLink href={link}><FontAwesomeIcon icon={icon} />{text}</StyledBtnLink>
  )
}

export default LinkBtn