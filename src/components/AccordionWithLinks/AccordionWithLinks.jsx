import React, {useState} from 'react'
import styled from 'styled-components'
import AccordionLinkItem from './AccordionLinkItem';
import LinkBtn from '../LinkBtn';
import Heading from '../Heading';
import LinkSection from '../LinkSection';

const StyledAccordion = styled.ul`
    margin: 0;
    padding: 0;
`


const Accordion = ({sections}) => {
    return (
        <StyledAccordion>
            {sections && sections.map((section, index) => <AccordionLinkItem title={section.sectionTitle} icon={section.icon} content={section.links}/>)}
        </StyledAccordion>
    )
}

export default Accordion;