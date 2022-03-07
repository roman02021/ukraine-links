import React from 'react'

const MetaPost = ({url}) => {
  return (
    <iframe src={url} width="500" height="487" style={{border: "none", overflow:"hidden", scrolling:"no", frameborder:"0", allowfullscreen: "true", allow:"autoplay"}} title="facebook post"></iframe>
  )
}

export default MetaPost;