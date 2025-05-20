import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import React, { useState } from 'react';
export default function Newaddcoursesadmin() {
    // const nameRef = useRef(null);
    // const emailRef = useRef(null);
    // const phoneRef = useRef(null);
    // const nationalIDRef = useRef(null);
  return (
    <div>
       <div className='items-center lg:flex lg:justify-between '>
        <div className='flex gap-2 m-3 lg:m-3 justify-self-center'>
                    
                 <h1 className='text-[#71717A] '>COURCES </h1>
                 <i className="mt-1 fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '>add new course </h1>
            

                
      
                 </div>
                 <div className='flex '>
                    <button className=' max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-48  rounded-[8px] h-11'>
                   
                    <i className="fa-solid fa-check" />
                       <p className='p-2'   >save  </p>
                    </button>

                 </div>
                
    </div>

    <div className='mx-[5%]'>
  <div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> Name</label>
<input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> doctor name</label>
<input  type="email" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div   className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> doctor’s Email</label>
<input  type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> teacher name</label>
<input type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>

<div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> Teacher’s Email</label>
<input type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>

  </div>
    </div>
  )
}
