import React from 'react'
import styled from 'styled-components'
import {deviceSizes} from '../theme';

const StyledContainer = styled.section`
    max-width: ${props => handleSize(props.size)};
    margin: 0 auto;
    display: flex;
    padding: 0 1.5rem;
    height: 100%;
    ${(props) => props.fullWidth ? 'width: 100%' : ''};
    justify-content: ${((props) => props.justify === 'center' ? 'center' : props.justify === 'left' ? 'left' : props.justify === 'right' ? 'right' : 'space-between')};
    flex-direction: ${(props) => props.horizontal ? 'row' : 'column'};
    align-items: ${((props) => props.align === 'center' ? 'center' : props.align === 'left' ? 'left' : props.align === 'right' ? 'right' : 'space-between')};
    @media (max-width: ${deviceSizes.mobile}) {
      padding: 0 0.75rem;
    }
`

const Container = ({children, fullWidth, align, horizontal, justify, size}) => {

  return (
    <StyledContainer fullWidth={fullWidth} align={align} horizontal={horizontal} justify={justify} size={size}>{children}</StyledContainer>
  )
}

const handleSize = widthOption => {
  switch(widthOption) {
      case 'sm':
          return '400px';
      case 'md': 
          return '600px';
      default:
          return '800px';
  }
}


export default Container;
