import React from 'react'
import Image from 'next/image'
const PropertyDetailPage = () => {
  return (
    <main className=" mt-8 max-w-[1500px] mx-auto px-6 ">
    <div className='w-full h-[64vh] overflow-hidden rounded-xl relative ' > 
    <Image 
            fill
            src='/beach.jpeg'

            className='object-cover  h-full w-full  rounded-xl'
            alt = "Beach House"
         />

    </div>

    
    </main>
  )
}

export default PropertyDetailPage