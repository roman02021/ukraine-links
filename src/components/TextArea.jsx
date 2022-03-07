import React from 'react'
import styled from 'styled-components'
import Row from './Row';
import {variables} from '../theme';

const StyledTextArea = styled.textarea`
    border-radius: ${variables.radius.normal};
    border: 1px solid ${props => props.theme.secondary};
    outline: none;
    height: 36px;
    font-size: 1rem;
    padding: 0.5rem;
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    /* margin: 0.5rem; */
    font-family: ${variables.fontFamily};
`
const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.secondary};
`

const TextArea = ({label, name}) => {
  return (
    <Row vertical align='start' fullWidth>
      <StyledLabel for={label}>
        {label}
      </StyledLabel>
      <StyledTextArea rows={5} id={label} name={name}></StyledTextArea>
    </Row>
   
  )
}


export default TextArea;