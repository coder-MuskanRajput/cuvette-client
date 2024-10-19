import React from 'react'

const Logo = ({cp}) => {
  return (
    <div className={`${cp ? cp : 'h-8 aspect-video'}`} >Logo</div>
  )
}

export default Logo