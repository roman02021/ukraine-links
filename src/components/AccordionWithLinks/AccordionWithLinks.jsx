import React, {useState} from 'react'
import styled from 'styled-components'
import AccordionLinkItem from './AccordionLinkItem';
import LinkBtn from '../LinkBtn';
import Heading from '../Heading';


const StyledAccordion = styled.ul`
    margin: 0;
    padding: 0;
`


const Accordion = ({section}) => {

    return (
        <StyledAccordion>
            {section && section.links.map((link, index) =><AccordionLinkItem title="haha" content={<LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>}></AccordionLinkItem> )} 
        </StyledAccordion>
    )
}

export default Accordion;