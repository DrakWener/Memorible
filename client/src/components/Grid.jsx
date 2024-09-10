import React from 'react'
import { Link } from 'react-router-dom'

export default function Grid({SectionName = 'Utilted Section', link = '',children}) {
  return (
    <Link className='' to="/test">
      <h3 className='text-2xl mt-4 px-6 font-semibold'>{SectionName}</h3>
      <section className='grid grid-cols-4'>
        {children}
      </section>
    </Link>
  )
}
