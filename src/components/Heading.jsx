import React from 'react'
import styled, {useTheme} from 'styled-components';
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const StyledHeading = styled.h2`
    color: ${props => props.theme.secondary};
    font-weight: bold;
    padding-top: 86px;
    margin-top: -70px;
    pointer-events: none;
`
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;


const Heading = ({text, id, icon}) => {

  const theme = useTheme();

  return (
    <StyledHeading id={id}>{icon && <StyledIcon icon={['fas', icon]} />}{text}</StyledHeading>
  )
}

export default Heading;