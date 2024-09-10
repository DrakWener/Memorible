import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideAuth from '../components/SideAuth'
import { useSignUp } from '../hooks/useSignUp'
import Error from '../components/Error'
import Input from '../components/Input'

export default function SingUp () {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const {signup , error, isLoading } = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, email, password, repassword)
  }

  return (
    <div className='w-full flex justify-center items-center h-screen bg-gray-100 z-0 relative'>
      {error && <Error>{error.response.data.error}</Error>}
      <div className='bg-white h-[60%] md:w-1/2 xl:w-1/3 relative rounded-lg shadow-lg'>
        <h3 className='text-center text-4xl mt-8 font-semibold'>Sign Up</h3>
        <form onSubmit={handleSubmit} className='relative' action="">
          <div className='grid w-full grid-rows-5 mt-4 content-center justify-center'>

            <div className='w-full relative h-full'>
              <Input label='Username' disabled={isLoading} onInput={(e) => setUserName(e.target.value)} Input={username} name='username' autoComplete='username'/>
            </div>

            <div className='w-full relative h-full'>
              <Input label='Email' disabled={isLoading} onInput={(e) => setEmail(e.target.value)} Input={email} type='email' name='email' autoComplete='email' />
            </div>

            <div className='w-full relative h-full'>
              <Input label='Password' disabled={isLoading} onInput={(e) => setPassword(e.target.value)} Input={password} type='password' name='password' autoComplete='password'/>
            </div>

            <div className='w-full relative h-full mb-2 mt-2'>
              <Input label='Password' disabled={isLoading} onInput={(e) => setRePassword(e.target.value)} Input={repassword} type='password' name='repassword' autoComplete='repassword'/>
            </div>

            <div className='justify-center pt-4 relative flex items-center'>

              <button disabled={isLoading} className='mt-2 px-32 rounded-md py-2 hover:bg-black border-2 border-black hover:text-white font-semibold text-2xl'>Sign Up</button>

            </div>
            <div className='text-center mt-6'>
              <Link className='' to="/SignIn">Alreay have account?</Link>
            </div>
          </div>

          {/* Side SignUp */}
          <div className='absolute -top-2 -right-[75px] bg-white h-96 w-24 rounded-r-xl border-2 -z-10'>
            <SideAuth />
          </div>

        </form>
        <div className='text-center mt-16 mx-auto'>
          <Link className='text-blue-500 text-xl underline decoration-2' to="/">Back to home</Link>
        </div>
      </div>
    </div>
  )
}
