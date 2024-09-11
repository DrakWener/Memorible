import React from 'react'

export default function UserAvatar({handleOpen}) {
  return (
  <div className='flex justify-center items-center h-14 w-14 cursor-pointer ease-in-out transition duration-200 hover:bg-gray-300 rounded-full'>
    <img className='bg-white hover h-12 w-12 rounded-full' onClick={handleOpen} src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600" alt="avatar" />
  </div>
  )
}
