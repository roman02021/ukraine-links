import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'
import {variables} from '../../theme';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NestedAccordion from './NestedAccordion'
import LinkBtn from '../LinkBtn';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-transition-group';
import { t } from 'i18next';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


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
  height: ${(props) => (props.isOpen ? "100%" : "0%")};
  max-height: ${(props) => (props.isOpen ? `${props.parentHeight}px` : "0px")};
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  transition: max-height .3s ease-out, padding .3s ease-out, height .3s ease-out;
  color: ${props => props.theme.text};
`

const NestedAccordionItem = ({ content, icon, hasNestedAccordion, title, contentArray, parentHeight, setParentHeight}) => {

    const contentRef = useRef(null);
    const initialLoad = useRef(true);
    const accordRef = useRef(null);
    const {t, i18n } = useTranslation();
    const [childrenCumulativeHeight, setChildrenCumulativeHeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [isOpening, setIsOpening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    console.log('hello', parentHeight);

    // useEffect(()=>{
    //   setLoaded(false);
    // },[i18n.language])


    useEffect(() => {
      const getHeight = contentRef.current.scrollHeight;
      setHeight(getHeight);
    }, [isOpen]);

    useEffect(() => {
      console.log("HEIGHT", height);
      if(initialLoad.current && height !== 0){
        console.log("HEEEE")
        setParentHeight(height + parentHeight);
        initialLoad.current = false;
      }
    }, [height])

    if(accordRef.current && contentRef.current){
        console.log("INSIDE NESTED")
    }

    
  return (
    <StyledAccordionItem>
        <StyledAccordionButton onClick={(e) => {
          if(isOpen){
            setIsOpening(false);
            setTimeout(() => setIsOpen(false), 300);
            
          }
          else {
            setIsOpening(true);
            setTimeout(() => setIsOpen(true), 300);
          }
          
          
          
          }} isOpen={isOpen}>
        {icon && <StyledIcon icon={['fas', icon]} /> }
        {title}
        <FontAwesomeIcon icon={!isOpen ? faChevronDown : faChevronUp}/>
        </StyledAccordionButton>
        <Transition in={isOpen} timeout={duration}>
          {state => <StyledAccordionContent style={{...defaultStyle, ...transitionStyles[state]}} parentHeight={parentHeight} ref={contentRef} isOpen={isOpen} contentHeight={height}>
              {hasNestedAccordion ?
              <NestedAccordion ref={accordRef} root={false} contentArray={content} isNested={true}></NestedAccordion>
              : contentArray ? contentArray.map(content => <LinkBtn text={content.title} icon={content.icon}/>) : <div></div>}
          </StyledAccordionContent>}
          
        </Transition>
    </StyledAccordionItem>
  )
}

export default NestedAccordionItem