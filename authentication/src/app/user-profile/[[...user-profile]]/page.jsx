
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const UserProfilePage = () => {
  return (
    <div className='flex justify-center items-center p-8'>
    <UserProfile />
    </div>
  )
}

export default UserProfilePage