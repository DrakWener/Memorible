import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

export default function ResetPasswod() {
  const [email, setEmail] = useState()

  return (
    <div className='w-full flex justify-center items-center h-screen bg-gray-100 z-0 relative'>
        
      <div className='bg-white h-2/6 w-1/3 relative rounded-lg shadow-lg'>
        <h3 className='text-center text-4xl mt-6 font-semibold'>Reset password</h3>
        <form className='relative' action="">
          <div className='grid w-full grid-rows-3 content-center justify-center'>
            <div className='w-full mt-10'>
              <Input label='Email' onInput={(e) => setEmail(e.target.value)} Input={email} type='email' name='email' autoComplete='email'/>
            </div>

            <div className='justify-center relative flex items-center'>
              <button className='mt-11 px-32 rounded-md py-2 hover:bg-black border-2 border-black hover:text-white font-semibold text-2xl'>Continue</button>
            </div>
          </div>

        </form>
        <div className='text-center mx-auto'>
          <Link className='text-blue-500 text-xl underline decoration-2' to="/">Back to home</Link>
        </div>
      </div>
    </div>
  )
}
