import React from 'react'

export default function DropDownItem({ children, text = "text", handleSomething, textClass = 'ml-2' }) {
  return (
    <li onClick={handleSomething} className='px-2 w-full text-nowrap flex align-center hover:bg-gray-100 cursor-pointer text-lg py-2 rounded-lg'>
      {children}
      <span className={textClass}>{text}</span>
    </li>
  )
}
