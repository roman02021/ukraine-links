import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
`

const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container;
