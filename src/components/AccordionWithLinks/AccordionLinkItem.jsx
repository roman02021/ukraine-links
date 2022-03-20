import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'
import {variables} from '../../theme';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AccordionWithLinks from './AccordionWithLinks'
import LinkBtn from '../LinkBtn';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';


const StyledAccordionItem = styled.li`
    margin: 1rem 0;
    padding: 0;
    list-style: none;

`
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
      transform: scale(1.02);
  }
  transform: ${props => props.isOpen ? 'scale(1.02)' : 'scale(1)'};

`

const StyledAccordionContent = styled.div`
  border-top: none;
  /* min-height: fit-content; */
  height: ${(props) => (props.isOpen ? "100%" : "0%")};
  max-height: ${(props) => (props.isOpen ? `${props.contentHeight}px` : "0px")};

  /* opacity: ${(props) => (props.isOpen ? "1" : "0")}; */
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  /* transition:${(props) => (props.depth === 0 ? 'none' :  'all .3s cubic-bezier(0, 1, 0, 1)')}; */
  transition: max-height 3s ease-out, padding 3s ease-out, height 3s ease-out;
  
  color: ${props => props.theme.text};
`

const AccordionItem = ({title, content, icon, depth}) => {

    const contentRef = useRef(null);
    const accordRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const {t, i18n } = useTranslation();
    const [childrenCumulativeHeight, setChildrenCumulativeHeight] = useState(0);
    
    const [height, setHeight] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(()=>{
      setLoaded(false);
    },[i18n.language])

    // useEffect(() => {
      
    //   if(!loaded){
    //     // console.log('LOADED ? ', loaded, contentRef, contentRef.current.clientHeight);
    //     setHeight(contentRef.current.scrollHeight);
    //   }
    //   setLoaded(true);
    // }, [loaded])

    useEffect(() => {
      const getHeight = contentRef.current.scrollHeight;
      setHeight(getHeight);
    }, [isOpen]);

    
  
    useEffect(()=>{
      setChildrenCumulativeHeight(childrenCumulativeHeight + contentRef.current.scrollHeight);
      console.log("CONTONTeeeeeeeeeeeeeeee", contentRef.current.scrollHeight, depth);
    }, [contentRef])
    console.log(childrenCumulativeHeight, depth);
    // console.log("CONTONTeeeeeeeeeeeeeeee", contentRef.current.scrollHeight, depth);
    
  return (
    <StyledAccordionItem>
        <StyledAccordionButton onClick={(e) => setIsOpen(!isOpen)} isOpen={isOpen}>
        <StyledIcon icon={['fas', icon]} />
          {content.sectionTitle ? content.sectionTitle : title}
            <FontAwesomeIcon icon={!isOpen ? faChevronDown : faChevronUp}/>
        </StyledAccordionButton>
        <StyledAccordionContent ref={contentRef}  childrenCumulativeHeight={childrenCumulativeHeight} isOpen={isOpen} loaded={loaded} depth={depth} contentHeight={height}>
            {/* {content.map((link, index) => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>)} */}
            {depth > 0 ? content.links.map(link => <LinkBtn text={link.title} link={link.url} icon={link.icon} key={link.title}></LinkBtn>) : content.map((content, index) => <AccordionWithLinks ref={accordRef} content={content} depth={1}></AccordionWithLinks>)}


             {/* {content && content.map((content, index) => <AccordionWithLinks content={content} depth={1}></AccordionWithLinks>)}  */}
        </StyledAccordionContent>
    </StyledAccordionItem>
  )
}

export default AccordionItem