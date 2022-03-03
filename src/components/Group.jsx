import React from 'react'
import styled from 'styled-components'

const StyledGroup = styled.div`
    height: ${props => props.fullHeight ? "100%" : "auto"};
    display: flex;
`

const Group = ({fullHeight, children}) => {
  return (
    <StyledGroup fullHeight={fullHeight} >{children}</StyledGroup>
  )
}

export default Group;