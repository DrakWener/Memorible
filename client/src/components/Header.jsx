import React from 'react'
import { Link } from 'react-router-dom'
import { useSignOut } from '../hooks/useSignOut'
import { useAuthContext } from '../hooks/useAuthContext'
import Logo from './Logo'

export default function Header() {
  const { signout } = useSignOut()
  const { user } = useAuthContext()

  return (
    <header className='w-full static outline outline-gray-200 shadow-md h-[75px] bg-white grid grid-cols-3'>
      <div className='w-full h-full flex items-center justify-center font-bold text-2xl'>
      <Link className='flex items-center' to="/">
        <Logo className="mr-2" width='40' height='40'/>
        Memorible 
      </Link>
      </div>
      <div className='w-full h-full flex items-center justify-center'>
        <input className='border rounded-md h-12 px-2 border-black w-full' placeholder='Search...' type="text" />
      </div>
      {/* Log Out */}

      {/* Loging in / Register */}
      <div className='w-full h-full relative flex items-center gap-x-6 px-10 justify-end'>

        {user && 
        
        <div>
          <img className='bg-green-400 h-12 w-12 rounded-full' onClick={() => signout()} src="" alt="" />
          {/* <ul>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul> */}
        </div>
        // <div className='flex justify-center items-center'>
        //   <Link to="/Profile" className='text-2xl mr-4 font-bold'>{user.username}</Link>
        //   <button className='px-4 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white' onClick={() => signout()}>Sign Out</button>
        // </div>
        }

        {!user && 
        <>
          <Link className='px-4 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white' to="/SignUp">Sign Up</Link>
          <Link className='px-4 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white' to="/SignIn">Sign In</Link>
        </>}

      </div>

    </header>
  )
}
