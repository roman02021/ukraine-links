import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
    
`

export const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
