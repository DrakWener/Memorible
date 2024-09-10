import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function HeaderSmall() {
  return (
    <div className='w-full py-2 bg-white shadwo-lg flex justify-center items-center h-fit'>
      <Link to='/'>
        <Logo className=''/>
      </Link>
    </div>
  )
}
