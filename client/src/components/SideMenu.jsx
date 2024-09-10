import React from 'react'

import NavBar from './NavBar'

export default function SideMenu({user, children}) {
  return (
  <div className='bg-white flex flex-col h-full border-r-2'>

    <div className='w-full hover:bg-gray-100 cursor-pointer border-b py-6 h-fit'>
      
      <div className='flex justify-center items-center w-full'>
        <img className='border h-28 w-28 rounded-full' src='https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600' alt="Image" />
      </div>
      
      <h3 className='text-center mt-2 font-semibold text-2xl '>{user.username}</h3>

    </div>

    <div className='border-b flex-1 p-2'>

      <NavBar></NavBar>

    </div>
    
    <div className='h-fit p-2'>
      <div className='h-12 justify-center text-lg hover:bg-gray-200 active:ring-black active:ring-2 cursor-pointer px-6 font-bold rounded-full flex items-center mb-1'>
        <span className=''>Q&A</span>
      </div>
    </div>

  </div>
  )
}
