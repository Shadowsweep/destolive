import React from 'react'

const ReservationSidedbar = () => {
  return (
    <aside className=' mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl' >
           <h2 className='mb-5 text-2xl' > Rs. 4000 per night </h2>
           <div className='mb-5 p-4 border border-gray-400 rounded-xl'>
            <label className='mb-1 block font-bold text-xs'>Guests</label>
             <select className='w-full -ml-1 text-xm' >
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
             </select>
           </div>
           <div className='w-full mb-6 py-6 text-center text-white bg-destolive rounded-xl hover:bg-destolive-dark' > Book</div>
           <div className='mb-4 flex justify-between align-center' >
            <p>Rs.4000 * 3 nights </p>
            <p>Rs. 12000</p>
           </div>

           <div className='mb-4 flex justify-between align-center' >
            <p>Destolive Fee </p>
            <p>Rs. 120</p>
           </div>

           <hr />

           <div className='mt-4 flex justify-between align-center font-bold' >
            <p>Total</p>
            {/* <p>Rs. 12120</p> */}
           </div>

        </aside>
  )
}

export default ReservationSidedbar