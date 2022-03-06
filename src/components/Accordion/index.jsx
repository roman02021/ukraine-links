import React, {useState} from 'react'
import styled from 'styled-components'
import AccordionItem from './AccordionItem';



const StyledAccordion = styled.ul`
    
`


const Accordion = ({items}) => {

    


    return (
        <StyledAccordion>
            {items.map(item => <AccordionItem title={item.title} content={item.content} open={false}/> )}
        </StyledAccordion>
    )
}

export default Accordion;