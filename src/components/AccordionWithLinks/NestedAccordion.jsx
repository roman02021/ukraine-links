import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import NestedAccordionItem from './NestedAccordionItem';
import LinkBtn from '../LinkBtn';
import Heading from '../Heading';
import LinkSection from '../LinkSection';

const StyledAccordion = styled.ul`
    margin: 0;
    padding: 0;
`


const NestedAccordion = ({contentArray, content, isNested, root}) => {
    // console.log('in accordion', depth, content);
    const contentRef = useRef(null);
    const [parentHeight, setParentHeight] = useState(0);

    console.log(content, isNested, root);
    return (
        <StyledAccordion ref={contentRef}>
            {root ?
            <NestedAccordionItem hasNestedAccordion={true} title={content.country} parentHeight={parentHeight} setParentHeight={setParentHeight} content={content.sections}/> 
            : contentArray.map(content => <NestedAccordionItem hasNestedAccordion={false} title={content.sectionTitle} icon={content.icon} contentArray={content.links} parentHeight={parentHeight}  setParentHeight={setParentHeight}/>) }
        </StyledAccordion>
    )
}

export default NestedAccordion;