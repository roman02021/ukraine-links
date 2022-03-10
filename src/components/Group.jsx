import React from 'react'
import styled, {css} from 'styled-components'

const StyledGroup = styled.div`
    height: ${props => props.fullHeight ? "100%" : "auto"};
    justify-content: ${((props) => props.justify === 'center' ? 'center' : props.justify === 'left' ? 'left' : props.justify === 'right' ? 'right' : 'space-between')};
    flex-direction: ${(props) => props.horizontal ? 'row' : 'column'};
    align-items: ${((props) => props.align === 'center' ? 'center' : props.align === 'start' ? 'start' : props.align === 'end' ? 'end' : 'space-between')};
    display: flex;
    width: ${(props) => props.fullWidth ? '100%' : 'auto'};
    ${props => props.gapOrientation === "left" && css`
      *:not(:last-child) {
        margin-left: 1rem;
      }
    ` }
`

const Group = ({fullHeight, children, justify, align, horizontal, fullWidth, gapOrientation, gapSize}) => {
  return (
    <StyledGroup fullHeight={fullHeight} fullWidth={fullWidth} justify={justify} align={align} horizontal={horizontal} gapOrientation={gapOrientation} gapSize={gapSize}>{children}</StyledGroup>
  )
}

export default Group;