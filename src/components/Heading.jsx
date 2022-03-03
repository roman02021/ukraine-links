import React from 'react'
import styled from 'styled-components';
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const StyledHeading = styled.h2`
    color: ${theme.colors.secondary};
    font-weight: bold;
`
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;


const Heading = ({uaText, skText, id, icon}) => {
  return (
    <StyledHeading id={id}><StyledIcon icon={icon} />{uaText}</StyledHeading>
  )
}

export default Heading;