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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* margin: 0.5rem; */
    font-family: ${variables.fontFamily};
    &:focus {
        
    }
`
const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.secondary};
`

const Input = ({label, name, onBlur, onChange, value}) => {
  return (
    <Row vertical align='start' fullWidth>
      <StyledLabel for={label}>
        {label}
      </StyledLabel>
      <StyledInput id={label} name={name} onBlur={onBlur} onChange=   {onChange} value={value}>
      </StyledInput>
    </Row>
  )
}

export default Input;