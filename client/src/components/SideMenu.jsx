import React, { useState } from 'react'

import NavBar from './NavBar'

export default function SideMenu({user, children}) {
  const [fullSize, setFullSize] = useState(false)

  return (
  <div className={fullSize ? `bg-white flex flex-col h-full border-r-2` : `flex flex-col border-r-2 w-fit bg-white`}>

    <div className='w-full hover:bg-gray-100 cursor-pointer border-b py-6 h-fit'>
      
      <div className='flex justify-center items-center w-full'>
        <img className={fullSize ? 'border h-28 w-28 rounded-full' : 'border h-12 w-12 rounded-full'} src='https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600' alt="Image" />
      </div>

      {fullSize && <h3 className='text-center mt-2 font-semibold text-2xl '>{user.username}</h3>}
      

    </div>

    <div className='border-b relative flex-1 p-2'>

      <NavBar fullSize={fullSize}></NavBar>

      <div onClick={() => setFullSize(fullSize => !fullSize)} 
      className='border-2 cursor-pointer flex justify-center items-center absolute bottom-20 -right-6 rounded-full bg-white w-12 h-12 
      hover:bg-gray-200'>
        <span className='text-2xl'>{fullSize 
        ?
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <path d="m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"></path>
          <path d="M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path>
        </svg>
         :
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
          <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
        </svg>
         }</span>
      </div>

    </div>
    
    <div className='h-fit p-2'>
      <div className='h-12 justify-center text-lg hover:bg-gray-200 active:ring-black active:ring-2 cursor-pointer px-6 font-bold rounded-full flex items-center mb-1'>
        {fullSize ? <span className=''>Q&A</span> : 
        <span>
          <svg className='fill-black' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path>
          </svg>
          </span>} 
      </div>
    </div>

  </div>
  )
}
