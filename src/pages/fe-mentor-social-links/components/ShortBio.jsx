import React from 'react'

const ShortBio = ({ bioDescription }) => {
  return (
    <div className='bio-container'>
        <p className='bio-text'>{ bioDescription }</p>
    </div>
  )
}

export default ShortBio