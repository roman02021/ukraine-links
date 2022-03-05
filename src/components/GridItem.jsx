import React from 'react'
import styled from 'styled-components'
import {variables} from '../theme';

const StyledGridItem = styled.div`
    width: ${props => handleWidthOptions(props.width)};
    display: flex;
    justify-content: ${props => handleJustify(props.justify)};
    align-items: ${props => handleAlign(props.align)};
    box-sizing: border-box;
    padding: ${variables.gridGap.md};
`


export const GridItem = ({width, justify, align, children}) => {
  return (
    <StyledGridItem width={width} justify={justify} align={align}>{children}</StyledGridItem>
  )
}

const handleWidthOptions = widthOption => {
    switch(widthOption) {
        case 1:
            return '8.333%';
        case 2: 
            return '16.666%';
        case 3: 
            return '25%';
        case 4: 
            return '33.333%';
        case 5: 
            return '41.666%';
        case 6: 
            return '50%';
        case 7:
            return '58.333%';
        case 8: 
            return '66.666%';
        case 9: 
            return '75%';
        case 10: 
            return '83.333%';
        case 11: 
            return '91.666%';
        case 12: 
            return '100%';
        default:
            return '100%';
    }
}
const handleJustify = justify => {
    switch(justify) {
        case 'center':
            return 'center';
        case 'left': 
            return 'flex-start';
        case 'right': 
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
        case 'top': 
            return 'flex-start';
        case 'bottom': 
            return 'flex-end';
        case 'between':
            return 'space-between';
        default:
            return 'center';
    }
}

export default GridItem;