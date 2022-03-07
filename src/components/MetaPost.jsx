import React from 'react'
import styled from 'styled-components'
import {variables} from '../theme';

const StyledPost = styled.iframe`
    padding: ${variables.spacing.md};
`

const MetaPost = ({url}) => {
  return (
    <StyledPost src={url} width="500" height="487" style={{border: "none", overflow:"hidden", scrolling:"no", frameborder:"0", allowfullscreen: "true", allow:"autoplay"}} title="facebook post"></StyledPost>
  )
}

export default MetaPost;