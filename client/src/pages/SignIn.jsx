import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideAuth from '../components/SideAuth'
import Error from '../components/Error'
import { useSignIn } from '../hooks/useSignIn'
import Input from '../components/Input'

export default function SignIn() {
  const [emailUserName, setEmailUserName] = useState('')
  const [password, setPassword] = useState('')  
  const {signin, error, isLoading} = useSignIn()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    await signin(emailUserName, password)
  }

  return (
    <div className='w-full flex justify-center items-center h-screen bg-gray-100 z-0 relative'>
      {error && <Error>{error.response.data.error}</Error>}
      <div className='bg-white w-1/2 h-1/2 xl:w-1/3 relative rounded-lg shadow-lg'>
        <h3 className='text-center text-4xl mt-10 font-semibold'>Sign In</h3>
        <form onSubmit={handleSubmit} className='relative' action="">
          <div className='grid w-full grid-rows-3 content-center justify-center'>

            <div className='w-full mt-8 relative h-full'>
              <Input label='Username' disabled={isLoading} onInput={(e) => setEmailUserName(e.target.value)} Input={emailUserName} name='username' autoComplete='username'/>
            </div>

            <div className='w-full mt-5 relative h-full'>
              <Input label='Password' disabled={isLoading} onInput={(e) => setPassword(e.target.value)} Input={password} type='password' name='password' autoComplete='password'/>
            </div>
            
            <div className='justify-center relative flex items-center'>
              <div className='absolute flex justify-center items-center top-1 left-1'>
                <input className='w-5 h-5' type="checkbox" />
                <label className="ml-0.5" htmlFor="">Remeber me</label>
              </div>

              <Link className='absolute top-1 right-1' to="/ResetPassword">Forget Password?</Link>

              <button disabled={isLoading} className='mt-11 px-32 rounded-md py-2 hover:bg-black border-2 border-black hover:text-white font-semibold text-2xl'>Sign In</button>
            </div>
            <div className='text-center mt-6'>
              <Link className='' to="/SignUp">Dosen't have account?</Link>
            </div>
          </div>

          {/* Side SignUp */}
          <div className='absolute -top-12 -right-[75px] bg-white h-96 w-24 rounded-r-xl border-2 -z-10'>
            <SideAuth />
          </div>

        </form>
        <div className='text-center mt-24 mx-auto'>
          <Link className='text-blue-500 text-xl underline decoration-2' to="/">Back to home</Link>
        </div>
      </div>
    </div>
  )
}
