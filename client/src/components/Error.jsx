import React, { useEffect, useState } from 'react'

export default function Error({ children }) {

  const [alive, setAlive] = useState(false)
  
  useEffect(() => {
    setAlive(true)

    setTimeout(() => {
      setAlive(false)
    }, 5000)

  }, [])

  return (
    <>

      {alive && 
      <div onClick={() => setAlive(false)} className='fixed cursor-pointer top-2 right-2 w-[350px] bg-gradient-to-r from-red-500 to-red-500 h-fit'>
        <div className='text-wrap px-2 flex relative justify-center items-center h-[93%] text-center font-bold text-lg text-white'>
          <span className='text-center py-4'>{children}</span>
        </div>
      </div>}

    </>
  )
}
