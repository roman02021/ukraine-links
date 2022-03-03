import React from 'react'
import styled from 'styled-components'

const StyledLinkSection = styled.div`
    
`

const LinkSection = ({children}) => {
  return (
    <StyledLinkSection >{children}</StyledLinkSection>
  )
}

export default LinkSection;