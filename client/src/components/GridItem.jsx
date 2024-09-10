import plane from '../assets/plane.jpg'
import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export default function GridItem({children}) {
  const {user} = useAuthContext()

  return (
    <div className='w-full h-[300px] p-3'>

      <div className='h-full bg-white cursor-pointer w-full border rounded-lg hover:border-none hover:shadow-md'>
        {/* Images */}
        <div className='h-3/4 relative rounded-t-lg'>
          {/* Image */}
          <img className='h-full rounded-t-lg  w-full object-fit' src={plane} alt="Image" />
          {/* Likes */}
          {user && 
          <div className='absolute flex right-2 bg-gray-100 rounded-lg bottom-2 p-2'>
            <svg className='fill-black mr' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
          </div>}

          {/* Views */}
          <div className='absolute max-w-40 left-2 truncate bottom-2 rounded-lg bg-gray-100 p-2 text-sm font-semibold'>Views: 100</div>
        </div>

        <div className='border-t-2 flex p-2 justify-start items-center font-semibold w-full h-1/4'>
          <h4 className='h-full w-full line-clamp-2'>{children}</h4>
        </div>

      </div>

    </div>
  )
}
