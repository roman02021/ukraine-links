import React from 'react'
import styled from 'styled-components'
import Flags from 'country-flag-icons/react/3x2'

const StyledLanguageSelect = styled.select`
    
`
const StyledLanguageSelectOption = styled.option`

`



const LanguageSelect = ({options}) => {



  return (
    <StyledLanguageSelect>
        <Flags.UA title="Ukranian" className="..."/>
  <Flags.GB title="English" className="..."/>
  <Flags.SK title="Slovak" className="..."/>
        {options && options.map(option => <StyledLanguageSelectOption></StyledLanguageSelectOption>)}
    </StyledLanguageSelect>
  )
}


export default LanguageSelect;