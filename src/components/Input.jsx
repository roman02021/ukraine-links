import React from 'react'
import styled from 'styled-components'
import Row from './Row';
import {variables} from '../theme/';

const StyledInput = styled.input`
    border-radius: ${variables.radius.normal};
    border: 1px solid ${props => props.theme.secondary};
    outline: none;
    height: 36px;
    font-size: 1rem;
    padding: 0 0.5rem;
    width: 100%;
    box-sizing: border-box;
    /* margin: 0.5rem; */
    font-family: ${variables.fontFamily};
    &:focus {
        
    }
`
const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.secondary};
`

const Input = ({label, name}) => {
  return (
    <Row vertical align='start' fullWidth>
      <StyledLabel for={label}>
        {label}
      </StyledLabel>
      <StyledInput id={label} name={name}>
        

      </StyledInput>
    </Row>
  )
}

export default Input;