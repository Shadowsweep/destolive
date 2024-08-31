import React from 'react'
import Image from 'next/image'
const PropertyListItem = () => {
  return (
    <div className='cursor-pointer' >
        <div className=' relative overflow-hiden aspect-square  rounded-xl  '>
            <Image 
            fill
            src='/beach.jpeg'
            sizes="{max-width:768px} 768px , {max-width:1200px}: 768px , 768px"
            className='hover:scale-110 object-cover transition h-full w-full  rounded-xl'
            alt = "Beach House"
         />
        </div>
        <div className='mt-2'>
           <p className='text-lg font-bold' > Property Name</p>
        </div>

        <div className='mt-2'>
            <p className='text-sm text-gray-500 ' ><strong>Rs.4000</strong> per night</p>
        </div>
    </div>

  )
}

export default PropertyListItem