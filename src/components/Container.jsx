import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
`

const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container;
