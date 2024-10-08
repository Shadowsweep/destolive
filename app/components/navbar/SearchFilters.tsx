import React from 'react'

const SearchFilters = () => {
  return (
    <div className='h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full ' >
       <div className="hidden  lg:block " >
           <div className='flex flex-row items-center justify-between' >
            <div className='cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 ' >
                <p className='text-xs font-semibold' >Where</p>
                <p className='text-sm'>Wanted location</p>
            </div>

            <div className='cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 ' >
                <p className='text-xs font-semibold' >Check in</p>
                <p className='text-sm'>Add dates</p>
            </div>

            <div className='cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 ' >
                <p className='text-xs font-semibold' >Check out</p>
                <p className='text-sm'>Add dates</p>
            </div>

            <div className='cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 ' >
                <p className='text-xs font-semibold' >Who</p>
                <p className='text-sm'>Add guests</p>
            </div>

           </div>
        </div>
            <div className='p-2'>
                <div className='cursor-pointer p-2 lg:p-4  bg-destolive hover:bg-destolive-dark transition rounded-full text-white' >
                <svg  viewBox="0 0 32 32" style={{display:'block', height:'20px',width:'20px',fill:'currentColor'}} 
                aria-hidden="true" role="presentation" focusable="false">
                <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path></svg>

                </div>
            </div>

        </div>
  )
}

export default SearchFilters