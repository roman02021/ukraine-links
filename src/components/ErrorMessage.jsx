import React from 'react'
import styled from 'styled-components'


const StyledErrorMessage = styled.div`
    color: ${props => props.theme.secondary};
    margin-top: .5rem;
`

const ErrorMessage = ({children}) => {
  return (
    <StyledErrorMessage>{children}</StyledErrorMessage>
  )
}

export default ErrorMessage;