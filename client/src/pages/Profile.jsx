import React from 'react'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Profile() {
  const { user } = useAuthContext()

  return (
    <div className='w-full h-screen max-h-fit bg-gray-100'>

      <Header></Header>

      <div className='h-[91.8%] grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 w-full'>
        
        {/* SideMenu */}

        <SideMenu user={user}></SideMenu>

        {/* Content */}
        <div className='xl:col-span-5 py-6 px-10 lg:col-span-5 md:col-span-4 sm:col-span-3 bg-gray-100'>

        </div>

      </div>

    </div>



  )
}
