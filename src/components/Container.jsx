import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    padding: 0 1.5rem;
    ${(props) => props.fullWidth ? 'width: 100%' : ''};
    justify-content: ${((props) => props.align === 'center' ? 'center' : props.align === 'left' ? 'left' : props.align === 'right' ? 'right' : 'space-between')};
    flex-direction: ${(props) => props.horizontal ? 'row' : 'column'};
`

const Container = ({children, fullWidth, align, horizontal}) => {
  console.log("AAAAAAA", align)
  return (
    <StyledContainer fullWidth={fullWidth} align={align} horizontal={horizontal}>{children}</StyledContainer>
  )
}


export default Container;
