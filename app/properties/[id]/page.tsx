import React from 'react'
import Image from 'next/image'
import ReservationSidedbar from '@/app/components/properties/ReservationSidedbar'
import PropertyList from '@/app/components/properties/PropertyList'


const PropertyDetailPage = () => {
  return (
    <main className=" mt-8 max-w-[1500px] mx-auto px-6 pb-6 ">
    <div className='w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative ' > 
    <Image 
            fill
            src='/beach.jpeg'
            className='object-cover  h-full w-full  rounded-xl'
            alt = "Beach House"
         />

    </div>
         <div className=' grid grid-cols-1 md:grid-cols-5 gap-4' >
              <div className='py-6 pr-6 col-span-3 ' >
                 <h1 className='mb-4 text-4xl ' > Property Name </h1>
                 <span className='mb-6 block text-lg  text-gray-600'>
                 4 guests -2 bedrooms -1 bathroom
                 </span>
                 <hr />
                 <div className='py-6 flex items-center space-x-4 ' >
                  <Image 
                    src='/user_profile.png'
                    width={75}
                    height={75}
                    className='rounded-full'
                    alt = "User Image"
                  
                  />

                  <p><strong>Tech Unsatisfied</strong> is your host </p>
                  </div>
                  <hr />
                   <p className='mt-6  text-lg' >
                        ANy description you wannnt issss sfasfdasfas  sdfdsds f dsfg sdg dgds gds gsdgsdgdgsd  gsdfds  gdfdsfg sdfg  ds sd dgs
                  </p> 
                 
                 
              </div>
              <ReservationSidedbar/>
          
         </div>
    
    </main>
  )
}

export default PropertyDetailPage