export default function UserDropDown({children, opened, clicableContent}) {

  return (
    <div className='relative'>
      {clicableContent}

      {opened && 
      <ul className='absolute text-center rounded-lg w-fit right-1 z-0 mt-1 border shadow-lg origin-right float-right bg-white pt-4 p-2'>
        {children}
      </ul>}
  </div>
  )
}
