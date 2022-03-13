import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'
import {variables} from '../../theme';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { t } from 'i18next';


const StyledAccordionItem = styled.li`
    margin: 1rem 0;
    padding: 0;
    list-style: none;

`

const StyledAccordionButton = styled.button`
  background: ${props => props.theme.secondary};
  outline: none;
  border: none;
  color: ${props => props.theme.textSecondary};
  width: 100%;
  border-radius: ${variables.radius.normal};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-family: ${variables.fontFamily};
  transition: all 0.3s;
  font-size: 1rem;
  &:hover {
      transform: scale(1.02);
    }
`

const StyledAccordionContent = styled.div`
  border-top: none;
  max-height: ${(props) => (!props.loaded ? "100%" : props.isOpen  ? `${props.contentHeight}px` : "0px")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  transition: all 0.3s;
  color: ${props => props.theme.text};
`

const AccordionItem = ({title, content}) => {

    const contentRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    
    const [height, setHeight] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      
      setHeight(contentRef.current.clientHeight);
      setLoaded(true);
    
    },[])

  return (
    <StyledAccordionItem>
        <StyledAccordionButton onClick={(e) => setIsOpen(!isOpen)}>
          {title}
            <FontAwesomeIcon icon={!isOpen ? faChevronDown : faChevronUp}/>
        </StyledAccordionButton>
        <StyledAccordionContent ref={contentRef} isOpen={isOpen} loaded={loaded} contentHeight={height}>
            {content}
        </StyledAccordionContent>
    </StyledAccordionItem>
  )
}
const getContentHeight = (content) => {
    console.log(content.clientHeight);
}

export default AccordionItem