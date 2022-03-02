import React from 'react'
import styled from 'styled-components';
import theme from '../theme';

const StyledHeading = styled.h2`
    color: ${theme.colors.secondary};
    font-weight: bold;
`

const Heading = ({text, id}) => {
  return (
    <StyledHeading id={id}>{text}</StyledHeading>
  )
}

export default Heading;