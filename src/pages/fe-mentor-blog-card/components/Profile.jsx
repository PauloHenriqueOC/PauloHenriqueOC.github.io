import React from 'react'

import profileImg from '../../../assets/image-avatar.webp'

const Profile = () => {
  return (
    <div className='profile-container'>
        <img className='profile-image' src={ profileImg } alt="Profile Image" />
        <p className="profile-name">Greg Hooper</p>
    </div>
  )
}

export default Profile