import React from 'react'
import styled from 'styled-components'

const StyledGroup = styled.div`
    height: ${props => props.fullHeight ? "100%" : "auto"};
    justify-content: ${((props) => props.justify === 'center' ? 'center' : props.justify === 'left' ? 'left' : props.justify === 'right' ? 'right' : 'space-between')};
    flex-direction: ${(props) => props.horizontal ? 'row' : 'column'};
    align-items: ${((props) => props.align === 'center' ? 'center' : props.align === 'start' ? 'start' : props.align === 'end' ? 'end' : 'space-between')};
    display: flex;
    width: ${(props) => props.fullWidth ? '100%' : 'auto'};
`

const Group = ({fullHeight, children, justify, align, horizontal, fullWidth}) => {
  return (
    <StyledGroup fullHeight={fullHeight} fullWidth={fullWidth} justify={justify} align={align} horizontal={horizontal}>{children}</StyledGroup>
  )
}

export default Group;