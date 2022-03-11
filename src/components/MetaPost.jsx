import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {variables} from '../theme';

const StyledPost = styled.iframe`
    /* padding: ${variables.spacing.md}; */
    /* width: 100%;  */
    /* width: auto; */
    
`

const MetaPost = ({url}) => {
  const postRef = useRef();

  useEffect(()=>{
    if(postRef){
     
      // console.log( postRef.current.contentWindow.document.body)
    }
    
  }, [postRef])
  return (
    <StyledPost ref={postRef} src={url} width="auto"  height="487" style={{border: "none", overflow:"hidden", scrolling:"no", frameborder:"0", allowfullscreen: "true", allow:"autoplay"}} title="facebook post"></StyledPost>
  )
}

export default MetaPost;