import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { t } from 'i18next';


const Heading = styled.h2`
  border: 1px solid #ddd;
  background: rebeccapurple;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;
  
  p {
    margin: 0;
  }
`;

const StyledAccordionItem = styled.li`
     transition: all 0.3s;
    
`

const StyledAccordionButton = styled.button`
    
`
const StyledAccordionContent = styled.div`
  border: 1px solid gray;
  border-top: none;
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;
   
`

const AccordionItem = ({title, content}) => {

    const contentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);



    

  return (
    <StyledAccordionItem >
    <div>
        <Heading onClick={() => setOpen(!open)}>Click me to open</Heading>
        <Content open={open}>
          <p>Consider me opened!</p>
        </Content>
      </div>
        <StyledAccordionButton onClick={() => setIsOpen(!isOpen)}>{title}
            <FontAwesomeIcon icon={faChevronDown}/>
        </StyledAccordionButton>
        <StyledAccordionContent isOpen={isOpen} contentHeight={contentHeight}>{content}</StyledAccordionContent>
    </StyledAccordionItem>
  )
}
const getContentHeight = (content) => {
    console.log(content.clientHeight);
}

export default AccordionItem