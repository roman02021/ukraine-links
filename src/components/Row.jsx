import React from 'react'
import styled from 'styled-components'


const StyledRow = styled.div`
    display: flex;
    justify-content: ${props => handleJustify(props.justify)};
    align-items: ${props => handleAlign(props.align)};
    flex-direction: ${props => props.vertical ? 'column' : 'row'};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
`



const Row = ({children, justify, align, vertical, fullWidth}) => {
  return (
    <StyledRow justify={justify} align={align} vertical={vertical} fullWidth={fullWidth}>{children}</StyledRow>
  )
}

const handleJustify = justify => {
    switch(justify) {
        case 'center':
            return 'center';
        case 'start': 
            return 'flex-start';
        case 'end': 
            return 'flex-end';
        case 'between':
            return 'space-between';
        default:
            return 'flex-start';
    }
}
const handleAlign = align => {
    switch(align) {
        case 'center':
            return 'center';
        case 'start': 
            return 'flex-start';
        case 'end': 
            return 'flex-end';
        case 'between':
            return 'space-between';
        default:
            return 'center';
    }
}

export default Row;