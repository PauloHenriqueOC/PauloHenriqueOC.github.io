import React from 'react'

const CircleProfileImg = ({ profileImg }) => {
  return (
    <div>
        <img className='social-img' src={ profileImg } alt="Social Image" />
    </div>
  )
}

export default CircleProfileImg