import React from 'react'



export default function Input({label = 'label', disabled = false, onInput, Input, type = "text" ,name = 'undefined', autoComplete = 'password' }) {

  return (
    <div className='relative text-gray-600 focus-within:text-black transition-all duration-200 flex justify-center items-center'>
      <label className='absolute -top-3 left-2 bg-white px-1' htmlFor="">{label}</label>
      <input
        onChange={onInput}
        value={Input}
        disabled={disabled}
        autoComplete={autoComplete}
        required={true}
        className='w-96 px-2 h-14 border border-gray-600
          focus:outline-none focus:border-black focus:ring-1 focus:ring-black
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
          
        placeholder={label}
        type={type}
        name={name}
        />
    </div>
  )
}
