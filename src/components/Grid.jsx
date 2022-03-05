import React from 'react'
import styled from 'styled-components'


const StyledGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`


const Grid = ({children}) => {
  return (
    <StyledGrid>{children}</StyledGrid>
  )
}


export default Grid;