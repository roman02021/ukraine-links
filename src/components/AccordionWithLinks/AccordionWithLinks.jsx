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


const Accordion = ({content, depth}) => {
    console.log('in accordion', depth, content);
    return (
        <StyledAccordion>
            {content && depth > 0 ? 
            <AccordionLinkItem title={content.title} depth={1} icon={content.icon} content={content}/> : <AccordionLinkItem title={content.country} icon="bed"  content={content.sections} depth={0}/>}
            
            {/* <AccordionLinkItem title={content.country} icon="bed"  content={content.sections} depth={0}/> */}
            {/* {country && country.map((section, index) => <AccordionLinkItem title={section.sectionTitle} icon={section.icon} content={section.links}/>)} */}
        </StyledAccordion>
    )
}

export default Accordion;